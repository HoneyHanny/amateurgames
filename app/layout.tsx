import '@/styles/globals.css'
import { Metadata, Viewport } from 'next'
import { Link } from '@nextui-org/link'
import clsx from 'clsx'

import { Providers } from './providers'

import { siteConfig } from '@/config/site'
import { fontSans } from '@/config/fonts'
import { Navbar } from '@/components/navbar'
import React from 'react'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

interface Props {
  children: React.ReactNode
}

const WrapperComponent = ({ children }: Props) => {
  const footerLinksClass = 'flex items-center gap-1 text-current'

  return (
    <div className='relative flex flex-col h-screen no-scrollbar'>
      <Navbar />
      <main className='mx-auto pt-16 flex-grow no-scrollbar'>{children}</main>
      <footer className='w-full flex flex-col md:flex-row items-center justify-center py-3 mt-6 md:mt-32 gap-8'>
        <Link isExternal className={footerLinksClass} href='https://github.com/HoneyHanny' title='Haney github profile'>
          <span className='text-default-600'>Developed by</span>
          <p className='text-primary'>Haney</p>
        </Link>
        <Link isExternal className={footerLinksClass} href='https://www.freetogame.com/' title='Free-To-Game'>
          <span className='text-default-600'>Powered by</span>
          <p className='text-primary'>Free-To-Game</p>
        </Link>
      </footer>
    </div>
  )
}

export default function RootLayout({ children }: Props) {
  return (
    <html suppressHydrationWarning lang='en' className='scroll-smooth'>
      <head />
      <body className={clsx('min-h-screen font-sans antialiased no-scrollbar', fontSans.variable)}>
        <div className='fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(200%_200%_at_50%_10%,#000_40%,#63e_100%)]'></div>
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <WrapperComponent>{children}</WrapperComponent>
        </Providers>
      </body>
    </html>
  )
}
