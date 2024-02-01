class Broadcaster < ApplicationRecord
  self.primary_key = "broadcaster_id"
  has_many :clips
end
