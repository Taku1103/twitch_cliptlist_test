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
playlist_count = 8
playlist_total = playlist_count * (user_names.length - 1)
2.upto(11) do |user_id|
  playlist_count.times do |i|
    Playlist.create(
      name: "#{user_names[user_id - 1]}_#{i + 1}",
      user_id: user_id,
    )
  end
end

# plyalist_clipsテーブル
# ランキング系プレイリスト
ranking_ranking_clip_ids = [
  [936,2032,1467,2045,2057,944,1478,2085,1492,1495,2096,542,169,597,216,2112,364,688,1510,2119,953,1240,484,2146,2150,487,151,2604,2154,2156,1540,2164,2166,1276,2636,2360,2181,104,2192,2199,154,1030,381,564,2216,2219,2222,2223,1593,1338],
  [230,1595,1597,577,133,2366,521,751,1991,2237,466,1601,752,1603,974,1049,2381,1352,1993,1995,936,1996,2246,2247,266,1998,2394,1999,754,2398,1058,1617,60,1620,2249,2401,232,2250,1626,2007,1629,1631,2009,1634,1635,2410,938,1637,1640,1641],
  [2363,1419,38,2233,643,1988,230,2364,1595,2234,59,125,1053,1596,295,1446,2235,1597,1185,2365,973,1989,577,1420,1348,1598,1047,1349,1990,133,2366,1048,2367,1599,2368,2236,2369,1054,1350,1447,2370,521,2371,751,892,1600,1991,2237,466,460]
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

# ダミープレイリスト
clip_count = 5
4.upto(playlist_total) do |playlist_id|
  1.upto(clip_count) do |i|
    PlaylistClip.create(
      playlist_id: playlist_id,
      clip_id: rand(1..2704),
      order_index: i
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
2.upto(101) do |user_id|
  unique_playlist_ids = (4..playlist_total).to_a.sample(30)
  unique_playlist_ids.each do |playlist_id|
    UserFavoritePlaylist.create(
      playlist_id: playlist_id,
      user_id: user_id
    )
  end
end
