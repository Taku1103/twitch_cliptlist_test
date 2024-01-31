import styles from '@/app/ui/watch/watch.module.css'
import { useRouter } from 'next/navigation'

export default function MoveNextButton({ listData, index, autoplay }) {
  const router = useRouter()
  function moveNextClip(listData, index) {
    const clipId =
      listData.playlist[(index + 1) % listData.playlist.length].clip.tw_id
    router.push(`?clip=${clipId}&list=${listData.id}`)
    autoplay.current = true
  }

  return (
    <button
      className={styles.moveButton}
      onClick={() => moveNextClip(listData, index)}
    >
      次へ
    </button>
  )
}
