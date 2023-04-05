import { useState } from 'react'
import './App.css'
import Header from './assets/components/Header/Header'
import Shop from './assets/components/Shop/Shop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Header></Header>
      <Shop></Shop>

    </div>
  )
}

export default App
