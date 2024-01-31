module Api
  module Users
    class UserFavoritePlaylistsController < ApplicationController
      before_action :set_id_user_and_playlist, only: [:create, :destroy]

      # POST /api/users/:id/user_favorite_playlists
      def create
        @favorite_relation = UserFavoritePlaylist.new(user_id: @user_id, playlist_id: @playlist_id)

        if @favorite_relation.save
          render json: { status: :created, message: "Successed favoriting the (playlist_id:#{@playlist_id}) by current_login_user(user_id:#{@user_id})" }
        else
          render json: { status: :unprocessable_entity, message: "Failed favoriting" }
        end
      end

      # 現状 req.bodyにuser_idとplaylist_idを作ってもらう
      # DELETE /api/users/:id/user_favorite_playlists
      def destroy
        @favorite_relation = UserFavoritePlaylist.find_by(user_id: @user_id, playlist_id: @playlist_id)
        @favorite_relation.destroy
      end

      # デバッグ用アクション(不要になったらコメントアウト)
      # GET /api/users/:id/user_favorite_playlists
      def index
        @favorite_relations = UserFavoritePlaylist.all
        render json: { status: :ok, message: "Successed Getting Index", playlist_clips_relations: @favorite_relations }
      end

      private
        def set_id_user_and_playlist
          @user_id = params[:user_id].to_i
          @playlist_id = params[:playlist_id].to_i
        end
    end
  end
end
