'use client'

import styles from '@/app/ui/watch/watch.module.css'
import { useRouter } from 'next/navigation'

export default function PlaylistInClip({ listData, autoplay, clipId }) {
  const router = useRouter()

  function moveClip(clipId, listId) {
    router.push(`?clip=${clipId}&list=${listId}`)
    autoplay.current = true
  }

  return (
    <div className={styles.playlist}>
      <h2 className={styles.h2}>{listData.id}</h2>
      {listData.playlist.map((clip) => (
        <div
          className={`${styles.eachClip} ${clipId == String(clip.clip.id) && styles.active}`}
          onClick={() => moveClip(clip.clip.id, listData.id)}
          key={clip.clip.id}
        >
          <div className={styles.left}>
            <div className={styles.img}>
              <img src={clip.clip.thumbnail_url} height="60" />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.info}>
              <p className={styles.title}>{clip.clip.title}</p>
              <p className={styles.broadcaster}>{clip.clip.broadcaster_name}</p>
            </div>
          </div>
          <div className="clear-left"></div>
        </div>
      ))}
    </div>
  )
}
