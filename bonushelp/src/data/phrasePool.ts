import type { Language } from "../components/BonusDenialGenerator";

export interface PhrasePool {
  greetings: string[];
  openings: string[];
  mainParts: string[];
  closings: string[]; // Optional/Randomly included
  signoffs: string[];
}

// --- LOCALIZATION DATA POOL ---
export const phrasePool: Record<Language, PhrasePool> = {
  fi: {
    greetings: [
      'Moi',
      'Hei',
      'Tervehdys',
      'Moro',
      'Moi',
      'Heippa',
      'Hyvää päivää'
    ],
    openings: [
      'Kiitos kun otit yhteyttä.',
      'Toivottavasti sinulle kuuluu hyvää.',
      'Mukava kuulla sinusta.',
      'Kiitos viestistäsi ja yhteydenotostasi.',
      'Toivottavasti viikkosi on sujunut loistavasti.',
      'Kiitos, että laitoit meille viestiä.',
      'Toivottavasti päiväsi on alkanut mukavasti.'
    ],
    mainParts: [
      'Tarkistin pelitilisi, mutta valitettavasti tällä hetkellä emme voi tarjota bonusta.',
      'Tarkistin pelitilin tilanteen, mutta tällä hetkellä valitettavasti ei ole tilaa bonukselle. Mutta kiitos silti kun otit yhteyttä.',
      'Kävin läpi pelitilisi tiedot, mutta valitettavasti emme voi lisätä sinulle bonusta juuri nyt.',
      'Katsoin pelitilisi, mutta valitettavasti tällä kertaa minulla ei ole mahdollisuutta antaa sinulle ekstraa.',
      'Tarkistin bonustilanteesi, mutta valitettavasti tällä hetkellä tilille ei mahdu bonusta.',
      'Tutkin tilanteen, mutta valitettavasti tällä hetkellä emme pysty tarjoamaan sinulle uutta bonusta.',
      'Katsoin mahdollisuudet läpi, mutta valitettavasti tällä erää bonushanaa en saanut auki.'
    ],
    closings: [
      'Hyvää päivän jatkoa!',
      'Jos on mitään muuta jossa voimme olla avuksi, niin otathan yhteyttä.',
      'Toivotan sinulle hyvää viikonjatkoa ja pelionnea!',
      'Laita ihmeessä viestiä uudestaan, jos on jotain muuta jossa voimme olla avuksi.',
      'Mukavaa ja rentouttavaa päivää sinne!',
      'Olemme täällä aina valmiina auttamaan, jos tulee muuta kysyttävää.'
    ],
    signoffs: [
      'Parhain terveisin,',
      'Lämpimin terveisin,',
      'Ystävällisin terveisin,',
      'Ystävällisin terveisin ja pelionnea toivottaen,',
      'Kaikkea hyvää toivottaen,'
    ]
  },
  en: {
    greetings: [
      'Hi',
      'Hello',
      'Greetings',
      'Hello there',
      'Hi there',
      'Hey',
      'Good day'
    ],
    openings: [
      'Thank you for reaching out to us.',
      'I hope you are doing well.',
      'Great to hear from you today.',
      'Thank you for contacting our team.',
      'I hope you are having a wonderful week.',
      'Thank you for getting in touch with us.',
      'I hope your day is going great so far.'
    ],
    mainParts: [
      'I have checked your account, but unfortunately, we are unable to offer a bonus at this moment.',
      'I reviewed your situation, but unfortunately, there is no bonus available right now. Thank you for asking though!',
      `I went through your account details, but unfortunately, couldn't add a bonus for you at this time.`,
      'I took a close look at your account, but unfortunately, there is no room for a bonus at this time.',
      'I have checked the bonus availability, but unfortunately, your account is not eligible for a new offer at this time.',
      'I investigated the possibilities for you, but unfortunately, we cannot provide a bonus right now.',
      'I checked everything thoroughly, but unfortunately, I cannot reward you with a bonus on this occasion.'
    ],
    closings: [
      'Have a wonderful day ahead!',
      'If there is anything else we can assist you with, please do not hesitate to contact us.',
      'Wishing you the best of luck with your games and a great week!',
      'Feel free to reach out again if you have any other questions.',
      'Have a great rest of the day!',
      'Let us know if you need help with anything else. We are always here.'
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
