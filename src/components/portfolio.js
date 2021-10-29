import * as React from 'react';
import {
    headerText
} from '../styles/layout.module.css'
import { BsFileEarmarkCodeFill } from 'react-icons/bs';

const leaf = {
    'fontSize': '1.3rem',
    'textAlign': 'center',
    'width': '100%'
  }

const Portfolio = (props) => {

    return (
        <section>
            <h1 className={headerText}>Apps</h1>
            <BsFileEarmarkCodeFill style={leaf}/> 
        </section>
    )
}   

export default Portfolio;