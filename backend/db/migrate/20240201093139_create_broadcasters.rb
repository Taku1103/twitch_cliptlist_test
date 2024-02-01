class CreateBroadcasters < ActiveRecord::Migration[7.0]
  def change
    create_table :broadcasters do |t|
      t.integer :broadcaster_id
      t.string :profile_image_url

      t.timestamps
    end
  end
end
