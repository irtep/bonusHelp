import { useState } from 'react'
//import reactLogo from './assets/react.svg'

import BonusDenialGenerator from "./components/BonusDenialGenerator"
import BonusAddedGenerator from "./components/BonusAddedGenerator"
import Footer from "./components/Footer"
import Header from "./components/Header"
import BonusGrantedManual from './components/BonusGrantedManual'

export type Modes = 'bonusDenialGenerator' | 'bonusAddedGenerator' | 'gwBonusOk' | 'all' | 'responses';

function App() {
  const [mode, setMode] = useState<Modes>('bonusDenialGenerator');

  return (
    <>
      <Header mode={mode} setMode={setMode} />

      {/* This new wrapper div forces everything inside it to sit side-by-side */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', alignItems: 'flex-start' }}>
        {
          (mode === 'bonusDenialGenerator') && <BonusDenialGenerator />
        }
        {
          (mode === 'bonusAddedGenerator') && <BonusAddedGenerator />
        }
        {
          (mode === 'gwBonusOk') && <BonusGrantedManual />
        }
        {
          (mode === 'responses') && (
            <>
              <BonusDenialGenerator />
              <BonusGrantedManual />
            </>
          )
        }
        {
          (mode === 'all') && (
            <>
              <BonusDenialGenerator />
              <BonusGrantedManual />
              <BonusAddedGenerator />
            </>
          )
        }
      </div>

      <Footer />
    </>
  )
}

export default App
