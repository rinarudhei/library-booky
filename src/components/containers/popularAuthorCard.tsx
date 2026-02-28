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
    <div className='flex items-center justify-start gap-3 rounded-xl bg-white p-3 shadow-xs sm:max-w-70 sm:gap-4 sm:p-4 xl:max-w-full'>
      <Avatar className='size-10 md:size-16 xl:size-20.25'>
        <AvatarFallback className='text-xl font-bold'>
          {generateAvatarFallback(name)}
        </AvatarFallback>
      </Avatar>
      <div className='flex flex-col items-start sm:gap-0.5'>
        <div className='text-md font-bold -tracking-[0.02rem] text-neutral-900 sm:text-lg sm:-tracking-[0.03rem]'>
          {name}
        </div>
        <div className='flex-center gap-1.5'>
          <div className='flex-center h-6 w-6'>
            <Image
              src='/icons/BlueBook.svg'
              alt='Blue Book Icon Svg'
              width={16}
              height={20}
              className='h-5 w-auto object-cover'
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
