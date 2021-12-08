import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { FaUserGraduate } from "react-icons/fa";

import { icon } from "../../../global styles/icons.module.css";
import { imgBorder, certificateContainer } from "./education.module.css";
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
