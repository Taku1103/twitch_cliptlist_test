'use client'

import Cookies from 'js-cookie'

export default function Logout() {
  function deleteCookies() {
    Cookies.remove('userId')
    Cookies.remove('accessToken')
  }

  return (
    <div className="logout" onClick={() => deleteCookies()}>
      ログアウト
    </div>
  )
}
