class DropColumnFavoriteCountFromPlaylists < ActiveRecord::Migration[7.0]
  def change
    remove_column :playlists, :favorite_count
  end
end
