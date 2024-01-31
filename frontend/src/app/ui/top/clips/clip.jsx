import styles from '@/app/ui/top/clips/topClips.module.css'
import Link from 'next/link'

export default function Clip({ clipData }) {
  return (
    // <Link href={`/watch?clip=${clipData.clip.tw_id}`}>
    <Link
      href={`/watch?clip=InnocentFastRadicchioLitty-lngA37a3soWC1Bo4&list=MyPlaylist`}
    >
      <div className={styles.clipBox}>
        <div className={styles.top}>
          <div className={styles.img}>
            <img src={clipData.clip.thumbnail_url} height="180" />
          </div>
        </div>
        <div className={styles.bottomWrapper}>
          <div className={styles.bottom}>
            <div className={styles.left}>
              <img className={styles.img} src={clipData.clip.thumbnail_url} />
            </div>
            <div className={styles.right}>
              <div className={styles.info}>
                <p className={styles.title}>{clipData.clip.title}</p>
                <p className={styles.broadcaster}>
                  {clipData.clip.broadcaster_name}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="clear-left"></div>
      </div>
    </Link>
  )
}
