export default function List() {
  // リストアイテムのデータ配列
  const items = ['配信者1', '配信者2', '配信者3']

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
