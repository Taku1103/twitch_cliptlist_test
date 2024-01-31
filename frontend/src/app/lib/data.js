'use server'

// clipIdに応じたclipDataを取得するメソッド
export async function fetchClipData({ clipId }) {
  try {
    const response = await fetch(`http://api:3000/api/clips/${clipId}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(clipDataの取得に失敗しました)
  }
}

export async function fetchPlaylistData({ listId }) {
  try {
    if (listId == 'MyPlaylist') {
      const response = {
        playlist: [
          {
            clip: {
              id: 1,
              id_on_twitch: 'NastyVastSangDogFace-OyJ_N63sxuPJFQ0U',
              url: 'https://clips.twitch.tv/NastyVastSangDogFace-OyJ_N63sxuPJFQ0U',
              embed_url:
                'https://clips.twitch.tv/embed?clip=NastyVastSangDogFace-OyJ_N63sxuPJFQ0U',
              broadcaster_id: '94618049',
              broadcaster_name: 'ととみっくす',
              creator_id: '573724715',
              creator_name: 'ロゼロイア',
              video_id: '2036096608',
              game_id: '32982',
              language: 'ja',
              title: '貰ったガチャでSRを出したとと',
              view_count: 8475,
              clip_created_at: '2024-01-18',
              thumbnail_url:
                'https://clips-media-assets2.twitch.tv/hhfNXzsifzet7MbjyRUNFA/AT-cm%7ChhfNXzsifzet7MbjyRUNFA-preview-480x272.jpg',
              duration: 59.9,
              vod_offset: 0,
              is_featured: false,
              game_title: null,
              created_at: '2024-01-31T21:14:52.370+09:00',
              updated_at: '2024-01-31T21:14:52.370+09:00',
            },
          },
          {
            clip: {
              id: 2,
              id_on_twitch: 'FunExcitedNightingaleDuDudu-n4hbUO7EhA1Rmlu6',
              url: 'https://clips.twitch.tv/FunExcitedNightingaleDuDudu-n4hbUO7EhA1Rmlu6',
              embed_url:
                'https://clips.twitch.tv/embed?clip=FunExcitedNightingaleDuDudu-n4hbUO7EhA1Rmlu6',
              broadcaster_id: '94618049',
              broadcaster_name: 'ととみっくす',
              creator_id: '190926145',
              creator_name: '保栖朔',
              video_id: '2043015714',
              game_id: '32982',
              language: 'ja',
              title: 'レダーはこの街に舞い降りた天性のホットドッグ屋さん',
              view_count: 5777,
              clip_created_at: '2024-01-25',
              thumbnail_url:
                'https://clips-media-assets2.twitch.tv/9ahR2Z-IW1DuxIQNUZpbug/AT-cm%7C9ahR2Z-IW1DuxIQNUZpbug-preview-480x272.jpg',
              duration: 50.3,
              vod_offset: 0,
              is_featured: false,
              game_title: null,
              created_at: '2024-01-31T21:14:52.379+09:00',
              updated_at: '2024-01-31T21:14:52.379+09:00',
            },
          },
          {
            clip: {
              id: 3,
              id_on_twitch:
                'ResourcefulGrotesqueButterGOWSkull-TAfpGyGRV79trqH3',
              url: 'https://clips.twitch.tv/ResourcefulGrotesqueButterGOWSkull-TAfpGyGRV79trqH3',
              embed_url:
                'https://clips.twitch.tv/embed?clip=ResourcefulGrotesqueButterGOWSkull-TAfpGyGRV79trqH3',
              broadcaster_id: '94618049',
              broadcaster_name: 'ととみっくす',
              creator_id: '456764323',
              creator_name: 'kimitan7',
              video_id: '2047046524',
              game_id: '32982',
              language: 'ja',
              title: '森に帰る',
              view_count: 5588,
              clip_created_at: '2024-01-29',
              thumbnail_url:
                'https://clips-media-assets2.twitch.tv/pJSHykwH6RshkVe_ba6h9w/AT-cm%7CpJSHykwH6RshkVe_ba6h9w-preview-480x272.jpg',
              duration: 53.7,
              vod_offset: 0,
              is_featured: false,
              game_title: null,
              created_at: '2024-01-31T21:14:52.387+09:00',
              updated_at: '2024-01-31T21:14:52.387+09:00',
            },
          },
          {
            clip: {
              id: 4,
              id_on_twitch: 'GiantBillowingStorkTinyFace-BI_q2mvzCSRXpM4R',
              url: 'https://clips.twitch.tv/GiantBillowingStorkTinyFace-BI_q2mvzCSRXpM4R',
              embed_url:
                'https://clips.twitch.tv/embed?clip=GiantBillowingStorkTinyFace-BI_q2mvzCSRXpM4R',
              broadcaster_id: '190063430',
              broadcaster_name: 'てん_ぷら',
              creator_id: '463157844',
              creator_name: 'yamamine3',
              video_id: '2037062735',
              game_id: '32982',
              language: 'ja',
              title: '空架ぐち逸のIDカード',
              view_count: 9045,
              clip_created_at: '2024-01-19',
              thumbnail_url:
                'https://clips-media-assets2.twitch.tv/Xvo_AQSP6tpr8wkkV6TOEQ/40988240343-offset-11940-preview-480x272.jpg',
              duration: 26,
              vod_offset: 0,
              is_featured: false,
              game_title: null,
              created_at: '2024-01-31T21:14:52.393+09:00',
              updated_at: '2024-01-31T21:14:52.393+09:00',
            },
          },
        ],
        id: 'MyPlaylist',
        creatorName: 'Sakana',
        createdAt: '2024-01-29',
        favoritesCount: 3,
      }

      return response
    }
  } catch (error) {
    console.log(playlistDataの取得に失敗しました)
  }
}

export async function fetchWeeklyRankingData() {
  try {
    const response = {
      playlist: [
        {
          clip: {
            clip_id: 1,
            tw_id: 'InnocentFastRadicchioLitty-lngA37a3soWC1Bo4',
            title: 'ゲッダンwwwwww',
            broadcaster_name: 'fps_shaka',
            view_count: 761388,
            thumbnail_url:
              'https://clips-media-assets2.twitch.tv/ZNaDBhvOSPcOctWsAeihdg/AT-cm%7CZNaDBhvOSPcOctWsAeihdg-preview-480x272.jpg',
          },
        },
        {
          clip: {
            clip_id: 2,
            tw_id: 'PrettiestEnticingHornetStinkyCheese-G85I9w5y1awB6KF2',
            title: '医療費4億5355万円',
            broadcaster_name: 'k4sen',
            view_count: 287755,
            thumbnail_url:
              'https://clips-media-assets2.twitch.tv/ZNaDBhvOSPcOctWsAeihdg/AT-cm%7CZNaDBhvOSPcOctWsAeihdg-preview-480x272.jpg',
          },
        },
        {
          clip: {
            clip_id: 4,
            tw_id: 'ShinyUgliestFerretKreygasm-PdQRHzhylDkgxmRh',
            title: 'さすがのgonも唖然',
            broadcaster_name: 'gon_vl',
            view_count: 238830,
            thumbnail_url:
              'https://clips-media-assets2.twitch.tv/ZNaDBhvOSPcOctWsAeihdg/AT-cm%7CZNaDBhvOSPcOctWsAeihdg-preview-480x272.jpg',
          },
        },
      ],
      id: 'WeeklyRanking',
    }

    return response
  } catch (error) {
    console.log(WeeklyRankingDataの取得に失敗しました)
  }
}

export async function fetchTopPlaylistsData() {
  try {
    const response = [
      {
        playlist: [
          {
            clip: {
              clip_id: 1,
              tw_id: 'InnocentFastRadicchioLitty-lngA37a3soWC1Bo4',
              title: 'ゲッダンwwwwww',
              broadcaster_name: 'fps_shaka',
              view_count: 761388,
              thumbnail_url:
                'https://clips-media-assets2.twitch.tv/ZNaDBhvOSPcOctWsAeihdg/AT-cm%7CZNaDBhvOSPcOctWsAeihdg-preview-480x272.jpg',
            },
          },
        ],
        id: '爆速一般通過SHAKAまとめ',
        creatorName: 'Sakana',
        createdAt: '2024-01-29',
        favoritesCount: 10000,
      },
      {
        playlist: [
          {
            clip: {
              clip_id: 1,
              tw_id: 'InnocentFastRadicchioLitty-lngA37a3soWC1Bo4',
              title: 'ゲッダンwwwwww',
              broadcaster_name: 'fps_shaka',
              view_count: 761388,
              thumbnail_url:
                'https://clips-media-assets2.twitch.tv/ZNaDBhvOSPcOctWsAeihdg/AT-cm%7CZNaDBhvOSPcOctWsAeihdg-preview-480x272.jpg',
            },
          },
        ],
        id: '予想外の返答に沈黙するしんじさんまとめ',
        creatorName: 'Sakana',
        createdAt: '2024-01-29',
        favoritesCount: 9999,
      },
      {
        playlist: [
          {
            clip: {
              clip_id: 1,
              tw_id: 'InnocentFastRadicchioLitty-lngA37a3soWC1Bo4',
              title: 'ゲッダンwwwwww',
              broadcaster_name: 'fps_shaka',
              view_count: 761388,
              thumbnail_url:
                'https://clips-media-assets2.twitch.tv/ZNaDBhvOSPcOctWsAeihdg/AT-cm%7CZNaDBhvOSPcOctWsAeihdg-preview-480x272.jpg',
            },
          },
        ],
        id: '釈迦誘拐の危機を救う英雄かるびまとめ',
        creatorName: 'Sakana',
        createdAt: '2024-01-29',
        favoritesCount: 9998,
      },
      {
        playlist: [
          {
            clip: {
              clip_id: 1,
              tw_id: 'InnocentFastRadicchioLitty-lngA37a3soWC1Bo4',
              title: 'ゲッダンwwwwww',
              broadcaster_name: 'fps_shaka',
              view_count: 761388,
              thumbnail_url:
                'https://clips-media-assets2.twitch.tv/ZNaDBhvOSPcOctWsAeihdg/AT-cm%7CZNaDBhvOSPcOctWsAeihdg-preview-480x272.jpg',
            },
          },
        ],
        id: '愛車が炎上するかるびまとめ',
        creatorName: 'Sakana',
        createdAt: '2024-01-29',
        favoritesCount: 9997,
      },
      {
        playlist: [
          {
            clip: {
              clip_id: 1,
              tw_id: 'InnocentFastRadicchioLitty-lngA37a3soWC1Bo4',
              title: 'ゲッダンwwwwww',
              broadcaster_name: 'fps_shaka',
              view_count: 761388,
              thumbnail_url:
                'https://clips-media-assets2.twitch.tv/ZNaDBhvOSPcOctWsAeihdg/AT-cm%7CZNaDBhvOSPcOctWsAeihdg-preview-480x272.jpg',
            },
          },
        ],
        id: '分かんないよ！（号泣）まとめ',
        creatorName: 'Sakana',
        createdAt: '2024-01-29',
        favoritesCount: 9996,
      },
      {
        playlist: [
          {
            clip: {
              clip_id: 1,
              tw_id: 'InnocentFastRadicchioLitty-lngA37a3soWC1Bo4',
              title: 'ゲッダンwwwwww',
              broadcaster_name: 'fps_shaka',
              view_count: 761388,
              thumbnail_url:
                'https://clips-media-assets2.twitch.tv/ZNaDBhvOSPcOctWsAeihdg/AT-cm%7CZNaDBhvOSPcOctWsAeihdg-preview-480x272.jpg',
            },
          },
        ],
        id: '地声　やべぇまとめ',
        creatorName: 'Sakana',
        createdAt: '2024-01-29',
        favoritesCount: 9995,
      },
      {
        playlist: [
          {
            clip: {
              clip_id: 1,
              tw_id: 'InnocentFastRadicchioLitty-lngA37a3soWC1Bo4',
              title: 'ゲッダンwwwwww',
              broadcaster_name: 'fps_shaka',
              view_count: 761388,
              thumbnail_url:
                'https://clips-media-assets2.twitch.tv/ZNaDBhvOSPcOctWsAeihdg/AT-cm%7CZNaDBhvOSPcOctWsAeihdg-preview-480x272.jpg',
            },
          },
        ],
        id: 'たるまとめ',
        creatorName: 'Sakana',
        createdAt: '2024-01-29',
        favoritesCount: 9994,
      },
      {
        playlist: [
          {
            clip: {
              clip_id: 1,
              tw_id: 'InnocentFastRadicchioLitty-lngA37a3soWC1Bo4',
              title: 'ゲッダンwwwwww',
              broadcaster_name: 'fps_shaka',
              view_count: 761388,
              thumbnail_url:
                'https://clips-media-assets2.twitch.tv/ZNaDBhvOSPcOctWsAeihdg/AT-cm%7CZNaDBhvOSPcOctWsAeihdg-preview-480x272.jpg',
            },
          },
        ],
        id: 'かなえに成敗されるトロール警官かるびまとめ',
        creatorName: 'Sakana',
        createdAt: '2024-01-29',
        favoritesCount: 9993,
      },
      {
        playlist: [
          {
            clip: {
              clip_id: 1,
              tw_id: 'InnocentFastRadicchioLitty-lngA37a3soWC1Bo4',
              title: 'ゲッダンwwwwww',
              broadcaster_name: 'fps_shaka',
              view_count: 761388,
              thumbnail_url:
                'https://clips-media-assets2.twitch.tv/ZNaDBhvOSPcOctWsAeihdg/AT-cm%7CZNaDBhvOSPcOctWsAeihdg-preview-480x272.jpg',
            },
          },
        ],
        id: 'かるび、他人の車に給油まとめ',
        creatorName: 'Sakana',
        createdAt: '2024-01-29',
        favoritesCount: 9992,
      },
      {
        playlist: [
          {
            clip: {
              clip_id: 1,
              tw_id: 'InnocentFastRadicchioLitty-lngA37a3soWC1Bo4',
              title: 'ゲッダンwwwwww',
              broadcaster_name: 'fps_shaka',
              view_count: 761388,
              thumbnail_url:
                'https://clips-media-assets2.twitch.tv/ZNaDBhvOSPcOctWsAeihdg/AT-cm%7CZNaDBhvOSPcOctWsAeihdg-preview-480x272.jpg',
            },
          },
        ],
        id: 'かるびロケラン発射(炎上)まとめ',
        creatorName: 'Sakana',
        createdAt: '2024-01-29',
        favoritesCount: 9991,
      },
      {
        playlist: [
          {
            clip: {
              clip_id: 1,
              tw_id: 'InnocentFastRadicchioLitty-lngA37a3soWC1Bo4',
              title: 'ゲッダンwwwwww',
              broadcaster_name: 'fps_shaka',
              view_count: 761388,
              thumbnail_url:
                'https://clips-media-assets2.twitch.tv/ZNaDBhvOSPcOctWsAeihdg/AT-cm%7CZNaDBhvOSPcOctWsAeihdg-preview-480x272.jpg',
            },
          },
        ],
        id: 'ウェッ！まとめ',
        creatorName: 'Sakana',
        createdAt: '2024-01-29',
        favoritesCount: 9990,
      },
      {
        playlist: [
          {
            clip: {
              clip_id: 1,
              tw_id: 'InnocentFastRadicchioLitty-lngA37a3soWC1Bo4',
              title: 'ゲッダンwwwwww',
              broadcaster_name: 'fps_shaka',
              view_count: 761388,
              thumbnail_url:
                'https://clips-media-assets2.twitch.tv/ZNaDBhvOSPcOctWsAeihdg/AT-cm%7CZNaDBhvOSPcOctWsAeihdg-preview-480x272.jpg',
            },
          },
        ],
        id: 'デイリーまとめ',
        creatorName: 'Sakana',
        createdAt: '2024-01-29',
        favoritesCount: 9989,
      },
    ]

    return response
  } catch (error) {
    console.log('TopPlaylistsDataの取得に失敗しました')
  }
}

export async function fetchDailyClipsData() {
  try {
    const response = [
      {
        clip: {
          clip_id: 5,
          tw_id: 'AmericanMuddyChickenPeteZarollTie-z-pCCOoYt0_K7D0v',
          title: 'Daily',
          broadcaster_name: 'darumaisgod',
          view_count: 761388,
          thumbnail_url:
            'https://clips-media-assets2.twitch.tv/ZNaDBhvOSPcOctWsAeihdg/AT-cm%7CZNaDBhvOSPcOctWsAeihdg-preview-480x272.jpg',
        },
      },
      {
        clip: {
          clip_id: 6,
          tw_id: 'RefinedHonestWerewolfAMPTropPunch-mukuPxkrXGPUmgwP',
          title: 'カルビ姫による「KICK BACK」のようなもの',
          broadcaster_name: 'darumaisgod',
          view_count: 287755,
          thumbnail_url:
            'https://clips-media-assets2.twitch.tv/ZNaDBhvOSPcOctWsAeihdg/AT-cm%7CZNaDBhvOSPcOctWsAeihdg-preview-480x272.jpg',
        },
      },
      {
        clip: {
          clip_id: 7,
          tw_id: 'ObliviousFunGoshawkShazBotstix-m8UuwNHW4sVNNAmH',
          title: '更生施設',
          broadcaster_name: 'darumaisgod',
          view_count: 238830,
          thumbnail_url:
            'https://clips-media-assets2.twitch.tv/ZNaDBhvOSPcOctWsAeihdg/AT-cm%7CZNaDBhvOSPcOctWsAeihdg-preview-480x272.jpg',
        },
      },
      {
        clip: {
          clip_id: 8,
          tw_id: 'PricklyRealPoultryPhilosoraptor-CtWj8iTS2c219ZSS',
          title: 'これぞ元ギャングのボスの実力',
          broadcaster_name: 'darumaisgod',
          view_count: 238830,
          thumbnail_url:
            'https://clips-media-assets2.twitch.tv/ZNaDBhvOSPcOctWsAeihdg/AT-cm%7CZNaDBhvOSPcOctWsAeihdg-preview-480x272.jpg',
        },
      },
      {
        clip: {
          clip_id: 9,
          tw_id: 'DeliciousTameBearDoritosChip-dwGxA7JEVC5boKnX',
          title: 'だるま炎上',
          broadcaster_name: 'darumaisgod',
          view_count: 238830,
          thumbnail_url:
            'https://clips-media-assets2.twitch.tv/ZNaDBhvOSPcOctWsAeihdg/AT-cm%7CZNaDBhvOSPcOctWsAeihdg-preview-480x272.jpg',
        },
      },
      {
        clip: {
          clip_id: 10,
          tw_id: 'SourCulturedPheasantSmoocherZ-IbdBO5I01XCypUXT',
          title: '消えたまるまる',
          broadcaster_name: 'darumaisgod',
          view_count: 238830,
          thumbnail_url:
            'https://clips-media-assets2.twitch.tv/ZNaDBhvOSPcOctWsAeihdg/AT-cm%7CZNaDBhvOSPcOctWsAeihdg-preview-480x272.jpg',
        },
      },
      {
        clip: {
          clip_id: 11,
          tw_id: 'AlertGrotesqueLEDImGlitch-Mj4fkSFALz1Pwh0T',
          title: 'Selly 『葛葉意外に頭いい』',
          broadcaster_name: 'darumaisgod',
          view_count: 238830,
          thumbnail_url:
            'https://clips-media-assets2.twitch.tv/ZNaDBhvOSPcOctWsAeihdg/AT-cm%7CZNaDBhvOSPcOctWsAeihdg-preview-480x272.jpg',
        },
      },
      {
        clip: {
          clip_id: 12,
          tw_id: 'DarkMoldyReindeerSmoocherZ-Ewo-B85pIgT4dzG7',
          title: '極刑ハセシンの刑',
          broadcaster_name: 'darumaisgod',
          view_count: 238830,
          thumbnail_url:
            'https://clips-media-assets2.twitch.tv/ZNaDBhvOSPcOctWsAeihdg/AT-cm%7CZNaDBhvOSPcOctWsAeihdg-preview-480x272.jpg',
        },
      },
      {
        clip: {
          clip_id: 13,
          tw_id: 'ShinyUgliestFerretKreygasm-PdQRHzhylDkgxmRh',
          title: 'だるま視点おいす',
          broadcaster_name: 'darumaisgod',
          view_count: 238830,
          thumbnail_url:
            'https://clips-media-assets2.twitch.tv/ZNaDBhvOSPcOctWsAeihdg/AT-cm%7CZNaDBhvOSPcOctWsAeihdg-preview-480x272.jpg',
        },
      },
      {
        clip: {
          clip_id: 14,
          tw_id: 'AgreeableGentleSoybeanKeepo-zbVx3XZEfAevK4qi',
          title: 'アルス「だる～～！」',
          broadcaster_name: 'darumaisgod',
          view_count: 238830,
          thumbnail_url:
            'https://clips-media-assets2.twitch.tv/ZNaDBhvOSPcOctWsAeihdg/AT-cm%7CZNaDBhvOSPcOctWsAeihdg-preview-480x272.jpg',
        },
      },
    ]
    return response
  } catch (error) {}
  console.log('TopClipsDataの取得に失敗しました')
}

export async function fetchWeeklyClipsData() {
  try {
    const response = [
      {
        clip: {
          clip_id: 5,
          tw_id: 'AmericanMuddyChickenPeteZarollTie-z-pCCOoYt0_K7D0v',
          title: 'Weekly',
          broadcaster_name: 'darumaisgod',
          view_count: 761388,
          thumbnail_url:
            'https://clips-media-assets2.twitch.tv/ZNaDBhvOSPcOctWsAeihdg/AT-cm%7CZNaDBhvOSPcOctWsAeihdg-preview-480x272.jpg',
        },
      },
      {
        clip: {
          clip_id: 6,
          tw_id: 'RefinedHonestWerewolfAMPTropPunch-mukuPxkrXGPUmgwP',
          title: 'カルビ姫による「KICK BACK」のようなもの',
          broadcaster_name: 'darumaisgod',
          view_count: 287755,
          thumbnail_url:
            'https://clips-media-assets2.twitch.tv/ZNaDBhvOSPcOctWsAeihdg/AT-cm%7CZNaDBhvOSPcOctWsAeihdg-preview-480x272.jpg',
        },
      },
      {
        clip: {
          clip_id: 7,
          tw_id: 'ObliviousFunGoshawkShazBotstix-m8UuwNHW4sVNNAmH',
          title: '更生施設',
          broadcaster_name: 'darumaisgod',
          view_count: 238830,
          thumbnail_url:
            'https://clips-media-assets2.twitch.tv/ZNaDBhvOSPcOctWsAeihdg/AT-cm%7CZNaDBhvOSPcOctWsAeihdg-preview-480x272.jpg',
        },
      },
      {
        clip: {
          clip_id: 8,
          tw_id: 'PricklyRealPoultryPhilosoraptor-CtWj8iTS2c219ZSS',
          title: 'これぞ元ギャングのボスの実力',
          broadcaster_name: 'darumaisgod',
          view_count: 238830,
          thumbnail_url:
            'https://clips-media-assets2.twitch.tv/ZNaDBhvOSPcOctWsAeihdg/AT-cm%7CZNaDBhvOSPcOctWsAeihdg-preview-480x272.jpg',
        },
      },
      {
        clip: {
          clip_id: 9,
          tw_id: 'DeliciousTameBearDoritosChip-dwGxA7JEVC5boKnX',
          title: 'だるま炎上',
          broadcaster_name: 'darumaisgod',
          view_count: 238830,
          thumbnail_url:
            'https://clips-media-assets2.twitch.tv/ZNaDBhvOSPcOctWsAeihdg/AT-cm%7CZNaDBhvOSPcOctWsAeihdg-preview-480x272.jpg',
        },
      },
    ]
    return response
  } catch (error) {}
  console.log('TopClipsDataの取得に失敗しました')
}

export async function fetchMonthlyClipsData() {
  try {
    const response = [
      {
        clip: {
          clip_id: 5,
          tw_id: 'AmericanMuddyChickenPeteZarollTie-z-pCCOoYt0_K7D0v',
          title: 'Monthly',
          broadcaster_name: 'darumaisgod',
          view_count: 761388,
          thumbnail_url:
            'https://clips-media-assets2.twitch.tv/ZNaDBhvOSPcOctWsAeihdg/AT-cm%7CZNaDBhvOSPcOctWsAeihdg-preview-480x272.jpg',
        },
      },
      {
        clip: {
          clip_id: 6,
          tw_id: 'RefinedHonestWerewolfAMPTropPunch-mukuPxkrXGPUmgwP',
          title: 'カルビ姫による「KICK BACK」のようなもの',
          broadcaster_name: 'darumaisgod',
          view_count: 287755,
          thumbnail_url:
            'https://clips-media-assets2.twitch.tv/ZNaDBhvOSPcOctWsAeihdg/AT-cm%7CZNaDBhvOSPcOctWsAeihdg-preview-480x272.jpg',
        },
      },
      {
        clip: {
          clip_id: 7,
          tw_id: 'ObliviousFunGoshawkShazBotstix-m8UuwNHW4sVNNAmH',
          title: '更生施設',
          broadcaster_name: 'darumaisgod',
          view_count: 238830,
          thumbnail_url:
            'https://clips-media-assets2.twitch.tv/ZNaDBhvOSPcOctWsAeihdg/AT-cm%7CZNaDBhvOSPcOctWsAeihdg-preview-480x272.jpg',
        },
      },
      {
        clip: {
          clip_id: 8,
          tw_id: 'PricklyRealPoultryPhilosoraptor-CtWj8iTS2c219ZSS',
          title: 'これぞ元ギャングのボスの実力',
          broadcaster_name: 'darumaisgod',
          view_count: 238830,
          thumbnail_url:
            'https://clips-media-assets2.twitch.tv/ZNaDBhvOSPcOctWsAeihdg/AT-cm%7CZNaDBhvOSPcOctWsAeihdg-preview-480x272.jpg',
        },
      },
      {
        clip: {
          clip_id: 9,
          tw_id: 'DeliciousTameBearDoritosChip-dwGxA7JEVC5boKnX',
          title: 'だるま炎上',
          broadcaster_name: 'darumaisgod',
          view_count: 238830,
          thumbnail_url:
            'https://clips-media-assets2.twitch.tv/ZNaDBhvOSPcOctWsAeihdg/AT-cm%7CZNaDBhvOSPcOctWsAeihdg-preview-480x272.jpg',
        },
      },
    ]
    return response
  } catch (error) {}
  console.log('TopClipsDataの取得に失敗しました')
}

export async function fetchTest() {
  try {
    const response = await fetch('http://api:3000/api/clips/2000')
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    console.log('fetchに失敗')
    console.log(error)
  }
}
