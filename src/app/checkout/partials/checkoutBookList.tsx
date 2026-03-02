import ErrorMessage from '@/components/containers/errorMessage';
import { Spinner } from '@/components/ui/spinner';
import { useGetBookDetails } from '@/services/hooks/books';
import clsx from 'clsx';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

export const CheckoutBookList = () => {
  const params = useSearchParams();
  const bookId = params.get('bookId') ?? '';
  const { data, isPending, isError } = useGetBookDetails({ id: +bookId });

  return (
    <div className='flex flex-col gap-4'>
      <h3 className='lg:text-dislay-xs text-lg font-bold -tracking-[0.03rem] text-neutral-950 lg:tracking-normal'>
        Book List
      </h3>
      {isError ? (
        <ErrorMessage errorMessage='Error loading book list' />
      ) : isPending ? (
        <Spinner className='mx-auto' />
      ) : (
        <div className='flex gap-3'>
          <div className='h-26.5 w-17.5 sm:h-34.5 sm:w-23'>
            <Image
              src={data.coverImage}
              width={92}
              height={138}
              alt={clsx(data.title, 'Book Cover image')}
              className='h-26.5 w-17.5 object-cover sm:h-34.5 sm:w-23'
            />
          </div>

          <div className='flex flex-col justify-center gap-1'>
            <div className='flex-start flex w-fit items-center gap-2 rounded-sm border border-neutral-300 px-2'>
              <p className='text-sm font-bold -tracking-[0.02rem] text-neutral-950'>
                {data.category.name}
              </p>
            </div>
            <h4 className='text-md font-bold -tracking-[0.02rem] text-neutral-950 lg:text-lg'>
              {data.title}
            </h4>
            <p className='lg:text-md text-sm font-medium -tracking-[0.03rem] text-neutral-700'>
              {data.author.name}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
