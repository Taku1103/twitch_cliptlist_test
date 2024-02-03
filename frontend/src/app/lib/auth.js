'use server'

import { cookies } from 'next/headers'

export async function createUser() {
  try {
    const response = await fetch(`http://api:3000/api/users`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${cookies().get('accessToken').value}`,
        'Content-type': 'application/json',
      },
    })
    const data = await response.json()
    console.log(`ログインユーザーのid: ${data.id}`)
    cookies().set('userId', data.id, {
      maxAge: 60 * 60 * 24 * 7, // One week
    })

    if (response.status == 200) {
      console.log('ログインに成功しました')
    } else if (response.status == 201) {
      console.log('user作成とログインに成功しました')
    }
  } catch (error) {
    console.log('user作成に失敗しました')
  }
}
