import Layout from "../components/Layout/Layout";
import ThemeProvider from "../utils/ThemeProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider 
        attribute="class" 
        defaultTheme="dark" 
        enableSystem={false} 
        disableTransitionOnChange
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
  );
}
export default MyApp;
