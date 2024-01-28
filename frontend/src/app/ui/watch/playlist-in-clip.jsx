'use client'

import { useRouter } from 'next/navigation'

export default function PlaylistInClip({ listData }) {
  console.log(listData)
  const router = useRouter()

  function moveClip(clipId, listId) {
    // console.log(clipId, listId)
    router.push(`?clip=${clipId}&list=${listId}`)
  }

  return (
    <>
      <h2>{listData.id}</h2>
      {listData.playlist.map((clip) => (
        <>
          <div
            className={clip.clip.clip_id}
            onClick={() => moveClip(clip.clip.tw_id, listData.id)}
          >
            <img src={clip.clip.thumbnail_url} />
            <p>{clip.clip.title}</p>
            <p>{clip.clip.broadcaster_name}</p>
          </div>
        </>
      ))}
    </>
  )
}
