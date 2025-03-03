export function ResumeButton() {
  return (
    <a
      href={'/resume_V4.pdf'}
      target='_blank'
      rel='noopener noreferrer'
      className='dark:text-navy-blue text-soft-gray relative'
    >
      <div
        className={`text-navy-blue dark:text-soft-gray primaryButtonShape`}
      />
      <span className='absolute top-3 left-10'>Download Resume</span>
    </a>
  )
}
