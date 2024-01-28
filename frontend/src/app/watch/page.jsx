import { fetchClipData, fetchPlaylistData } from '@/app/lib/data'
import Clip from '@/app/ui/watch/clip'

export default async function Page({ searchParams }) {
  const clipId = searchParams['clip']
  const listId = searchParams['list']
  let clipData
  let listData

  /* listIdがあるときとないときで場合分け */
  if (listId) {
    listData = await fetchPlaylistData({ listId })
    clipData = listData.find((clip) => clip.clip.tw_id === clipId)
  } else {
    clipData = await fetchClipData({ clipId })
  }
  return (
    <>
      <div className="clip">
        <Clip
          clipId={clipId}
          clipData={clipData.clip}
          listId={listId}
          listData={listData}
        />
      </div>
    </>
  )
}
