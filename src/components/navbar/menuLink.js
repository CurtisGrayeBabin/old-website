import * as React from "react";
import { sidebarButton } from "./sideMenu.module.css";

// these are the links in the side menu
// some links are internal, and some are external (social media profiles)
// if a link prop isn't passed then the MenuLink is for an internal page or section
const MenuLink = (props) => {
  return (
    <div className={sidebarButton}>
      {props.link ? (
        <a href={props.link} target="_blank" rel="noreferrer">
          {props.icon}
        </a>
      ) : (
        props.icon
      )}
    </div>
  );
};

export default MenuLink;
