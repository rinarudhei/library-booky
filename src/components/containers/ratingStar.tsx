import { Star } from 'lucide-react';

type RatingStarProps = {
  star: number;
};
export const RatingStar = ({ star }: RatingStarProps) => {
  return (
    <div className='flex items-center justify-start gap-2'>
      <Star
        size={24}
        className='fill-[#ffab0d] stroke-[#ffab0d] transition-transform duration-300 group-hover:rotate-12'
      />
      <p className='text-sm font-semibold -tracking-[0.02rem] text-neutral-900'>
        {star}
      </p>
    </div>
  );
};
