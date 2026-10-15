function NavBar({ page, setPage }) {
    return (
        <nav className="navbar"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '10px',
                //padding: '10px',
                //backgroundColor: '#0d1321',
            }}
        >
            <div className="navbar-logo">
                <h1>Miah Taxis</h1>
            </div>
            <p>Serving the Southend area</p>
            <div className="navbar-links"
            style={{marginLeft: 'auto', display: 'flex', gap: '10px'}}
            >
                <button onClick={() => setPage('Home')} className="navBtn" style={{ backgroundColor: page === 'Home' ? '#1D2D44' : '#1d2d4400'}}>
                    Home
                </button>
                <button onClick={() => setPage('About')} className="navBtn" style={{ backgroundColor: page === 'About' ? '#1D2D44' : '#1d2d4400'}}>
                    About Us
                </button>
                <button onClick={() => setPage('Contact')} className="navBtn" style={{ backgroundColor: page === 'Contact' ? '#1D2D44' : '#1d2d4400'}}>
                    Contact Us
                </button>
                <button onClick={() => setPage('Quote')} className="navBtn" style={{ backgroundColor: page === 'Quote' ? '#1D2D44' : '#1d2d4400'}}>
                    Get a Quote
                </button>
            </div>
        </nav>        
    )}

    export default NavBar;