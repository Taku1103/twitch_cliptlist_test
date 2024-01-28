import {
  fetchClipData,
  fetchPlaylistData,
  fetchWeeklyRankingData,
} from '@/app/lib/data'
import Clip from '@/app/ui/watch/clip'

export default async function Page({ searchParams }) {
  const clipId = searchParams['clip']
  const listId = searchParams['list']
  let clipData
  let listData

  /* listIdがあるときとないときで場合分け */
  if (listId) {
    listData = await fetchPlaylistData({ listId })
    clipData = listData.playlist.find((clip) => clip.clip.tw_id === clipId)
  } else {
    listData = await fetchWeeklyRankingData()
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
