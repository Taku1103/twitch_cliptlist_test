module Api
  module Users
    class UserFavoritePlaylistsController < ApplicationController
      before_action :set_id_user_and_playlist, only: [:create, :destroy]

      # 参照はreq.bodyのuser_idとplaylist_id
      # POST /api/users/:id/user_favorite_playlists
      def create
        @favorite_relation = UserFavoritePlaylist.new(user_id: @user_id, playlist_id: @playlist_id)

        if @favorite_relation.save
          render json: { status: :created, message: "Successed favoriting the (playlist_id:#{@playlist_id}) by current_login_user(user_id:#{@user_id})" }
        else
          render json: { status: :unprocessable_entity, message: "Failed favoriting" }
        end
      end

      # 参照はreq.bodyのuser_idとplaylist_id
      # DELETE /api/users/:id/user_favorite_playlists
      def destroy
        @favorite_relation = UserFavoritePlaylist.find_by(user_id: @user_id, playlist_id: @playlist_id)
        @favorite_relation.destroy
      end

      # favしたplaylistsを取ってくる処理
      # 参照しているのはパスパラメータ
      # GET /api/users/:id/user_favorite_playlists
      def index
        @user = User.find(params[:id])
        @user_favorite_playlists = @user.playlists
        render json: { status: :ok, message: "Successed Getting fav_playlists Index", user_favorite_playlists: @user_favorite_playlists }
      end

      private
        def set_id_user_and_playlist
          @user_id = params[:user_id].to_i
          @playlist_id = params[:playlist_id].to_i
        end
    end
  end
end
