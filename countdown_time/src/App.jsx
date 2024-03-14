import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countdown from './components/Clock'

function App() {
  return (
    <>
      <Countdown timeTillDate="15 3 2024, 6:00 am" timeFormat="DD MM YYYY, h:mm a" />
    </>
  )
}

export default App


