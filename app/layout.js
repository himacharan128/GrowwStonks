import './globals.css'
import NavBar from '@components/home/NavBar'
import Footer from '@components/home/Footer'
import ThemeProvider from '@components/providers/ThemeProvider'
export const metadata = {
  title: 'GrowwStonks',
  description: 'Assignment',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="app flex flex-col min-h-screen pr-5 pl-5">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <NavBar/>
            <div className="flex-grow">
              {children}
            </div>
            <Footer/>
          </ThemeProvider>
      </body>
    </html>
  )
}
