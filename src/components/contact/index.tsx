'use client'
import { Field, Input, Label, Textarea } from '@headlessui/react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import FieldErrorMessage from './FieldErrorMessage'

export const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

export type ContactFormInput = {
  fullName: string
  email: string
  message: string
}

export function Contact() {
  const [createOrderStatus, setCreateOrderStatus] = useState<
    boolean | undefined
  >(undefined)

  const [loading, setLoading] = useState(false)

  const onSubmit: SubmitHandler<ContactFormInput> = async data => {
    console.log(data)
  }

  const {
    getValues,
    setValue,
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ContactFormInput>({
    defaultValues: {
      fullName: '',
      email: '',
      message: '',
    },
  })
  return (
    <div className='dark:bg-navy-blue py-8 dark:text-soft-gray'>
      <h2 className='text-center text-2xl font-semibold uppercase'>Contact</h2>
      <p className='mx-auto max-w-md py-4 text-center text-sm md:text-base lg:text-base'>
        Interested in working together? Fill out the form below or send me an
        email at corybell21@gmail.com
      </p>
      <form
        className='container mx-auto max-w-lg pt-4'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='grid grid-cols-1 gap-3 md:grid-cols-2'>
          <Field>
            <Label className='font-semibold'>Name*</Label>
            <Input
              type='text'
              className='w-full rounded-md border-3 border-black p-2 dark:border-soft-gray'
              placeholder='First and Last'
              {...register('fullName', {
                required: {
                  message: 'Name is required.',
                  value: true,
                },
              })}
            />
            <FieldErrorMessage error={errors.fullName} />
          </Field>
          <Field>
            <Label className='font-semibold'>Email*</Label>
            <Input
              type='text'
              className='w-full rounded-md border-3 border-black p-2 dark:border-soft-gray'
              {...register('email', {
                pattern: {
                  value: EMAIL_REGEX,
                  message: 'Email format',
                },
                required: {
                  message: 'Email is required.',
                  value: true,
                },
              })}
            />
            <FieldErrorMessage error={errors.email} />
          </Field>
        </div>
        <Field className='py-3'>
          <Label className='font-semibold'>Message</Label>
          <Textarea
            className='w-full rounded-md border-3 border-black p-3 dark:border-soft-gray'
            rows={3}
            {...register('message', {
              required: {
                message: 'Message is required.',
                value: true,
              },
            })}
          />
          <FieldErrorMessage error={errors.message} />
        </Field>
        <div className='flex items-center justify-center gap-8 py-4'>
          <button
            disabled={loading}
            type='submit'
            className='dark:text-navy-blue relative text-soft-gray'
          >
            <div
              className={`text-navy-blue primaryButtonShape dark:text-soft-gray`}
            />
            <span className='absolute top-3 left-22'>Send</span>
          </button>
        </div>
      </form>
    </div>
  )
}
