import { socialMediaData } from '@/constant/social-media';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='flex-center mt-4 w-full flex-col gap-6 border-t border-t-neutral-300 bg-white px-4 py-10 sm:mt-16 sm:gap-7 sm:px-20 sm:py-16 md:mt-20 md:gap-8 lg:mt-24 lg:gap-9 lg:px-37.5 lg:py-20 xl:mt-29 xl:gap-10'>
      <div className='flex flex-col items-center gap-4 sm:gap-4.5 lg:gap-5 xl:gap-5.5'>
        <Link
          href='/'
          className='flex-start flex w-fit cursor-pointer items-center gap-3 sm:gap-3.25 lg:gap-3.5 xl:gap-3.75'
        >
          <div className='md:h-10 md:w-10'>
            <Image
              src='/icons/Booky.svg'
              alt='Booky Icon svg'
              width={32}
              height={32}
              className='h-auto w-full'
            />
          </div>
          <h1 className='text-display-md font-bold text-neutral-950'>Booky</h1>
        </Link>
        <p className='sm:text-md text-center text-sm font-semibold -tracking-[0.015rem] text-neutral-950'>
          Discover inspiring stories & timeless knowledge, ready to borrow
          anytime. Explore online or visit our nearest library branch.
        </p>
      </div>

      {/* Social Media */}
      <div className='flex w-49 flex-col items-center justify-between gap-5'>
        <p className='text-md text-center font-bold -tracking-[0.02rem] text-neutral-950'>
          Follow on Social Media
        </p>
        <div className='flex items-center justify-between gap-3'>
          {socialMediaData.map((s) => (
            <div
              key={s.name}
              className='flex-center h-10 w-10 rounded-full border border-neutral-300'
            >
              <Image
                src={s.image}
                alt={s.alt}
                width={s.width}
                height={s.height}
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
