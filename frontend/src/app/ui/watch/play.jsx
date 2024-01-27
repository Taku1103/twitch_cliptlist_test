'use client'

export default function Play({ clipId: clipId }) {
  const baseUrl = 'https://clips.twitch.tv/embed?clip='
  return (
    <>
      <iframe
        id="twitchIframe"
        title="title"
        src={baseUrl + clipId + '&parent=localhost&autoplay=' + 'false'}
        allowfullscreen=""
        width="100%"
        height="100%"
        border="none"
      ></iframe>
    </>
  )
}
