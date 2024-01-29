class User < ApplicationRecord
  has_many :playlists
  has_many :user_favorite_playlists
end
