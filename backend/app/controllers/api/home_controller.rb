module Api
  class HomeController < ApplicationController
    def index
      fetch_playlists

      @playlist_data = @playlists.map do |playlist|
        first_clip_id = playlist.clips[0].id
        first_thumbnail_url = playlist.clips[0].thumbnail_url

        clip_count = count_clips(playlist)
        favorite_count = count_favorites(playlist)


        playlist_creator_name = playlist.user.display_name
        creator_image_url = playlist.user.profile_image_url

        playlist.attributes.merge({
          first_clip_id: first_clip_id,
          first_thumbnail_url: first_thumbnail_url,
          clip_count: clip_count,
          favorite_count: favorite_count,
          playlist_creator_name: playlist_creator_name,
          playlist_creator_profile_image_url: creator_image_url
        })
      end

      sort_favorite_count
      render json: { playlists: @playlist_data }, status: :ok
    end

    private
      def fetch_playlists
        @playlists = Playlist.includes(:user).includes(:clips)
                              .where(created_at: 7.days.ago.beginning_of_day..Time.now)
                              .where.not("name like ?", "%ranking")
      end

      def sort_favorite_count
        sorted_playlists = @playlist_data.as_json.sort_by { |playlist| -playlist["favorite_count"] }
        @playlist_data = sorted_playlists
      end
  end
end
