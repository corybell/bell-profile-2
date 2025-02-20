import Link from 'next/link'
import styles from './styles.module.css'

export function ResumeButton() {
  return (
    <Link
      href={'/resume_V4.pdf'}
      target='_blank'
      rel='noopener noreferrer'
      className='dark:text-navy-blue relative text-white'
    >
      <div className={`text-navy-blue dark:text-white ${styles.downloadResume}`} />
      <span className='absolute top-3 left-10'>Download Resume</span>
    </Link>
  )
}
