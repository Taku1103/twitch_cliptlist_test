'use client'

import { deletePlaylist } from '@/app/lib/action'
import styles from '@/app/ui/playlists/playlist/playlist.module.css'

export default function DeletePlaylist({ userId, listId }) {
  async function deleteAction({ userId, listId }) {
    await deletePlaylist({ userId, listId })
  }

  return (
    <button
      className={`${styles.deleteAction} ${styles.button}`}
      onClick={() => deleteAction({ userId, listId })}
    >
      <span className={styles.icon}>
        <i className="fa-regular fa-trash-can"></i>
      </span>
      <span className={styles.char}>プレイリスト削除</span>
    </button>
  )
}
