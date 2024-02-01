require "http"

module Api
  class UsersController < ApplicationController
    before_action :extract_headers, only: [:show, :create]

    def show
      render status: :ok
    end

    def create
      res = request_twitch_api(
        header: { "Authorization" => @user_token,  "Client-id" => ENV["CLIENT_ID"] },
        url: "https://api.twitch.tv/helix/users"
      )

      user = User.new(
        id_on_twitch: res["id"].to_i,
        login_name: res["login"],
        display_name: res["display_name"],
        profile_image_url: res["profile_image_url"],
        user_created_at: res["created_at"]
      )

      if user.save
        render json: user, status: :created
      else
        render json: user.errors, status: :unprocessable_entity
      end
    end

    private
      def extract_headers
        @user_token = request.headers["Authorization"]
      end

      def request_twitch_api(header:, url:)
        res = HTTP[header].get(url)
        JSON.parse(res.to_s)["data"][0]
      end
  end
end
