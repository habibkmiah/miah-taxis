function Quote() {
    return (
        <div className="standardPage">
            <h1>Get a Quote</h1>
            <p>To get a quote for our taxi services, please fill out the form below:</p>
            <form className="quote-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="name">Trip Type:</label>
                <input type="text" id="type" name="type" required />
                <label htmlFor="name">Pickup Location:</label>
                <input type="text" id="pickup" name="pickup" required />
                <label htmlFor="name">Destination:</label>
                <input type="text" id="destination" name="destination" required />
                <label htmlFor="name">Return Trip Required?</label>
                <input type="text" id="return" name="return" required />
                <input type="button" ></input>
            </form>
        </div>
    );
}

export default Quote;