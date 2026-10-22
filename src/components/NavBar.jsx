import { NavLink } from 'react-router-dom';
import { useState, ViewTransition } from 'react';
import NavContactCarousel from './NavContactCarousel.jsx';

const navLinkStyles = ({ isActive }) => ({
  backgroundColor: isActive ? '#1d2d4485' : '#1d2d4400',
});

function NavBar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="navbarDesktop">
                <div>
                    <h3>Kayum's Taxis</h3>
                </div>
                <NavContactCarousel />
                <div className="navbarLinksDesktop">
                    <NavLink to="/" className="navBtn" style={navLinkStyles}>
                        Home
                    </NavLink>
                    <NavLink to="/About" className="navBtn" style={navLinkStyles}>
                        About Us
                    </NavLink>
                    <NavLink to="/Services" className="navBtn" style={navLinkStyles}>
                        Services
                    </NavLink>
                    {/*
                        <NavLink to="/FAQ" className="navBtn" style={navLinkStyles}>
                            FAQ
                        </NavLink>
                    */}
                    <NavLink to="/ContactUs" className="navBtn" style={navLinkStyles}>
                        Contact Us
                    </NavLink>
                    <NavLink to="/Quote" className="navBtn" id="quoteBtn" style={navLinkStyles}>
                        Get a Quote
                    </NavLink>

                </div>
            </nav>

            <nav className="navbarMobile">
                <div>
                    <h1>KT</h1>
                </div>
                <NavContactCarousel />
                <button className="menuBtn" onClick={() => setOpen(!open)} ><img height="32px" src="/images/icons/menu.svg" /></button>
                { open &&
                    <ViewTransition
                        default="none"
                        enter="slide-up"
                        exit="slide-down"
                    >
                        <div className="navbarLinksMobile">
                            <button className="menuBtn" onClick={() => setOpen(!open)} ><img height="32px" src="/images/icons/menu.svg" /></button>
                            <NavLink to="/" className="navBtnMob" style={navLinkStyles} onClick={() => setOpen(!open)} >
                                Home
                            </NavLink>
                            <NavLink to="/About" className="navBtnMob" style={navLinkStyles} onClick={() => setOpen(!open)} >
                                About Us
                            </NavLink>
                            <NavLink to="/Services" className="navBtnMob" style={navLinkStyles} onClick={() => setOpen(!open)} >
                                Services
                            </NavLink>
                            {/*
                                <NavLink to="/FAQ" className="navBtnMob" style={navLinkStyles} onClick={() => setOpen(!open)} >
                                    FAQ
                                </NavLink>
                            */}
                            <NavLink to="/ContactUs" className="navBtnMob" style={navLinkStyles} onClick={() => setOpen(!open)} >
                                Contact Us
                            </NavLink>
                            <NavLink to="/Quote" className="navBtnMob" id="quoteBtnMob" style={navLinkStyles} onClick={() => setOpen(!open)} >
                                Get a Quote
                            </NavLink>
                        </div>
                    </ViewTransition>
                }
            </nav>
        </>   
    )}

    export default NavBar;