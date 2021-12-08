import React from "react";
import { iconStyle, iconStyleSmall } from "./global styles/icons.module.css";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import { GrMail } from "react-icons/gr";
import { Link } from "gatsby";

// smaller external links
export const linkedInSM = <BsLinkedin className={iconStyleSmall} />;
export const gitHubSM = <BsGithub className={iconStyleSmall} />;
export const instagramSM = <BsInstagram className={iconStyleSmall} />;

// external links
export const [linkedIn, linkedInLink] = [
  <BsLinkedin className={iconStyle} />,
  "https://www.linkedin.com/in/curtisbabin/",
];
export const [gitHub, gitHubLink] = [
  <BsGithub className={iconStyle} />,
  "https://github.com/CurtisGrayeBabin",
];
export const [instagram, instagramLink] = [
  <BsInstagram className={iconStyle} />,
  "https://www.instagram.com/curtis.g.babin/",
];

// internal links
export const education = (
  <Link to="/#education">
    <FaUserGraduate className={iconStyle} />
  </Link>
);
export const portfolio = (
  <Link to="/#portfolio">
    <HiCode className={iconStyle} />
  </Link>
);
export const contact = (
  <Link to="/#contact">
    <GrMail className={iconStyle} />
  </Link>
);
