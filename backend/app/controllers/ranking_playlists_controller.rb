require "date"

class RankingPlaylistsController < ApplicationController
  def get_ranking_clip_ids
    daily_ids = get_ranking_ids(1, 1)
    weekly_ids = get_ranking_ids(2, 7)
    monthly_ids = get_ranking_ids(3, 31)

    render json: { "daily_ids": daily_ids, "weekly_ids": weekly_ids, "monthly_ids": monthly_ids }
  end

  private
    def get_ranking_ids(playlist_id, before_days)
      today = Date.parse("2024-01-31")
      ranking_clip = Clip.where(clip_created_at: today - before_days..)
                          .order(view_count: :desc)
                          .limit(50)
      ranking_clip.pluck(:id)
    end
end
