class AddGameToClips < ActiveRecord::Migration[7.0]
  def change
    remove_column :clips, :game_id
    remove_column :clips, :game_title

    # 外部キー制約なしでgame_idを追加
    add_reference :clips, :game, foreign_key: false
  end
end
