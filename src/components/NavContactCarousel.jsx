import './NavContactCarousel.css'

function NavContactCarousel() {
     return (
         <div className="navContactCarousel">
            <div className="navContactItems">
                <a href="tel:+441234567890" className="navContactNumber">+44 1234 567890</a>
                {/*<a href="mailto:info@miahtaxis.com" className="navContactEmail">info@miahtaxis.com</a>*/}
            </div>
        </div>
    );
}

export default NavContactCarousel;