export function Footer() {
  return (
    <footer className='text-center dark:bg-navy-blue dark:text-soft-gray'>
      <small className='text-sm'>
        {`© ${new Date().getFullYear()} Bell Code`}
      </small>
    </footer>
  )
}
