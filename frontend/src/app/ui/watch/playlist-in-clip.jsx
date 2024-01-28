export default function PlaylistInClip({ listData }) {
  console.log(listData)
  return (
    <>
      <h2>プレイリスト</h2>
      {listData.map((clip) => (
        <>
          <img src={clip.clip.thumbnail_url} />
          <p>{clip.clip.title}</p>
          <p>{clip.clip.broadcaster_name}</p>
        </>
      ))}
    </>
  )
}
