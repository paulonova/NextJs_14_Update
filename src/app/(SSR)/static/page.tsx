import React from "react";
import { UnsplashImage } from "../../models/unsplash-image";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Alert } from "@/components/bootstrap";

export const metadata: Metadata = {
  title: 'Static Fetching - NextJs 13.4 Image Gallery',
};

const Images = async () => {
  
  const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`);
  const image: UnsplashImage = await response.json();

  const width = Math.min(500, image.width);
  const height = (width / image.width) * image.height;


  return (
    <div className="d-flex flex-column align-items-center">
      <Alert>
        This page <strong>fetches and caches data at build time </strong> 
        Even though the Unsplash API always return a new image, we see the 
        same image after refreshing the page until we compile the project again.
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
  );
};

export default Images;


/**
 * process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY can be defined as UNSPLASH_ACCESS_KEY
 * without the NEXT_PUBLIC, because in Server Rendering we don´t need to use the PUBLIC information,
 * it´s more secure without it. 
 * But in Client Rendering it is necessary..
 * 
 */