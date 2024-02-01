class AddColumnsThumbnailUrl < ActiveRecord::Migration[7.0]
  def change
    add_column :games, :game_thumbnail_url, :string
  end
end
