import { generateAvatarFallback } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import Image from 'next/image';

type PopularAuthorCardProps = {
  name: string;
  bookCount: number;
};
export const PopularAuthorCard = ({
  name,
  bookCount,
}: PopularAuthorCardProps) => {
  return (
    <div className='flex items-center justify-start gap-3 rounded-xl bg-white p-3 shadow-xs'>
      <Avatar size='lg'>
        <AvatarFallback className='text-xl font-bold'>
          {generateAvatarFallback(name)}
        </AvatarFallback>
      </Avatar>
      <div className='flex flex-col items-start'>
        <div className='text-md font-bold -tracking-[0.02rem] text-neutral-900'>
          {name}
        </div>
        <div className='flex-center gap-1.5'>
          <div className='h-5 w-5'>
            <Image
              src='/icons/BlueBook.svg'
              alt='Blue Book Icon Svg'
              width={16}
              height={20}
            />
          </div>
          <p className='text-md font-medium text-neutral-950'>
            {bookCount} books
          </p>
        </div>
      </div>
    </div>
  );
};
