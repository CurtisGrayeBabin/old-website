import * as React from 'react';
import { HiCode } from 'react-icons/hi';
import { icon } from '../styles/icons.module.css'
import { top } from '../styles/layout.module.css'

const Portfolio = (props) => {
    return (
        <section className={top}>
            <HiCode className={icon}/> 
        </section>
    )
}   

export default Portfolio;