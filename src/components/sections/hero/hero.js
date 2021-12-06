import * as React from "react";
import { main, downArrow, arrowContainer } from "./hero.module.css";
import { Link } from "gatsby";

const Hero = (props) => {
  return (
    <section className={main}>
      <h1>I create single page apps & fast, SEO-friendly websites</h1>
      <h2>I am a front-end developer :)</h2>
      <Link to="#portfolio" className={arrowContainer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={downArrow}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </Link>
    </section>
  );
};

export default Hero;
