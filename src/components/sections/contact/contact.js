import React, { useState } from 'react'
import { GrMail } from 'react-icons/gr'
import { iconLight } from '../../../global styles/icons.module.css'
import { adaHeader } from '../../../global styles/index.module.css'
import { 
    formFrame, 
    contactH2, 
    sendMeMessage, 
    inputSection, 
    label, 
    emailInput,
    messageInput,
    button
} from './contact.module.css'

const Contact = (props) => {

    const formId = "contactForm"
    const submitButtonId = "submit"
    const sendMeMessageContent = 'Feel free to send me a message directly below! From constructive critiques to website requests, I will get back to you shortly.'

    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')
    const [emailPlaceholder,setEP] = useState('your@email.com')
    const [messagePlaceholder,setMP] = useState('Hello there, I would like to let you know that...')
    const [disabledStatus,setDisabledStatus] = useState(false)

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handleMessageChange = (event) => {
        setMessage(event.target.value)
    }

    const handleSubmit = (event) => {

        // prevent page reload
        event.preventDefault()

        
        alert(`Here is email: ${email} - Here is message: ${message}`)

        // clear the fields
        document.getElementById(formId).reset();

        // lock out the form to somewhat prevent spam
        setDisabledStatus(!disabledStatus)
        setEP('Thank')
        setMP('You!')
    }


    return (
        <section>
            <h1 className={adaHeader}>
                Contact
            </h1>
            <h2>
                <GrMail className={iconLight}/> 
            </h2>

            <form className={formFrame} onSubmit={handleSubmit} id={formId}>
                <h2 className={contactH2}>Contact me</h2>
                
                <p className={sendMeMessage}>{sendMeMessageContent}</p>
                
                <fieldset disabled={disabledStatus}>
                    <div className={inputSection}>
                        <label className={label}>
                            Email:
                            <input type="email" id="email" name="email" className={emailInput} onChange={handleEmailChange} minLength={10} placeholder={emailPlaceholder} required/>
                        </label>
                    </div>

                    <div className={inputSection}>
                        <label className={label}>
                            Message:
                            <textarea id="message" name="message" className={messageInput} onChange={handleMessageChange} placeholder={messagePlaceholder} minLength={15} required></textarea>
                        </label>
                    </div>

                    <input type="submit" value="Send" id={submitButtonId} className={button} />
                </fieldset>
            </form>

        </section>
    )
}

export default Contact
