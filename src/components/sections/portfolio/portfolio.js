import * as React from 'react';
import { HiCode } from 'react-icons/hi';
import { icon } from '../../../global styles/icons.module.css'
import { portfolio } from './portfolio.module.css'
import Project from './Project'
import { StaticImage } from "gatsby-plugin-image"

const Portfolio = (props) => {

    const storeDescription = (
        <ul>
            <li>Angular e-commerce app</li>
            <li>Uses the Web Storage API (localStorage) for a persisting cart across sessions</li>
            <li>Responsive design with Bootstrap styling</li>
        </ul>
    )

            
    const storeImg = <StaticImage src="../../../images/store.png" alt="An image of my Angular e-commerce application" />



    return (

        <section className={portfolio}>
            <h1>
                <HiCode className={icon}/> 
            </h1>


            <Project 
                liveUrl="https://store.curtisbabin.com"
                projectTitle="store.curtisbabin.com"
                description={storeDescription}
                img={storeImg}
                repoLink="https://github.com/CurtisGrayeBabin/my-store"
            />

            
        </section>
    )
}   

export default Portfolio;