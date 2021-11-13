import * as React from 'react';
import { Link } from 'gatsby'
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { FaUserGraduate } from 'react-icons/fa';
import { HiCode } from 'react-icons/hi';
import { sideMenu, iconStyle } from './sideMenu.module.css'
import MenuLink from './menuLink'

// the menu that displays once the user clicks on the upper right icon in the navbar
const SideMenu = (props) => {

    const [linkedIn,linkedInLink] = [<BsLinkedin className={iconStyle}/>,"https://www.linkedin.com/in/curtisbabin/"]
    const [gitHub,gitHubLink] = [<BsGithub className={iconStyle}/>,"https://github.com/CurtisGrayeBabin"]
    const [instagram,instagramLink] = [<BsInstagram className={iconStyle}/>,"https://www.instagram.com/curtis.g.babin/"]
    
    const credible = <Link to="/#education"><FaUserGraduate className={iconStyle}/></Link>
    const portfolio = <Link to="/#portfolio"><HiCode className={iconStyle}/></Link>

    return (
        <div className={sideMenu} style={props.open ? {width: '3rem'} : {width:0}}>
            
            <MenuLink icon={linkedIn} link={linkedInLink}/>
            <MenuLink icon={gitHub} link={gitHubLink}/>
            <MenuLink icon={instagram} link={instagramLink}/>

            <MenuLink icon={credible}/>
            <MenuLink icon={portfolio}/>

        </div>
    );
}

export default SideMenu