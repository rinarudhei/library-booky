'use client';

import { BookCard } from '@/components/containers/bookCard';
import ErrorMessage from '@/components/containers/errorMessage';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Field } from '@/components/ui/field';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Spinner } from '@/components/ui/spinner';
import { categories } from '@/constant/categoriesData';
import { useGetBooksByQuery } from '@/features/book/hooks/books';
import clsx from 'clsx';
import { ListFilter, Star } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import React from 'react';

export const CategoryBook = () => {
  const param = useSearchParams();
  const pageCategory = param.get('category');
  const [filterRatings, setFilterRatings] = React.useState<string>('');
  const [filterCategory, setFilterCategory] = React.useState<string>('');
  const { data, isPending, isError, error } = useGetBooksByQuery({
    minRating: +filterCategory || 1,
    page: 1,
    limit: 8,
    categoryId: categories.filter((c) => c.name === filterCategory)[0]
      ?.categoryId,
  });

  React.useEffect(() => {
    setFilterCategory(pageCategory ?? '');
  }, [pageCategory]);

  const handleCheckbox = (
    checked: string | boolean,
    name: string,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    if (checked) {
      setter((prev) => {
        if (prev !== name) {
          return name;
        }

        return '';
      });
    } else {
      setter('');
    }
  };

  return (
    <div className='mt-20 flex w-full max-w-300 flex-col items-start gap-4 px-4 sm:mt-32'>
      <h1 className='text-display-xs sm:text-display-sm md:text-display-md xl:text-display-lg text-start font-bold text-neutral-950'>
        Book List
      </h1>
      <div className='flex h-13 w-full items-center justify-between rounded-xl bg-white p-3 shadow-xs sm:hidden'>
        <p className='font-nunito text-sm font-extrabold text-neutral-950'>
          FILTER
        </p>

        <Dialog>
          <DialogTrigger>
            <ListFilter size={20} className='cursor-pointer' />
          </DialogTrigger>

          <DialogContent>
            <DialogTitle className='font-quicksand text-sm font-extrabold text-neutral-950'>
              FILTER
            </DialogTitle>
            <div className='text-lg font-bold -tracking-[0.02rem] text-neutral-950'>
              Category
            </div>
            {categories.map((c) => (
              <Field
                key={c.name}
                className='w-fit cursor-pointer'
                orientation='horizontal'
              >
                <Checkbox
                  id={`${c.name}`}
                  name={`${c.name}`}
                  checked={filterCategory === `${c.name}`}
                  onCheckedChange={(checked) =>
                    handleCheckbox(checked, `${c.name}`, setFilterCategory)
                  }
                />
                <Label>{c.name}</Label>
              </Field>
            ))}

            <Separator />

            <div className='text-lg font-bold -tracking-[0.02rem] text-neutral-950'>
              Rating
            </div>
            {Array.from({ length: 5 })
              .map((_, i) => (
                <Field
                  key={i}
                  className='w-fit cursor-pointer'
                  orientation='horizontal'
                >
                  <Checkbox
                    id={`${i + 1}`}
                    name={`${i + 1}`}
                    checked={filterRatings === `${i + 1}`}
                    onCheckedChange={(checked) =>
                      handleCheckbox(checked, `${i + 1}`, setFilterRatings)
                    }
                  />
                  <Label>
                    <Star className='fill-[#ffab0d] stroke-[#ffab0d]' /> {i + 1}
                  </Label>
                </Field>
              ))
              .reverse()}
          </DialogContent>
        </Dialog>
      </div>

      {/* Book List */}
      <div className='flex min-h-200 w-full items-start gap-10'>
        {/* Filter Category and Rating */}
        <div className='hidden w-66.5 flex-col gap-6 py-4 shadow-xs sm:flex'>
          <h3 className='font-quicksand text-sm font-extrabold text-neutral-950'>
            FILTER
          </h3>
          <div className='text-lg font-bold -tracking-[0.02rem] text-neutral-950'>
            Category
          </div>
          {categories.map((c) => (
            <Field
              key={c.name}
              className='w-fit cursor-pointer'
              orientation='horizontal'
            >
              <Checkbox
                id={`${c.name}`}
                name={`${c.name}`}
                checked={filterCategory === `${c.name}`}
                onCheckedChange={(checked) =>
                  handleCheckbox(checked, `${c.name}`, setFilterCategory)
                }
              />
              <Label>{c.name}</Label>
            </Field>
          ))}

          <Separator />

          <div className='text-lg font-bold -tracking-[0.02rem] text-neutral-950'>
            Rating
          </div>
          {Array.from({ length: 5 })
            .map((_, i) => (
              <Field
                key={i}
                className='w-fit cursor-pointer'
                orientation='horizontal'
              >
                <Checkbox
                  id={`${i + 1}`}
                  name={`${i + 1}`}
                  checked={filterRatings === `${i + 1}`}
                  onCheckedChange={(checked) =>
                    handleCheckbox(checked, `${i + 1}`, setFilterRatings)
                  }
                />
                <Label>
                  <Star className='fill-[#ffab0d] stroke-[#ffab0d]' /> {i + 1}
                </Label>
              </Field>
            ))
            .reverse()}
        </div>
        {isError ? (
          <ErrorMessage
            errorMessage={error ? error.message : 'Error getting book list'}
          />
        ) : isPending ? (
          <Spinner>Loading data...</Spinner>
        ) : (
          <div
            className={clsx(
              'grid w-full grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4'
            )}
          >
            {data?.books
              .filter(
                (book) =>
                  !book.coverImage.includes('otimages.com') &&
                  !book.coverImage.includes('blob:')
              )
              .map((book, i) => (
                <BookCard
                  key={i}
                  id={book.id}
                  image={book.coverImage}
                  title={book.title}
                  author={book.author}
                  star={book.rating}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};
