import * as React from 'react';
import {
    headerText
} from '../styles/layout.module.css'
import { StaticImage } from "gatsby-plugin-image"

const Credible = (props) => {

    return (
        <section>
            <h1 className={headerText}>Achievements</h1>
            <div style={{height: '4vh'}}></div>
            <StaticImage src="../images/udacity.jpg" alt="My Udacity Nanodegree certificate for completing their Full Stack JavaScript Developer program" />
            <div style={{height: '15vh'}}></div>
            <StaticImage src="../images/codecademycert.jpg" alt="My Codecademy certificate for completing their Web Development Career Path program" />
            <div style={{height: '15vh'}}></div>
            <StaticImage src="../images/degree.jpg" alt="My Bachelor of Science degree in Computer Science from University of California, Irvine" />
        </section>
    )
}   

export default Credible;