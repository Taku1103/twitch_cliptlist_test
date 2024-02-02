'use server'

import { cookies } from 'next/headers'

export async function createUser() {
  console.log(cookies().get('accessToken').value)
  console.log(process.env.CLIENT_ID)
  try {
    const response = await fetch(`http://api:3000/api/users`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${cookies().get('accessToken').value}`,
        'Content-type': 'application/json',
      },
    })
    const data = await response.json()
    console.log(data.id)
    cookies().set('userId', data.id, {
      maxAge: 60 * 60 * 24 * 7, // One week
    })

    console.log('user作成に成功しました')
  } catch (error) {
    console.log('user作成に失敗しました')
  }
}
