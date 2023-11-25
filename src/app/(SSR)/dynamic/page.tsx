import React from "react";
import { UnsplashImage } from "../../models/unsplash";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Alert } from "@/components/bootstrap";

export const metadata: Metadata = {
  title: 'Static Fetching - NextJs 13.4 Image Gallery',
};

//export const revalidate = 0;

const Page = async () => {
  const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`, {
    // cache: "no-cache" / "no-store"
    next: { revalidate: 0}
  });
  const image: UnsplashImage = await response.json();

  const width = Math.min(500, image.width);
  const height = (width / image.width) * image.height;

  return (
     <div className="d-flex flex-column align-items-center">
      <Alert>
        This page <strong> fetches data dynamically</strong>. 
        Everytime you refresh the page, you get a new image from Unsplash API.
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
