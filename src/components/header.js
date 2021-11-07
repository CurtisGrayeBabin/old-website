import * as React from 'react';
import {
    header,
    svg1,
    main,
    menu
} from '../styles/header.module.css'
import { BiMenuAltRight } from "react-icons/bi";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { FaUserGraduate } from 'react-icons/fa';
import { HiCode } from 'react-icons/hi';
import { Link } from 'gatsby'
import Headroom from 'react-headroom'


const Header = (props) => {

    let x = true;

    const openOrCloseMenu = () => {
        if(x){
            openMenu()
        }
        else{
            closeMenu()
        }
        x = !x;
    }

    const openMenu = () => {
        document.getElementById("menu").style.width = "10vw";
        document.getElementById("menu").style.display = "block";
    }

    const closeMenu = () => {
        document.getElementById("menu").style.width = "0";
        document.getElementById("menu").style.display = "none";
    }

    const sidebarButton = {'margin':'2vh 0 0 0'}
    const iconStyle = {'width':'100%','fontSize':'1.75rem'}

    return (
        <>
            <Headroom>
                <header className={header}>
                    <Link to="/" className={main}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className={svg1} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                            <span style={{'userSelect': 'none'}}>Curtis Babin</span>
                        </div>
                    </Link>
                    
                    {/* todo: switch icon when menu is active */}
                    <button id="button" onClick={openOrCloseMenu}>
                        <BiMenuAltRight className={menu}/>
                    </button>

                </header>

            </Headroom>

            {/* current 'side menu' that will be a component */}
            <div id="menu" style={{display:'none'}}>
                <div style={{height:'81%','position':'fixed',right:'0px','display':'flex','flexDirection':'column','justifyContent':'space-between',zIndex:2,'width': '8vw'}}>
                    <div style={sidebarButton}>
                        <a href="https://www.linkedin.com/in/curtisbabin/" target="_blank" rel="noreferrer">
                            <BsLinkedin style={iconStyle}/>
                        </a>
                    </div>
                    
                    <div style={sidebarButton}>
                        <a href="https://github.com/CurtisGrayeBabin" target="_blank" rel="noreferrer">
                            <BsGithub style={iconStyle}/>
                        </a>
                    </div>
                    
                    <div style={sidebarButton}>
                        <a href="https://www.instagram.com/curtis.g.babin/" target="_blank" rel="noreferrer">
                        <BsInstagram style={iconStyle}/>
                        </a>
                    </div>
                    
                    <div style={sidebarButton}>
                        <Link to="#credible">
                            <FaUserGraduate style={iconStyle}/>
                        </Link>
                    </div>
                    
                    <div style={sidebarButton}>
                        <Link to="#portfolio">
                            <HiCode style={iconStyle}/>
                        </Link>
                    </div>
                </div>
            </div>
            
        </>
    )
}   

export default Header;