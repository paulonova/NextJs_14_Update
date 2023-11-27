import { UnsplashImage } from "@/app/models/unsplash-image";
import Image from "next/image";
import React from "react";
import styles from "./TopicPage.module.scss";
import { Alert } from "@/components/bootstrap";
import { Metadata } from "next";

interface PageProps {
  params: { topic: string };
}

//export const revalidate = 0;

// I can only access the generateStaticParams list... A 404 page will show up if you try other param.
//export const dynamicParams = false;

 export function generateMetadata({ params: {topic} }: PageProps): Metadata {
  return {
    title: topic + " - NextJs 13.4 Image Gallery",
  }
}

//Name must be exact the same..
export async function generateStaticParams() {
  return ["music", "coding", "instruments"].map((topic) => ({ topic }));
}

async function Page({ params: { topic } }: PageProps) {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?query=${topic}&count=30&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
  );
  const images: UnsplashImage[] = await response.json();
  return (
    <div>
      <Alert>
        This page uses <strong>generateStaticParams</strong> to render and cache
        static pages at build time, even though the URL has a dynamic parameter.
        Pages that are not included in generateStaticParams will be fetched &
        rendered on first access and then{" "}
        <strong>cached for subsequent requests</strong> (this can be disabled).
      </Alert>
      <h1>{topic}</h1>
      {images.map((image) => (
        <Image
          src={image?.urls.raw}
          alt={image?.description || 'images'}
          width={250}
          height={250}
          key={image?.urls.raw}
          className={styles.image}
        />
      ))}
    </div>
  );
}

export default Page;
