This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Install React Bootstrap

```bash
npm install bootstrap react-bootstrap
```

## Framer Motion Animation

```bash
npm install framer-motion
```

## React Icons

```bash
npm install react-icons --save
```

## Prettier

```bash
npm install --save-dev --save-exact prettier
```


## Caching

This revalidate function make the page dynamic and do not cache any data..

```bash
export const revalidate = 0;
```
OR 

* When fetch data another parameter can be added to avoid cache.

```bash
const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`, { cache: "no-cache"});

```

## GOOD TO KNOW!


 > process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY can be defined as UNSPLASH_ACCESS_KEY
 > without the NEXT_PUBLIC, because in Server Rendering we don´t need to use the PUBLIC information,
 > it´s more secure without it. 
 > But in Client Rendering it is necessary..
