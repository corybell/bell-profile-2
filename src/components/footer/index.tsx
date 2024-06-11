import { FOOTER_ITEMS } from '@/content/footer'
import { Link } from '../link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Footer() {
  return (
    <footer className='mb-24'>
      <div className='text-center tracking-wide'>FIND ME</div>
      <ul className='flex justify-center gap-12 mb-12'>
        {FOOTER_ITEMS.map(link => (
          <li key={link.title}>
            <Link href={link.href}>
              <div className='inline-flex gap-2'>
                <FontAwesomeIcon icon={link.icon} width={link.iconWidth} />
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className='text-center'>
        <small className='text-sm'>
          {`© ${new Date().getFullYear()} Bell Code`}
        </small>
      </div>
    </footer>
  )
}
