function Quote() {
    return (
        <div className="quote-page">
            <h1>Get a Quote</h1>
            <p>To get a quote for our taxi services, please fill out the form below:</p>
            <form className="quote-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
            </form>
        </div>
    );
}

export default Quote;