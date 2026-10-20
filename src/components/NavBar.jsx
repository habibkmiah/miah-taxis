import { NavLink } from 'react-router-dom';
import NavContactCarousel from './NavContactCarousel.jsx';

const navLinkStyles = ({ isActive }) => ({
  backgroundColor: isActive ? '#1d2d4485' : '#1d2d4400',
});

function NavBar() {
    return (
        <nav className="navbar"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '10px',
                padding: '0 20px 0 20px',
                background: 'linear-gradient(to bottom, #0d1321af, #ffffff00)',
                position: 'sticky',
                top: 0,
                zIndex: 1000,
            }}
        >
            <div className="navbar-logo">
                <h3>Kayum's Taxis</h3>
            </div>
            <NavContactCarousel />
            <div className="navbar-links"
                style={{marginLeft: 'auto', display: 'flex', gap: '10px'}}
            >
                <NavLink to="/" className="navBtn" style={navLinkStyles}>
                    Home
                </NavLink>
                <NavLink to="/About" className="navBtn" style={navLinkStyles}>
                    About Us
                </NavLink>
                <NavLink to="/Services" className="navBtn" style={navLinkStyles}>
                    Services
                </NavLink>
                <NavLink to="/FAQ" className="navBtn" style={navLinkStyles}>
                    FAQ
                </NavLink>
                <NavLink to="/ContactUs" className="navBtn" style={navLinkStyles}>
                    Contact Us
                </NavLink>
                <NavLink to="/Quote" className="navBtn" id="quote-btn" style={navLinkStyles}>
                    Get a Quote
                </NavLink>

            </div>
        </nav>        
    )}

    export default NavBar;