class CreateDailyHighlightPlaylists < ActiveRecord::Migration[7.0]
  def change
    create_table :daily_highlight_playlists do |t|
      t.date :start_date

      t.timestamps
    end
  end
end
