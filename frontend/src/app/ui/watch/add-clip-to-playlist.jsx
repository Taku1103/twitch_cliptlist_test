'use client'

import { addClipToPlaylist, createPlaylistAndAddClip } from '@/app/lib/action'
import styles from '@/app/ui/watch/watch.module.css'

export default function AddClipToPlaylist({ clipId, myListsData, myUserId }) {
  async function add({ clipId, myListId }) {
    const data = await addClipToPlaylist({
      clipId,
      listId: myListId,
    })
  }

  async function create({ clipId, myUserId }) {
    const listName = prompt('プレイリスト名を入力してください', '')
    const data = await createPlaylistAndAddClip({
      clipId,
      userId: myUserId,
      listName,
    })
  }

  return (
    <>
      <div>プレイリストに追加</div>
      <div
        onClick={() => create({ clipId, myUserId })}
        className={styles.addPlaylistCandidate}
      >
        プレイリストを作成して追加
      </div>
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
