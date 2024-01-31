import styles from '@/app/ui/playlists/playlist/playlist.module.css'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import Link from 'next/link'

const Draggable = (props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: props.id,
    })
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  console.log(props.clip)

  return (
    <>
      <Link href={`/watch?clip=${props.clip.id}&list=${props.listId}`}>
        <div
          className={styles.clip}
          ref={setNodeRef}
          style={style}
          {...listeners}
          {...attributes}
        >
          <div className={styles.left}>
            <i class="fas fa-bars"></i>
          </div>
          <div className={styles.middle}>
            <div className={styles.img}>
              <img src={props.clip.thumbnail_url} height="60" />
            </div>
          </div>
          <div className={styles.right}>
            <p className={styles.title}>{props.clip.title}</p>
            <p className={styles.broadcaster}>{props.clip.broadcaster_name}</p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default Draggable
