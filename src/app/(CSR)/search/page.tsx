import { Metadata } from 'next';
import React from 'react'
import SearchPage from './SearchPage';


/**
 * Metadata can´t be used in "use client" only via server
 */
export const metadata: Metadata = {
  title: 'Search - NextJs 13.4 Image Gallery',
};

const page = () => {
  return (
    <div>
      <SearchPage/>
    </div>
  )
}

export default page
