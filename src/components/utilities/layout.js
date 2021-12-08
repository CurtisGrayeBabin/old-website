import * as React from "react";
import Navbar from "../navbar/navbar.js";
import Footer from "../footer/footer.js";
import { Helmet } from "react-helmet";
import { layout, stickToBottom } from "../../global styles/layout.module.css";

// format of each page (not just Home page)
const Layout = ({ pageTitle, footerStick, children }) => {
  return (
    <>
      <title>{pageTitle}</title>

      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="The personal website of Curtis Babin, a front-end developer, contains his education and portfolio."
        />
        <link rel="canonical" href="https://www.curtisbabin.com" />
        <meta name="author" content="Curtis Babin"></meta>
        <meta
          name="keywords"
          content="Curtis, Babin, McGraw, Hill, UCI, Carter, website, app, developer, software, engineer, front, end, JavaScript"
        ></meta>
        <link
          rel="manifest"
          crossorigin="use-credentials"
          href="/manifest.webmanifest"
        />
      </Helmet>

      <Navbar />

      <main className={layout}>{children}</main>

      <footer className={footerStick ? stickToBottom : ""}>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
