import './NavContactCarousel.css'

function NavContactCarousel() {
     return (
         <button className="navContactCarousel">
            <div className="navContactItems">
                <a href="tel:+44 7828 835508" className="navContactNumber">07828 835508</a>
                {/*<a href="mailto:info@miahtaxis.com" className="navContactEmail">info@miahtaxis.com</a>*/}
            </div>
        </button>
    );
}

export default NavContactCarousel;