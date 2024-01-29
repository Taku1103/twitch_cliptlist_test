class CreateClips < ActiveRecord::Migration[7.0]
  def change
    create_table :clips do |t|
      t.string :id_on_twitch
      t.string :url
      t.string :embed_url
      t.string :broadcaster_id
      t.string :broadcaster_name
      t.string :creator_id
      t.string :creator_name
      t.string :video_id
      t.string :game_id
      t.string :language
      t.string :title
      t.string :view_count
      t.string :clip_created_at
      t.string :thumbnail_url
      t.float :duration
      t.integer :vod_offset
      t.boolean :is_featured
      t.string :game_title

      t.timestamps
    end
  end
end
