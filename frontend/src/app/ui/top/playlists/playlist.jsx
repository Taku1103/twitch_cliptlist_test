import styles from '@/app/ui/top/playlists/topPlaylists.module.css'
import Link from 'next/link'

export default function Playlist({ listData }) {
  function displayDate(date) {
    return <>{`${date.slice(0, 4)}/${date.slice(5, 7)}/${date.slice(8, 10)}`}</>
  }

  return (
    <>
      <Link href={`watch?clip=${listData.first_clip_id}&list=${listData.id}`}>
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
            <i className="fas fa-heart"></i>
            <span className={styles.count}>{listData.favorite_count} </span>
          </div>
          <p className={styles.createdAt}>
            作成日:{displayDate(listData.created_at)}
          </p>
          <p className={styles.updatedAt}>
            更新日:{displayDate(listData.updated_at)}
          </p>
        </div>
        <div className="clear-left"></div>
      </Link>
    </>
  )
}
