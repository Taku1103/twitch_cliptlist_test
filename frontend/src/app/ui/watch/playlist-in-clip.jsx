'use client'

import Favorite from '@/app/ui/watch/favorite'
import styles from '@/app/ui/watch/watch.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function PlaylistInClip({
  listData,
  autoplay,
  clipId,
  myUserId,
}) {
  const router = useRouter()

  function moveClip(clipId, listId) {
    router.push(`?clip=${clipId}&list=${listId}`)
    autoplay.current = true
  }

  return (
    <div className={styles.playlist}>
      <div className={styles.playlistHeader}>
        <div className={styles.favoriteWrapper}>
          <Favorite
            listData={listData}
            myUserId={myUserId}
            listId={listData.playlist.id}
          />
        </div>
        <h2 className={styles.h2}>
          <Link
            href={`users/${listData.playlist.user_id}/playlists/${listData.playlist.id}`}
          >
            {listData.playlist.name}
          </Link>
        </h2>
      </div>
      <div className="clear-right"></div>
      {listData.playlist_clips.map((clip) => (
        <div
          className={`${styles.eachClip} ${clipId == String(clip.id) && styles.active}`}
          onClick={() => moveClip(clip.id, listData.playlist.id)}
          key={clip.id}
        >
          <div className={styles.left}>
            <div className={styles.img}>
              <img src={clip.thumbnail_url} height="60" />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.info}>
              <p className={styles.title}>{clip.title}</p>
              <p className={styles.broadcaster}>{clip.broadcaster_name}</p>
            </div>
          </div>
          <div className="clear-left"></div>
        </div>
      ))}
    </div>
  )
}
