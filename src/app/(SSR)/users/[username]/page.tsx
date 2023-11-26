import { UnsplashUser } from '@/app/models/unsplash-user'
import Link from 'next/link';
import React from 'react'

interface PageProps {
  params: { username: string };
}

export async function generateMetadata({ params: {username} }: PageProps) {
  return {
    title: username + " - NextJs 13.4 Image Gallery",
  }
}
async function Page({params: {username}}: PageProps) {
  const response = await fetch(
    `https://api.unsplash.com/users/${username}?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
  );
  const user: UnsplashUser = await response.json();
  return (
    <div>
      <h1>{user.username}</h1>
      <p>First Name: {user.first_name}</p>
      <p>Last Name: {user.last_name}</p>
      <Link target='_blank' href={"https://unsplash.com/" + user.username}>Unsplash profile</Link>
    </div>
  )
}

export default Page
