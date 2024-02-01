require "http"

module Api
  class UsersController < ApplicationController
    before_action :extract_headers, only: [:show, :create]
    before_action :set_user, only: [:show]

    def show
      res = request_twitch_api(
        header: { "Authorization" => @user_token,  "Client-id" => ENV["CLIENT_ID"] },
        url: "https://api.twitch.tv/helix/channels/followed?user_id=#{@user["id_on_twitch"]}&first=100"
      )
      followed_channels = res["data"]

      # TODO: broadcasterテーブル作成後に確認(テーブル名、カラム名)
      # channel_ids = followed_channels.map { |channel| channel["broadcaster_id"] }
      # broadcaster_list = broadcaster.where(broadcaster_id: channel_ids)

      followed_channels.length.times do |index|
        # followed_channels[index]["profile_image_url"] = broadcaster_list[index]
        followed_channels[index]["profile_image_url"] = "Hello"
      end

      render json: { followed_channels: followed_channels }, status: :ok
    end

    def create
      res = request_twitch_api(
        header: { "Authorization" => @user_token,  "Client-id" => ENV["CLIENT_ID"] },
        url: "https://api.twitch.tv/helix/users"
      )
      user_data = res["data"][0]

      user = User.new(
        id_on_twitch: user_data["id"].to_i,
        login_name: user_data["login"],
        display_name: user_data["display_name"],
        profile_image_url: user_data["profile_image_url"],
        user_created_at: user_data["created_at"]
      )

      if user.save
        render json: user, status: :created
      else
        render json: user.errors, status: :unprocessable_entity
      end
    end

    private
      def set_user
        @user = User.find(params[:id])
      end

      def extract_headers
        @user_token = request.headers["Authorization"]
      end

      def request_twitch_api(header:, url:)
        res = HTTP[header].get(url)
        JSON.parse(res.to_s)
      end
  end
end
