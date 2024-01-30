module Api
  module Users
    class PlaylistsController < ApplicationController
      before_action :set_playlist, only: [:show, :update, :destroy]

      # indexのみクエリパラメータでuser_idが必要
      def index
        user_id = params[:user_id].to_i
        @user_playlists = Playlist.where(user_id: user_id)
        render json: { status: :ok, message: "getting playlists sucessed", user_playlists: @user_playlists }
      end

      def show
        render json: { status: :ok, message: "showing success", playlist: @playlist }
      end

      def create
        @playlist = Playlist.new(playlist_param)
        if @playlist.save
          render json: { status: :created, message: "Creating playlist successed", playlist: @playlist }
        else
          render json: { message: "Creating playlist failed" }
        end
      end

      def update
        if @playlist.update(playlist_param)
          render json: { status: :ok, message: "Updating playlist successed", playlist: @playlist }
        else
          render json: { message: "Updating playlist failed" }
        end
      end

      def destroy
        @playlist.destroy
      end


      private
        def set_playlist
          @playlist = Playlist.find(params[:id])
        end

        def playlist_param
          params.require(:playlist).permit(:name, :user_id, :favorite_count, :published)
        end
    end
  end
end
