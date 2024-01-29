class CreateWeeklyHighlightPlaylists < ActiveRecord::Migration[7.0]
  def change
    create_table :weekly_highlight_playlists do |t|
      t.date :start_date
      t.date :end_date

      t.timestamps
    end
  end
end
