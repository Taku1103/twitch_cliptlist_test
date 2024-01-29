class PlaylistClip < ApplicationRecord
  belongs_to :clip
  belongs_to :playlist
end
