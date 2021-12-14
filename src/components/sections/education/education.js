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
              here
            </a>
            ! Confirmation of my graduation is{" "}
            <a
              href="https://graduation.udacity.com/confirm/QWWVKSGE"
              target="_"
            >
              here
            </a>
            .
          </p>
        </article>

        <li className={imgBorder}>
          <StaticImage
            src="../../../images/codecademycert.jpg"
            alt="Here is my Codecademy certificate for completing their Web Development Career Path program"
          />
        </li>
        <article className={articleInfo}>
          <h3>About my Codecademy Certification</h3>
          <p>
            Before the pandemic of 2020, I wanted to create websites, but I did
            not want to spend the time to learn how to do so. I tried learning
            website development through various free methods, but I realized I
            enjoy learning the most from well-thought-out programs. Codecademy
            offers the Web Development Career Path. This course covers HTML,
            CSS, JavaScript, Git, SQL, APIs, Express.js, and React.js
            frameworks. I enjoyed taking the time to understand as many topics
            as I could in just one place. After finishing this{" "}
            <a
              href="https://www.codecademy.com/learn/paths/web-development"
              target="_"
            >
              course
            </a>
            , I wanted to learn more about full-stack development with Node.js,
            so I signed up for Udacity.
          </p>
        </article>

        <li className={imgBorder}>
          <StaticImage
            src="../../../images/degree.jpg"
            alt="Here is my Bachelor of Science degree in Computer Science from University of California, Irvine"
          />
        </li>
        <article className={articleInfo}>
          <h3>About my Computer Science Degree</h3>
          <p>
            Why did I choose to study Computer Science, you may ask? Because it
            sounded cool. Computers fascinated me as a child. I wanted to know
            how taking a tower full of random metal and wires and plugging it
            into the wall led to a Windows 95 login screen. The only thing I
            ever programmed before attending UC Irvine was a TI-93 calculator,
            and then I didn't have to memorize geometry formulas anymore. My
            curiosity has led me down some interesting paths, and I continue to
            learn since it keeps me busy, and I honestly find the process of
            conquering new concepts to be a lot of fun.
          </p>
        </article>
      </ul>
    </section>
  );
};

export default Education;
