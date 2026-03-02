'use client';
import {
  FieldGroup,
  Field,
  FieldLabel,
  FieldError,
  FieldTitle,
} from '@/components/ui/field';
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from '@/components/ui/input-group';
import { checkoutSchema } from '@/schemas/checkoutSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import dayjs from 'dayjs';
import { Calendar } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import z from 'zod';
import { Card } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { useBorrowBook } from '@/services/hooks/books';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import {
  Dialog,
  DialogContentSuccess,
  DialogTitle,
} from '@/components/ui/dialog';
import Link from 'next/link';
import Image from 'next/image';

export const CheckoutForm = () => {
  const params = useSearchParams();
  const bookId = params.get('bookId') as string;
  const checkoutForm = useForm<z.infer<typeof checkoutSchema>>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      borrowDate: new Date(),
      borrowDuration: '3',
      returnAgreement: false,
      acceptPolicy: false,
    },
  });
  const borrowDuration = checkoutForm.watch('borrowDuration');
  const borrowDate = checkoutForm.watch('borrowDate');
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);
  const { mutate, isPending } = useBorrowBook(setShowSuccessModal);

  function onSubmit(data: z.infer<typeof checkoutSchema>) {
    mutate({ bookId: +bookId, days: +data.borrowDuration });
  }

  return (
    <Card className='w-full'>
      <form
        id='form-checkout'
        onSubmit={checkoutForm.handleSubmit(onSubmit)}
        className='flex w-full flex-col gap-4 rounded-4xl p-4'
      >
        <FieldTitle className='text-center text-xl font-bold -tracking-[0.02rem] text-neutral-950'>
          Complete Your Borrow Request
        </FieldTitle>
        <FieldGroup>
          <Controller
            name='borrowDate'
            control={checkoutForm.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className='gap-0.5'>
                <FieldLabel
                  htmlFor='form-checkout-borrow-date'
                  className='text-sm font-bold -tracking-[0.02rem] text-neutral-950'
                >
                  Borrow Date
                </FieldLabel>
                <InputGroup className='h-12 bg-neutral-100'>
                  <InputGroupInput
                    id='form-checkout-borrow-date'
                    aria-invalid={fieldState.invalid}
                    placeholder=''
                    autoComplete='off'
                    className='text-md p-3.5 font-semibold -tracking-[0.02rem] text-neutral-950 disabled:text-neutral-950 disabled:opacity-100'
                    value={dayjs(new Date()).format('DD MMMM YYYY')}
                    disabled
                  />
                  <InputGroupAddon align='inline-end'>
                    <Calendar
                      style={{ width: '20px', height: '20px' }}
                      className='cursor-pointer text-neutral-950'
                    />
                  </InputGroupAddon>
                </InputGroup>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name='borrowDuration'
            control={checkoutForm.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className='gap-3'>
                <FieldLabel
                  htmlFor='form-checkout-borrow-duration'
                  className='text-sm font-bold -tracking-[0.02rem] text-neutral-950'
                >
                  Borrow Duration
                </FieldLabel>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  id='form-checkout-borrow-duration'
                  defaultValue='3'
                  className='w-fit gap-3 text-sm font-semibold -tracking-[0.02rem] text-neutral-950'
                >
                  <div className='flex items-center gap-2'>
                    <RadioGroupItem
                      {...field}
                      value='3'
                      id='r1'
                      className='size-6 border-neutral-400'
                    />
                    <Label htmlFor='r1'>3 Days</Label>
                  </div>
                  <div className='flex items-center gap-2'>
                    <RadioGroupItem
                      {...field}
                      value='5'
                      id='r2'
                      className='size-6 border-neutral-400'
                    />
                    <Label htmlFor='r2'>5 Days</Label>
                  </div>
                  <div className='flex items-center gap-2'>
                    <RadioGroupItem
                      {...field}
                      value='10'
                      id='r3'
                      className='size-6 border-neutral-400'
                    />
                    <Label htmlFor='r3'>10 Days</Label>
                  </div>
                </RadioGroup>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <div className='bg-primary-100 flex flex-col rounded-xl p-3'>
            <p className='text-sm font-bold -tracking-[0.02rem] text-neutral-950'>
              Return Date
            </p>
            <p className='text-sm font-medium -tracking-[0.03rem] text-neutral-950'>
              Please return the book no later than{' '}
            </p>
            <span className='text-md font-bold text-[#ee1d52]'>
              {dayjs(borrowDate)
                .add(+borrowDuration, 'day')
                .format('DD MMMM YYYY')}
            </span>
          </div>

          <Controller
            name='returnAgreement'
            control={checkoutForm.control}
            render={({ field, fieldState }) => (
              <div className='flex flex-col'>
                <Field
                  data-invalid={fieldState.invalid}
                  className='gap-2'
                  orientation='horizontal'
                >
                  <Checkbox
                    onCheckedChange={field.onChange}
                    className='size-5'
                  />
                  <FieldLabel
                    htmlFor='form-checkout-return-agreement'
                    className='text-sm font-semibold -tracking-[0.02rem] text-neutral-950'
                  >
                    I agree to return the book(s) before the due date.
                  </FieldLabel>
                </Field>

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </div>
            )}
          />

          <Controller
            name='acceptPolicy'
            control={checkoutForm.control}
            render={({ field, fieldState }) => (
              <div className='flex flex-col'>
                <Field
                  data-invalid={fieldState.invalid}
                  className='gap-2'
                  orientation='horizontal'
                >
                  <Checkbox
                    onCheckedChange={field.onChange}
                    className='size-5'
                  />
                  <FieldLabel
                    htmlFor='form-checkout-accept-policy'
                    className='text-sm font-semibold -tracking-[0.02rem] text-neutral-950'
                  >
                    I accept the library borrowing policy.
                  </FieldLabel>
                </Field>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </div>
            )}
          />
        </FieldGroup>
        <Button type='submit' form='form-checkout' disabled={false}>
          {isPending ? <Spinner /> : 'Confirm & Borrow'}
        </Button>
      </form>

      <Dialog open={showSuccessModal}>
        <form>
          <DialogContentSuccess className='flex-center top-1/2 max-w-86.25 -translate-y-43 gap-6 p-0 lg:max-w-full'>
            <DialogTitle className='flex-center'>
              <Image
                src='/icons/SuccessModal.svg'
                width={142}
                height={142}
                alt='Checkout Success svg'
                loading='eager'
              />
            </DialogTitle>
            <div className='flex w-full flex-col gap-2'>
              <h3 className='text-center text-xl font-bold tracking-[0.02rem] text-neutral-950'>
                Borrowing Successful!
              </h3>
              <p className='text-md text-center leading-8 font-semibold tracking-[0.02rem] text-neutral-950'>
                Your book has been successfully borrowed. Please return it by{' '}
                <span className='text-[#ee1d52]'>
                  {dayjs(borrowDate)
                    .add(+borrowDuration)
                    .format('DD MMMM YYYY')}
                </span>
              </p>
            </div>
            <div className='flex-center'>
              <Button asChild className='w-66.5'>
                <Link href='/'>See Borrowed List</Link>
              </Button>
            </div>
          </DialogContentSuccess>
        </form>
      </Dialog>
    </Card>
  );
};
