import * as React from 'react';
import {
    header,
    svg1,
    main,
    menu
} from '../styles/header.module.css'
import { BiMenuAltRight } from "react-icons/bi";
import { BsArrowBarRight } from "react-icons/bs";

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

                    <button id="button" onClick={openOrCloseMenu}>
                        <BiMenuAltRight className={menu}/>

                        <div id="menu" style={{display:'none'}}>
                            <div style={{height:'100%','position':'fixed',right:'0px','backgroundColor':'white','display':'block'}}>
                                <a href='#'>option 1</a>
                                <br></br>
                                <a href='#'>option 2</a>
                                <br></br>
                                <a href='#'>option 3</a>
                            </div>
                        </div>

                    </button>


                </header>
            </Headroom>


        </>
    )
}   

export default Header;