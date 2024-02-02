class User < ApplicationRecord
  has_many :user_favorite_playlists
  has_many :playlists, through: :user_favorite_playlists

  def favorite_playlist?(playlist)
    self.playlists.include?(playlist)
  end
end
