'use client'

import ChangeNextButton from '@/app/ui/top/playlists/change-next-button'
import ChangePreviousButton from '@/app/ui/top/playlists/change-previous-button'
import Playlist from '@/app/ui/top/playlists/playlist'
import styles from '@/app/ui/top/playlists/topPlaylists.module.css'
import { useRef, useState } from 'react'

export default function Playlists({ listsData }) {
  const chunkedArray = []
  const chunkSize = 3
  const displayRowMax = 3
  const rowMax = Math.floor(listsData.playlists.length / displayRowMax)

  for (let i = 0; i < listsData.playlists.length; i += chunkSize) {
    chunkedArray.push(listsData.playlists.slice(i, i + chunkSize))
  }

  const baseRowNum = useRef(0)
  const [rows, setRows] = useState(
    chunkedArray.slice(baseRowNum.current, baseRowNum.current + displayRowMax),
  )

  return (
    <div className={styles.playlists}>
      <div className={styles.operation}>
        <ChangePreviousButton
          chunkedArray={chunkedArray}
          baseRowNum={baseRowNum}
          displayRowMax={displayRowMax}
          rowMax={rowMax}
          setRows={setRows}
        />
      </div>

      {rows.map((row) => (
        <div className={styles.row} key={rows.indexOf(row)}>
          {row.map((listData) => (
            <div className={styles.playlist} key={listData.id}>
              <Playlist listData={listData} />
            </div>
          ))}
        </div>
      ))}

      <div className={styles.operation}>
        <ChangeNextButton
          chunkedArray={chunkedArray}
          baseRowNum={baseRowNum}
          displayRowMax={displayRowMax}
          rowMax={rowMax}
          setRows={setRows}
        />
      </div>

      <div className="clear-left"></div>
    </div>
  )
}
