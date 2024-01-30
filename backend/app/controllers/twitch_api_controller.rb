require "http"
require "json"

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

  # アプリアクセストークンを使用して、rabibit君のidを取得
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

  private
    def request_get(header, uri)
      res = HTTP[header].get(uri)
      JSON.parse(res.to_s)
    end

    def request_post(header, uri, body)
      res = HTTP[header].get(uri, json: body)
      JSON.parse(res.to_s)
    end
end
