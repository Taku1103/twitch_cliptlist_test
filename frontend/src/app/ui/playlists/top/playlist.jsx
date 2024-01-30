import styles from '@/app/top.module.css'
import Link from 'next/link'

export default function Playlist({ listData }) {
  return (
    <>
      {/* <Link href={`watch?clip=${listData.playlist[0].clip.tw_id}&list=${listData.id}`}> */}
      <Link
        href={`watch?clip=${listData.playlist[0].clip.tw_id}&list=MyPlaylist`}
      >
        <div className={styles.left}>
          <img
            src={`${listData.playlist[0].clip.thumbnail_url}`}
            height="120"
          />
        </div>
        <div className={styles.right}>
          <p className={styles.listId}>{listData.id}</p>
          <div className={styles.favoritesCount}>
            <i className="fas fa-heart"></i>
            <span className={styles.count}>{listData.favoritesCount}</span>
          </div>
          <p className={styles.createdAt}>{listData.createdAt}</p>
        </div>
        <div className="clear-left"></div>
      </Link>
    </>
  )
}
