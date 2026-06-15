import React from 'react';

const Footer: React.FC = (): React.ReactElement => {

  return (
    <div style={{
      background: "rgb(30,30,30)",
      color: "gold",
      borderRadius: 2,
      margin: 10
    }}>
      <p>
        Version: 1.0.2
      </p>
    </div>
  );
}

export default Footer;