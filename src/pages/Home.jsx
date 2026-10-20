function Home() {
  return (
    <>
      <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gridTemplateRows: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        padding: '2.5% 10% 2.5% 10%',
      }}
      >
        <div
          className="standardPage"
        >
          <h1>Welcome to Miah Taxis</h1>
          <p>Your reliable taxi service in the Southend and Rayleigh area.</p>
          <p>We offer:</p>
          <ul>
            <li>Competitive Pricing</li>
            <li>Reliable and Punctual Service</li>
            <li>Airport Transfers</li>
          </ul>
        </div>
        <img src="/images/journey.svg" alt="Miah Taxis" 
          style={{ width: '80%', height: 'auto', borderRadius: '10px', opacity: '0.5'}}
        />
      </div>
    </>
  )
}

export default Home