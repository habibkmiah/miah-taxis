function Home() {
  return (
    <>
      <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 2fr))',
        gap: '20px',
        padding: '2.5% 10% 2.5% 10%',
      }}
      >
        <div
          className="standardTextBox"
        >
          <h1>Welcome to Miah Taxis</h1>
          <p>Your reliable taxi service in the Southend area.</p>
          <p>We offer a range of services to meet your transportation needs, including:</p>
          <ul>
            <li>Competitive Pricing</li>
            <li>Reliable and Punctual Service</li>
            <li>Airport Transfers</li>
          </ul>
        </div>
        <img src="/public/images/journey.svg" alt="Miah Taxis" 
          style={{ width: '80%', height: 'auto', borderRadius: '10px', opacity: '0.5'}}
        />
      </div>
    </>
  )
}

export default Home