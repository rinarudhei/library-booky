import Image from 'next/image';
import { Card } from '../ui/card';
import { Star } from 'lucide-react';

type BookCardProps = {
  image: string;
  title: string;
  author: {
    id: number;
    name: string;
  };
  star: number;
};

export const BookCard = ({ image, title, author, star }: BookCardProps) => {
  return (
    <Card className='m-0 max-w-43 gap-0 p-0'>
      <div className='h-64.5 max-w-43 rounded-t-xl'>
        <Image
          src={image}
          alt={title + ' book poster image'}
          width={172}
          height={258}
          className='h-full rounded-t-xl object-cover'
        />
      </div>
      <div className='flex flex-col items-start justify-center gap-0.5 rounded-b-xl p-3'>
        <h3 className='text-sm font-bold -tracking-[0.02rem] text-neutral-900'>
          {title}
        </h3>
        <p className='text-sm font-medium -tracking-[0.03rem] text-neutral-700'>
          {author.name}
        </p>
        <div className='flex items-center justify-start gap-2'>
          <Star size={24} className='fill-[#ffab0d] stroke-[#ffab0d]' />
          <p className='text-sm font-semibold -tracking-[0.02rem] text-neutral-900'>
            {star}
          </p>
        </div>
      </div>
    </Card>
  );
};
