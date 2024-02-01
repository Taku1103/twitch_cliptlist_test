class AddForeignKeyToBroadcasterIdInClips < ActiveRecord::Migration[7.0]
  def change
    remove_column :clips, :broadcaster_id
    # 外部キー制約なしでbroadcaster_idを追加
    add_reference :clips, :broadcaster, foreign_key: false
  end
end
