'use client';

import { FormEvent, useState } from 'react';

const isValidAmazanProdubctURL = (url: string) => {
  try {
    const parseURL = new URL(url);
    const hostname = parseURL.hostname;

    if (
      hostname.includes('amazon.com') ||
      hostname.includes('amazon') ||
      hostname.endsWith('amazon')
    ) {
      return true;
    }
  } catch (error) {
    return false;
  }
};

const Searchbar = () => {
  const [searhPromt, setSearhPromt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidLink = isValidAmazanProdubctURL(searhPromt);
    if (!isValidLink) {
      return alert('Please enter a valid link');
    }
    try {
      setIsLoading(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className='flex flex-wrap gap-4 mt-10' onSubmit={handleSubmit}>
      <input
        type='text'
        onChange={(e) => setSearhPromt(e.target.value)}
        placeholder='Enter'
        className='searchbar-input'
      />
      <button
        type='submit'
        className='searchbar-btn'
        disabled={searhPromt === ''}>
        {isLoading ? 'Searchig...' : 'Search'}
      </button>
    </form>
  );
};

export default Searchbar;
