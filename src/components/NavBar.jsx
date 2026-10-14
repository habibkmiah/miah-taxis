function NavBar({ page, setPage }) {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>Miah Taxis</h1>
            </div>
            <div>Serving the Southend area</div>
            <div className="navbar-links">
                <button onClick={() => setPage('Home')} style={{ backgroundColor: page === 'Home' ? '#007bff' : '#f8f9fa', color: page === 'Home' ? '#fff' : '#333' }}>
                    Home
                </button>
                <button onClick={() => setPage('About')} style={{ backgroundColor: page === 'About' ? '#007bff' : '#f8f9fa', color: page === 'About' ? '#fff' : '#333' }}>
                    About
                </button>
                <button onClick={() => setPage('Contact')} style={{ backgroundColor: page === 'Contact' ? '#007bff' : '#f8f9fa', color: page === 'Contact' ? '#fff' : '#333' }}>
                    Contact
                </button>
            </div>
        </nav>        
    )}

    export default NavBar;