'use client'

import Clips from '@/app/ui/top/clips/clips'
import Playlists from '@/app/ui/top/playlists/playlists'
import SortType from '@/app/ui/top/sortType'
import styles from '@/app/ui/top/top.module.css'
import { useRef, useState } from 'react'

export default function Top({
  listsData,
  dailyClipsData,
  weeklyClipsData,
  monthlyClipsData,
}) {
  const [clipsData, setClipsData] = useState(dailyClipsData)
  const sortType = useRef('daily')
  return (
    <div className={styles.top}>
      <div className={styles.playlists_area}>
        <h2 className={styles.h2}>人気のプレイリスト</h2>
        <Playlists listsData={listsData} />
      </div>
      <div className={styles.clip_area}>
        <h2 className={styles.h2}>人気のクリップ</h2>
        <SortType
          setClipsData={setClipsData}
          dailyClipsData={dailyClipsData}
          weeklyClipsData={weeklyClipsData}
          monthlyClipsData={monthlyClipsData}
          sortType={sortType}
        />
        <div className="clear-right"></div>
        <Clips
          clipsData={clipsData.playlist_clips}
          listId={clipsData.playlist.id}
        />
      </div>
    </div>
  )
}
