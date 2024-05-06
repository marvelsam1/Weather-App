import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Weather from './components/Weather'
import Search from './components/Search'

function App() {
  const apiKey = 'a811b0a0e0e001b757d75fa6ae1fff17'

  return (
    <>
      <Weather apiKey={apiKey}/>
    </>
  )
}

export default App
