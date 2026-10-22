import { NavLink } from 'react-router-dom';
import { useState, startTransition, ViewTransition } from 'react';
import NavContactCarousel from './NavContactCarousel.jsx';

const navLinkStyles = ({ isActive }) => ({
  backgroundColor: isActive ? '#1d2d4485' : '#1d2d4400',
});
const navLinkMobStyles = ({ isActive }) => ({
  backgroundColor: isActive ? '#3e5c76da' : '#1d2d4400',
});

function NavBar() {
    const [open, setOpen] = useState(false);
    const toggle = () => startTransition(() => setOpen(o => !o));

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
                <button className="menuBtn" onClick={toggle} ><img height="32px" src="/images/icons/menu.svg" /></button>
                { open &&
                    <ViewTransition
                        default="none"
                        enter="slide-in"
                        exit="auto"
                    >
                        <div className="navbarLinksMobile">
                            <button className="menuBtn" onClick={toggle} ><img height="32px" src="/images/icons/menu.svg" /></button>
                            <NavLink to="/" className="navBtnMob" style={navLinkMobStyles} onClick={toggle} >
                                Home
                            </NavLink>
                            <NavLink to="/About" className="navBtnMob" style={navLinkMobStyles} onClick={toggle} >
                                About Us
                            </NavLink>
                            <NavLink to="/Services" className="navBtnMob" style={navLinkMobStyles} onClick={toggle} >
                                Services
                            </NavLink>
                            {/*
                                <NavLink to="/FAQ" className="navBtnMob" style={navLinkMobStyles} onClick={toggle} >
                                    FAQ
                                </NavLink>
                            */}
                            <NavLink to="/ContactUs" className="navBtnMob" style={navLinkMobStyles} onClick={toggle} >
                                Contact Us
                            </NavLink>
                            <NavLink to="/Quote" className="navBtnMob" id="quoteBtnMob" style={navLinkMobStyles} onClick={toggle} >
                                Get a Quote
                            </NavLink>
                        </div>
                    </ViewTransition>
                }
            </nav>
        </>   
    )}

    export default NavBar;