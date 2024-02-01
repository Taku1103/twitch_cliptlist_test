class Clip < ApplicationRecord
  has_many :playlist_clips
  has_many :playlists, through: :playlist_clips
  belongs_to :game, optional: true
  belongs_to :broadcaster, optional: true
end
