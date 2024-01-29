class CreatePlaylistClips < ActiveRecord::Migration[7.0]
  def change
    create_table :playlist_clips do |t|
      t.integer :order_index


      t.timestamps
    end
  end
end
