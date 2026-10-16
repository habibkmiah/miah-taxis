import { NavLink } from 'react-router-dom';

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
                background: 'linear-gradient(to bottom, #0d1321af, #5a89b900)',
            }}
        >
            <div className="navbar-logo">
                <h3>Miah Taxis</h3>
            </div>
            <p>Serving the Southend area</p>
            <div className="navbar-links"
                style={{marginLeft: 'auto', display: 'flex', gap: '10px'}}
            >
                <NavLink to="/" className="navBtn" style={navLinkStyles}>
                    Home
                </NavLink>
                <NavLink to="/about" className="navBtn" style={navLinkStyles}>
                    About Us
                </NavLink>
                <NavLink to="/contact" className="navBtn" style={navLinkStyles}>
                    Contact Us
                </NavLink>
                <NavLink to="/quote" className="navBtn" id="quote-btn" style={navLinkStyles}>
                    Get a Quote
                </NavLink>

            </div>
        </nav>        
    )}

    export default NavBar;