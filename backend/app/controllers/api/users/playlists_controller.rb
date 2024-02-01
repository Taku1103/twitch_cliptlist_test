module Api
  module Users
    class PlaylistsController < ApplicationController
      before_action :set_playlist, only: [:show, :update, :destroy]
      before_action :count_favorites, only: [:show]

      # user_idをパスパラメータで取得
      def index
        user_id = params[:id].to_i
        @user_playlists = Playlist.where(user_id: user_id)
        render json: { status: :ok, message: "getting playlists sucessed", user_playlists: @user_playlists }
      end

      def show
        @playlist_clips = @playlist.clips
        render json: { status: :ok, message: "showing success", playlist: @playlist.attributes.merge(favorite_count: @favorite_count), playlist_clips: @playlist_clips }
      end

      def create
        @playlist = Playlist.new(playlist_param)
        if @playlist.save
          render json: { status: :created, message: "Creating playlist successed", playlist: @playlist }
        else
          render json: { status: :unprocessable_entity, message: "Creating playlist failed" }
        end
      end

      def update
        if @playlist.update(playlist_param)
          render json: { status: :ok, message: "Updating playlist successed", playlist: @playlist }
        else
          render json: { status: :unprocessable_entity, message: "Updating playlist failed" }
        end
      end

      def destroy
        @playlist.destroy
      end


      private
        def set_playlist
          @playlist = Playlist.find(params[:id])
        end

        def count_favorites
          @favorite_count = @playlist.user_favorite_playlists.count
        end

        def playlist_param
          params.require(:playlist).permit(:name, :user_id, :favorite_count, :published)
        end
    end
  end
end
