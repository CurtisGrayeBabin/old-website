import * as React from 'react';
import {
    main,
    downArrow
} from '../styles/hero.module.css'


const Hero = (props) => {

    /* this is the only way I'm able to get animations to work */

    const noWrapStyle = {
        whiteSpace: 'nowrap'
    }

    return (
        <section className={main}>
            <h1>I create single page apps & fast, <span style={noWrapStyle}>SEO-friendly</span> websites</h1>
            <h2>Node.js developer | Front-end engineer</h2>

            <svg xmlns="http://www.w3.org/2000/svg" className={downArrow} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
        </section>
    )
}   

export default Hero;