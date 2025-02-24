'use client'

import { useState } from 'react'
import { CONTACT_BODY, CONTACT_TITLE } from '@/content/contact'
import { ContactForm } from './ContactForm'
import ErrorMessage from './ErrorMessage'
import SuccessMessage from './SuccessMessage'

export function Contact() {
  const [sentEmailAddress, setSentEmailAddress] = useState<
    string | undefined | null
  >(undefined)

  return (
    <div className='dark:bg-navy-blue dark:text-soft-gray px-8 py-4 md:px-0'>
      <h2
        id='contact'
        className='text-center text-xl font-semibold uppercase md:text-2xl'
      >
        {CONTACT_TITLE}
      </h2>
      <p className='mx-auto max-w-md py-4 text-center text-sm md:text-base lg:text-base'>
        {CONTACT_BODY}
      </p>
      {sentEmailAddress === undefined && (
        <ContactForm setSentEmailAddress={setSentEmailAddress} />
      )}
      {sentEmailAddress === null && <ErrorMessage />}
      {sentEmailAddress && <SuccessMessage email={sentEmailAddress} />}
    </div>
  )
}
