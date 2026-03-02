import Image from 'next/image';
import { Card } from '../ui/card';
import Link from 'next/link';

type CategoryCardProps = {
  image: string;
  name: string;
  alt: string;
};

export const CategoryCard = ({ image, name, alt }: CategoryCardProps) => {
  return (
    <Card className='group flex flex-col items-center justify-start gap-3 overflow-x-hidden rounded-xl bg-white p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl sm:gap-3 sm:rounded-2xl sm:p-3'>
      <Link
        href={{
          pathname: '/categories',
          query: { category: name },
        }}
        aria-label={`View ${name} category`}
      >
        <div className='flex-center gap-[5.6px] rounded-[10.5px] bg-[#e0ecff] px-[25.7px] py-[5.6px] sm:gap-[6.4px] sm:px-[55.7px] sm:py-[6.4px]'>
          <Image src={image} alt={alt} width={51.2} height={51.2} />
        </div>
        <h3 className='sm:text-md w-full max-w-24 text-start text-xs font-semibold tracking-normal text-neutral-950 sm:-tracking-[0.02rem]'>
          {name}
        </h3>
      </Link>
    </Card>
  );
};
