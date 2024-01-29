class RenameIdOnTwtichToIdOnTwitchToClips < ActiveRecord::Migration[7.0]
  def change
    rename_column :clips, :id_on_twtich, :id_on_twitch
  end
end
