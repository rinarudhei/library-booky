import { Card, CardContent } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { generateAvatarFallback } from '@/lib/utils';
import dayjs from 'dayjs';
import { Star } from 'lucide-react';

type ReviewCard = {
  user: {
    id: number;
    name: string;
  };
  createdAt: string;
  rating: number;
  comment: string;
};
export const ReviewCard = ({
  user,
  createdAt,
  rating,
  comment,
}: ReviewCard) => {
  return (
    <Card className='h-fit gap-4'>
      <CardContent className='h-full p-4'>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-3'>
            <Avatar className='size-14.5 xl:size-16'>
              {/* <AvatarImage src={image} /> */}
              <AvatarFallback className='text-xl font-bold'>
                {generateAvatarFallback(user.name)}
              </AvatarFallback>
            </Avatar>

            <div className='flex flex-col'>
              <p className='text-sm font-bold -tracking-[0.02rem] text-neutral-950 xl:text-lg'>
                {user.name}
              </p>
              <p className='xl:text-md text-sm font-medium -tracking-[0.03rem] text-neutral-950'>
                {dayjs(createdAt).format('DD MMMM YYYY, hh:mm')}
              </p>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <div className='flex items-center'>
              {Array.from({ length: Math.round(rating) }).map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className='fill-[#ffab0d] stroke-[#ffab0d]'
                />
              ))}
            </div>
            <p className='xl:text-md text-sm font-semibold tracking-[0.02rem] text-neutral-950'>
              {comment}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
