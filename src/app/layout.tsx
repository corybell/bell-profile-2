import '@/style/globals.css'
import { primaryFont } from '@/style/fonts'
import { GooeySvgFilter } from '@/components/GooeySvgFilter'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={'h-full w-full'}>
      <body className={`${primaryFont.className} bg-soft-gray h-full w-full`}>
        {children}
        <GooeySvgFilter />
      </body>
    </html>
  )
}
