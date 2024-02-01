class CreateGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.integer :game_id
      t.string :game_title

      t.timestamps
    end
  end
end
