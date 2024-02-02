module Api
  class HomeController < ApplicationController
    def index
      @playlists = fetch_playlists
      @playlist_ids = @playlists.pluck(:id)
      add_favorite_count
      sort_favorite_count

      clip_count_hash = fetch_clip_count_hash
      playlist_clip_ids = PlaylistClip.where(playlist_id: @playlist_ids)
                                      .order(order_index: :asc)
                                      .pluck(:playlist_id, :clip_id)
      clip_id_hash = playlist_clip_ids.uniq { |playlist_id, clip_id| playlist_id }.to_h

      thumbnail_url_hash = Clip.find(clip_id_hash.values)
                          .pluck(:id, :thumbnail_url).to_h

      @playlists.each do |playlist|
        playlist["first_clip_id"] = clip_id_hash[playlist["id"]]
        playlist["first_thumbnail_url"] = thumbnail_url_hash[clip_id_hash[playlist["id"]]]
        playlist["clip_count"] = clip_count_hash[playlist["id"]]
      end

      render json: { playlists: @playlists }, status: :ok
    end

    private
      def fetch_playlists
        Playlist.where(created_at: 7.days.ago.beginning_of_day..Time.now)
                .where.not("name like ?", "%ranking")
      end

      def fetch_clip_count_hash
        PlaylistClip.where(playlist_id: @playlist_ids)
                    .group(:playlist_id)
                    .count
      end

      def add_favorite_count
        @playlists = @playlists.as_json
        favorite_count_list = UserFavoritePlaylist.where(playlist_id: @playlist_ids).group(:playlist_id).count
        @playlists.each do |playlist|
          favorite_count = favorite_count_list[playlist["id"]] || 0
          playlist["favorite_count"] = favorite_count
        end
      end

      def sort_favorite_count
        sorted_playlists = @playlists.sort_by { |playlist| -playlist["favorite_count"] }
        @playlists = sorted_playlists
      end

      def fetch_thumbnail_url_hash
        clip_ids = PlaylistClip.where(playlist_id: @playlist_ids)
                              .order(order_index: :asc)
                              .pluck(:clip_id)
                              .uniq

        Clip.where(id: clip_ids).pluck(:id, :thumbnail_url).to_h
      end
  end
end
