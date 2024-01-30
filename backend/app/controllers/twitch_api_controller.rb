require "http"
require "json"
require "csv"

class TwitchApiController < ApplicationController
  # アプリアクセストークン取得
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

  # ユーザーアクセストークン取得
  # NOTE: redirect_uriが"http://localhost"でないとエラーが発生する。"http://localhost:3001"ではエラー。
  def create_user_token
    client_id = ENV["CLIENT_ID"]
    redirect_uri = "http://localhost"
    scope = "user:read:follows"

    html_content = "<a href=\"https://id.twitch.tv/oauth2/authorize?client_id=#{client_id}&redirect_uri=#{redirect_uri}&response_type=token&scope=#{scope}\">Connect with Twitch</a>"

    render html: html_content.html_safe
  end

  # rabibit君のidを取得
  def get_user
    header = { "Authorization" => ENV["APP_ACCESS_TOKEN"],  "Client-id" => ENV["CLIENT_ID"] }
    uri = "https://api.twitch.tv/helix/users?login=#{ENV["RABBIT_LOGIN_NAME"]}"

    res = request_get(header, uri)
    user_id = res["data"][0]["id"]
    render json: { "user_id": user_id }, status: :ok
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
    File.write("public/broadcaster_ids.txt", broadcaster_ids.join("\n"))
    render json: { "broadcaster_ids": broadcaster_ids }, status: :ok
  end

  # public/broadcaster_ids.txtに記載されている全broadcaster_idのクリップを取得。
  # 取得したクリップ情報をpublic/clip_list.csvに出力。
  # TODO: チャンネル数を絞って直近1ヶ月全てを取得し、件数を調べる。件数によってはチャンネル数を絞る。
  # TODO: seeds.rbを作成する。
  def get_broadcaster_clips
    clip_list = []
    broadcaster_ids = File.readlines("public/broadcaster_ids.txt").map(&:chomp)
    header = { "Authorization" => ENV["APP_ACCESS_TOKEN"],  "Client-id" => ENV["CLIENT_ID"] }

    broadcaster_ids.each_with_index do |broadcaster_id, index|
      uri = "https://api.twitch.tv/helix/clips?broadcaster_id=#{broadcaster_id}&first=2"
      res = request_get(header, uri)

      broadcaster_clips = res["data"]
      clip_list.concat(broadcaster_clips)
      break if index == 10 # NOTE: とりあえず10件でbreak
    end

    write_csv("public/clip_list.csv", clip_list)
    render json: { "res": clip_list }, status: :ok
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

    def write_csv(path, clip_list)
      CSV.open(path, "wb") do |csv|
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
end
