'use client'

export default function Play({ twitchId, autoplay }) {
  const baseUrl = 'https://clips.twitch.tv/embed?clip='
  return (
    <>
      <iframe
        id="twitchIframe"
        title="title"
        src={
          baseUrl + twitchId + '&parent=localhost&autoplay=' + autoplay.current
        }
        allowFullScreen
        width="100%"
        height="100%"
      ></iframe>
    </>
  )
}
