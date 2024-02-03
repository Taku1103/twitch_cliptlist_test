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
      <h2 className={styles.h2}>人気のプレイリスト 一覧</h2>
      <Playlists listsData={listsData} />

      <h2 className={styles.h2}>人気のクリップ 一覧</h2>
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

      <h2>確認用リンク(後で削除)</h2>
      <ul>
        <li>
          <Link href="/users/2/playlists/4">suuusanのプレイリスト1つ目</Link>
        </li>
        <li>
          <Link href="/watch/?clip=1">Example Clip</Link>
        </li>
        <li>
          <Link href="/watch/?clip=46&list=4">Example Clip(listData付き)</Link>
        </li>
      </ul>
    </div>
  )
}
