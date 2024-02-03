import {
  fetchClipData,
  fetchPlaylistData,
  fetchPlaylists,
  fetchWeeklyClipsData,
} from '@/app/lib/data'
import Clip from '@/app/ui/watch/clip'
import { cookies } from 'next/headers'

export default async function Page({ searchParams }) {
  const clipId = searchParams['clip']
  const listId = searchParams['list']
  let clipData
  let listData
  let index
  let myUserId
  if (cookies().get('userId')) {
    myUserId = cookies().get('userId').value
  }
  let myListsData

  /* listIdがあるときとないときで場合分け */
  if (listId) {
    listData = await fetchPlaylistData({ listId })
    clipData = (await fetchClipData({ clipId })).clip
    index = listData.playlist_clips.findIndex(
      (clip) => String(clip.id) === clipId,
    )
  } else {
    listData = await fetchWeeklyClipsData()
    clipData = (await fetchClipData({ clipId })).clip
  }
  myListsData = await fetchPlaylists({ userId: myUserId })
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
