import styles from '@/app/watch/watch.module.css'
import { useRouter } from 'next/navigation'

export default function MovePreviousButton({ listData, index, autoplay }) {
  const router = useRouter()
  function movePreviousClip(listData, index) {
    const clipId =
      listData.playlist[
        (index + listData.playlist.length - 1) % listData.playlist.length
      ].clip.tw_id
    router.push(`?clip=${clipId}&list=${listData.id}`)
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
