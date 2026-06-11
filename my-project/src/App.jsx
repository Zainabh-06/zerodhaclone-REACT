import './App.css'

function App() {
  

  return (
    <>
    <section style={{textAlign:"center"}}>
      <header style={{display:"flex", justifyContent:"space-evenly"}}>
      <img src="https://zerodha.com/static/images/logo.svg" height={20} width={70}  alt="logo"/>

      <nav style={{display:"flex", gap:"20px", alignItems:"center"}}>
        <a href="">Signup</a>
        <a href="">About</a>
        <a href="">Pricing</a>
        <a href="">Products</a>
        <a href="">Support</a>
      </nav>
      </header>
   
    
    <img src="https://zerodha.com/static/images/landing.svg" height={400} weight={400}  alt=""/>
    <h3>Invest in everything</h3>
    <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
    <button id="btn">Signup for free</button>
    </section>
    </>
  )
}

export default App
