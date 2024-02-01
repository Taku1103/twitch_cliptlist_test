'use client'

import { deleteClipFromPlaylist } from '@/app/lib/action'
import styles from '@/app/ui/playlists/playlist/playlist.module.css'

export default function DeleteClipFromPlaylist({
  clipId,
  listId,
  setItems,
  playlist,
}) {
  async function remove({ clipId, listId }) {
    console.log(clipId, listId)
    const data = await deleteClipFromPlaylist({ clipId, listId })
    if (data) {
      setItems(playlist.filter((n) => n !== clipId))
    }
  }

  return (
    <div
      className={styles.remove}
      onClick={() => remove({ clipId, listId, setItems })}
    >
      <i className="fas fa-trash-alt"></i>
    </div>
  )
}
