class Clip < ApplicationRecord
  has_many :playlist_clips, dependent: :destroy
  has_many :playlists, through: :playlist_clips
  belongs_to :game, optional: true
  belongs_to :broadcaster, optional: true
end
