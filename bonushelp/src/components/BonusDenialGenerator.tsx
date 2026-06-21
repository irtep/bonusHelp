import React, { useState } from 'react';
import { phrasePool } from '../data/phrasePool';

// --- TYPES & INTERFACES ---
export type Language = 'fi' | 'en' | 'no';
type SignatureStyle = 'none' | 'standard' | 'brandVip';
//type Brand = 'pelipeto' | 'casinofriday' | 'shotz';
type Brand = string;

export const BonusDenialGenerator: React.FC = () => {
  // --- STATE ---
  const [lang, setLang] = useState<Language>('en');
  const [brand, setBrand] = useState<Brand>('');
  const [agentName, setAgentName] = useState<string>('');
  const [generatedText, setGeneratedText] = useState<string>('');
  const [sigStyle, setSigStyle] = useState<SignatureStyle>('standard');

  // --- HELPER FUNCTION ---
  const getRandomElement = <T,>(arr: T[]): T => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  // --- GENERATION LOGIC ---
  const handleGenerate = () => {
    const pool = phrasePool[lang];

    // Pick random components
    const greeting = getRandomElement(pool.greetings);
    const opening = getRandomElement(pool.openings);
    const main = getRandomElement(pool.mainParts);
    const signoff = getRandomElement(pool.signoffs);

    // 50% chance to include or exclude the optional closing part
    const includeClosing = Math.random() > 0.5;
    const closing = includeClosing ? getRandomElement(pool.closings) : '';

    // Determine team signature text based on language
    const vipTeamText = lang === 'fi' ? 'VIP-tiimi' : lang === 'no' ? 'VIP-team' : 'VIP team';

    // Capitalize brand name nicely for display
    const formattedBrand = brand.charAt(0).toUpperCase() + brand.slice(1);

    // Assemble the baseline message template
    let message = `${greeting},\n\n${opening} ${main}`;

    if (closing) {
      message += ` ${closing}`;
    }

    // --- CONSTRUCT THE SIGNATURE ---
    if (sigStyle === 'none') {
      // Option 1: No signoff or signature details at all
      // (If you still want the signoff text like "Best regards," but no names, remove signoff from here)
    } else {
      // Add the signoff text (e.g., "Ystävällisin terveisin,")
      message += `\n\n${signoff}`;

      if (sigStyle === 'standard') {
        // Option 2: Name + Brand VIP-tiimi
        message += `\n${agentName ? agentName + '\n' : ''}${formattedBrand} ${vipTeamText}`;
      } else if (sigStyle === 'brandVip') {
        // Option 3: Name + Brand VIP
        message += `\n${agentName ? agentName + '\n' : ''}${formattedBrand} VIP`;
      }
    }

    setGeneratedText(message);
  };

  const handleCopyToClipboard = () => {
    if (generatedText) {
      navigator.clipboard.writeText(generatedText);
      alert(lang === 'fi' ? 'Kopioitu leikepöydälle!' : 'Copied to clipboard!');
    }
  };

  // --- UI RENDERING ---
  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '1.5rem', fontFamily: 'sans-serif', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'gold' }}>
        {lang === 'fi' ? 'Ei GW Generaattori' : 'No GW Generator'}
      </h2>

      {/* Language Selection */}
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem', color: 'gold' }}>
          {lang === 'fi' ? 'Valitse kieli:' : 'Select Language:'}
        </label>
        <select value={lang} onChange={(e) => setLang(e.target.value as Language)} style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', background: 'black', color: 'white' }}>
          <option value="fi">Finnish</option>
          <option value="en">English</option>
          <option value="no">Norwegian</option>
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
          placeholder={lang === 'fi' ? 'kirjoita brändi.' : 'write brand'}
          style={{
            width: '100%',
            padding: '0.5rem',
            borderRadius: '4px',
            background: 'black',
            color: 'white',
            border: '1px solid #444',
            boxSizing: 'border-box'
          }}
        />
      </div>

      {/* Name Input */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem', color: 'gold' }}>
          {lang === 'fi' ? 'Oma nimesi (ei pakollinen):' : 'Your Name (optional):'}
        </label>
        <input
          type="text"
          value={agentName}
          onChange={(e) => setAgentName(e.target.value)}
          placeholder={lang === 'fi' ? 'Kirjoita nimesi tähän' : 'Type your name here'}
          style={{ width: '100%', padding: '0.5rem', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc', background: 'black', color: 'white' }}
        />
      </div>

      {/* Signature Style Selection */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem', color: 'gold' }}>
          {lang === 'fi' ? 'Allekirjoituksen tyyli:' : lang === 'no' ? 'Signaturstil:' : 'Signature Style:'}
        </label>
        <select
          value={sigStyle}
          onChange={(e) => setSigStyle(e.target.value as SignatureStyle)}
          style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', background: 'black', color: 'white', border: '1px solid #444' }}
        >
          <option value="standard">
            {lang === 'fi' ? 'Normaali (Nimi & Tiimi)' : lang === 'no' ? 'Standard (Navn & Team)' : 'Standard (Name & Team)'}
          </option>
          <option value="brandVip">
            {lang === 'fi' ? 'Vain VIP (Nimi & Brand VIP)' : lang === 'no' ? 'Kun VIP (Navn & Brand VIP)' : 'Brand VIP Only'}
          </option>
          <option value="none">
            {lang === 'fi' ? 'Ei allekirjoitusta' : lang === 'no' ? 'Ingen signatur' : 'No Signature'}
          </option>
        </select>
      </div>

      {/* Generate Button */}
      <button
        onClick={handleGenerate}
        style={{ width: '100%', padding: '0.75rem', backgroundColor: '#0070f3', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', marginBottom: '1.5rem' }}
      >
        {lang === 'fi' ? 'Generoi vastaus' : 'Generate Response'}
      </button>

      {/* Output Screen */}
      {generatedText && (
        <div>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>
            {lang === 'fi' ? 'Valmis teksti:' : 'Generated Text:'}
          </label>
          <textarea
            readOnly
            value={generatedText}
            rows={8}
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

export default BonusDenialGenerator;
