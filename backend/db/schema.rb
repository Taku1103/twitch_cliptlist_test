# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2024_01_31_023313) do
  create_table "clips", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "id_on_twitch"
    t.string "url"
    t.string "embed_url"
    t.string "broadcaster_id"
    t.string "broadcaster_name"
    t.string "creator_id"
    t.string "creator_name"
    t.string "video_id"
    t.string "game_id"
    t.string "language"
    t.string "title"
    t.integer "view_count"
    t.string "clip_created_at"
    t.string "thumbnail_url"
    t.float "duration"
    t.integer "vod_offset"
    t.boolean "is_featured"
    t.string "game_title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "daily_highlight_playlists", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.date "start_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "playlist_id"
    t.index ["playlist_id"], name: "index_daily_highlight_playlists_on_playlist_id"
  end

  create_table "monthly_highlight_playlists", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.date "start_date"
    t.date "end_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "playlist_id"
    t.index ["playlist_id"], name: "index_monthly_highlight_playlists_on_playlist_id"
  end

  create_table "playlist_clips", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.integer "order_index"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "playlist_id"
    t.bigint "clip_id"
    t.index ["clip_id"], name: "index_playlist_clips_on_clip_id"
    t.index ["playlist_id"], name: "index_playlist_clips_on_playlist_id"
  end

  create_table "playlists", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name"
    t.integer "favorite_count", default: 0
    t.boolean "published", default: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.index ["user_id"], name: "index_playlists_on_user_id"
  end

  create_table "user_favorite_playlists", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.integer "order_index"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "playlist_id"
    t.bigint "user_id"
    t.index ["playlist_id"], name: "index_user_favorite_playlists_on_playlist_id"
    t.index ["user_id"], name: "index_user_favorite_playlists_on_user_id"
  end

  create_table "users", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "id_on_twitch"
    t.string "login_name"
    t.string "display_name"
    t.string "profile_image_url"
    t.string "user_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "weekly_highlight_playlists", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.date "start_date"
    t.date "end_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "playlist_id"
    t.index ["playlist_id"], name: "index_weekly_highlight_playlists_on_playlist_id"
  end

  add_foreign_key "daily_highlight_playlists", "playlists"
  add_foreign_key "monthly_highlight_playlists", "playlists"
  add_foreign_key "playlist_clips", "clips"
  add_foreign_key "playlist_clips", "playlists"
  add_foreign_key "playlists", "users"
  add_foreign_key "user_favorite_playlists", "playlists"
  add_foreign_key "user_favorite_playlists", "users"
  add_foreign_key "weekly_highlight_playlists", "playlists"
end
