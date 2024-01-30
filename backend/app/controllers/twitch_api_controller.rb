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

  # アプリアクセストークンを使用して、データ取得用アカウントのidを取得
  def get_user
    login_name = "rabbit_kun_2nd"
    header = { "Authorization" => "Bearer " + ENV["APP_ACCESS_TOKEN"],  "Client-id" => ENV["CLIENT_ID"] }
    uri = "https://api.twitch.tv/helix/users?login=#{login_name}"

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
