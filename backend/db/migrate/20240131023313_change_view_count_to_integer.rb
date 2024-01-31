class ChangeViewCountToInteger < ActiveRecord::Migration[7.0]
  def change
    change_column :clips, :view_count, :integer
  end
end
