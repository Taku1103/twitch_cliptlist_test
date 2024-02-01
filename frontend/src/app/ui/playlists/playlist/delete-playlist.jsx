'use client'

import { deletePlaylist } from '@/app/lib/action'
import styles from '@/app/ui/playlists/playlist/playlist.module.css'

export default function DeletePlaylist({ userId, listId }) {
  async function deleteAction({ userId, listId }) {
    await deletePlaylist({ userId, listId })
  }

  return (
    <div
      className={styles.deleteAction}
      onClick={() => deleteAction({ userId, listId })}
    >
      プレイリストを削除
    </div>
  )
}
