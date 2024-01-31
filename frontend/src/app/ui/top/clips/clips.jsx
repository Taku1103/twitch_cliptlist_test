import Clip from '@/app/ui/top/clips/clip'
import styles from '@/app/ui/top/clips/topClips.module.css'

export default function Clips({ clipsData, listId }) {
  const chunkedArray = []
  const chunkSize = 5
  const displayColumnMax = Math.floor(clipsData.length / chunkSize)

  for (let i = 0; i < clipsData.length; i += chunkSize) {
    chunkedArray.push(clipsData.slice(i, i + chunkSize))
  }

  return (
    <>
      {chunkedArray.map((column) => (
        <div className={styles.column} key={column.indexOf(chunkedArray)}>
          {column.map((clipData) => (
            <div className={styles.clip} key={clipData.id}>
              <Clip clipData={clipData} listId={listId} />
            </div>
          ))}
          <div className="clear-left"></div>
        </div>
      ))}
    </>
  )
}
