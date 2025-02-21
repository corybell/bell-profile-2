import Link from 'next/link'

export function ResumeButton() {
  return (
    <Link
      href={'/resume_V4.pdf'}
      target='_blank'
      rel='noopener noreferrer'
      className='dark:text-navy-blue relative text-soft-gray'
    >
      <div className={`text-navy-blue dark:text-soft-gray primaryButtonShape`} />
      <span className='absolute top-3 left-10'>Download Resume</span>
    </Link>
  )
}
