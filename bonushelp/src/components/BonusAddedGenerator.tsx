import React, { useState } from 'react';

type Language = 'fi' | 'en';
type Theme = 'monday' | 'tuesday' | 'wednesday' | 'friday' | 'juhannus' | 'christmas';

interface ThemePhrases {
  openings: string[]; // Variations based on the day/holiday theme
}

interface PhrasePool {
  greetings: string[];
  themes: Record<Theme, ThemePhrases>;
  mainParts: string[];
  callsToAction: string[];
  closings: string[];
  signoffs: string[];
}

// --- LOCALIZATION DATA POOL ---
const phrasePool: Record<Language, PhrasePool> = {
  fi: {
    greetings: ['Moi', 'Hei', 'Tervehdys', 'Hei taas', 'Heippa', 'Hyvää päivää'],
    themes: {
      monday: {
        openings: [
          'Toivottavasti viikkosi lähti käyntiin hyvin!',
          'Uusi viikko on täällä, toivottavasti maanantaisi on sujunut loistavasti!',
          'Toivottavasti viikon aloituksesi on ollut mukava!',
          'Toivottavasti maanantaisi on alkanut energisissä merkeissä!',
          'Mukavaa uutta viikkoa sinne!',
          'Toivottavasti olet saanut hyvän startin alkaneelle viikolle!'
        ]
      },
      tuesday: {
        openings: [
          'Toivottavasti tiistaisi sujuu mukavissa merkeissä!',
          'Toivottavasti viikkosi on jatkunut loistavasti!',
          'Hyvää tiistaita! Toivottavasti päiväsi on mennyt hienosti.',
          'Toivottavasti viikon toinen päivä tarjoilee parastaan!',
          'Toivottavasti tiistaipäiväsi on täynnä hyvää energiaa!',
          'Toivottavasti viikkosi on alkanut vauhdikkaasti ja mukavasti!'
        ]
      },
      wednesday: {
        openings: [
          'Hyvää pikkulauantaita! Toivottavasti viikkosi on sujunut hyvin.',
          'Toivottavasti keskiviikkosi sujuu mukavissa merkeissä!',
          'Viikon puoliväli on saavutettu! Toivottavasti viikkosi on mennyt loistavasti.',
          'Toivottavasti pikkulauantaisi on sujunut leppoisasti!',
          'Keskiviikkotervehdys sinne! Toivottavasti päiväsi on ollut mukava.',
          'Toivottavasti loppuviikko häämöttää jo mukavissa tunnelmissa!'
        ]
      },
      friday: {
        openings: [
          'Ihanaa perjantaita ja alkavaa viikonloppua!',
          'Perjantai on täällä! Toivottavasti viikkosi on sujunut loistavasti.',
          'Toivottavasti perjantaisi on alkanut upeissa tunnelmissa!',
          'Viikonloppu häämöttää jo! Toivottavasti päiväsi sujuu mukavasti.',
          'Hyvää perjantaipäivää! Toivottavasti viikkosi on ollut onnistunut.',
          'Viikon paras päivä on täällä, toivottavasti viikonloppufiilis alkaa jo löytyä!'
        ]
      },
      juhannus: {
        openings: [
          'Oikein hyvää ja rentouttavaa juhannusta sinne!',
          'Hyvää keskikesän juhlaa! Toivottavasti juhannuksesi sujuu upeasti.',
          'Toivottavasti juhannuksen viettosi on alkanut mukavissa merkeissä!',
          'Ihanaa ja valoisaa juhannusaikaa sinne!',
          'Toivottavasti pääset nauttimaan keskikesän taialle ja hyvistä keleistä!',
          'Rentoa ja huoletonta juhannusmieltä sinne!'
        ]
      },
      christmas: {
        openings: [
          'Oikein hyvää ja rauhallista joulua sinne!',
          'Hyvää joulun aikaa! Toivottavasti pääset nauttimaan pyhistä.',
          'Toivottavasti joulunvietto sujuu lämpimissä ja mukavissa merkeissä!',
          'Ihanaa ja rentouttavaa joulua sinne!',
          'Toivotan sinulle ja läheisillesi mitä parhainta ja rauhallisinta joulua!',
          'Lämpimiä joulutervehdyksiä täältä meidän tiimiltämme!'
        ]
      }
    },
    mainParts: [
      'Olemme juuri lisänneet pienen yllätyksen pelitilillesi, ja se on heti valmiina käytettäväksi.',
      'Kävin lisäämässä tilillesi pienen bonuksen piristämään päivää, ja se odottaa jo sinua.',
      'Halusimme muistaa sinua pienellä yllätyksellä, joka on nyt lisätty onnistuneesti pelitilillesi.',
      'Tilillesi on juuri aktivoitu pieni ekstra, käy ihmeessä nappaamassa se talteen.',
      'Laitoin pelitilillesi pienen yllätyslahjan, ja se on nyt valmiina pelattavaksi.',
      'Ilouutisia! Kävin juuri hyvittämässä pelitilillesi pienen yllätyksen.',
      'Lisäsin tilillesi pienen piristyksen, jonka löydät heti valmiina pelitililtäsi.'
    ],
    callsToAction: [
      '👉 Kirjaudu sisään ja käy katsomassa, mitä kivaa tililtäsi löytyy.',
      '👉 Pääset kurkkaamaan yllätyksen kirjautumalla sisään tilillesi.',
      '👉 Kirjaudu vain sisään, niin näet mitä mukavaa sinne on ilmestynyt.',
      '👉 Voit käydä tarkistamassa lahjasi kirjautumalla sisään pelitilillesi.',
      '👉 Kurkkaa tilillesi saman tien ja ota yllätys käyttöön.',
      '👉 Loggaa sisään ja käy ihmeessä katsomassa mitä sinne lisäsin.'
    ],
    closings: [
      'Mukavaa päivän jatkoa ja onnea peleihin! 🍀',
      'Oikein hyvää päivänjatkoa ja parasta pelionnea! 🤞',
      'Toivottavasti tämä tuo iloa päivääsi, hurjasti pelionnea! 🚀',
      'Nauti peleistäsi ja viettä oikein mukava loppupäivä! ✨',
      'Toivotan sinulle viihdyttäviä pelihetkiä ja mahtavaa onnea! 💎',
      'Pidetään peukkuja pystyssä, että tästä napsuu isot voitot! 🎯'
    ],
    signoffs: [
      'Ystävällisin terveisin,',
      'Parhain terveisin,',
      'Lämpimin terveisin,',
      'Ystävällisin terveisin ja pelionnea toivottaen,',
      'Kaikkea hyvää toivottaen,'
    ]
  },
  en: {
    greetings: ['Hi', 'Hello', 'Greetings', 'Hello there', 'Hi there', 'Hey'],
    themes: {
      monday: {
        openings: [
          'I hope your week started off well!',
          'A new week is here, I hope your Monday is going great so far!',
          'I hope you are having a wonderful start to the week!',
          'I hope your Monday is full of positive energy!',
          'Have a fantastic new week ahead!',
          'I hope you managed to get a great start to your week!'
        ]
      },
      tuesday: {
        openings: [
          'I hope your Tuesday is going beautifully!',
          'I hope your week is continuing in great fashion!',
          'Happy Tuesday! Hope your day is turning out awesome.',
          'I hope the second day of the week brings you the best!',
          'I hope you are having a pleasant and productive Tuesday!',
          'Hope your week has started on a high note!'
        ]
      },
      wednesday: {
        openings: [
          'Happy Midweek! I hope your week is treating you well.',
          'I hope your Wednesday is going smoothly!',
          'We have reached the middle of the week! Hope everything is going great.',
          'I hope your midweek day is relaxing and fun!',
          'Wednesday greetings! Hope your day is turning out wonderful.',
          'I hope the rest of the week looks bright for you!'
        ]
      },
      friday: {
        openings: [
          'Have a wonderful Friday and an amazing weekend ahead!',
          'Friday is finally here! I hope you have had a fantastic week.',
          'I hope your Friday has started in excellent spirits!',
          'The weekend is just around the corner! Hope you have a great day.',
          'Happy Friday! I hope your week has been highly successful.',
          'The best day of the week is here, hope you are getting into that weekend mood!'
        ]
      },
      juhannus: {
        openings: [
          'Wishing you a wonderful and relaxing Midsummer!',
          'Happy Midsummer festival! I hope your celebrations are amazing.',
          'I hope your Midsummer holidays are starting off perfectly!',
          'Have a beautiful and bright Midsummer time!',
          'I hope you get to enjoy the magic of summer and wonderful weather!',
          'Wishing you a relaxed and completely care-free Midsummer!'
        ]
      },
      christmas: {
        openings: [
          'Wishing you a very Merry and peaceful Christmas!',
          'Happy Holidays! I hope you get to enjoy the festive season.',
          'I hope your Christmas celebrations are warm, cozy, and filled with joy!',
          'Have a wonderful and relaxing Christmas time!',
          'Wishing you and your loved ones a beautiful and peaceful Christmas!',
          'Warm holiday greetings to you from our entire team!'
        ]
      }
    },
    mainParts: [
      'We have just added a small surprise to your account, and it is ready to be used right away.',
      'I have credited a small bonus to your account to brighten up your day, it is waiting for you.',
      'We wanted to treat you to a little surprise, which has now been successfully added to your account.',
      'A nice little extra has just been activated on your account, feel free to head over and claim it.',
      'I placed a little surprise gift on your account, and it is fully ready for action.',
      'Great news! I just added a nice little surprise directly to your gaming account.',
      'I have boosted your account with a little treat that you can find ready to use immediately.'
    ],
    callsToAction: [
      '👉 Log in and go check out the nice surprise waiting on your account.',
      '👉 You can take a look at the surprise by logging into your account.',
      '👉 Simply log in, and you will see what treat has appeared over there.',
      '👉 Feel free to check your gift by logging into your player profile.',
      '👉 Head over to your account right away to activate your surprise.',
      '👉 Log in now and see what extra fun I have lined up for you.'
    ],
    closings: [
      'Have a great rest of the day and best of luck with your games! 🍀',
      'Have a wonderful day ahead and the absolute best of luck! 🤞',
      'I hope this brings a smile to your face, best of luck with the games! 🚀',
      'Enjoy your playtime and have an incredibly pleasant rest of the day! ✨',
      'Wishing you an entertaining session and massive luck! 💎',
      'Fingers crossed that this brings you some massive wins! 🎯'
    ],
    signoffs: [
      'Best regards,',
      'Warm regards,',
      'Kind regards,',
      'Best wishes,',
      'Yours sincerely,'
    ]
  }
};

export const BonusAddedGenerator: React.FC = () => {
  const [lang, setLang] = useState<Language>('fi');
  const [theme, setTheme] = useState<Theme>('monday');
  const [brand, setBrand] = useState<string>('');
  const [agentName, setAgentName] = useState<string>('');
  const [generatedText, setGeneratedText] = useState<string>('');

  const getRandomElement = <T,>(arr: T[]): T => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const handleGenerate = () => {
    const pool = phrasePool[lang];

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
      alert(lang === 'fi' ? 'Kopioitu leikepöydälle!' : 'Copied to clipboard!');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '1.5rem', fontFamily: 'sans-serif', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'gold' }}>
        {lang === 'fi' ? 'Bonus Lisätty -Generaattori' : 'Bonus Added Generator'}
      </h2>

      {/* Language Selection */}
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem', color: 'gold' }}>
          {lang === 'fi' ? 'Valitse kieli:' : 'Select Language:'}
        </label>
        <select value={lang} onChange={(e) => setLang(e.target.value as Language)} style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', background: 'black', color: 'white' }}>
          <option value="fi">Suomi (Finnish)</option>
          <option value="en">English</option>
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