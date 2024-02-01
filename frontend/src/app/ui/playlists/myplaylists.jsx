'use client'
import PlaylistItem from '@/app/ui/playlists/playlistitem'
import styles from '@/app/ui/playlists/playlists.module.css'

export default function Myplaylists({ userId, listsData }) {
  const chunkedArray = []
  const chunkSize = 3
  const displayRowMax = 3

  for (let i = 0; i < listsData.user_playlists.length; i += chunkSize) {
    chunkedArray.push(listsData.user_playlists.slice(i, i + chunkSize))
  }

  return (
    <div className={styles.playlists}>
      <div className={styles.spaceLeft}></div>
      <div className={styles.column}>
        {chunkedArray.map((column, index) => (
          <div key={index}>
            {column.map((listData) => (
              <div className={styles.playlist} key={listData.id}>
                <PlaylistItem listData={listData} />
              </div>
            ))}
            <div className="clear-left"></div>
          </div>
        ))}
      </div>
      <div className={styles.spaceRight}></div>
    </div>
  )
}
