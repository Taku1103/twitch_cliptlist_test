'use client'

import { addClipToPlaylist } from '@/app/lib/action'
import styles from '@/app/ui/watch/watch.module.css'

export default function AddClipToPlaylist({ clipId, myListsData }) {
  async function add({ clipId, myListId }) {
    const data = await addClipToPlaylist({ clipId, listId: myListId })
  }

  return (
    <>
      <div>プレイリストに追加</div>
      {myListsData.user_playlists.map((playlist, index) => (
        <div
          key={index}
          onClick={() => add({ clipId: clipId, myListId: playlist.id })}
          className={styles.addPlaylistCandidate}
        >
          {playlist.name}
        </div>
      ))}
    </>
  )
}
