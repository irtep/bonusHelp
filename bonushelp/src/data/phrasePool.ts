import type { Language } from "../components/BonusDenialGenerator";

// GW ask ok:
export interface PhrasePoolGranted {
  greetings: string[];
  openings: string[];
  mainParts: string[];
  callsToAction: string[];
  closings: string[];
  signoffs: string[];
}

// for campaign bonuses
export interface ThemePhrases {
  openings: string[]; // Variations based on the day/holiday theme
}

// for campaign
export type Theme = 'monday' | 'tuesday' | 'wednesday' | 'friday' | 'juhannus' | 'christmas';

// for bonus deny
export interface PhrasePool {
  greetings: string[];
  openings: string[];
  mainParts: string[];
  closings: string[]; // Optional/Randomly included
  signoffs: string[];
}

export interface PhrasePoolCampaign {
  greetings: string[];
  themes: Record<Theme, ThemePhrases>;
  mainParts: string[];
  callsToAction: string[];
  closings: string[];
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
  },
  no: {
    greetings: [
      'Hei',
      'Heisann',
      'Hallo',
      'Hei igjen',
      'Hei på deg',
      'Morn',
      'God dag'
    ],
    openings: [
      'Takk for at du tar kontakt med oss.',
      'Håper alt står bra til med deg.',
      'Hyggelig å høre fra deg i dag.',
      'Takk for meldingen din og for at du kontakter oss.',
      'Håper uken din har startet på best mulig måte.',
      'Takk for at du sendte oss en melding.',
      'Håper du har hatt en fin start på dagen.'
    ],
    mainParts: [
      'Jeg har sjekket spillekontoen din, men lenger enn det kommer vi dessverre ikke akkurat nå, da vi ikke kan tilby en bonus på nåværende tidspunkt.',
      'Jeg har sett nærmere på saken, men det er dessverre ikke rom for noen bonus akkurat nå. Men takk for at du spurte likevel!',
      'Jeg gikk gjennom kontodetaljene dine, men systemet lar meg dessverre ikke legge til en bonus til deg akkurat nå.',
      'Jeg tok en grundig titt på kontoen din, men jeg har dessverre ikke mulighet til å gi deg noe ekstra i dag.',
      'Jeg har sjekket bonustilgjengeligheten din, men dessverre er ikke kontoen din kvalifisert for et nytt tilbud akkurat nå.',
      'Jeg har undersøkt mulighetene for deg, men vi kan dessverre ikke tilby en bonus akkurat nå.',
      'Jeg har sjekket alt nøye, men jeg har dessverre ikke mulighet til å åpne bonuskranen for deg denne gangen.'
    ],
    closings: [
      'Ha en fortsatt kjempefin dag videre!',
      'Hvis det er noe annet vi kan hjelpe deg med, må du ikke nøle med å ta kontakt igjen.',
      'Ønsker deg masse lykke til med spillene og en herlig uke videre!',
      'Bare ta kontakt igjen dersom det skulle dukke opp andre spørsmål.',
      'Ha en fortsatt strålende og avslappende dag!',
      'Vi er alltid her og klare til å hjelpe om du lurer på noe annet.'
    ],
    signoffs: [
      'Med vennlig hilsen,',
      'Beste hilsener,',
      'Varme hilsener,',
      'Vennlig hilsen og masse lykke til med spillene,',
      'Ønsker deg alt godt,'
    ]
  }
};

// --- LOCALIZATION DATA POOL FOR CAMPAIGN BONUSES ---
export const phrasePoolCampaign: Record<Language, PhrasePoolCampaign> = {
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
  },
  no: {
    greetings: ['Hei', 'Heisann', 'Hallo', 'Hei igjen', 'Hei på deg', 'Morn'],
    themes: {
      monday: {
        openings: [
          'Håper uken din har startet på best mulig måte!',
          'En ny uke er her, håper mandagen din har vært strålende så langt!',
          'Håper du har fått en super start på den nye uken!',
          'Håper mandagen din er fylt med god energi!',
          'Ha en fantastisk ny uke videre!',
          'Håper du har hatt en fin og oppløftende start på uken!'
        ]
      },
      tuesday: {
        openings: [
          'Håper tirsdagen din fylles med hyggelige stunder!',
          'Håper uken din fortsetter i samme gode spor!',
          'God tirsdag! Håper dagen din har vært helt topp.',
          'Håper ukens andre dag byr på det aller beste!',
          'Håper tirsdagen din er full av godt humør!',
          'Håper uken din har hatt en både fartsfylt og fin start!'
        ]
      },
      wednesday: {
        openings: [
          'God lillelørdag! Håper uken din har behandlet deg bra så langt.',
          'Håper onsdagen din forløper på en utmerket måte!',
          'Vi har nådd midten av uken! Håper alt har gått strålende.',
          'Håper lillelørdagen din blir både avslappende og fin!',
          'Onsdagshilsen herfra! Håper dagen din har vært god.',
          'Håper resten av uken allerede skimtes i koselige former!'
        ]
      },
      friday: {
        openings: [
          'Ha en herlig fredag og en riktig god helg i vente!',
          'Fredagen er endelig her! Håper du har hatt en fantastisk uke.',
          'Håper fredagen din har startet med topp stemning!',
          'Helgen er like rundt hjørnet! Håper du får en kjempefin dag.',
          'God fredag! Håper uken din har vært fylt med suksess.',
          'Ukens beste dag er her, håper helgefølelsen har begynt å melde seg!'
        ]
      },
      juhannus: {
        openings: [
          'Ønsker deg en riktig god og avslappende Stthansfeiring!',
          'God midtsommer! Håper feiringen din blir helt fantastisk.',
          'Håper Stthanshelgen din har startet på best mulig vis!',
          'Ha en nydelig og lys midtsommertid!',
          'Håper du får nyte sommermagien og det fine været til det fulle!',
          'Ønsker deg en herlig og helt bekymringsløs midtsommer!'
        ]
      },
      christmas: {
        openings: [
          'Ønsker deg en riktig god og fredfull jul!',
          'God jul og godt nyttår! Håper du får nyte høytiden skikkelig.',
          'Håper julefeiringen din blir varm, koselig og fylt med glede!',
          'Ha en nydelig og avslappende juletid!',
          'Ønsker deg og dine nære en fantastisk og fredelig jul!',
          'Varme julehilsener til deg fra hele teamet vårt!'
        ]
      }
    },
    mainParts: [
      'Vi har akkurat lagt til en liten overraskelse på spillekontoen din, og den er klar til bruk med en gang.',
      'Jeg har lagt til en liten bonus på kontoen din for å gi dagen din et ekstra løft, og den venter allerede på deg.',
      'Vi hadde lyst til å glede deg med en liten overraskelse, som nå har blitt overført til din spillekonto.',
      'En hyggelig liten ekstrafordel har akkurat blitt aktivert på kontoen din, så sjekk den gjerne ut.',
      'Jeg har plassert en liten overraskelsesgave på kontoen din, og den er helt klar for spill.',
      'Gode nyheter! Jeg har nettopp kreditert en hyggelig overraskelse rett inn på spillekontoen din.',
      'Jeg har gitt kontoen din en liten oppmuntring som du vil finne klar til bruk umiddelbart.'
    ],
    callsToAction: [
      '👉 Logg inn og ta en titt på den hyggelige overraskelsen som venter på kontoen din.',
      '👉 Du kan sjekke ut overraskelsen ved å logge inn på kontoen din.',
      '👉 Bare logg deg inn, så vil du se hva som har dukket opp der inne.',
      '👉 Sjekk gjerne gaven din ved å logge inn på spillerprofilen din.',
      '👉 Gå til kontoen din med en gang for å aktivere overraskelsen din.',
      '👉 Logg inn nå for å se hva slags ekstra moro jeg har ordnet klart til deg.'
    ],
    closings: [
      'Ha en fortsatt fin dag videre, og masse lykke til med spillene! 🍀',
      'Ha en strålende dag videre og det aller beste av lykke! 🤞',
      'Håper dette bringer et stort smil om munnen, lykke til med rundene! 🚀',
      'Kos deg med spillingen og ha en utrolig behagelig resten av dagen! ✨',
      'Ønsker deg en underholdende spilløkt og skyhøy flaks! 💎',
      'Krysser fingrene for at dette resulterer i noen skikkelige storgevinster! 🎯'
    ],
    signoffs: [
      'Med vennlig hilsen,',
      'Beste hilsener,',
      'Varme hilsener,',
      'Vennlig hilsen og masse lykke til med spillene,',
      'Ønsker deg alt godt,'
    ]
  }
};

// --- LOCALIZATION DATA POOL BONUS GRANTED---
export const phrasePoolGranted: Record<Language, PhrasePoolGranted> = {
  fi: {
    greetings: ['Moi', 'Hei', 'Tervehdys', 'Hei taas', 'Heippa', 'Hyvää päivää'],
    openings: [
      'Kiitos kun otit yhteyttä.',
      'Toivottavasti sinulle kuuluu hyvää.',
      'Mukava kuulla sinusta pitkästä aikaa.',
      'Kiitos viestistäsi ja pyynnöstäsi.',
      'Mukava kun laitoit meille viestiä.',
      'Toivottavasti päiväsi on sujunut hienosti.'
    ],
    mainParts: [
      'Tarkistin tilanteen ja minulla on hyviä uutisia: minulla oli mahdollisuus lisätä pyytämäsi bonus pelitilillesi!',
      'Kävin läpi pelitilisi tilanteen ja ilokseni voin kertoa, että sain lisättyä sinulle bonuksen heti valmiiksi.',
      'Tutkin mahdollisuudet ja onnistuin aktivoimaan uuden bonuksen tilillesi piristämään pelihetkiäsi.',
      'Katsoin tilannettasi ja hyviä uutisia – asia tuli kuntoon ja lisäsin ekstraa tilillesi.',
      'Tarkistin bonustilanteesi ja ilokseni sain kuin sainkin lisättyä bonuksen odottamaan sinua.',
      'Kävin heti tuumasta toimeen ja lisäsin pelitilillesi mukavan bonuksen toiveesi mukaisesti.'
    ],
    callsToAction: [
      '👉 Se on nyt heti valmiina käyttöä varten, kun kirjaudut sisään pelitilillesi.',
      '👉 Pääset nappaamaan sen talteen suoraan tililtäsi heti kirjautumisen jälkeen.',
      '👉 Löydät bonuksen heti valmiina käyttöön omalta pelitililtäsi.',
      '👉 Kurkkaahan tilillesi, bonus odottaa siellä jo valmiina pelattavaksi.',
      '👉 Voit kirjautua sisään ja aloittaa pelit vaikka saman tien.'
    ],
    closings: [
      'Mukavaa päivän jatkoa ja hurjasti onnea peleihin! 🍀',
      'Oikein hyvää päivänjatkoa ja parasta mahdollista pelionnea! 🤞',
      'Toivottavasti tämä tuo rutkasti iloa päivääsi, suuria voittoja! 🚀',
      'Nauti bonuksestasi ja vietä oikein mukava loppupäivä! ✨',
      'Toivotan sinulle superviihdyttäviä pelihetkiä ja mahtavaa onnea! 💎'
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
    openings: [
      'Thank you for reaching out to us.',
      'I hope you are doing well.',
      'Great to hear from you today.',
      'Thank you for contacting our support team.',
      'Thank you for getting in touch with us.',
      'I hope your day is going great so far.'
    ],
    mainParts: [
      'I checked your account with great news: I was able to credit the bonus you requested!',
      'I reviewed your account status, and I am happy to let you know that I have successfully added a bonus for you.',
      'I investigated the possibilities and managed to activate a new bonus on your account to boost your playtime.',
      'Good news! I managed to get approval from our system and have added the extra bonus to your account.',
      'I checked the bonus availability and I am delighted to inform you that a bonus is now waiting for you.',
      'I went right ahead and credited a nice bonus to your player profile as requested.'
    ],
    callsToAction: [
      '👉 It is ready to be claimed and used right away when you log into your account.',
      '👉 You can head over and grab it directly from your rewards page after logging in.',
      '👉 You will find the surprise fully active and ready for action on your balance.',
      '👉 Take a quick look at your account, the bonus is already waiting there for you.',
      '👉 Feel free to log in and start your session with the extra funds immediately.'
    ],
    closings: [
      'Have a wonderful day ahead and best of luck with your games! 🍀',
      'Have a great rest of the day and the absolute best of luck! 🤞',
      'I hope this brings a big smile to your face, wish you massive wins! 🚀',
      'Enjoy your bonus and have an incredibly pleasant rest of the day! ✨',
      'Wishing you a highly entertaining session and fantastic luck! 💎'
    ],
    signoffs: [
      'Best regards,',
      'Warm regards,',
      'Kind regards,',
      'Best wishes,',
      'Yours sincerely,'
    ]
  },
  no: {
    greetings: ['Hei', 'Heisann', 'Hallo', 'Hei igjen', 'Hei på deg', 'Morn'],
    openings: [
      'Takk for at du tar kontakt med oss.',
      'Håper alt står bra til med deg.',
      'Hyggelig å høre fra deg i dag.',
      'Takk for meldingen din og for din forespørsel.',
      'Takk for at du sendte oss en melding.',
      'Håper du har hatt en kjempefin start på dagen.'
    ],
    mainParts: [
      'Jeg har sjekket kontoen din med gode nyheter: Jeg hadde muligheten til å legge til bonusen du ba om!',
      'Jeg gikk gjennom situasjonen på spillekontoen din, og det er en glede å meddele at jeg har lagt til en bonus til deg.',
      'Jeg undersøkte mulighetene og har lykkes med å aktivere en ny bonus på kontoen din for å sprite opp spilløkten.',
      'Gode nyheter! Jeg fikk grønt lys fra systemet vårt og har nå lagt til litt ekstra på kontoen din.',
      'Jeg sjekket bonustilgjengeligheten din, og med stor glede kan jeg informere om at en bonus nå venter på deg.',
      'Jeg ordnet saken med en gang og har kreditert en flott bonus på spillerprofilen din i henhold til ditt ønske.'
    ],
    callsToAction: [
      '👉 Den er klar til å aktiveres og brukes umiddelbart når du logger inn på spillekontoen din.',
      '👉 Du kan hente den ut direkte fra belønningssiden din med en gang du har logget inn.',
      '👉 Du vil finne overraskelsen fiks ferdig og klar til bruk på din saldo.',
      '👉 Ta en rask titt på kontoen din, bonusen står klar og venter på deg der inne nå.',
      '👉 Logg deg gjerne inn og start spilløkten med de ekstra midlene med en gang.'
    ],
    closings: [
      'Ha en fortsatt kjempefin dag videre, og masse lykke til med spillene! 🍀',
      'Ha en strålende dag videre og det aller beste av lykke! 🤞',
      'Håper dette bringer et stort smil om munnen, lykke til med rundene! 🚀',
      'Kos deg med bonusen din og ha en utrolig behagelig resten av dagen! ✨',
      'Ønsker deg en underholdende spilløkt og skyhøy flaks! 💎'
    ],
    signoffs: [
      'Med vennlig hilsen,',
      'Beste hilsener,',
      'Varme hilsener,',
      'Vennlig hilsen og masse lykke til med spillene,',
      'Ønsker deg alt godt,'
    ]
  }
};
