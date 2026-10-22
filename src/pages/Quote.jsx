import "./Quote.css"
import { ViewTransition } from 'react';

function Quote() {
    return (
        <ViewTransition
            default="none"
            enter="slide-up"
            exit="slide-down"
        >
            <div className="standardPage">
                <h1>Get a Quote</h1>
                <p>To get a quote for our taxi services, please fill out the form below:</p>
                <form className="quoteForm glassCard">
                    <div className="inputField">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="inputField">
                        <label htmlFor="type">Trip Type:</label>
                        <input type="text" id="type" name="type" required />
                    </div>
                    <div className="inputField">
                        <label htmlFor="pickup">Pickup Location:</label>
                        <input type="text" id="pickup" name="pickup" required />
                    </div>
                    <div className="inputField">
                        <label htmlFor="destination">Destination:</label>
                        <input type="text" id="destination" name="destination" required />
                    </div>
                    <div className="inputField">
                        <label htmlFor="return">Return Trip Required?</label>
                        <input type="text" id="return" name="return" required />
                    </div>
                    <div className="submitContainer">
                        <input className ="submit" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </ViewTransition>
    );
}

export default Quote;