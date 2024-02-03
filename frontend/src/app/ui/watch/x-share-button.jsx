import styles from '@/app/ui/watch/watch.module.css'

export default function XShareButton({ clipData }) {
  return (
    <button
      onClick={() =>
        (location.href = `https://twitter.com/share?url=http://localhost:3000/watch?clip=${clipData.id}&ref_src=twsrc%5Etfw&text=「${clipData.title}」を共有`)
      }
      className={styles.xShareButton}
      data-text="プレイリストを共有する"
      data-lang="ja"
      data-show-count="false"
    >
      <span className={styles.icon}>
        <i className="fas fa-share-alt"></i>
      </span>
      <span className={styles.char}>Xで共有</span>
    </button>
  )
}
