'use client'

import { deleteClipFromPlaylist } from '@/app/lib/action'
import styles from '@/app/ui/playlists/playlist/playlist.module.css'

export default function DeleteClipFromPlaylist({
  clipId,
  listId,
  setItems,
  playlist,
  userId,
}) {
  async function remove({ clipId, listId, userId }) {
    console.log(clipId, listId, userId)
    const data = await deleteClipFromPlaylist({ clipId, listId, userId })
    if (data) {
      setItems(playlist.filter((n) => n !== clipId))
    }
  }

  return (
    <div
      className={styles.remove}
      onClick={() => remove({ clipId, listId, setItems, userId })}
    >
      <i className="fas fa-trash-alt"></i>
    </div>
  )
}
