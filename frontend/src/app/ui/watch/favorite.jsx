'use client'

import { favorite, unfavorite } from '@/app/lib/action'
import styles from '@/app/ui/watch/watch.module.css'
import { useState } from 'react'

export default function Favorite({ listData, myUserId, listId }) {
  const [favoritesCount, setFavoritesCount] = useState(
    listData.playlist.favorite_count,
  )
  const [favorited, setFavorited] = useState(
    listData.playlist.is_favorited_by_current_user,
  )

  async function applyFavorite(diff, myUserId, listId) {
    setFavoritesCount(favoritesCount + diff)
    setFavorited(!favorited)
    let isOk
    if (diff == +1) {
      isOk = await favorite({ userId: myUserId, listId })
    } else if (diff == -1) {
      isOk = await unfavorite({ userId: myUserId, listId })
    }
    if (!isOk) {
      setFavoritesCount(favoritesCount)
      setFavorited(favorited)
    }
  }

  if (favorited) {
    return (
      <div className={styles.favoriteArea}>
        <div
          className={styles.favorited}
          onClick={() => applyFavorite(-1, myUserId, listId)}
        >
          <div className={styles.heartBackground}>
            <div className={styles.heart}>
              <i className="fas fa-heart"></i>
            </div>
          </div>
          {/* <div className={styles.count}>{favoritesCount}</div> */}
        </div>
        <div className="clear-right"></div>
      </div>
    )
  } else {
    return (
      <div className={styles.favoriteArea}>
        <div
          className={styles.unfavorited}
          onClick={() => applyFavorite(+1, myUserId, listId)}
        >
          <div className={styles.heartBackground}>
            <div className={styles.heart}>
              <i className="far fa-heart"></i>
            </div>
          </div>
          {/* <div className={styles.count}>{favoritesCount}</div> */}
        </div>
        <div className="clear-right"></div>
      </div>
    )
  }
}
