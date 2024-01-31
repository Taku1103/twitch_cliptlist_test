import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="header-wrapper">
      <header>
        <div className="header-left">
          <div className="header-element">
            <Link href="/">
              <Image src="/logo2.png" alt="" width="50" height="50" />
            </Link>
          </div>
        </div>
        <div className="search-box">
          <input type="text" placeholder="検索ワード" />
          <button type="submit">
            <i className="fas fa-search fa-fw"></i>
          </button>
        </div>
        <div className="header-right">
          <div className="header-element">
            <Link href="/users/2/playlists">マイプレイリスト</Link>
          </div>
          <div className="header-element">
            <Link href="#">ログアウト</Link>
          </div>
        </div>
      </header>
    </div>
  )
}
