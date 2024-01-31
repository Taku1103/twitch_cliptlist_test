import styles from '@/app/ui/top/playlists/topPlaylists.module.css'
import Link from 'next/link'

export default function Playlist({ listData }) {
  return (
    <>
      <Link
        href={`watch?clip=${listData.playlist_clips[0].id}&list=${listData.playlist.id}`}
      >
        <div className={styles.left}>
          <div className={styles.playlistImage}>
            <img
              src={`${listData.playlist_clips[0].thumbnail_url}`}
              className={styles.img}
            />
            <div className={styles.shadow1}></div>
            <div className={styles.shadow2}></div>
            <div className={styles.clipCount}>
              <span>1本のクリップ</span>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <p className={styles.listId}>{listData.playlist.id}</p>
          <div className={styles.favoritesCount}>
            <i className="fas fa-heart"></i>
            <span className={styles.count}>
              {listData.playlist.favorite_count}
            </span>
          </div>
          <p className={styles.createdAt}>{listData.playlist.created_at}</p>
        </div>
        <div className="clear-left"></div>
      </Link>
    </>
  )
}
