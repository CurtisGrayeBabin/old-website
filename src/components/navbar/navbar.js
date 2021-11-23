import * as React from 'react'
import { useState } from 'react'
import {
    header,
    svg1,
    main,
    menu
} from './navbar.module.css'
import { BiMenuAltRight } from "react-icons/bi"
import { IoMdClose } from 'react-icons/io'
import { Link } from 'gatsby'
import Headroom from 'react-headroom'
import SideMenu from './sideMenu'
import { hideBlueBox } from '../../global styles/layout.module.css'
//import TransitionGroup from 'react-transition-group/TransitionGroup'

const Navbar = (props) => {

    // using state to manage whether the side menu is open or not
    const [open, setOpen] = useState(false);

    const openOrCloseMenu = () => setOpen(open => !open)

    return (
        <>
            <Headroom>
                <header className={header}>
                    <Link to="/" className={main}>
                        <div className={hideBlueBox}>
                            <svg xmlns="http://www.w3.org/2000/svg" className={svg1} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                            <span>Curtis Babin</span>
                        </div>
                    </Link>
                    
                    <button id="button" onClick={openOrCloseMenu} className={hideBlueBox}>
                        {
                            // side menu icon changes whether the menu is open or not
                            open ? <IoMdClose className={menu}/> : <BiMenuAltRight className={menu}/>
                        }
                    </button>

                </header>

            </Headroom>

            <SideMenu open={open}/>

        </>
    )
}   

export default Navbar