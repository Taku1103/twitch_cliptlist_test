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

# プレイリストを持たいないユーザー
dummy_names = [
  'PixelMaster', 'StreamWizard', 'EpicGamer', 'LootLurker', 'ChatChampion', 'RaidRanger', 'BossBattle', 'QuestQueller', 'LagSlayer',
  'MemeMage', 'PotionPatron', 'DungeonDelver', 'GlitchGhost', 'FrameRate', 'VirtualViking', 'DragonDuelist', 'GearGrinder', 'LootLord',
  'ManaMender', 'NoobNavigator', 'PuzzlePaladin', 'QuestQueen', 'RuneReader', 'SoulSorcerer', 'TreasureTracker', 'WarpWarrior', 'XPExplorer',
  'ZombieZapper', 'AetherArcher', 'BiomeBard', 'CosmosCrafter', 'DawnDiver', 'ElementEmissary', 'FlameFencer', 'GroveGuardian', 'HorizonHopper',
  'IceInvoker', 'JungleJester', 'KarmaKnight', 'LunarLancer', 'MysticMarauder', 'NetherNomad', 'OasisOutlaw', 'PhantomPirate', 'QuartzQuester',
  'RiftRaider', 'ShadowShaman', 'TideTamer', 'UndeadUsher', 'VortexVanguard', 'WindWanderer', 'XenonXylophonist', 'YarnYak', 'ZenithZoologist',
  'AlphaAdept', 'BetaBerserker', 'GammaGuard', 'DeltaDrifter', 'EpsilonEagle', 'ZetaZephyr', 'EtaEnchanter', 'ThetaThief', 'IotaImp',
  'KappaKeeper', 'LambdaLurker', 'MuMystic', 'NuNomad', 'XiXenomorph', 'OmicronOracle', 'PiProtector', 'RhoRanger', 'SigmaSentry',
  'TauTrader', 'UpsilonUndertaker', 'PhiFollower', 'ChiChaser', 'PsiPaladin', 'OmegaOverlord'
]
dummy_names.each_with_index do |name, index|
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
playlists = [
  ["k4sen名場面", 2383], ["釈迦さんプレイリスト", 2507], ["関's Clip", 2500], ["かるびの大失敗", 1218], ["ストグラまとめ", 1653], ["VALOLANTエースの瞬間", 224], ["げまげまクリップ！", 1228], ["大会まとめ", 2456], ["ぶいすぽっ！", 1085],
  ["大爆笑シーンだけ集めました!", 1130], ["叶の見どころクリップ", 1498], ["2024年1月クリップ", 1469], ["らっだぁ叫びシーン", 2087], ["スト6大接戦!", 306], ["ストリーマーやらかし！", 304], ["泣けるクリップ", 2675], ["コラボ特集", 1943]
]
playlist_total = playlists.length + 3

playlist_no = 4
playlists.each do |playlist|
  Playlist.create(
    name: playlist[0],
    user_id: 2,
  )
  PlaylistClip.create(
    playlist_id: playlist_no,
    clip_id: playlist[1],
    order_index: 1
  )
  playlist_no += 1
end


# plyalist_clipsテーブル
# ランキング系プレイリスト
ranking_ranking_clip_ids = [
  [1227,1772,1831,1138,2238,872,2687,241,981,1160,2734,1943,158,352,1969,1988,2330,22,2026,2034,2355,1231,1002,1006,2819,2057,2359,1008,1379,2824,934,1213,768,2375],
  [1651,2509,1652,559,618,502,1656,1658,2519,1659,963,1013,1403,479,2096,291,189,2097,1669,2100,855,2539,1672,1503,1680,1681,1683,1018,1685,1686,2109,964,1690,2111,1695,1694,419,258,2114,1699,2554,564,1235,1704,1706,2118,2121,1709,190,2123],
  [2507,1477,46,2379,676,2087,1651,255,2508,2509,2380,69,145,1652,1653,559,318,1497,2381,1011,1232,2510,2088,618,1478,1399,1654,2511,1089,1400,152,2089,2512,1090,1655,2513,502,2382,2514,1656,1012,1095,2090,1401,1498,2515,777,2516,1657,2383]
]

ranking_ranking_clip_ids.each_with_index do |clip_ids, playlist_id|
  clip_ids.each_with_index do |clip_id, index|
    PlaylistClip.create(
      playlist_id: playlist_id + 1,
      clip_id: clip_id,
      order_index: index + 1
    )
  end
end

# 各プレイリストランキングテーブル
DailyHighlightPlaylist.create(
  playlist_id: 1,
  start_date: "2024-01-31"
)
WeeklyHighlightPlaylist.create(
  playlist_id: 2,
  start_date: "2024-01-31"
)
MonthlyHighlightPlaylist.create(
  playlist_id: 3,
  start_date: "2024-01-31"
)

# gamesテーブル
CSV.foreach('public/game_list.csv') do |row|
  Game.create(
    game_id: row[0].to_i,
    game_title: row[1],
    game_thumbnail_url: row[2],
  )
end

# broadcastersテーブル
CSV.foreach('public/broadcaster_list.csv') do |row|
  Broadcaster.create(
    broadcaster_id: row[0].to_i,
    profile_image_url: row[1],
  )
end

# user_favorite_playlistsテーブル
2.upto(89) do |user_id|
  unique_playlist_ids = (4..playlist_total).to_a.sample(10)
  unique_playlist_ids.each do |playlist_id|
    UserFavoritePlaylist.create(
      playlist_id: playlist_id,
      user_id: user_id
    )
  end
end

# rabbit_kun-----------------------------------------------------------------------------
# users
user_id = 90
User.create(
  id_on_twitch: 1028693034,
  login_name: "rabbit_kun_2nd",
  display_name: "rabbit_kun_2nd",
  profile_image_url: "https://static-cdn.jtvnw.net/user-default-pictures-uv/75305d54-c7cc-40d1-bb9c-91fbe85943c7-profile_image-300x300.png",
  user_created_at: "2024-01-30T07:42:51Z"
)

# plalylists
i = 21
playlist = [["お気に入り", 88], ["LOL", 2452], ["釈迦_名場面", 2507], ["GTAまとめ", 325]]
playlist.each do |playlist_name|
  Playlist.create(
    name: playlist_name,
    user_id: user_id,
  )
  PlaylistClip.create(
    playlist_id: i,
    clip_id: i,
    order_index: 1
  )
  i += 1
end

# playlist_clips


# user_favorite_playlists
unique_playlist_ids = (4..playlist_total).to_a.sample(4)
unique_playlist_ids.each do |playlist_id|
  UserFavoritePlaylist.create(
    playlist_id: playlist_id,
    user_id: 90
  )
end

# プレゼン用Playlist---------------------------------------------
# playlists
Playlist.create(
  name: "2024年クリップ特選",
  user_id: 2,
)

# user_favorite_playlists
2.upto(89) do |user_id|
  UserFavoritePlaylist.create(
    playlist_id: 25,
    user_id: user_id
  )
end

#playlist_clips
clip_ids = [801, 1034, 1555, 1600, 1890]
clip_ids.each_with_index do |clip_id, index|
  PlaylistClip.create(
    playlist_id: 25,
    clip_id: clip_id,
    order_index: index + 1
  )
end
