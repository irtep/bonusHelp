import React from 'react';
import WorldClock from './WorldClock';
import type { Modes } from '../App';

interface HeaderProps {
  mode: string;
  setMode: (mode: Modes) => void;
}

const Header: React.FC<HeaderProps> = ({ setMode }): React.ReactElement => {

  return (
    <div style={{
      background: "rgb(30,30,30)",
      color: "gold",
      borderRadius: 2,
      margin: 10,
      textAlign: "center"
    }}>
	  <div>
		  <button
			style={{ margin: 5, background: 'blue', color: 'white' }}
			onClick={() => { setMode("bonusDenialGenerator") }}
		  >
			Bonus Denial Generator
		  </button>

		  <button
			style={{ margin: 5, background: 'yellow' }}
			onClick={() => { setMode("bonusAddedGenerator") }}
		  >
			Bonus Campaign Generator
		  </button>

		  <button
			style={{ margin: 5, background: 'green' }}
			onClick={() => { setMode("gwBonusOk") }}
		  >
			GW bonus granted when asked generator
			</button> 
        </div>
        <div>
		  <button
			style={{ margin: 5, background: 'blue', color: 'white' }}
			onClick={() => { setMode("responses") }}
		  >
			show responses to gw asks
		  </button>

		  <button
			style={{ margin: 5, background: 'yellow' }}
			onClick={() => { setMode("all") }}
		  >
			show all generators
		  </button>
        </div>
        <WorldClock/>
    </div>
  );
}

export default Header;
