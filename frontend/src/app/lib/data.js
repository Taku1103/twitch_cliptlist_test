'use server'

// clipIdに応じたclipDataを取得するメソッド
export async function fetchClipData({ clipId }) {
  console.log(clipId)
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
