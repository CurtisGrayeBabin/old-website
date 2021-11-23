import * as React from 'react';
import { HiCode } from 'react-icons/hi';
import { icon } from '../../../global styles/icons.module.css'
import { portfolio, adaHeader } from './portfolio.module.css'
import Project from './Project'
import { StaticImage } from "gatsby-plugin-image"

const Portfolio = (props) => {

    // card content below the image
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
            {/* accessible header */}
            <h1 className={adaHeader}>Portfolio</h1>
            <h2><HiCode className={icon}/></h2>

            <Project 
                liveUrl="https://store.curtisbabin.com"
                projectTitle="store.curtisbabin.com"
                description={storeDescription}
                img={storeImg}
                repoLink="https://github.com/CurtisGrayeBabin/my-store"
            />
            <div style={{height: '50vh'}}></div>

        </section>
    )
}   

export default Portfolio;