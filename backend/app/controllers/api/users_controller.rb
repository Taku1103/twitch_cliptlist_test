require "http"

module Api
  class UsersController < ApplicationController
    before_action :extract_headers, only: [:show, :create]
    before_action :set_user, only: [:show]

    def show
      res = request_twitch_api("https://api.twitch.tv/helix/channels/followed?user_id=#{@user.id_on_twitch}&first=100")
      if res.status.success?
        followed_channels = process_followed_channels(JSON.parse(res.body)["data"])
        render json: { followed_channels: followed_channels }, status: :ok
      else
        render_api_error
      end
    end

    def create
      res = request_twitch_api("https://api.twitch.tv/helix/users")
      if res.status.success?
        user_data = JSON.parse(res.body)["data"][0]
        user = build_user(user_data)
        save_user(user)
      else
        render_api_error
      end
    end

    private
      def request_twitch_api(url)
        header = { "Authorization" => @user_token, "Client-id" => ENV["CLIENT_ID"] }
        HTTP[header].get(url)
      end

      # TODO: broadcasterテーブル完成後、実行確認。
      def process_followed_channels(data)
        # channel_ids = data.map { |channel| channel["broadcaster_id"] }
        # broadcaster_list = Broadcaster.where(broadcaster_id: channel_ids)

        data.each_with_index do |channel, index|
          # channel["profile_image_url"] = broadcaster_list[index]
          channel["profile_image_url"] = "Hello"
        end
        data
      end

      def build_user(user_data)
        User.new(
          id_on_twitch: user_data["id"].to_i,
          login_name: user_data["login"],
          display_name: user_data["display_name"],
          profile_image_url: user_data["profile_image_url"],
          user_created_at: user_data["created_at"]
        )
      end

      def save_user(user)
        if user.save
          render json: user, status: :created
        else
          render json: user.errors, status: :unprocessable_entity
        end
      end

      def render_api_error
        render json: { error: "API request failed" }, status: :bad_gateway
      end

      def set_user
        @user = User.find(params[:id])
      end

      def extract_headers
        @user_token = request.headers["Authorization"]
      end
  end
end
