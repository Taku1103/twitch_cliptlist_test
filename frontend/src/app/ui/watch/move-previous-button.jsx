import styles from '@/app/ui/watch/watch.module.css'
import { useRouter } from 'next/navigation'

export default function MovePreviousButton({ listData, index, autoplay }) {
  const router = useRouter()
  function movePreviousClip(listData, index) {
    const clipId =
      listData.playlist_clips[
        (index + listData.playlist_clips.length - 1) %
          listData.playlist_clips.length
      ].id
    router.push(`?clip=${clipId}&list=${listData.playlist.id}`)
    autoplay.current = true
  }

  return (
    <button
      className={styles.moveButton}
      onClick={() => movePreviousClip(listData, index)}
    >
      前へ
    </button>
  )
}
