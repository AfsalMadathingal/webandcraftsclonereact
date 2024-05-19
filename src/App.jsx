import { useState } from 'react'
import './App.css'
import SmallScreen from './components/SmallScreen/SmallScreen'
import Home from './Pages/Home/Home'
import useWindowSize from './Hook/WindowSize'

function App() {
  
  const { width } = useWindowSize();

  return (
    <>
        {width >= 1800 ? <Home /> : <SmallScreen />}
    </>
  )
}

export default App
