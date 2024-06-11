import { ReactNode } from 'react';
import styles from './index.module.css'

export function Link({ children, href }: { children: ReactNode; href: string }) {
  return (
    <a className={styles.link} href={href}>
      {children}
    </a>
  )
}
