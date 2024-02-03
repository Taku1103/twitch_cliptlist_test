import styles from '@/app/ui/top/clips/topClips.module.css'
import Link from 'next/link'

export default function Clip({ clipData, listId }) {
  let game_thumbnail_url = clipData.game_thumbnail_url
    ? clipData.game_thumbnail_url
        .replace('{width}', '240')
        .replace('{height}', '480')
    : 'https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-{width}x{height}.jpg' // 存在しないときは、不明のbox_artを入れてやる
  return (
    <Link href={`/watch?clip=${clipData.id}&list=${listId}`}>
      <div className={styles.clipBox}>
        <div className={styles.top}>
          <div className={styles.img}>
            <img src={clipData.thumbnail_url} height="170" />
          </div>
        </div>
        <div className={styles.bottomWrapper}>
          <div className={styles.bottom}>
            <div className={styles.left}>
              <img className={styles.img} src={game_thumbnail_url} />
            </div>
            <div className={styles.right}>
              <div className={styles.info}>
                <p className={styles.title}>{clipData.title}</p>
                <p className={styles.broadcaster_and_view_count}>
                  {clipData.broadcaster_name} 【視聴回数:{clipData.view_count}
                  回】
                </p>
                <p className={styles.game_title}>{clipData.game_title}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="clear-left"></div>
      </div>
    </Link>
  )
}
