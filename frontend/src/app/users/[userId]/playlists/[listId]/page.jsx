import { fetchPlaylistData } from '@/app/lib/data'
import Playlist from '@/app/ui/playlists/playlist/playlist'
import PlaylistHeader from '@/app/ui/playlists/playlist/playlist-header'
import styles from '@/app/users/[userId]/playlists/[listId]/style.module.css'

export default async function Page({ params }) {
  const userId = params.userId
  const listId = params.listId

  const listData = await fetchPlaylistData({
    userId,
    listId,
  })

  return (
    <div className={styles.playlistWrapper}>
      <PlaylistHeader listData={listData} userId={userId} listId={listId} />
      <Playlist listData={listData} />
    </div>
  )
}
