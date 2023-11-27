import { UnsplashUser } from '@/app/models/unsplash-user'
import { Alert } from '@/components/bootstrap';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React, { cache } from 'react'

interface PageProps {
  params: { username: string };
}

async function getUser(username: string): Promise<UnsplashUser>{
  const response = await fetch(
    `https://api.unsplash.com/users/${username}?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
  );

  if(response.status === 404) notFound();

  return await response.json();
}

// Use cache if I not using the Native fetch, ex: "Axios"
const getUserCached = cache(getUser);

export async function generateMetadata({ params: {username} }: PageProps): Promise<Metadata> {
  const user =  await getUserCached(username)

  return {
    //If there is no first name this take of the " ".
    title: ([user.first_name, user.last_name].filter(Boolean).join(" ") || user.username) + " - NextJS 13.4 Image Gallery",
  }
}

async function Page({params: {username}}: PageProps) {
  
  const user =  await getUserCached(username)
  return (
    <div>
      <Alert>
        This profile page uses  <strong>caches data at build time  <code>const getUserCached = cache(getUser) </code></strong> 
        <p>Use cache if not using the Native fetch, ex: Axios</p>
      </Alert>
      <h1>{user.username}</h1>
      <p>First Name: {user.first_name}</p>
      <p>Last Name: {user.last_name}</p>
      <Link target='_blank' href={"https://unsplash.com/" + user.username}>Unsplash profile</Link>
    </div>
  )
}

export default Page
