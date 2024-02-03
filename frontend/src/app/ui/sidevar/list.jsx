export default function List({ playlists }) {
  return (
    <div className="side-list">
      <ul>
        {playlists.user_playlists.length > 0 ? (
          playlists.user_playlists.map((listData, index) => (
            <li key={index} className="list-item">
              {listData.name}
            </li>
          ))
        ) : (
          <li className="list-item">プレイリストがありません</li>
        )}
      </ul>
    </div>
  )
}
