class AddPlaylistIDtoWeeklyHighlightPlaylists < ActiveRecord::Migration[7.0]
  def change
    add_reference :weekly_highlight_playlists, :playlist, foreign_key: true
  end
end
