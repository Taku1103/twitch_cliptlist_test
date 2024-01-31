'use client'

import Clips from '@/app/ui/top/clips/clips'
import Playlists from '@/app/ui/top/playlists/playlists'
import SortType from '@/app/ui/top/sortType'
import styles from '@/app/ui/top/top.module.css'
import Link from 'next/link'
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
      <h2 className={styles.h2}>Playlist一覧</h2>
      <Playlists listsData={listsData} />

      <h2 className={styles.h2}>clip一覧</h2>
      <SortType
        setClipsData={setClipsData}
        dailyClipsData={dailyClipsData}
        weeklyClipsData={weeklyClipsData}
        monthlyClipsData={monthlyClipsData}
        sortType={sortType}
      />
      <div className="clear-right"></div>
      <Clips clipsData={clipsData} />

      <h2>確認用リンク(後で削除)</h2>
      <ul>
        <li>
          <Link href="/users/sakana/playlists/MyPlaylist">MyPlaylist</Link>
        </li>
        <li>
          <Link href="/watch/?clip=ShinyUgliestFerretKreygasm-PdQRHzhylDkgxmRh">
            Example Clip
          </Link>
        </li>
        <li>
          <Link href="/watch/?clip=ShinyUgliestFerretKreygasm-PdQRHzhylDkgxmRh&list=MyPlaylist">
            Example Clip(listData付き)
          </Link>
        </li>
      </ul>
    </div>
  )
}
