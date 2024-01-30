module Api
  module Users
    class PlaylistsController < ApplicationController
      before_action :set_playlist, only: [:update, :destroy]

      # aciton全て:本当は違う。user_idに紐づけてacitonを動作させる
      # ここでは仮組みとしてuserの紐づけ関係なくplaylistを操作できる

      def index
        @playlists = Playlist.all
        render json: { status: :ok, message: "getting playlists sucessed", playlists: @playlists }
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
          render json: { status: "Updating playlist successed", playlist: @playlist }
        else
          render json: { status: "Updating playlist failed" }
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
          params.require(:playlist).permit(:name, :favorited, :favorite_count, :published)
        end
    end
  end
end
