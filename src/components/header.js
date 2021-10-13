import * as React from 'react';
import {
    header,
    svg1
} from '../styles/header.module.css'

const Header = (props) => {
    return (
        <header className={header}>
            <div>
                <a href="wikipedia.com">
                    <svg xmlns="http://www.w3.org/2000/svg" className={svg1} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <span>Curtis Babin</span>
                </a>

                <nav>
                    <a href="wikipedia.com">First Link</a>
                    <a href="wikipedia.com">Second Link</a>
                    <a href="wikipedia.com">Third Link</a>
                </nav>

            </div>
        </header>
    )
}   

export default Header;