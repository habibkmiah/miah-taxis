import "./Quote.css"

function Quote() {
    return (
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
                <div className="inputField">
                    <input type="button" ></input>
                </div>
            </form>
        </div>
    );
}

export default Quote;