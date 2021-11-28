import React from 'react'
import { footer } from './footer.module.css'
// the following are external links
import { linkedInSM, linkedInLink, gitHubSM, gitHubLink, instagramSM, instagramLink } from '../../data.js'

const Footer = (props) => {

    return (
        <div className={footer}>
            <p><small>Curtis Babin | Front-end developer</small></p>
            <nav>
                <a href={linkedInLink} target="_blank" rel="noreferrer">
                    {linkedInSM}
                </a>
                <a href={gitHubLink} target="_blank" rel="noreferrer">
                    {gitHubSM}
                </a>
                <a href={instagramLink} target="_blank" rel="noreferrer">
                    {instagramSM}
                </a>
            </nav>
            <p><small>{new Date().getFullYear()}</small></p>
        </div>
    )
}

export default Footer