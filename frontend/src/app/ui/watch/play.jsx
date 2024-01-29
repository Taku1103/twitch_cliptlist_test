'use client'

export default function Play({ clipId, autoplay }) {
  const baseUrl = 'https://clips.twitch.tv/embed?clip='
  return (
    <>
      <iframe
        id="twitchIframe"
        title="title"
        src={
          baseUrl + clipId + '&parent=localhost&autoplay=' + autoplay.current
        }
        allowFullScreen
        width="100%"
        height="100%"
        Style="border: none;"
      ></iframe>
    </>
  )
}
