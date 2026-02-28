import Image from 'next/image';
import { Card } from '../ui/card';

type CategoryCardProps = {
  image: string;
  name: string;
  alt: string;
};

export const CategoryCard = ({ image, name, alt }: CategoryCardProps) => {
  return (
    <Card className='flex flex-col items-center justify-start gap-3 overflow-x-hidden rounded-xl bg-white p-2 shadow-sm'>
      <div className='flex-center gap-[5.6px] rounded-[10.5px] bg-[#e0ecff] px-[25.7px] py-[5.6px]'>
        <Image src={image} alt={alt} width={44.8} height={44.8} />
      </div>
      <h3 className='w-full max-w-24 text-start text-xs font-semibold tracking-normal text-neutral-950'>
        {name}
      </h3>
    </Card>
  );
};
