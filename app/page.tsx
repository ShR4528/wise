import Image from 'next/image';

const Home = () => {
  return (
    <>
      <section className='px-6 border-2 md:px-20 py-20 border-red-500'>
        <div className='flex max-xl:flex-col gap-16'>
          <div className='flex flex-col justify-center'>
            <p className='small-text'>
              <Image
                src='/assets/icons/arrow-right.svg'
                alt='arrow-right'
                width={16}
                height={15}
              />
              Smart Contracts
            </p>
            <h1 className='head-text'>
              Unleash the Power of <br />
              <span className='text-primary'>Wise</span>
            </h1>
            <p className='mt-6'>
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more
            </p>
            Searchbar
          </div>
          HeroCarousel
        </div>
      </section>
    </>
  );
};

export default Home;
