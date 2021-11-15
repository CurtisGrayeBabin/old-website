import * as React from 'react';
import { HiCode } from 'react-icons/hi';
import { icon } from '../../../global styles/icons.module.css'
import { portfolio, projectBorder } from './portfolio.module.css'
import Project from '../../utilities/Project'

const Portfolio = (props) => {

    const storeDescription = (
        <ul>
            <li>Angular e-commerce application prototype</li>
            <li>Utilizes the localStorage Web API for a persisting cart across sessions</li>
        </ul>
    )



    return (

        <section className={portfolio}>
            <h1>
                <HiCode className={icon}/> 
            </h1>


            <Project 
                className={projectBorder}
                liveUrl="https://store.curtisbabin.com"
                projectTitle="store.curtisbabin.com"
                description={storeDescription}
                videoSrc={""}
            />

            
        </section>
    )
}   

export default Portfolio;