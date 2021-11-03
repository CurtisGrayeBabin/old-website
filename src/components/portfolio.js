import * as React from 'react';
import { HiCode } from 'react-icons/hi';
import { icon, top } from '../styles/icons.module.css'

const Portfolio = (props) => {
    return (
        <section className={top}>
            <HiCode className={icon}/> 
        </section>
    )
}   

export default Portfolio;