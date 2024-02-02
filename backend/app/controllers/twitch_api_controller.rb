require "http"
require "json"
require "csv"
require "date"

class TwitchApiController < ApplicationController
  # アプリアクセストークン作成
  def create_app_token
    header = { "Content-Type" => "application/json" }
    uri = "https://id.twitch.tv/oauth2/token"
    body = {
      client_id: ENV["CLIENT_ID"],
      client_secret: ENV["CLIENT_SECRET"],
      grant_type: "client_credentials"
    }

    res = request_post(header, uri, body)
    token = res["access_token"]
    render json: { "app_token": token }, status: :created
  end

  # ユーザーアクセストークン作成
  # NOTE: redirect_uriが"http://localhost"でないとエラーが発生する。"http://localhost:3001"ではエラー。
  def create_user_token
    client_id = ENV["CLIENT_ID"]
    redirect_uri = "http://localhost"
    scope = "user:read:follows"

    html_content = "<a href=\"https://id.twitch.tv/oauth2/authorize?client_id=#{client_id}&redirect_uri=#{redirect_uri}&response_type=token&scope=#{scope}\">Connect with Twitch</a>"

    render html: html_content.html_safe
  end

  # rabibit君のtwitchのidを取得
  def get_user_id
    header = { "Authorization" => ENV["APP_ACCESS_TOKEN"],  "Client-id" => ENV["CLIENT_ID"] }
    uri = "https://api.twitch.tv/helix/users?login=#{ENV["RABBIT_LOGIN_NAME"]}"

    res = request_get(header, uri)
    user_id = res["data"][0]["id"]
    render json: { "user_id": res }, status: :ok
  end

  # rabibit君のフォローしているチャンネルのbroadcaster_idを取得（total: 183channels)
  # チャンネル取得は最大100件/1リクエストのため、合計2回リクエストする。
  # backend/public/broadcaster_idsにbroadcaster_id一覧を出力する。get_broadcaster_clipsで使用。
  def get_user_channels
    header = { "Authorization" => ENV["USER_ACCESS_TOKEN"],  "Client-id" => ENV["CLIENT_ID"] }

    uri = "https://api.twitch.tv/helix/channels/followed?user_id=#{ENV["RABBIT_ID"]}&first=100"
    response = request_get(header, uri)
    broadcaster_list = response["data"]
    after = response["pagination"]["cursor"]

    uri = "https://api.twitch.tv/helix/channels/followed?user_id=#{ENV["RABBIT_ID"]}&first=100&after=#{after}"
    response = request_get(header, uri)
    broadcaster_list.concat(response["data"])

    broadcaster_ids = broadcaster_list.map { |broadcaster| broadcaster["broadcaster_id"].to_i }
    # File.write("public/broadcaster_ids.txt", broadcaster_ids.join("\n"))　#txt書き込みコマンド
    render json: { "broadcaster_ids": broadcaster_ids }, status: :ok
  end

  # public/broadcaster_ids.txtに記載されている全broadcaster_idのクリップを取得。
  # 取得したクリップ情報をpublic/clip_list.csvに出力。条件：view_count >= 5000以上
  def get_broadcaster_clips
    current_datetime = DateTime.now.new_offset(0)
    current_date_rfc3339 = current_datetime.strftime("%Y-%m-%dT%H:%M:%SZ")
    one_month_ago_datetime = current_datetime << 1
    one_month_ago_rfc3339 = one_month_ago_datetime.strftime("%Y-%m-%dT%H:%M:%SZ")

    clip_list = []
    broadcaster_ids = File.readlines("public/broadcaster_ids.txt").map(&:chomp)
    header = { "Authorization" => ENV["APP_ACCESS_TOKEN"],  "Client-id" => ENV["CLIENT_ID"] }

    broadcaster_ids.each do |broadcaster_id|
      after = nil
      base_uri = "https://api.twitch.tv/helix/clips?broadcaster_id=#{broadcaster_id}&started_at=#{one_month_ago_rfc3339}&ended_at=#{current_date_rfc3339}&first=100"

      loop do
        uri = after ? "#{base_uri}&after=#{after}" : "#{base_uri}"
        res = request_get(header, uri)

        broadcaster_clips = res["data"].select { |clip| clip["view_count"] >= 5000 }
        clip_list.concat(broadcaster_clips)
        after = res["pagination"]["cursor"]

        break if after.nil? || after.empty?
      end
    end

    # write_clips_csv("public/clip_list.csv", clip_list) #csv書き込みコマンド
    render json: { "clip_counts": clip_list.length, "clip_list": clip_list }, status: :ok
  end

  def get_games
    header = { "Authorization" => ENV["USER_ACCESS_TOKEN"],  "Client-id" => ENV["CLIENT_ID"] }
    game_list = []

    game_ids = Clip.pluck(:game_id).uniq.compact
    game_ids.each do |game_id|
      uri = "https://api.twitch.tv/helix/games?id=#{game_id}"
      res = request_get(header, uri)
      game_list << res["data"][0]
    end

    write_games_csv("public/game_list.csv", game_list)
    render json: game_list
  end

  private
    def request_get(header, uri)
      res = HTTP[header].get(uri)
      JSON.parse(res.to_s)
    end

    def request_post(header, uri, body)
      res = HTTP[header].get(uri, json: body)
      JSON.parse(res.to_s)
    end

    def write_clips_csv(path, clip_list)
      CSV.open(path, "wb", encoding: "UTF-8") do |csv|
        clip_list.each do |clip|
          csv << [
            clip["id"], clip["url"], clip["embed_url"], clip["broadcaster_id"],
            clip["broadcaster_name"], clip["creator_id"], clip["creator_name"],
            clip["video_id"], clip["game_id"], clip["language"], clip["title"],
            clip["view_count"], clip["created_at"], clip["thumbnail_url"],
            clip["duration"], clip["vod_offset"], clip["is_featured"]
          ]
        end
      end
    end

    def write_games_csv(path, clip_list)
      CSV.open(path, "wb", encoding: "UTF-8") do |csv|
        clip_list.each do |clip|
          csv << [
            clip["id"], clip["name"], clip["box_art_url"]
          ]
        end
      end
    end
end
