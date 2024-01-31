export default function Favorite_list() {
  const items = [
    'お気に入り1',
    'お気に入り2',
    'お気に入り3',
    'お気に入り4',
    'お気に入り5',
    'お気に入り6',
    'お気に入り7',
  ]

  return (
    <div className="side-list">
      <ul>
        {items.map((item, index) => (
          <li key={index} className="list-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
