class CreateUserFavoritePlaylists < ActiveRecord::Migration[7.0]
  def change
    create_table :user_favorite_playlists do |t|
      t.integer :order_index

      t.timestamps
    end
  end
end
