import React from "react";
import { UnsplashImage } from "../../models/unsplash";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Alert } from "@/components/bootstrap";

export const metadata: Metadata = {
  title: 'Incremental Static Regeneration - NextJs 13.4 Image Gallery',
};

/**
 * Revalidate the whole page after 15 seconds
 * export const revalidate = 15;
 */

const Page = async () => {
  const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`, {
    // cache: "no-cache" / "no-store"
    next: { revalidate: 15}  // revalidate the request after 15 seconds..
  });
  const image: UnsplashImage = await response.json();

  const width = Math.min(500, image.width);
  const height = (width / image.width) * image.height;

  return (
    <div className="d-flex flex-column align-items-center">
      <Alert>
        This page uses <strong> incremental static regeneration</strong>. 
        a new image is fetched every 15 seconds (after refreshing the page) and 
        then served from the cache for that duration.
      </Alert>
      <Image
        src={image?.urls.raw}
        alt={image.description || 'image'}
        width={width}
        height={height}
        className="rounded shadow mw-100 h-100"
        priority
      />
      <Link href={`/users/${image?.user.username}`}>by  {image?.user.username}</Link>
    </div>
  )
}

export default Page
