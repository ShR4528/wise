'use client';

const Searchbar = () => {
  const handleSubmit = () => {};

  return (
    <form className='flex flex-wrap gap-4 mt-10' onSubmit={handleSubmit}>
      <input type='text' placeholder='Enter' className='searchbar-input' />
      <button type='submit' className='searchbar-btn'>
        Search
      </button>
    </form>
  );
};

export default Searchbar;
