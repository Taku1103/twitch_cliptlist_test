export default function List() {
  // リストアイテムのデータ配列
  const items = [
    'プレイリスト1',
    'プレイリスト2',
    'プレイリスト3',
    'プレイリスト4',
    'プレイリスト5',
    'プレイリスト6',
    'プレイリスト7',
  ]

  return (
    <div className="side-list">
      <ul>
        {items.map((item) => (
          <li className="list-item">{item}</li>
        ))}
      </ul>
    </div>
  )
}
