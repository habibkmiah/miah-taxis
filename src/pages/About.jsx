import { ViewTransition } from 'react';

function About() {
    //const [activeBreadcrumb, setActiveBreadcrumb] = useState(0);

    return (
        <ViewTransition
            default="none"
            enter="slide-up"
            exit="slide-down"
        >
            <div
                className="smoothScrollContainer"
            >
                <div className="smoothScrollSection">
                    <h1>About Us</h1>
                    <p>We are a family-run taxi service based in Rayleigh, dedicated to providing safe and reliable transportation for our customers. We are committed to ensuring that you reach your destination on time and in comfort. Whether you need a ride to the airport, a night out, or just a quick trip across town, Miah Taxis is here to serve you.</p>
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
                    <p>We serve our customers with a Toyota Prius offering 4 seats and ample luggage space.</p>
                </div>
                <div className="smoothScrollSection">
                    <h2>Licence</h2>
                    <p>Hackney Carriage Licence</p>
                </div>
                {/*
                    <div className="breadcrumb_aboutUs">
                        <span className="breadcrumb" id="b0"></span>
                        <span className="breadcrumb" id="b1"></span>
                        <span className="breadcrumb" id="b2"></span>
                        <span className="breadcrumb" id="b3"></span>
                    </div>
                */}
                <img className = "down-arrow" src="/images/icons/down-arrow.svg" alt="▼" aria-hidden="true"/>
            </div>
        </ViewTransition>
    );
}

export default About;