import * as React from 'react';
import {
    main
} from '../styles/hero.module.css'


const Hero = (props) => {
    return (
        <section className={main}>
            <h1>I create fast, SEO-friendly websites</h1>
            <h2>Node.js front-end developer</h2>
        </section>
    )
}   

export default Hero;