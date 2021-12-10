import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { FaUserGraduate } from "react-icons/fa";

import { icon } from "../../../global styles/icons.module.css";
import {
  imgBorder,
  certificateContainer,
  articleInfo,
} from "./education.module.css";
import { adaHeader } from "../../../global styles/index.module.css";

const Education = (props) => {
  return (
    <section>
      {/* decided to use an icon as the symbol for a section header */}
      <h1 className={adaHeader}>Education</h1>
      <h2>
        <FaUserGraduate className={icon} />
      </h2>

      <ul className={certificateContainer}>
        <li className={imgBorder}>
          <StaticImage
            src="../../../images/udacity.jpg"
            alt="Here is my Udacity Nanodegree certificate for completing their Full Stack JavaScript Developer program"
          />
        </li>
        <article className={articleInfo}>
          <h3>About my Udacity Nanodegree</h3>
          <p>
            From April to August 2021, I learned and earned the Udacity Full
            Stack JavaScript Developer Nanodegree! Before this, I had never
            touched the back-end before. This program lasted four months. Each
            month there was a major project due. The first project I made was
            "rapid-image-prototyping-backend"; this script resizes local images
            for display in the browser. The final project involved combining
            both a single front-end and single back-end system. It had to be
            deployed with a few AWS services while utilizing continuous
            integration with CircleCI. I learned a lot about full-stack software
            engineering. Feel free to learn more about this program{" "}
            <a
              href="https://www.udacity.com/course/full-stack-javascript-developer-nanodegree--nd0067"
              target="_"
            >
              here!
            </a>
          </p>
        </article>

        <li className={imgBorder}>
          <StaticImage
            src="../../../images/codecademycert.jpg"
            alt="Here is my Codecademy certificate for completing their Web Development Career Path program"
          />
        </li>
        <li className={imgBorder}>
          <StaticImage
            src="../../../images/degree.jpg"
            alt="Here is my Bachelor of Science degree in Computer Science from University of California, Irvine"
          />
        </li>
      </ul>
    </section>
  );
};

export default Education;
