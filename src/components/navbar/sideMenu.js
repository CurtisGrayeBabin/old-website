import * as React from "react";
import {
  linkedIn,
  linkedInLink,
  gitHub,
  gitHubLink,
  instagram,
  instagramLink,
  education,
  portfolio,
  contact,
} from "../../data.js";

import { sideMenu } from "./sideMenu.module.css";
import MenuLink from "./menuLink";

// the menu that displays once the user clicks on the upper right icon in the navbar
const SideMenu = (props) => {
  return (
    <div
      className={sideMenu}
      style={props.open ? { maxWidth: "2.5rem" } : { maxWidth: 0 }}
    >
      <MenuLink icon={linkedIn} link={linkedInLink} />
      <MenuLink icon={gitHub} link={gitHubLink} />
      <MenuLink icon={instagram} link={instagramLink} />

      <MenuLink icon={portfolio} />
      <MenuLink icon={education} />
      <MenuLink icon={contact} />
    </div>
  );
};

export default SideMenu;
