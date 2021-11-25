import React from 'react'
import { GrMail } from 'react-icons/gr'
import { iconLight } from '../../../global styles/icons.module.css'
import { adaHeader } from '../../../global styles/index.module.css'

const Contact = (props) => {
    return (
        <section>
            <h1 className={adaHeader}>
                Contact
            </h1>
            <h2>
                <GrMail className={iconLight}/> 
            </h2>
        </section>
    )
}

export default Contact
