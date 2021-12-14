import React, { useState, useEffect } from "react";
import { GrMail } from "react-icons/gr";
import { icon } from "../../../global styles/icons.module.css";
import { adaHeader } from "../../../global styles/index.module.css";
import {
  formFrame,
  contactH2,
  sendMeMessage,
  inputSection,
  label,
  emailInput,
  messageInput,
  buttonBlue,
  buttonGray,
} from "./contact.module.css";

const Contact = (props) => {
  const sessionKey = "curtisBabinWebsiteUserFormWasSubmitted";
  const formId = "contactForm";
  const sendMeMessageContent =
    "Feel free to send me a message directly below! From constructive critiques to website requests, I will get back to you shortly.";

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailPlaceholder, setEP] = useState("your@email.com");
  const [messagePlaceholder, setMP] = useState(
    "Hello there, I would like to let you know that..."
  );
  const [disabledStatus, setDisabledStatus] = useState(false);

  // called when session storage key exists or user submits form
  const handleDisablingForm = () => {
    setDisabledStatus(true);
    setEP("Thank");
    setMP("You!");
  };

  // check on component mount if the user's already submitted the form
  // if so, disable for this page refresh
  useEffect(() => {
    // check session storage to know whether a user's submitted form data already
    if (sessionStorage.getItem(sessionKey)) handleDisablingForm();
  }, []);

  const handleSubmit = (event) => {
    // prevent page reload
    event.preventDefault();

    // disable form for this user session
    sessionStorage.setItem(sessionKey, true);

    const endpoint = process.env.GATSBY_API_URL;
    const body = JSON.stringify({ senderEmail: email, message: message });
    const reqOptions = { method: "POST", body };

    fetch(endpoint, reqOptions)
      .then((res) => {
        if (!res.ok) {
          alert(
            `Sorry! There was an error in sending your message. Please try again some other time.`
          );
        }
        return res.json();
      })
      .then((res) => {
        // success condition
        alert(`Your message was sent successfully.`);
        // clear and disable form
        document.getElementById(formId).reset();
        handleDisablingForm();
      })
      .catch((err) => {
        alert(
          `Sorry! There was an error in sending your message. Please try again some other time.`
        );
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <section>
      <h1 className={adaHeader}>Contact</h1>
      <h2>
        <GrMail className={icon} />
      </h2>

      <form className={formFrame} onSubmit={handleSubmit} id={formId}>
        <h2 className={contactH2}>Contact me</h2>

        <p className={sendMeMessage}>{sendMeMessageContent}</p>

        <fieldset disabled={disabledStatus}>
          <div className={inputSection}>
            <label className={label}>
              Email:
              <input
                type="email"
                id="email"
                name="email"
                className={emailInput}
                onChange={handleEmailChange}
                minLength={10}
                placeholder={emailPlaceholder}
                required
              />
            </label>
          </div>

          <div className={inputSection}>
            <label className={label}>
              Message:
              <textarea
                id="message"
                name="message"
                className={messageInput}
                onChange={handleMessageChange}
                placeholder={messagePlaceholder}
                minLength={15}
                required
              ></textarea>
            </label>
          </div>

          <button
            type="submit"
            id="submit"
            className={disabledStatus ? buttonGray : buttonBlue}
          >
            Send
          </button>
        </fieldset>
      </form>
    </section>
  );
};

export default Contact;
