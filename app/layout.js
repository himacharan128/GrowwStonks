import './globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@components/Footer'

export const metadata = {
  title: 'GrowwStonks',
  description: 'Assignment',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="app flex flex-col min-h-screen pr-5 pl-5">
        <NavBar/>
        <div className="flex-grow">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}
