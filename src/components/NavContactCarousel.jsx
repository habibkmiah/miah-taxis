import './NavContactCarousel.css#'

function NavContactCarousel() {
     return (
         <div className="navContactCarousel">
            <div className="navContactItems">
                <a href="tel:+441234567890" className="navContactLink">+44 1234 567890</a>
                <a href="mailto:info@miahtaxis.com" className="navContactLink">info@miahtaxis.com</a>
            </div>
        </div>
    );
}

export default NavContactCarousel;