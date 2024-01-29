class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :id_on_twitch
      t.string :login_name
      t.string :display_name
      t.string :profile_image_url
      t.string :user_created_at

      t.timestamps
    end
  end
end
