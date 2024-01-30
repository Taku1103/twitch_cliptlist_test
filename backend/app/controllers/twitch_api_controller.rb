require "http"
require "json"

class TwitchApiController < ApplicationController
  def show
    render status: :ok
  end

  def create
    header = { "Content-Type" => "application/json" }
    uri = "https://id.twitch.tv/oauth2/token"
    body = {
      client_id: ENV["CLIENT_ID"],
      client_secret: ENV["CLIENT_SECRET"],
      grant_type: "client_credentials"
    }

    res = HTTP[header].post(uri, json: body)
    res_json = JSON.parse(res.to_s)
    token = res_json["access_token"]
    render json: { "app_token": token }, status: :created
  end
end
