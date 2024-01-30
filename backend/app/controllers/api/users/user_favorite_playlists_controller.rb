module Api
  module Users
    class UserFavoritePlaylistsController < ApplicationController
      # POST /api/users/:id/user_favorite_playlists
      def create
        render status: :created
      end

      def destroy
        render status: :no_content
      end
    end
  end
end
