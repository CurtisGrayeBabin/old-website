import React from "react";
import { footer } from "./footer.module.css";
// the following are external links
import {
  linkedInSM,
  linkedInLink,
  gitHubSM,
  gitHubLink,
  instagramSM,
  instagramLink,
} from "../../data.js";

const Footer = (props) => {
  return (
    <div className={footer}>
      <p>
        <small>Curtis Babin | Front-End Developer</small>
      </p>
      <nav>
        <a href={linkedInLink} target="_blank" rel="noreferrer">
          {linkedInSM}
        </a>
        <a href={gitHubLink} target="_blank" rel="noreferrer">
          {gitHubSM}
        </a>
        <a href={instagramLink} target="_blank" rel="noreferrer">
          {instagramSM}
        </a>
      </nav>
      <a
        href="https://www.termsfeed.com/live/3fbd4032-b635-4816-a90d-ed310ec9d468"
        target="_"
      >
        <small>Privacy Policy | {new Date().getFullYear()}</small>
      </a>
      <p>
        <small></small>
      </p>
    </div>
  );
};

export default Footer;
