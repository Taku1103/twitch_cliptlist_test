import {
  fetchClipData,
  fetchPlaylistData,
  fetchPlaylists,
  fetchWeeklyClipsData,
} from '@/app/lib/data'
import Clip from '@/app/ui/watch/clip'

export default async function Page({ searchParams }) {
  const clipId = searchParams['clip']
  const listId = searchParams['list']
  let clipData
  let listData
  let index

  /* listIdがあるときとないときで場合分け */
  if (listId) {
    listData = await fetchPlaylistData({ listId })
    clipData = listData.playlist_clips.find(
      (clip) => String(clip.id) === clipId,
    )
    index = listData.playlist_clips.findIndex(
      (clip) => String(clip.id) === clipId,
    )
  } else {
    listData = await fetchWeeklyClipsData()
    clipData = (await fetchClipData({ clipId })).clip
  }
  const myListsData = await fetchPlaylists({ userId: 2 }) // 本当は、Headerからログインユーザーのidを取得して使う
  return (
    <Clip
      clipId={clipId}
      clipData={clipData}
      listData={listData}
      index={index}
      myListsData={myListsData}
    />
  )
}
