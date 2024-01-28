export default function PlaylistInClip({ listData }) {
  console.log(listData)
  return (
    <>
      <h2>{listData.id}</h2>
      {listData.playlist.map((clip) => (
        <>
          <img src={clip.clip.thumbnail_url} />
          <p>{clip.clip.title}</p>
          <p>{clip.clip.broadcaster_name}</p>
        </>
      ))}
    </>
  )
}
