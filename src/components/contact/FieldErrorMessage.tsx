import Image from 'next/image'
import { FieldError } from 'react-hook-form'

export default function FieldErrorMessage({
  error,
}: {
  error: FieldError | undefined
}) {
  if (!error) {
    return null
  }
  return (
    <div className='flex gap-2 pt-2'>
      <Image src='/icons/Alert.svg' width={10} height={10} alt='Alert' />
      <div className='text-hm-error text-sm'>{error.message}</div>
    </div>
  )
}
