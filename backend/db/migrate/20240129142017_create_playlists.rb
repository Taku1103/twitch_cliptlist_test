class CreatePlaylists < ActiveRecord::Migration[7.0]
  def change
    create_table :playlists do |t|
      t.string :name
      t.integer :favorite_count, default: 0
      t.boolean :published,      default: true

      t.timestamps
    end
  end
end
