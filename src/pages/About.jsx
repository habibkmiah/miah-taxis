import useState from 'react';

function About() {
    //const [activeBreadcrumb, setActiveBreadcrumb] = useState(0);

    return (
        <div
            className="smoothScrollContainer"
        >
            <div className="smoothScrollSection">
                <h1>About Us</h1>
                <p>We are a family-run taxi service based in Southend, dedicated to providing safe and reliable transportation for our customers. Our team of experienced drivers is committed to ensuring that you reach your destination on time and in comfort. Whether you need a ride to the airport, a night out, or just a quick trip across town, Miah Taxis is here to serve you.</p>
            </div>
            <div className="smoothScrollSection">
                <h2>Our Values</h2>
                <ul>
                <li>Safety: We prioritize the safety of our passengers and drivers above all else.</li>
                <li>Reliability: We are committed to providing consistent and dependable transportation services.</li>
                <li>Customer Satisfaction: We strive to exceed our customers' expectations and provide an excellent experience.</li>
                </ul>
            </div>
            <div className="smoothScrollSection">
                <h2>Our Fleet</h2>
                <p>We service our routes with a Toyota Prius offering 4 seats and ample luggage space.</p>
            </div>
            <div className="smoothScrollSection">
                <h2>Destinations</h2>
                <p>We serve the Southend and Rayleigh areas, ensuring convenient and reliable transportation for our customers.</p>
                <h2>Airport Transfers</h2>
                <p>We offer reliable airport transfer services with 24/7 availability to and from the local airports, ensuring a smooth and stress-free journey for our passengers, including:</p>
                <ul>
                    <li>Stansted Airport</li>
                    <li>Southend Airport</li>
                    <li>London Gatwick Airport</li>
                </ul>
                <p>If you have any specific requirements or questions about our airport transfer services, please don't hesitate to contact us.</p>
            </div>
            {/*
                <div className="breadcrumb_aboutUs">
                    <span className="breadcrumb" id="b0"></span>
                    <span className="breadcrumb" id="b1"></span>
                    <span className="breadcrumb" id="b2"></span>
                    <span className="breadcrumb" id="b3"></span>
                </div>
            */}
            <img className = "down-arrow" src="/images/icon/down-arrow.svg" alt="▼" aria-hidden="true"/>
        </div>
    );
}

export default About;