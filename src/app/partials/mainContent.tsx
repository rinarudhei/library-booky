import { RecommendedBookList } from '@/app/partials/recommendedBookList';
import { CategoryCard } from '@/components/containers/categoryCard';
import { Separator } from '@/components/ui/separator';
import { categories } from '@/constant/categoriesData';
import Image from 'next/image';
import { PopularAuthorList } from './popularAuthorList';

export const MainContent = () => {
  return (
    <main className='flex-center flex-col gap-6 px-4 sm:gap-7 md:gap-8 lg:gap-10 xl:gap-12 xl:px-30'>
      {/* Main Banner */}
      <div className='mt-20 flex flex-col items-center justify-between gap-2 sm:mt-32 xl:gap-4'>
        <div className=''>
          <Image
            src='/images/MainBanner.png'
            alt='Main Banner image png'
            width={1200}
            height={441}
            className='w-auto object-cover sm:w-200 xl:h-auto xl:w-300'
            loading='eager'
          />
        </div>
        <div className='flex-center h-2.5 gap-1 lg:gap-1.5'>
          <div className='bg-primary-300 h-1.5 w-1.5 rounded-full lg:h-2.5 lg:w-2.5' />
          <div className='h-1.5 w-1.5 rounded-full bg-neutral-300 lg:h-2.5 lg:w-2.5' />
          <div className='h-1.5 w-1.5 rounded-full bg-neutral-300 lg:h-2.5 lg:w-2.5' />
        </div>
      </div>

      {/* Categories */}
      <div className='grid h-fit grid-cols-3 gap-3 sm:gap-4 xl:max-w-300 xl:grid-cols-6'>
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
      <div className='flex flex-col gap-5 sm:gap-6 md:gap-7 xl:gap-8'>
        <h2 className='text-display-xs sm:text-display-sm lg:text-display-md xl:text-display-lg font-bold text-neutral-950'>
          Recommendation
        </h2>
        <RecommendedBookList />
      </div>

      <Separator orientation='horizontal' />

      <div className='flex w-full flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-9 xl:gap-10'>
        <h2 className='text-display-xs sm:text-display-sm lg:text-display-md xl:text-display-lg font-bold text-neutral-950'>
          Popular Authors
        </h2>
        <PopularAuthorList />
      </div>
    </main>
  );
};
