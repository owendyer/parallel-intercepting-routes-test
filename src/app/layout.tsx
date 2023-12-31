import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navigation/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout(
  props: {
    children: React.ReactNode, modal: React.ReactNode,
  }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {props.children}
        {props.modal}
      </body>
    </html>
  )
}