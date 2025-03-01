'use client'
import { Field, Input, Label, Textarea } from '@headlessui/react'
import { SetStateAction, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import FieldErrorMessage from './FieldErrorMessage'
import { ContactFormInput } from '@/types'
import { useDarkMode } from 'usehooks-ts'
import { sendContactRequest, EMAIL_REGEX } from './lib'

export function ContactForm({
  setSentEmailAddress,
}: {
  setSentEmailAddress: (
    value: SetStateAction<string | undefined | null>
  ) => void
}) {
  const { isDarkMode } = useDarkMode({
    initializeWithValue: false,
  })

  const [loading, setLoading] = useState(false)

  const onSubmit: SubmitHandler<ContactFormInput> = async data => {
    setLoading(true)
    const response = await sendContactRequest(data)
    setLoading(false)
    const status = response?.emailResponse.status === 200 ? data.email : null
    setSentEmailAddress(status)
  }

  const {
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
    <form
      className='container mx-auto max-w-lg pt-4'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='grid grid-cols-1 gap-3 md:grid-cols-2'>
        <Field>
          <Label className='font-semibold'>Name*</Label>
          <Input
            type='text'
            className='dark:border-soft-gray w-full rounded-md border-3 border-black p-2'
            placeholder='First and Last'
            {...register('fullName', {
              required: {
                message: 'Name is required.',
                value: true,
              },
            })}
          />
          <FieldErrorMessage error={errors.fullName} isDarkMode={isDarkMode} />
        </Field>
        <Field>
          <Label className='font-semibold'>Email*</Label>
          <Input
            type='text'
            className='dark:border-soft-gray w-full rounded-md border-3 border-black p-2'
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
          <FieldErrorMessage error={errors.email} isDarkMode={isDarkMode} />
        </Field>
      </div>
      <Field className='py-3'>
        <Label className='font-semibold'>Message</Label>
        <Textarea
          className='dark:border-soft-gray w-full rounded-md border-3 border-black p-3'
          rows={3}
          {...register('message', {
            required: {
              message: 'Message is required.',
              value: true,
            },
          })}
        />
        <FieldErrorMessage error={errors.message} isDarkMode={isDarkMode} />
      </Field>
      <div className='flex items-center justify-center gap-8 py-4'>
        <button
          disabled={loading}
          type='submit'
          className='dark:text-navy-blue text-soft-gray relative cursor-pointer'
        >
          <div
            className={`text-navy-blue primaryButtonShape dark:text-soft-gray`}
          />
          <span className='absolute top-3 left-22'>Send</span>
        </button>
      </div>
    </form>
  )
}
