import styles from '@/app/ui/playlists/playlists.module.css'
import Link from 'next/link'

export default function PlaylistItem({ listData }) {
  function displayDate(date) {
    return (
      <>{`${date.slice(0, 4)}年${date.slice(5, 7)}月${date.slice(8, 10)}日`}</>
    )
  }

  return (
    <>
      <Link href={`/users/${listData.user_id}/playlists/${listData.id}`}>
        <div className={styles.left}>
          <div className={styles.playlistImage}>
            <img
              src={`${listData.first_thumbnail_url}`}
              className={styles.img}
            />
            <div className={styles.shadow1}></div>
            <div className={styles.shadow2}></div>
            <div className={styles.clipCount}>
              <span>{listData.clip_count}本のクリップ</span>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <p className={styles.listId}>{listData.name}</p>
          <div className={styles.favoritesCount}>
            <i className="fas fa-heart heart "></i>
            <span className={styles.count}>{listData.favorite_count}</span>
          </div>
          <div className={styles.createday_containar}>
            <span className={styles.createday}>作成日:</span>
            <p className={styles.createdAt}>
              {displayDate(listData.created_at)}
            </p>
          </div>
        </div>
        <div className="clear-left"></div>
      </Link>
    </>
  )
}
