import React from 'react'
import { projectBorder, links, solid, cardInfo } from './portfolio.module.css'
import { BsGithub } from 'react-icons/bs'
import { IoMdOpen } from 'react-icons/io'
import { iconStyle } from '../../../global styles/icons.module.css'

const Project = ({liveUrl, projectTitle, description, img, repoLink}) => {
    return (
        <article className={projectBorder}>
            <div className={cardInfo}>

                <h2><a href={liveUrl} target="_">{projectTitle}</a></h2>
                
                <div>{img}</div>

                <hr className={solid}></hr>

                {description}

                <div className={links}>
                    <a href={repoLink} target="_blank" rel="noreferrer">
                        <BsGithub className={iconStyle}/>
                    </a>
                    <a href={liveUrl} target="_blank" rel="noreferrer">
                        <IoMdOpen className={iconStyle}/>
                    </a>
                </div>
            </div>
        </article>
    )
}

export default Project
