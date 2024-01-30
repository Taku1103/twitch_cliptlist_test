class User < ApplicationRecord
  has_many :user_favorite_playlists
  has_many :playlists, through: :user_favorite_playlists
end
