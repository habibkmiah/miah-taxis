import "./Contact.css"

function ContactItem({ iconSrc, iconAlt, sub, contactLink, contactLinkText }) {
    return (
        <div className="contactItem">
            <img className="contactIcon" src={iconSrc} alt={iconAlt}></img>
            <p className="contactSubtitle">{sub}</p>
            <a className="contactLink" href={contactLink}>{contactLinkText}</a>
        </div>
    )
}

function Contact() {
    return (
        <div className="standardPage">
            <h1>Contact us</h1>
            <nav
                className="contactContainer"
            >
                <ContactItem iconSrc="./images/icons/email.svg" iconAlt="Email" sub="Email Us at:" contactLink="mailto:kayummiah973@gmail.com" contactLinkText="kayummiah973@gmail.com" />
                <ContactItem iconSrc="./images/icons/phone.svg" iconAlt="Phone" sub="Phone Us at:" contactLink="tel:+44 7828 835508" contactLinkText="07828 835508" />
                <ContactItem iconSrc="./images/icons/whatsapp.svg" iconAlt="Whatsapp" sub="Contact Us on Whatsapp:" contactLink="https://wa.link/crkr5r" contactLinkText="07828 835508" />
                <ContactItem iconSrc="./images/icons/facebook.svg" iconAlt="Facebook" sub="Check out our Facebook:" contactLink="https://www.facebook.com/people/kayums-taxis/61592492192335/" contactLinkText="Facebook" />
            </nav>
        </div>
    );
}

export default Contact;