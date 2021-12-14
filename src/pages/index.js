import * as React from "react";
import Layout from "../components/utilities/layout";
import Hero from "../components/sections/hero/hero";
import Education from "../components/sections/education/education";
import Portfolio from "../components/sections/portfolio/portfolio";
import Contact from "../components/sections/contact/contact";
import {
  heroWrap,
  componentWrap,
  blueBackgroundWrap,
} from "../global styles/index.module.css";

const IndexPage = () => {
  return (
    <Layout pageTitle="Curtis Babin | Home" layoutChoice={1}>
      <div className={heroWrap}>
        <Hero />
      </div>

      <div className={blueBackgroundWrap} id="portfolio">
        <Portfolio />
      </div>

      <div className={componentWrap} id="education">
        <Education />
      </div>

      <div className={blueBackgroundWrap} id="contact">
        <Contact />
      </div>
    </Layout>
  );
};

export default IndexPage;
