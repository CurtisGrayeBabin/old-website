import * as React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import { FaUserGraduate } from 'react-icons/fa';
import { iconWhite } from '../styles/icons.module.css'

const Credible = (props) => {
    return (
        <section>
            {/* decided to use an icon as the symbol for a section header */}
            <FaUserGraduate className={iconWhite}/> 
            
            
            <StaticImage src="../images/udacity.jpg" alt="My Udacity Nanodegree certificate for completing their Full Stack JavaScript Developer program" />
            <div style={{'padding':'2vh 0 2vh 0'}}></div>
            <StaticImage src="../images/codecademycert.jpg" alt="My Codecademy certificate for completing their Web Development Career Path program" />
            <div style={{'padding':'2vh 0 2vh 0'}}></div>
            <StaticImage src="../images/degree.jpg" alt="My Bachelor of Science degree in Computer Science from University of California, Irvine" />
            <div style={{'padding':'2vh 0 2vh 0'}}></div>
        </section>
    )
}   

export default Credible;