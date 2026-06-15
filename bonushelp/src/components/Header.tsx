import React from 'react';

interface HeaderProps {
  mode: string;
  setMode: (mode: 'bonusDenialGenerator' | 'bonusAddedGenerator') => void;
}


const Header: React.FC<HeaderProps> = ({setMode}): React.ReactElement => {

  return (
    <div style={{
      background: "rgb(30,30,30)",
      color: "gold",
      borderRadius: 2,
      margin: 10
    }}>
      <button
        onClick={ () => { setMode("bonusDenialGenerator")}}
      >
        Bonus Denial Generator
      </button>
      <button
        onClick={ () => { setMode("bonusAddedGenerator")}}
      >
        Bonus Added Generator
      </button>
    </div>
  );
}

export default Header;