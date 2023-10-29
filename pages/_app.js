import Layout from "../components/Layout/Layout";
import ThemeProvider from "../utils/ThemeProvider";
import "../styles/globals.css";
// import "styles/tailwind.css"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider 
        attribute="class" 
        defaultTheme="dark" 
        enableSystem={false} 
        disableTransitionOnChange
      >
        <Layout className="bg-red-600 text-white py-4">
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
  );
}
export default MyApp;
