import Image from 'next/image';
import { Card } from '../ui/card';
import { Star } from 'lucide-react';
import Link from 'next/link';
import { RatingStar } from './ratingStar';

type BookCardProps = {
  image: string;
  title: string;
  author: {
    id: number;
    name: string;
  };
  star: number;
  id: number;
};

export const BookCard = ({ image, title, author, star, id }: BookCardProps) => {
  return (
    <Card className='group m-0 max-w-43 gap-0 p-0 transition-all duration-300 hover:scale-105 sm:max-w-56'>
      <Link
        href={`/details/${id}`}
        className='block h-64.5 cursor-pointer rounded-t-xl xl:h-84'
      >
        <Image
          src={image}
          alt={title + ' book poster image'}
          width={172}
          height={258}
          className='h-full rounded-t-xl object-cover transition-transform duration-300 group-hover:scale-102 sm:w-full'
        />
      </Link>
      <div className='flex flex-col items-start justify-center gap-0.5 rounded-b-xl p-3 transition-colors duration-300 group-hover:bg-neutral-50'>
        <h3 className='text-sm font-bold -tracking-[0.02rem] text-neutral-900'>
          {title}
        </h3>
        <p className='text-sm font-medium -tracking-[0.03rem] text-neutral-700'>
          {author.name}
        </p>
        <RatingStar star={star} />
      </div>
    </Card>
  );
};
