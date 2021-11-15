import React from 'react'

const Project = ({className,liveUrl, projectTitle, description, videoSrc}) => {
    return (
        <article className={className}>
            <h2><a href={liveUrl} target="_">{projectTitle}</a></h2>

            {description}
        </article>
    )
}

export default Project
