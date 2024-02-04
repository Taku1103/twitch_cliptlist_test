'use client'
import styles from '@/app/ui/playlists/playlist/playlist.module.css'

export default function XShareButton({ userId, listId, listName }) {
  const URL = `http://localhost:3000/users/${userId}/playlists/${listId}`
  const QUOTE = `「${listName}」を共有`

  return (
    <button
      onClick={() =>
        (location.href = `https://twitter.com/share?url=http://localhost:3000/users/${userId}/playlists/${listId}&ref_src=twsrc%5Etfw&text=「${listName}」を共有`)
      }
      className={`${styles.xShareButton} ${styles.button}`}
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
