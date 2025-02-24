export default function SuccessMessage({ email }: { email: string }) {
  return (
    <div className='min-h-64 text-center'>
      <h2 className='text-2xl my-8'>Thanks for reaching out!</h2>
      <p className='mb-4'>
        I will respond to{' '}
        <strong className='text-navy-blue dark:text-soft-gray'>{email}</strong>
        {' '}within a couple days.
      </p>
    </div>
  )
}
