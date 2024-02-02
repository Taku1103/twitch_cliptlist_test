export default function Favorite_list({ favoritelists }) {
  // propsを分割代入で受け取る
  return (
    <div className="side-list">
      <ul>
        {favoritelists.user_favorite_playlists.map((listData, index) => (
          <li key={index} className="list-item">
            {listData.name} {/* 各お気に入りリストのnameを表示 */}
          </li>
        ))}
      </ul>
    </div>
  )
}
