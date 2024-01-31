class AddPlaylistIDtoDailyHighlightPlaylists < ActiveRecord::Migration[7.0]
  def change
    add_reference :daily_highlight_playlists, :playlist, foreign_key: true
