import './globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@components/Footer'

export const metadata = {
  title: 'GrowwStonks',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="app">
        <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
