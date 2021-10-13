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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className={svg1} viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
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