import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
    </>
  )
}

export default App
