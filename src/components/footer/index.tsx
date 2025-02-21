export function Footer() {
  return (
    <footer className='dark:bg-navy-blue dark:text-soft-gray pb-4 text-center'>
      <small className='text-sm'>
        {`© ${new Date().getFullYear()} Bell Code`}
      </small>
    </footer>
  )
}
