import * as React from 'react';
import {
    header,
    svg1,
    main
} from '../styles/header.module.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'gatsby'
import Headroom from 'react-headroom'

const styleForIcons = {
    fontSize: '30px'
}

const Header = (props) => {
    return (
        <Headroom>
            <header className={header}>
                <Link to="/" activeClassName={main}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={svg1} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <span>Curtis Babin</span>
                </Link>

                <nav>
                    <a href="https://github.com/CurtisGrayeBabin" target="_blank" rel="noopener noreferrer" aria-label="Curtis Babin's GitHub account link"><GitHubIcon style={styleForIcons}/></a>
                    <a href="https://www.linkedin.com/in/curtisbabin/" target="_blank" rel="noopener noreferrer" aria-label="Curtis Babin's LinkedIn account link"><LinkedInIcon style={styleForIcons}/></a>
                    <a href="https://www.instagram.com/curtis.g.babin/" target="_blank" rel="noopener noreferrer" aria-label="Curtis Babin's Instagram account link"><InstagramIcon style={styleForIcons}/></a>
                </nav>
            </header>
        </Headroom>
    )
}   

export default Header;