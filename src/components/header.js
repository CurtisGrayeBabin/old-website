import * as React from 'react';
import {
    header,
    svg1,
    main
} from '../styles/header.module.css'
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from 'gatsby'
import Headroom from 'react-headroom'

const styleForIcons = {
    fontSize: '30px',
    margin: 'auto 0 auto auto'
}


const Header = (props) => {
    return (
        <Headroom>
            <header className={header}>
                <Link to="/" className={main}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={svg1} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <span style={{'userSelect': 'none'}}>Curtis Babin</span>
                </Link>

                <BiMenuAltRight style={styleForIcons}/>
            </header>
        </Headroom>
    )
}   

export default Header;