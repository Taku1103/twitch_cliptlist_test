'use server'

// clipIdに応じたclipDataを取得するメソッド
export async function fetchClipData({ clipId }) {
  try {
    if (clipId == 'ShinyUgliestFerretKreygasm-PdQRHzhylDkgxmRh') {
      const response = {
        clip: {
          clip_id: 4,
          tw_id: 'ShinyUgliestFerretKreygasm-PdQRHzhylDkgxmRh',
          title: 'さすがのgonも唖然',
          broadcaster_name: 'gon_vl',
          view_count: 238830,
        },
      }

      return response
    }
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
              clip_id: 3,
              tw_id: 'BlueFastWoodcockRitzMitz-e3PUaor-d3riNxtB',
              title: 'あまり調子に・・・乗るなァァァ！！！（ｽｶｯ）',
              broadcaster_name: 'k4sen',
              view_count: 5803,
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
    const response = await fetch('http://api:3000/api/users/1')
    // const response = await fetch('http://localhost:3001/api/home')
    console.log(response)
    return response
  } catch (error) {
    console.log('fetchに失敗')
    console.log(error)
  }
}

// ユーザーの持つプレイリストデータを取得するメソッド
// http://localhost:3001/api/users/1/playlists
export async function fetchPlaylists({ userId }) {
  try {
    const response = await fetch(
      `http://api:3000/api/users/${userId}/playlists`,
    )
    if (!response.ok) {
      throw new Error('ネットワークレスポンスが不正です')
    }
    const playlistsdata = await response.json()
    return playlistsdata
  } catch (error) {
    console.error('プレイリストデータの取得に失敗しました', error)
  }
}
