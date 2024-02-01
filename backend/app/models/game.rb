class Game < ApplicationRecord
  self.primary_key = "game_id"
  has_many :clips
end
