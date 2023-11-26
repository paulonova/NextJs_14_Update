import { UnsplashImage } from "@/app/models/unsplash";
import Image from "next/image";
import React from "react";
import styles from "./TopicPage.module.scss"

interface PageProps {
  params: { topic: string };
}

//export const revalidate = 0;

//Name must be exact the same..
export async function generateStaticParams() {
  return ["music", "coding", "instruments"].map(topic => ({topic}))
}

async function Page({ params: { topic } }: PageProps) {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?query=${topic}&count=30&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
  );
  const images: UnsplashImage[] = await response.json();
  return (
    <div>
      <h1>{topic}</h1>
      {images.map((image) => (
        <Image
          src={image?.urls.raw}
          alt={image?.description}
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
