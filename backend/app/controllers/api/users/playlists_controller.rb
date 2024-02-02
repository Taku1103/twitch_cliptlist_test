module Api
  module Users
    class PlaylistsController < ApplicationController
      before_action :set_playlist, only: [:show, :update, :destroy]
      before_action :set_playlist_thumbnail, only: [:show]

      # clip_count,favorite_countは継承元
      # user_idをパスパラメータで取得
      # プレイリストのサムネイルを最初のクリップのサムネイルを利用
      def index
        user_id = params[:id].to_i
        @user_playlists = Playlist.includes(:clips).where(user_id: user_id).map do |playlist|
          @clip_count = count_clips(playlist)
          @favorite_count = count_favorites(playlist)

          playlist.attributes.merge({ clip_count: @clip_count, favorite_count: @favorite_count, first_thumbnail_url: playlist.clips.first&.thumbnail_url })
        end
        render json: { status: :ok, message: "getting playlists sucessed", user_playlists: @user_playlists }
      end

      def show
        @clip_count = count_clips(@playlist)
        @favorite_count = count_favorites(@playlist)

        @playlist_clips = @playlist.clips.map do |clip|
          clip_game = clip&.game
          game_thumbnail_url = clip_game&.game_thumbnail_url

          clip.attributes.merge({ game_thumbnail_url: game_thumbnail_url })
        end

        render json: {
        status: :ok,
        message: "showing success",
        playlist: @playlist.attributes.merge(clip_count: @clip_count, favorite_count: @favorite_count, first_thumbnail_url: @playlist_thumbnail_url),
        playlist_clips: @playlist_clips }
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
        # clipの最初のサムネイルをサムネとして取得
        def set_playlist
          @playlist = Playlist.includes(clips: :game).find(params[:id])
        end

        def set_playlist_thumbnail
          if @playlist.clips.present?
            first_clip = @playlist.clips.first
            @playlist_thumbnail_url = first_clip&.thumbnail_url
          end
        end


        def playlist_param
          params.require(:playlist).permit(:name, :user_id, :favorite_count, :published)
        end
    end
  end
end
