'use client'

import { editPlaylistName } from '@/app/lib/action'
import styles from '@/app/ui/playlists/playlist/playlist.module.css'
import { useState } from 'react'

export default function PlaylistName({ listData, userId, listId }) {
  const previousListName = listData.playlist.name
  const [listName, setListName] = useState(listData.playlist.name)
  async function editAction({ listData, userId, listId }) {
    const newPlaylistName = prompt('新しいプレイリスト名', '')
    setListName(newPlaylistName)
    const isOk = await editPlaylistName({
      listData,
      userId,
      listId,
      newPlaylistName,
    })
    if (!isOk) {
      setListName(previousListName)
    }
  }

  return (
    <div className={styles.playlistNameContainer}>
      <h1 className={`${styles.textColor} ${styles.playlistName}`}>
        {listName}
      </h1>
      <span
        className={styles.editPlaylistName}
        onClick={() => editAction({ listData, userId, listId })}
      >
        <i className="far fa-edit"></i>
      </span>
    </div>
  )
}
