require "csv"

# usersテーブル
user_names = ['admin', 'suuuusan', 'kajiji', 'zunmi', 'komakoma', 'jango', 'boba', 'vader', 'yoda', 'windu', 'maul']
user_names.each_with_index do |name, index|
  User.create(
    id_on_twitch: 1 + index,
    login_name: name,
    display_name: name,
    profile_image_url: "https://static-cdn.jtvnw.net/user-default-pictures-uv/75305d54-c7cc-40d1-bb9c-91fbe85943c7-profile_image-300x300.png",
    user_created_at: "2024-01-30T07:42:51Z"
  )
end

# clipsテーブル
CSV.foreach('public/clip_list.csv') do |row|
  Clip.create(
    id_on_twitch: row[0],
    url: row[1],
    embed_url: row[2],
    broadcaster_id: row[3],
    broadcaster_name: row[4],
    creator_id: row[5],
    creator_name: row[6],
    video_id: row[7],
    game_id: row[8],
    language: row[9],
    title: row[10],
    view_count: row[11].to_i,
    clip_created_at: row[12],
    thumbnail_url: row[13],
    duration: row[14].to_f,
    vod_offset: row[15] == "true" ? 1 : 0,
    is_featured: row[16],
  )
end

# playlistsテーブル
# ランキング系プレイリスト(adminで作成)
playlist_names = ["daily_ranking", "weekly_ranking", "monthly_ranking"]
playlist_names.each do |name|
  Playlist.create(
    name: name,
    user_id: 1
  )
end

# ダミープレイリスト
# user_id：1はadmin
2.upto(11) do |user_id|
  3.times do |i|
    Playlist.create(
      name: "#{user_names[user_id - 1]}_#{i + 1}",
      user_id: user_id,
      favorite_count: rand(20..100)
    )
  end
end

# plyalist_clipsテーブル
# playlist_id：1～3はランキング系プレイリスト
4.upto(33) do |playlist_id|
  1.upto(5) do |i|
    PlaylistClip.create(
      playlist_id: playlist_id,
      clip_id: rand(1..2074),
      order_index: i
    )
  end
end
