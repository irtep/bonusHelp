import { useState } from 'react'
//import reactLogo from './assets/react.svg'

import BonusDenialGenerator from "./components/BonusDenialGenerator"
import BonusAddedGenerator from "./components/BonusAddedGenerator"
import Footer from "./components/Footer"
import Header from "./components/Header"
import BonusGrantedManual from './components/BonusGrantedManual'
import ReportSummary from './components/ReportSummary'

export type Modes = 'bonusDenialGenerator' | 'bonusAddedGenerator' | 'gwBonusOk' | 'all' | 'responses' | 'reportSummary';

function App() {
  const [mode, setMode] = useState<Modes>('bonusDenialGenerator');
  const [msg, setMsg] = useState<string>('');

  return (
    <>
      <Header mode={mode} setMode={setMode} msg={msg} />

      <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', alignItems: 'flex-start' }}>

        {
          (mode === 'bonusDenialGenerator') && <BonusDenialGenerator setMsg={setMsg} />
        }

        {
          (mode === 'bonusAddedGenerator') && <BonusAddedGenerator setMsg={setMsg} />
        }

        {
          (mode === 'gwBonusOk') && <BonusGrantedManual setMsg={setMsg} />
        }

        {
          (mode === 'responses') && (
            <>
              <BonusDenialGenerator setMsg={setMsg} />
              <BonusGrantedManual setMsg={setMsg} />
            </>
          )
        }

        {
          (mode === 'all') && (
            <>
              <BonusDenialGenerator setMsg={setMsg} />
              <BonusGrantedManual setMsg={setMsg} />
              <BonusAddedGenerator setMsg={setMsg} />
            </>
          )
        }

        {
          (mode === 'reportSummary') && <ReportSummary />
        }

      </div>

      <Footer />
    </>
  )
}

export default App
