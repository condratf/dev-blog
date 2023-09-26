import { FC } from 'react'
import Link from 'next/link'
// local
import { classNames } from '@/utils'
// styles
import styles from './styles.module.scss'

export const Navigation: FC = () => {
  const links = [{ title: 'blog', href: '/' }, { title: 'about', href: '/about' }]
  return (
    <nav className={classNames(styles.nav, 'z-20', 'pageHeader')}>
      {links.map(({ title, href }) => (
        <Link key={title} href={href}>{title}</Link>
      ))}
    </nav>
  )
}