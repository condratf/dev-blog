import { FC, PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
// local
import { classNames } from '@/utils'
import { Navigation } from '@/components/layout'
// styles
import './globals.css'

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"], subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Blog',
  description: 'desc',
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={
        classNames(lato.className, `
          bg-gradient-to-l
          from-blue-200
          via-cyan-200
          to-sky-200
        `)
      }>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

export default RootLayout