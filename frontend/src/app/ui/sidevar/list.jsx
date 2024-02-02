export default function List({ user_playlists = [] }) {
  return (
    <div className="side-list">
      <ul>
        {user_playlists.length > 0 ? (
          user_playlists.map((listData, index) => (
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
