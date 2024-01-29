class AddForeignKeyToPlaylistClips < ActiveRecord::Migration[7.0]
  def change
    add_reference :playlist_clips, :playlist, foreign_key: true
    add_reference :playlist_clips, :clip, foreign_key: true
  end
end
