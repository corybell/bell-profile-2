import Image from 'next/image'
import { FieldError } from 'react-hook-form'

export default function FieldErrorMessage({
  error,
  isDarkMode
}: {
  error: FieldError | undefined,
  isDarkMode: Boolean
}) {
  if (!error) {
    return null
  }
  return (
    <div className='flex gap-2 pt-2'>
      <Image src={`/icons/${isDarkMode ? 'dark' : 'light'}/Alert.svg`} width={10} height={10} alt='Alert' />
      <div className='text-hm-error text-sm'>{error.message}</div>
    </div>
  )
}
