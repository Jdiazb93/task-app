import './globals.css'
import { Onest } from 'next/font/google'
import Navbar from '@/components/navbar/navbar'

const onest = Onest({ subsets: ['latin-ext'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export const metadata = {
  title: 'Tasks Manager',
  description: 'Test App to generate tasks using only Nextjs on back and front.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={onest.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
