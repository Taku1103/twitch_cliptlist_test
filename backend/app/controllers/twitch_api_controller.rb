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

  # アプリアクセストークンを使用して、データ取得用アカウントのidを取得
  def get_user
    header = { "Authorization" => ENV["APP_ACCESS_TOKEN"],  "Client-id" => ENV["CLIENT_ID"] }
    uri = "https://api.twitch.tv/helix/users?login=#{ENV["RABBIT_LOGIN_NAME"]}"

    res = request_get(header, uri)
    user_id = res["data"][0]["id"]
    render json: { "user_id": user_id }, status: :ok
  end

  def get_user_channels
    header = { "Authorization" => ENV["APP_ACCESS_TOKEN"],  "Client-id" => ENV["CLIENT_ID"] }
    uri = "https://api.twitch.tv/helix/channels/followed?broadcaster_id=#{login_name}"

    res = request_get(header, uri)
    user_id = res["data"][0]["id"]
    render json: { "user_id": user_id }, status: :ok
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
