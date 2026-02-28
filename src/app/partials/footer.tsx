import { socialMediaData } from '@/constant/social-media';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='flex-center mt-4 w-full flex-col gap-6 border-t border-t-neutral-300 bg-white px-4 py-10'>
      <div className='flex flex-col items-center gap-4'>
        <Link
          href='/'
          className='flex-start flex w-fit cursor-pointer items-center gap-3'
        >
          <div>
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
        <p className='text-center text-sm font-semibold -tracking-[0.015rem] text-neutral-950'>
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
