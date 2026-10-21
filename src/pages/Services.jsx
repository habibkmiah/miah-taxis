import { ViewTransition } from 'react';

function Services() {
    return(
        <ViewTransition
            default="none"
            enter="slide-up"
            exit="slide-down"
        >
            <div className="smoothScrollContainer">
                <div className="smoothScrollSection">
                    <h2>Local Drops</h2>
                    <p>We offer local trips within Rayleigh and surrounding areas.</p>
                </div>
                <div className="smoothScrollSection">
                    <h2>Airport Services</h2>
                    <p>We offer airport transfers to and from: </p>
                    <ul>
                        <li>Stansted Airport</li>
                        <li>London Gatwick Airport</li>
                        <li>Southend Airport</li>
                    </ul>
                    <p>With 24/7 availability and flight tracking you can travel with peace of mind.</p>
                    <p>If you have any specific requirements or questions about our airport transfer services, please don't hesitate to contact us.</p>
                </div>
                <div className="smoothScrollSection">
                    <h2>Long Distance Journeys</h2>
                    <p>On request, we can offer long distance journeys at a competitive price.</p>
                    <p>Sinply get in contact to discuss arrangements.</p>
                </div>
                <img className = "down-arrow" src="/images/icons/down-arrow.svg" alt="▼" aria-hidden="true"/>
            </div>
        </ViewTransition>
    )
}

export default Services