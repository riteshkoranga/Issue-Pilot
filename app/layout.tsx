import '@radix-ui/themes/styles.css';
import './theme-config.css';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Theme, ThemePanel } from '@radix-ui/themes';
import Navbar from './Navbar';



const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
      <Theme appearance="light" accentColor="teal" grayColor="sand" scaling="110%">
      
          <Navbar/>
          <main className='p-5'>{children}</main>
          
        </Theme>
        </body>
    </html>
  )
}
