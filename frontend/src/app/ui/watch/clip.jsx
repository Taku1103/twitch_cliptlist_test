'use client'

import AddClipToPlaylist from '@/app/ui/watch/add-clip-to-playlist'
import MoveNextButton from '@/app/ui/watch/move-next-button'
import MovePreviousButton from '@/app/ui/watch/move-previous-button'
import Play from '@/app/ui/watch/play'
import PlaylistInClip from '@/app/ui/watch/playlist-in-clip'
import styles from '@/app/ui/watch/watch.module.css'
import XShareButton from '@/app/ui/watch/x-share-button'
import Cookies from 'js-cookie'
import { useRef } from 'react'

export default function Clip({
  clipId,
  clipData,
  listData,
  index,
  myListsData,
}) {
  const autoplay = useRef('false')
  const twitchId = clipData.id_on_twitch
  const myUserId = Cookies.get('userId')
  return (
    <>
      <div className={styles.clip}>
        <div className={styles.mainArea}>
          <div className={styles.play}>
            <Play twitchId={twitchId} autoplay={autoplay} />
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
            <AddClipToPlaylist
              clipId={clipId}
              myListsData={myListsData}
              myUserId={myUserId}
            />
            <XShareButton clipData={clipData} />
          </div>
          <div className={styles.explanation}>
            <div className={styles.title}>{clipData.title}</div>
            <div className={styles.otherInfo}>
              <span className={styles.gameTitle}>{clipData.game_title}</span>
              <span className={styles.viewCount}>
                ・視聴回数{clipData.view_count}回
              </span>
            </div>
            <div className="clear-left"></div>
          </div>
          <div className={styles.broadcaster}>
            <div className={styles.broadcaster_image_wrapper}>
              <div className={styles.broadcaster_image_background}>
                <img
                  className={styles.broadcaster_image}
                  src={clipData.broadcaster_profile_image_url}
                  alt=""
                />
              </div>
            </div>
            <div className={styles.name}>{clipData.broadcaster_name}</div>
          </div>
        </div>
        <div className={styles.playlistArea}>
          {listData && (
            <PlaylistInClip
              listData={listData}
              autoplay={autoplay}
              clipId={clipId}
              myUserId={myUserId}
            />
          )}
          <div className="clear-right"></div>
        </div>
      </div>
    </>
  )
}
