class AddPlaylistIDtoMonthlyHighlightPlaylists < ActiveRecord::Migration[7.0]
  def change
    add_reference :monthly_highlight_playlists, :playlist, foreign_key: true
  end
end
