import "./Contact.css"
import { ViewTransition } from 'react';

function ContactItem({ iconSrc, iconAlt, sub, contactLink, contactLinkText }) {
    return (
        <a className="contactItem" href={ contactLink } name={`${ iconAlt } Link`}>
            <img className="glassCard contactIcon" src={ iconSrc } alt={ iconAlt }></img>
            <p className="contactSubtitle">{ sub }</p>
            <p className="contactLink">{ contactLinkText }</p>
        </a>
    )
}

function Contact() {
    return (
        <ViewTransition
            default="none"
            enter="slide-up"
            exit="slide-down"
        >
            <div className="standardPage">
                <h1>Contact us</h1>
                <div
                    className="contactContainer"
                >
                    <ContactItem iconSrc="./images/icons/email.svg" iconAlt="Email" sub="Email Us at:" contactLink="mailto:kayummiah973@gmail.com" contactLinkText="kayummiah973@gmail.com" />
                    <ContactItem iconSrc="./images/icons/phone.svg" iconAlt="Phone" sub="Phone Us at:" contactLink="tel:+44 7828 835508" contactLinkText="07828 835508" />
                    <ContactItem iconSrc="./images/icons/whatsapp.svg" iconAlt="Whatsapp" sub="Contact Us on Whatsapp:" contactLink="https://wa.link/crkr5r" contactLinkText="07828 835508" />
                    <ContactItem iconSrc="./images/icons/facebook.svg" iconAlt="Facebook" sub="Check out our Facebook:" contactLink="https://www.facebook.com/people/kayums-taxis/61592492192335/" contactLinkText="Facebook" />
                </div>
            </div>
        </ViewTransition>
    );
}

export default Contact;