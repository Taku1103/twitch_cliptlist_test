'use client'
import { createUser } from '@/app/lib/auth'
import Cookies from 'js-cookie'
import { redirect } from 'next/navigation'

export default function Page() {
  const url = window.location.hash
  console.log(url)
  const accessToken = url.split('=')[1].split('&')[0]
  Cookies.set('accessToken', accessToken, {
    expires: 60 * 60 * 24 * 7, // One week
  })
  createUser()
  redirect('/')
}
