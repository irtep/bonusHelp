import { useState } from 'react'
//import reactLogo from './assets/react.svg'

import BonusDenialGenerator from "./components/BonusDenialGenerator"
import BonusAddedGenerator from "./components/BonusAddedGenerator"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {
  const [mode, setMode] = useState<'bonusDenialGenerator' | 'bonusAddedGenerator'>('bonusDenialGenerator');

  return (
    <>
      <Header
        mode={mode}
        setMode={setMode}
      />
      {
        (mode === 'bonusDenialGenerator') ?
          <>
            <BonusDenialGenerator />
          </> :
          <></>
      }
      {
        (mode === 'bonusAddedGenerator') ?
          <>
            <BonusAddedGenerator />
          </> :
          <></>
      }

      <Footer />
    </>
  )
}

export default App
