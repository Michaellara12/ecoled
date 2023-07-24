import { useEffect } from 'react'
import './App.css'

function App() {
  
  const randomValue = Math.random();

  useEffect(() => {
     // Get a random number between 0 and 1

    // Define the two URLs you want to split the traffic between
    const url1 = 'https://api.whatsapp.com/send?phone=573118823072&text=Hola%20grupo%20Ecoled,%20quisiera%20saber%20m%C3%A1s%20sobre%20sus%20paneles%20solares';
    const url2 = 'https://api.whatsapp.com/send?phone=573132623425&text=Hola%20grupo%20Ecoled,%20quisiera%20saber%20m%C3%A1s%20sobre%20sus%20paneles%20solares';

    // Check if the random value is less than 0.5 (50% probability)
    // and redirect accordingly
    if (randomValue < 0.5) {
      window.location.href = url1;
    } else {
      window.location.href = url2;
    }
  }, [])

  return (
    <>
      <div>
          <img className="logo" alt="Vite logo" src="/logo.png" />
      </div>
      <h1>Grupo Ecoled Colombia</h1>
      <div className="card">
        <p>
          Te estamos conectando con un agente...
        </p>
      </div>
    </>
  )
}

export default App
