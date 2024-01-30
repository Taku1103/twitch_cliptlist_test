'use client'

import styles from '@/app/top.module.css'
import ChangeNextButton from '@/app/ui/playlists/top/change-next-button'
import ChangePreviousButton from '@/app/ui/playlists/top/change-previous-button'
import Playlist from '@/app/ui/playlists/top/playlist'
import { useRef, useState } from 'react'

export default function Playlists({ listsData }) {
  const chunkedArray = []
  const chunkSize = 3
  const displayRowMax = 3
  const rowMax = Math.floor(listsData.length / displayRowMax)

  for (let i = 0; i < listsData.length; i += chunkSize) {
    chunkedArray.push(listsData.slice(i, i + chunkSize))
  }

  // console.log(chunkedArray)

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
            <div key={listData.id}>
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
