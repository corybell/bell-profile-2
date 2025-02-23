'use client'

import '@/style/globals.css'
import { primaryFont } from '@/style/fonts'
import { useDarkMode } from 'usehooks-ts'
import { GooeySvgFilter } from '@/components/GooeySvgFilter'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { isDarkMode } = useDarkMode()
  return (
    <html
      lang='en'
      className={isDarkMode ? 'dark h-full w-full' : 'h-full w-full'}
    >
      <body className={`${primaryFont.className} bg-soft-gray h-full w-full`}>
        {children}
        <GooeySvgFilter />
      </body>
    </html>
  )
}
