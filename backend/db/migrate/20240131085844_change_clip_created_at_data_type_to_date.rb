class ChangeClipCreatedAtDataTypeToDate < ActiveRecord::Migration[7.0]
  def change
    change_column :clips, :clip_created_at, :date
  end
end
