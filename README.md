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


## Caching - REVALIDATE

This revalidate function make the page dynamic and do not cache any data..

```bash
export const revalidate = 0;
```
OR 

* When fetch data another parameter can be added to avoid cache.

```bash
const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`, { cache: "no-cache"});

```


### NEW FEATURES

```bash
export const dynamicParams = false;
```

<p>I can only access the generateStaticParams list...</p>
<p>A 404 page will show up if you try other param.</p>

</hr>

<h3>Caching data</h3>

```bash
 const getUserCache = cache(getUser);
```
<p>Use cache if I not using the Native fetch, ex: "Axios"</p>

<hr/>

<h3>Using Client Page inside of a Server Rendered Page</h3>

<p>** MEtadata can´t be used inside of a Client Page, so the solution is
to create a Client component and import into the Server Page and then use the Metadata function..</p>

> First create a server page.
> Second, create a separate component using "use client" notation as a component
> Set in the first page the Client Page created.
> Then you can use the Metadata from Next.js in a Client Page

## GOOD TO KNOW!


 > process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY can be defined as UNSPLASH_ACCESS_KEY
 > without the NEXT_PUBLIC, because in Server Rendering we don´t need to use the PUBLIC information,
 > it´s more secure without it. 
 > But in Client Rendering it is necessary..