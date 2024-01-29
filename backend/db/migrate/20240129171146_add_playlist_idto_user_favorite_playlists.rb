class AddPlaylistIdtoUserFavoritePlaylists < ActiveRecord::Migration[7.0]
  def change
    add_reference :user_favorite_playlists, :playlist, foreign_key: true
    add_reference :user_favorite_playlists, :user, foreign_key: true
  end
end
