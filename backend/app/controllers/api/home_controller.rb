module Api
  class HomeController < ApplicationController
    def index
      playlists = fetch_playlists.as_json
      playlist_ids = playlists.map { |playlist| playlist["id"].to_i }
      clip_count_hash = fetch_clip_count_hash(playlist_ids)

      playlist_clip_ids = PlaylistClip.where(playlist_id: playlist_ids)
                                      .order(order_index: :asc)
                                      .pluck(:playlist_id, :clip_id)
      clip_id_hash = playlist_clip_ids.uniq { |playlist_id, clip_id| playlist_id }.to_h

      thumbnail_url_hash = Clip.find(clip_id_hash.values)
                          .pluck(:id, :thumbnail_url).to_h

      playlists.each do |playlist|
        playlist["first_clip_id"] = clip_id_hash[playlist["id"]]
        playlist["first_thumbnail_url"] = thumbnail_url_hash[clip_id_hash[playlist["id"]]]
        playlist["clip_count"] = clip_count_hash[playlist["id"]]
      end

      render json: { playlists: playlists }, status: :ok
    end

    private
      def fetch_playlists
        Playlist.where(created_at: 7.days.ago.beginning_of_day..Time.now)
                .where.not("name like ?", "%ranking")
                .order(favorite_count: :desc)
      end

      def fetch_clip_count_hash(playlist_ids)
        PlaylistClip.where(playlist_id: playlist_ids)
                    .group(:playlist_id)
                    .count
      end

      def fetch_thumbnail_url_hash(playlist_ids)
        clip_ids = PlaylistClip.where(playlist_id: playlist_ids)
                              .order(order_index: :asc)
                              .pluck(:clip_id)
                              .uniq

        Clip.where(id: clip_ids).pluck(:id, :thumbnail_url).to_h
      end
  end
end
