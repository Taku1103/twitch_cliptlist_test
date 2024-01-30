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
          <div className={styles.playlistImage}>
            <img
              src={`${listData.playlist[0].clip.thumbnail_url}`}
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
