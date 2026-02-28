import { RecommendedBookList } from '@/app/partials/recommendedBookList';
import { CategoryCard } from '@/components/containers/categoryCard';
import { Separator } from '@/components/ui/separator';
import { categories } from '@/constant/categoriesData';
import Image from 'next/image';
import { PopularAuthorList } from './popularAuthorList';

export const MainContent = () => {
  return (
    <div className='flex-center flex-col gap-6 px-4'>
      {/* Main Banner */}
      <div className='mt-20 flex flex-col items-center justify-between gap-2'>
        <div className='relative'>
          <Image
            src='/images/MainBanner.png'
            alt='Main Banner image png'
            width={361}
            height={133}
            className='w-auto object-cover'
            loading='eager'
          />
        </div>
        <div className='flex-center h-2.5 gap-1'>
          <div className='bg-primary-300 h-1.5 w-1.5 rounded-full' />
          <div className='h-1.5 w-1.5 rounded-full bg-neutral-300' />
          <div className='h-1.5 w-1.5 rounded-full bg-neutral-300' />
        </div>
      </div>

      {/* Categories */}
      <div className='grid h-fit grid-cols-3 gap-3 lg:grid-cols-6'>
        {categories.map((c) => (
          <CategoryCard
            key={c.name}
            image={c.image}
            name={c.name}
            alt={c.alt}
          />
        ))}
      </div>

      {/* Recommendation */}
      <div className='flex flex-col gap-5'>
        <h2 className='text-display-xs font-bold text-neutral-950'>
          Recommendation
        </h2>
        <RecommendedBookList />
      </div>

      <Separator orientation='horizontal' />

      <div className='flex w-full flex-col gap-6'>
        <h2 className='text-display-xs text-start font-bold text-neutral-950'>
          Popular Authors
        </h2>
        <PopularAuthorList />
      </div>
    </div>
  );
};
