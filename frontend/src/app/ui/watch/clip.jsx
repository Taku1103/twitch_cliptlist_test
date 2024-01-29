'use client'

import MoveNextButton from '@/app/ui/watch/move-next-button'
import MovePreviousButton from '@/app/ui/watch/move-previous-button'
import Play from '@/app/ui/watch/play'
import PlaylistInClip from '@/app/ui/watch/playlist-in-clip'
import XShareButton from '@/app/ui/watch/x-share-button'
import styles from '@/app/watch/styles.module.css'
import { useRef } from 'react'

export default function Clip({ clipId, clipData, listData, index }) {
  const autoplay = useRef('false')
  return (
    <>
      <div className={styles.clip}>
        <div className={styles.mainArea}>
          <div className={styles.play}>
            <Play clipId={clipId} autoplay={autoplay} />
          </div>
          <div className={styles.operation}>
            <MovePreviousButton
              listData={listData}
              index={index}
              autoplay={autoplay}
            />
            <MoveNextButton
              listData={listData}
              index={index}
              autoplay={autoplay}
            />
          </div>
          <div className={styles.detail}>
            <XShareButton clipData={clipData} />
          </div>
          <div className={styles.explanation}>
            <div className={styles.title}>{clipData.title}</div>
            <div className={styles.viewCount}>
              視聴回数{clipData.view_count}回
            </div>
            <div className="clear-left"></div>
          </div>
          <div className={styles.broadcaster}>
            <div className={styles.name}>{clipData.broadcaster_name}</div>
          </div>
        </div>
        <div className={styles.playlistArea}>
          {listData && (
            <PlaylistInClip
              listData={listData}
              autoplay={autoplay}
              clipId={clipId}
            />
          )}
        </div>
      </div>
    </>
  )
}
