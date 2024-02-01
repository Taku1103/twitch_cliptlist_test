import styles from '@/app/ui/playlists/playlist/playlist.module.css'

export default function XShareButton({ userId, listId, listName }) {
  return (
    <a
      href={`https://twitter.com/share?url=http://localhost:3000/users/${userId}/playlists/${listId}&ref_src=twsrc%5Etfw&text=「${listName}」を共有`}
      className={styles.xShareButton}
      data-text="プレイリストを共有する"
      data-lang="ja"
      data-show-count="false"
    >
      Xで共有
    </a>
  )
}
