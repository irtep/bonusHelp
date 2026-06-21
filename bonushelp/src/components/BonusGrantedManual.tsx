import React, { useState } from 'react';
import { phrasePoolGranted } from '../data/phrasePool';

type Language = 'fi' | 'en' | 'no';
type SignatureStyle = 'none' | 'standard' | 'brandVip';

export const BonusGrantedManual: React.FC = () => {
  const [lang, setLang] = useState<Language>('fi');
  const [sigStyle, setSigStyle] = useState<SignatureStyle>('standard');
  const [brand, setBrand] = useState<string>('');
  const [agentName, setAgentName] = useState<string>('');
  const [generatedText, setGeneratedText] = useState<string>('');

  const getRandomElement = <T,>(arr: T[]): T => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const handleGenerate = () => {
    const pool = phrasePoolGranted[lang];

    const greeting = getRandomElement(pool.greetings);
    const opening = getRandomElement(pool.openings);
    const main = getRandomElement(pool.mainParts);
    const cta = getRandomElement(pool.callsToAction);
    const closing = getRandomElement(pool.closings);
    const signoff = getRandomElement(pool.signoffs);

    const vipTeamText = lang === 'fi' ? 'VIP-tiimi' : lang === 'no' ? 'VIP-team' : 'VIP team';
    const formattedBrand = brand ? brand.charAt(0).toUpperCase() + brand.slice(1) : '';

    // Baseline message structure
    let message = `${greeting},\n\n${opening} ${main}\n\n${cta}\n\n${closing}`;

    // Append signature style dynamic selection
    if (sigStyle !== 'none') {
      message += `\n\n${signoff}`;

      if (sigStyle === 'standard') {
        message += `\n${agentName ? agentName + '\n' : ''}${formattedBrand} ${vipTeamText}`;
      } else if (sigStyle === 'brandVip') {
        message += `\n${agentName ? agentName + '\n' : ''}${formattedBrand} VIP`;
      }
    }

    setGeneratedText(message);
  };

  const handleCopyToClipboard = () => {
    if (generatedText) {
      navigator.clipboard.writeText(generatedText);
      alert(lang === 'fi' ? 'Kopioitu leikepöydälle!' : lang === 'no' ? 'Kopiert til utklippstavle!' : 'Copied to clipboard!');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '1.5rem', fontFamily: 'sans-serif', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'green' }}>
        {lang === 'fi' ? 'GW Myönnetty -Generaattori' : lang === 'no' ? 'GW Innvilget -Generator' : 'Gw Granted Generator'}
      </h2>

      {/* Language Selection */}
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem', color: 'green' }}>
          {lang === 'fi' ? 'Valitse kieli:' : lang === 'no' ? 'Velg språk:' : 'Select Language:'}
        </label>
        <select value={lang} onChange={(e) => setLang(e.target.value as Language)} style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', background: 'black', color: 'white' }}>
          <option value="fi">Suomi (Finnish)</option>
          <option value="en">English</option>
          <option value="no">Norsk (Norwegian)</option>
        </select>
      </div>

      {/* Brand Input */}
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem', color: 'green' }}>
          {lang === 'fi' ? 'Kirjoita brändi:' : lang === 'no' ? 'Skriv merkevare:' : 'Type Brand:'}
        </label>
        <input 
          type="text"
          value={brand} 
          onChange={(e) => setBrand(e.target.value)} 
          placeholder={lang === 'fi' ? 'brand' : 'brand'}
          style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', background: 'black', color: 'white', border: '1px solid #444', boxSizing: 'border-box' }}
        />
      </div>

      {/* Name Input */}
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem', color: 'green' }}>
          {lang === 'fi' ? 'Oma nimesi:' : lang === 'no' ? 'Ditt navn:' : 'Your Name:'}
        </label>
        <input 
          type="text" 
          value={agentName} 
          onChange={(e) => setAgentName(e.target.value)} 
          placeholder={lang === 'fi' ? 'Kirjoita nimesi tähän' : 'Type your name here'}
          style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', background: 'black', color: 'white', border: '1px solid #444', boxSizing: 'border-box' }}
        />
      </div>

      {/* Signature Style Selection */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem', color: 'green' }}>
          {lang === 'fi' ? 'Allekirjoituksen tyyli:' : lang === 'no' ? 'Signaturstil:' : 'Signature Style:'}
        </label>
        <select value={sigStyle} onChange={(e) => setSigStyle(e.target.value as SignatureStyle)} style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', background: 'black', color: 'white', border: '1px solid #444' }}>
          <option value="standard">{lang === 'fi' ? 'Normaali (Nimi & Tiimi)' : lang === 'no' ? 'Standard (Navn & Team)' : 'Standard (Name & Team)'}</option>
          <option value="brandVip">{lang === 'fi' ? 'Vain VIP (Nimi & Brand VIP)' : lang === 'no' ? 'Kun VIP (Navn & Brand VIP)' : 'Brand VIP Only'}</option>
          <option value="none">{lang === 'fi' ? 'Ei allekirjoitusta' : lang === 'no' ? 'Ingen signatur' : 'No Signature'}</option>
        </select>
      </div>

      {/* Generate Button */}
      <button 
        onClick={handleGenerate}
        style={{ width: '100%', padding: '0.75rem', backgroundColor: 'green', color: 'black', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', marginBottom: '1.5rem' }}
      >
        {lang === 'fi' ? 'Generoi vastaus' : lang === 'no' ? 'Generer svar' : 'Generate Response'}
      </button>

      {/* Output Screen */}
      {generatedText && (
        <div>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem', color: 'green' }}>
            {lang === 'fi' ? 'Valmis teksti:' : lang === 'no' ? 'Generert tekst:' : 'Generated Text:'}
          </label>
          <textarea 
            readOnly 
            value={generatedText} 
            rows={10} 
            style={{ width: '100%', padding: '0.75rem', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ddd', backgroundColor: '#f9f9f9', fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}
          />
          <button 
            onClick={handleCopyToClipboard}
            style={{ marginTop: '0.5rem', padding: '0.5rem 1rem', backgroundColor: '#22c55e', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            {lang === 'fi' ? 'Kopioi teksti' : lang === 'no' ? 'Kopier tekst' : 'Copy Text'}
          </button>
        </div>
      )}
    </div>
  );
};

export default BonusGrantedManual;
