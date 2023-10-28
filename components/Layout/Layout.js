import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ThemeProvider from "../../utils/ThemeProvider";


function Layout({ children }) {
  return (
    <div className="app flex flex-col min-h-screen pr-5 pl-5">
      <Header />
        <main className="flex-grow">
          {children}
        </main>
      <Footer />
    </div>
  );
}

export default Layout;
