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
  } catch (error) {}
}

export async function fetchPlaylistData({ listId }) {
  try {
    if (listId == 'MyPlaylist') {
      const response = [
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
      ]

      return response
    }
  } catch (error) {}
}
