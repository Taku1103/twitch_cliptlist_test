class Playlist < ApplicationRecord
  belongs_to :user

  has_many :user_favorite_playlists
  has_many :playlist_clips
  has_many :daily_highlight_playlists
  has_many :weekly_highlight_playlists
  has_many :monthly_highlight_playlists
end
