class AddUserIDtoPlaylists < ActiveRecord::Migration[7.0]
  def change
    add_reference :playlists, :user, foreign_key: true
  end
end
