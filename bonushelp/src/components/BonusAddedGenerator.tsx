import React, { useState } from 'react';
import type { Language } from './BonusDenialGenerator';
import { phrasePoolCampaign, type Theme } from '../data/phrasePool';

interface LocalProps {
  setMsg: (msg: string) => void;
};

/*
*
*       THIS IS FOR CAMPAIGN BONUS 
* 
*/

export const BonusAddedGenerator: React.FC<LocalProps> = ( {setMsg} ) => {
  const [lang, setLang] = useState<Language>('fi');
  const [theme, setTheme] = useState<Theme>('monday');
  const [brand, setBrand] = useState<string>('');
  const [agentName, setAgentName] = useState<string>('');
  const [generatedText, setGeneratedText] = useState<string>('');

  const getRandomElement = <T,>(arr: T[]): T => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const handleGenerate = () => {
    const pool = phrasePoolCampaign[lang];

    const greeting = getRandomElement(pool.greetings);
    const opening = getRandomElement(pool.themes[theme].openings); // Fetches based on selected theme
    const main = getRandomElement(pool.mainParts);
    const cta = getRandomElement(pool.callsToAction);
    const closing = getRandomElement(pool.closings);
    const signoff = getRandomElement(pool.signoffs);

    const vipTeamText = lang === 'fi' ? 'VIP-tiimi' : 'VIP team';
    const formattedBrand = brand ? brand.charAt(0).toUpperCase() + brand.slice(1) : '';

    // Assembles into requested paragraphs
    const message = `${greeting},\n\n${opening}\n\n${main}\n\n${cta}\n\n${closing}\n\n${signoff}\n${agentName ? agentName + '\n' : ''}${formattedBrand} ${vipTeamText}`;

    setGeneratedText(message);
  };

  const handleCopyToClipboard = () => {
    if (generatedText) {
      navigator.clipboard.writeText(generatedText);
      setMsg(lang === 'fi' ? 'Kopioitu leikepöydälle!' : 'Copied to clipboard!');
      setTimeout( () => {
        setMsg('');
      }, 5000);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '1.5rem', fontFamily: 'sans-serif', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'gold' }}>
        {lang === 'fi' ? 'Bonus Campaign gene' : 'Bonus Campaign gene'}
      </h2>

      {/* Language Selection */}
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem', color: 'gold' }}>
          {lang === 'fi' ? 'Valitse kieli:' : 'Select Language:'}
        </label>
        <select value={lang} onChange={(e) => setLang(e.target.value as Language)} style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', background: 'black', color: 'white' }}>
          <option value="fi">Suomi (Finnish)</option>
          <option value="en">English</option>
          <option value="no">Norwegian</option>
        </select>
      </div>

      {/* Theme Selection */}
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem', color: 'gold' }}>
          {lang === 'fi' ? 'Valitse teema / päivä:' : 'Select Theme / Day:'}
        </label>
        <select value={theme} onChange={(e) => setTheme(e.target.value as Theme)} style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', background: 'black', color: 'white' }}>
          <option value="monday">{lang === 'fi' ? 'Maanantai (Monday)' : 'Monday'}</option>
          <option value="tuesday">{lang === 'fi' ? 'Tiistai (Tuesday)' : 'Tuesday'}</option>
          <option value="wednesday">{lang === 'fi' ? 'Keskiviikko (Wednesday)' : 'Wednesday'}</option>
          <option value="thursday">{lang === 'fi' ? 'Torstai (Thursday)' : 'Thursday'}</option>
          <option value="friday">{lang === 'fi' ? 'Perjantai (Friday)' : 'Friday'}</option>
          <option value="juhannus">{lang === 'fi' ? 'Juhannus (Midsummer)' : 'Midsummer'}</option>
          <option value="christmas">{lang === 'fi' ? 'Joulu (Christmas)' : 'Christmas'}</option>
        </select>
      </div>

      {/* Brand Input */}
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem', color: 'gold' }}>
          {lang === 'fi' ? 'Kirjoita brändi:' : 'Type Brand:'}
        </label>
        <input 
          type="text"
          value={brand} 
          onChange={(e) => setBrand(e.target.value)} 
          placeholder={lang === 'fi' ? 'kirjoita brändi' : 'write a brand'}
          style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', background: 'black', color: 'white', border: '1px solid #444', boxSizing: 'border-box' }}
        />
      </div>

      {/* Name Input */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem', color: 'gold' }}>
          {lang === 'fi' ? 'Oma nimesi:' : 'Your Name:'}
        </label>
        <input 
          type="text" 
          value={agentName} 
          onChange={(e) => setAgentName(e.target.value)} 
          placeholder={lang === 'fi' ? 'Kirjoita nimesi tähän' : 'Type your name here'}
          style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', background: 'black', color: 'white', border: '1px solid #444', boxSizing: 'border-box' }}
        />
      </div>

      {/* Generate Button */}
      <button 
        onClick={handleGenerate}
        style={{ width: '100%', padding: '0.75rem', backgroundColor: 'gold', color: 'black', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', marginBottom: '1.5rem' }}
      >
        {lang === 'fi' ? 'Generoi vastaus' : 'Generate Response'}
      </button>

      {/* Output Screen */}
      {generatedText && (
        <div>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem', color: 'gold' }}>
            {lang === 'fi' ? 'Valmis teksti:' : 'Generated Text:'}
          </label>
          <textarea 
            readOnly 
            value={generatedText} 
            rows={12} 
            style={{ width: '100%', padding: '0.75rem', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ddd', backgroundColor: '#f9f9f9', fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}
          />
          <button 
            onClick={handleCopyToClipboard}
            style={{ marginTop: '0.5rem', padding: '0.5rem 1rem', backgroundColor: '#22c55e', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            {lang === 'fi' ? 'Kopioi teksti' : 'Copy Text'}
          </button>
        </div>
      )}
    </div>
  );
};

export default BonusAddedGenerator;
