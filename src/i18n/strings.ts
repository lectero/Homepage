export const locales = ['sv', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'sv';

type Strings = {
  meta: {
    siteDescription: string;
  };
  nav: {
    about: string;
    news: string;
    contact: string;
    products: string;
    skipToMain: string;
    openMenu: string;
    closeMenu: string;
  };
  footer: {
    tagline: string;
    products: string;
    contact: string;
    contactUs: string;
    aboutLectero: string;
    rightsReserved: string;
  };
  languageSwitcher: {
    label: string;
    sv: string;
    en: string;
  };
  home: {
    title: string;
    heroTitle: string;
    heroSubtitle: string;
    heroCta: string;
    productsHeading: string;
    productsLead: string;
    mbotDescription: string;
    greenopsDescription: string;
    whyHeading: string;
    whySwedish: { title: string; text: string };
    whyTech: { title: string; text: string };
    whySustainability: { title: string; text: string };
    ctaHeading: string;
    ctaText: string;
    ctaButton: string;
  };
  about: {
    title: string;
    description: string;
    heroTitle: string;
    heroSubtitle: string;
    storyP1: string;
    storyP2: string;
    storyP3: string;
    teamHeading: string;
    teamLead: string;
    approachHeading: string;
    approach1Title: string;
    approach1Text: string;
    approach2Title: string;
    approach2Text: string;
    approach3Title: string;
    approach3Text: string;
    techHeading: string;
    techLead: string;
    techBackend: string;
    techAi: string;
    techIntegration: string;
    techInfra: string;
    ctaHeading: string;
    ctaText: string;
    ctaButton: string;
  };
  contact: {
    title: string;
    description: string;
    heroTitle: string;
    heroSubtitle: string;
    formName: string;
    formEmail: string;
    formCompany: string;
    formMessage: string;
    formSubmit: string;
    formSubmitting: string;
    formSuccessTitle: string;
    formSuccessBody: string;
    formError: string;
  };
  teamCard: {
    portraitOf: (name: string) => string;
  };
  mbot: {
    title: string;
    description: string;
    heroSubtitle: string;
    heroCta: string;
    intro: string;
    badges: string[];
    problemHeading: string;
    problemP1: string;
    problemP2: string;
    howHeading: string;
    howLead: string;
    howSteps: { title: string; description: string }[];
    featuresHeading: string;
    featuresLead: string;
    features: { icon: string; title: string; description: string }[];
    hitlHeading: string;
    hitlP1: string;
    hitlP2: string;
    diffHeading: string;
    diffLead: string;
    differentiators: { title: string; description: string }[];
    docHeading: string;
    docLead: string;
    docCards: { title: string; description: string; href: string }[];
    ctaHeading: string;
    ctaText: string;
    ctaButton: string;
  };
  security: {
    title: string;
    description: string;
    heroTitle: string;
    heroSubtitle: string;
    intro: string;
    principlesHeading: string;
    principles: { title: string; text: string }[];
    productLinkHeading: string;
    productLinkBody: string;
    productLinkCta: string;
    contactHeading: string;
    contactBody: string;
  };
  mbotSecurity: {
    title: string;
    description: string;
    heroTitle: string;
    heroSubtitle: string;
    audienceNote: string;
    modelHeading: string;
    modelLead: string;
    modelBoundaries: { title: string; text: string }[];
    flowHeading: string;
    flowLead: string;
    flowSteps: { step: string; description: string }[];
    storageHeading: string;
    storageLead: string;
    storageOpsTitle: string;
    storageOpsAllowed: string[];
    storageOpsForbidden: string[];
    storageEvalTitle: string;
    storageEvalBody: string;
    retentionHeading: string;
    retentionLead: string;
    retentionRows: { field: string; rule: string }[];
    processorsHeading: string;
    processorsLead: string;
    processors: { name: string; role: string; region: string; transferBasis: string }[];
    gdprOpsHeading: string;
    gdprOpsLead: string;
    pubTitle: string;
    pubBody: string;
    dsarTitle: string;
    dsarBody: string;
    incidentTitle: string;
    incidentBody: string;
    statusHeading: string;
    statusLead: string;
    statusToday: string[];
    statusRoadmap: string[];
    faqHeading: string;
    faqLead: string;
    faq: { q: string; a: string }[];
    contactHeading: string;
    contactBody: string;
    contactCta: string;
    lastReviewed: string;
  };
};

export const strings: Record<Locale, Strings> = {
  sv: {
    meta: {
      siteDescription: 'Lectero — Digitala verktyg för hållbarhet och automation',
    },
    nav: {
      about: 'Om oss',
      news: 'Nyheter',
      contact: 'Kontakt',
      products: 'Våra produkter',
      skipToMain: 'Hoppa till huvudinnehåll',
      openMenu: 'Öppna meny',
      closeMenu: 'Stäng meny',
    },
    footer: {
      tagline: 'Digitala verktyg som driver hållbarhet och effektivitet.',
      products: 'Våra produkter',
      contact: 'Kontakt',
      contactUs: 'Kontakta oss',
      aboutLectero: 'Om Lectero',
      rightsReserved: 'Alla rättigheter förbehållna.',
    },
    languageSwitcher: {
      label: 'Språk',
      sv: 'Svenska',
      en: 'English',
    },
    home: {
      title: 'Hem',
      heroTitle: 'Digitala verktyg som driver förändring',
      heroSubtitle:
        'Lectero bygger specifika lösningar för verksamheter som värderar korrekthet, spårbarhet och ansvar — inte bara hastighet.',
      heroCta: 'Utforska MBot',
      productsHeading: 'Våra produkter',
      productsLead:
        'Verktyg som löser verkliga problem — inte generiska plattformar som kräver veckor av anpassning.',
      mbotDescription:
        'Kontrollerad, AI-stödd e-posthantering för verksamheter med kansli. Läser inkommande e-post, klassificerar ärenden och föreslår svar som drafts — aldrig autoskick.',
      greenopsDescription:
        'Väderintelligent driftstyrning för robotklippare och bevattning. Vendoroberoende, spårbar och byggd för anläggningar med höga krav på tillförlitlighet.',
      whyHeading: 'Varför Lectero?',
      whySwedish: {
        title: 'Svenskt & nära',
        text: 'Vi förstår den svenska marknaden och bygger verktyg anpassade för nordiska organisationer och regelverk.',
      },
      whyTech: {
        title: 'Teknik som fungerar',
        text: 'Robusta system byggda med beprövad teknik. Vi prioriterar tillförlitlighet och säkerhet framför hype.',
      },
      whySustainability: {
        title: 'Hållbarhet på riktigt',
        text: 'Från smart grönyteskötsel till effektiv resursanvändning — hållbarhet genomsyrar allt vi gör.',
      },
      ctaHeading: 'Redo att komma igång?',
      ctaText:
        'Hör av dig så berättar vi mer om hur våra verktyg kan hjälpa din organisation.',
      ctaButton: 'Kontakta oss',
    },
    about: {
      title: 'Om oss',
      description: 'Om Lectero — vilka vi är, hur vi jobbar och vad vi tror på',
      heroTitle: 'Om Lectero',
      heroSubtitle:
        'En liten, fokuserad verkstad som bygger digitala verktyg där korrekthet och spårbarhet är viktigare än maximal automation.',
      storyP1:
        'Lectero är ett team av erfarna utvecklare som bestämde sig för att lösa verkliga problem hos verksamheter som ofta hamnar mellan stolarna — för stora för enmansverktyg, för små för enterprise-plattformar.',
      storyP2:
        'Vi bygger inte generiska SaaS-produkter. Vi bygger specifika lösningar för domäner vi förstår på djupet, med AI som arbetspartner och deterministiska regler där det gäller. Resultatet blir verktyg som är enkla att använda men ärliga om vad de gör — och inte gör.',
      storyP3:
        'Vår bakgrund spänner över akademisk forskning, industriell mjukvaruutveckling och agilt ledarskap. Det ger oss både det tekniska djupet och den praktiska ledarerfarenheten som krävs för att gå från idé till driftsatt system utan att tappa kvalitet på vägen.',
      teamHeading: 'Teamet',
      teamLead:
        'Tre personer med olika bakgrunder men en gemensam övertygelse: bra mjukvara byggs av team som förstår både tekniken och verksamheten.',
      approachHeading: 'Så jobbar vi',
      approach1Title: 'AI som arbetspartner, inte ersättare',
      approach1Text:
        'Vi använder AI där det gör nytta — textgenerering, mönsterigenkänning, automation — men alltid med mänsklig kontroll och tydliga gränser. Samma princip bygger vi in i våra produkter: AI assisterar, människan beslutar.',
      approach2Title: 'Kontroll och transparens',
      approach2Text:
        'Varje produkt vi bygger har spårbarhet, tydliga beslutslogiker och möjlighet att inspektera vad systemet gör och varför. Ingen svart låda.',
      approach3Title: 'Djup framför bredd',
      approach3Text:
        'Vi fokuserar på specifika verksamhetsdomäner där vi förstår kontexten. Det gör att vi kan bygga lösningar som faktiskt passar — inte generiska plattformar som kräver veckor av anpassning.',
      techHeading: 'Teknik vi arbetar med',
      techLead: 'Verktygen väljer vi från fall till fall — men dessa återkommer ofta.',
      techBackend: 'Backend & API',
      techAi: 'AI & LLM',
      techIntegration: 'Integration',
      techInfra: 'Infrastruktur',
      ctaHeading: 'Låter det intressant?',
      ctaText: 'Vi tar gärna en kopp kaffe och diskuterar hur vi kan hjälpa er verksamhet.',
      ctaButton: 'Kontakta oss',
    },
    contact: {
      title: 'Kontakt',
      description: 'Kontakta Lectero — vi vill gärna höra från dig',
      heroTitle: 'Kontakta oss',
      heroSubtitle:
        'Intresserad av våra produkter eller har frågor? Hör av dig så återkommer vi.',
      formName: 'Namn',
      formEmail: 'E-post',
      formCompany: 'Företag',
      formMessage: 'Meddelande',
      formSubmit: 'Skicka meddelande',
      formSubmitting: 'Skickar...',
      formSuccessTitle: 'Tack för ditt meddelande!',
      formSuccessBody: 'Vi återkommer så snart vi kan.',
      formError: 'Något gick fel. Försök igen eller kontakta oss direkt via e-post.',
    },
    teamCard: {
      portraitOf: (name) => `Porträtt av ${name}`,
    },
    mbot: {
      title: 'MBot',
      description: 'MBot — kontrollerad, AI-stödd e-posthantering för verksamheter med kansli',
      heroSubtitle:
        'Kontrollerad, AI-stödd e-posthantering för verksamheter där korrekthet, spårbarhet och ansvar är viktigare än maximal automation.',
      heroCta: 'Kontakta oss',
      intro:
        'MBot läser inkommande e-post i Microsoft 365, klassificerar ärenden, föreslår svar som drafts, och hjälper kansliet att arbeta konsekvent utan att tappa mänsklig kontroll. Byggd för verksamheter med tydlig service-uppgift — som svenska golfklubbar — där varje svar måste vara både snabbt och rätt.',
      badges: [
        'Human-in-the-loop',
        'Microsoft 365',
        'Riskstyrd automation',
        'Spårbarhet',
        'GDPR via arkitektur',
        'Multi-LLM med failover',
      ],
      problemHeading: 'Problemet',
      problemP1:
        'E-post är ofta en verksamhets viktigaste servicekanal — och den mest ostrukturerade. Medlemmar, kunder och leverantörer ställer frågor om allt mellan himmel och jord, och kansliet förväntas svara snabbt, korrekt och konsekvent utan att tappa den personliga tonen.',
      problemP2:
        'Utan policy och mallar blir AI-automation bara en snabbare väg till fel. MBot bygger därför in kravet på explicit policy, och tvingar fram struktur innan den börjar generera svar.',
      howHeading: 'Så fungerar det',
      howLead:
        'Sex steg från inkommande mejl till utskickat svar. Varje steg är loggat, varje beslut är spårbart.',
      howSteps: [
        { title: 'Skannar inkorgen', description: 'Hämtar nya meddelanden och metadata via Microsoft Graph API.' },
        { title: 'Klassificerar ärenden', description: 'Varje mejl matchas mot verksamhetens egen taxonomi — kategori och underkategori med explicit konfidens.' },
        { title: 'Utvärderar risk', description: 'Deterministisk motor avgör utfallet: manuell hantering, draft eller (i sällsynta fall) autoskick.' },
        { title: 'Genererar svarsförslag', description: 'AI-draft på svenska i Outlook med rätt ton för avsändartypen — medlem, gäst eller leverantör.' },
        { title: 'Kansliet granskar', description: 'Personalen läser, justerar och beslutar. Systemet föreslår — människan bestämmer.' },
        { title: 'Skickar', description: 'Alltid med mänsklig kontroll som standard. Spårbarhet för varje steg loggas.' },
      ],
      featuresHeading: 'Funktioner',
      featuresLead: 'Kärnfunktionerna som gör MBot till mer än bara ännu en AI-bot.',
      features: [
        { icon: '📂', title: 'Klassificering', description: 'Taxonomi i YAML, begriplig för kanslipersonal — inte bara ingenjörer. Full kontroll över kategorier och underkategorier.' },
        { icon: '✏️', title: 'Svarsförslag', description: 'AI-genererade drafts på svenska med tonhantering per avsändartyp. Draft är standard — aldrig autoskick.' },
        { icon: '🛡️', title: 'Riskstyrd automation', description: 'Deterministisk beslutslogik i fyra dimensioner: klarhet, komplexitet, risk och policypassning. Aldrig en svart låda.' },
        { icon: '🔒', title: 'GDPR genom arkitektur', description: 'Personuppgifter lämnar aldrig Microsoft 365. AI-tjänsten ser bara avidentifierat innehåll. Privacy by design.' },
        { icon: '📊', title: 'Spårbarhet & statistik', description: 'Full loggning per steg. Volym per kategori, svarstider och manuella ingripanden — mätbart från dag ett.' },
        { icon: '📬', title: 'Outlook Add-in', description: 'Fullt fungerande Task Pane direkt i Outlook — klassificering, svarsförslag, korrigering och ärendehantering utan att lämna inkorgen.' },
        { icon: '🔁', title: 'Multi-LLM med failover', description: 'OpenAI som primär LLM med Anthropic Claude som automatisk failover. Redundans utan konfiguration — systemet byter tyst vid fel.' },
        { icon: '🚨', title: 'Oförskämdhetsfilter', description: 'Fyra eskaleringsniåver (ok → gränsfall → over the line → eskalerat). Olämpliga meddelanden flaggas automatiskt och hamnar aldrig i ett vanligt svarsflöde.' },
      ],
      hitlHeading: 'Varför human-in-the-loop?',
      hitlP1:
        'MBot skickar aldrig e-post automatiskt som standard. Varje svar granskas av kanslipersonal innan det går ut. Det är en medveten designprincip, inte en brist.',
      hitlP2:
        'Riskstyrd automation innebär att systemet vet vad det inte vet. Vid osäkerhet faller MBot alltid tillbaka till manuell hantering — hellre långsammare och rätt än snabbt och fel. Över tid kalibreras reglerna baserat på verksamhetens egen statistik.',
      diffHeading: 'Vad skiljer MBot från en vanlig chatbot?',
      diffLead:
        'De flesta AI-lösningar fokuserar på hastighet. MBot fokuserar på kontroll och lärande.',
      differentiators: [
        { title: 'Default är alltid draft', description: 'Inget autoskick som standard. Kansliet granskar varje svar innan det går ut.' },
        { title: 'Policyn ägs av organisationen', description: 'Inte av AI-modellen. Ni bestämmer vad som får automatiseras och vad som aldrig får det.' },
        { title: 'Deterministiska regler styr flödet', description: 'Inte sannolikheter. Beslut om eskalering och risk är förutsägbara och inspekterbara.' },
        { title: 'Full spårbarhet', description: 'Varje steg loggas med tidstämplar och skäl. Statistik visar mönster som förbättrar processer.' },
        { title: 'Organisatoriskt lärande', description: 'Klassificeringsdata blir underlag för bättre rutiner — inte bara snabbare svar.' },
      ],
      docHeading: 'Dokumentation',
      docLead: 'Djupare läsning för den som vill förstå tekniken, priserna och gränserna.',
      docCards: [
        { title: 'Produkt', description: 'Vad MBot gör, hur risklogiken fungerar, och hur mallar och policy hänger ihop.', href: '/products/mbot/product/features/' },
        { title: 'Manual', description: 'Extern dokumentation som beskriver arbetsflöde, arkitektur, tillstånd och mallarbete.', href: '/products/mbot/manual/' },
        { title: 'Ladda ner', description: 'Installera MBot-klienten på Windows eller macOS. Onboarding-wizard guidar genom Azure-registreringen på 5–10 min.', href: '/products/mbot/download/' },
        { title: 'Whitepaper', description: 'Whitepaper som webbsidor, med möjlighet att ladda ner PDF för arkivering och delning.', href: '/products/mbot/whitepaper/' },
        { title: 'Säkerhet & dataskydd', description: 'Procurement-grade dokumentation: säkerhetsmodell, dataflöde, leverantörer, retention, PUB och DSAR.', href: '/products/mbot/security/' },
        { title: 'Priser', description: 'Erbjudande, kvotnivåer, rollover, buffert, och hur överkapacitet hanteras.', href: '/products/mbot/business/offer/' },
        { title: 'FAQ', description: 'Vanliga frågor, begränsningar, och vad som är ett rimligt användningssätt.', href: '/products/mbot/reference/faq/' },
      ],
      ctaHeading: 'Vill ni se MBot i verkligheten?',
      ctaText:
        'Hör av er så bokar vi en demo och går igenom hur MBot kan passa in i er e-posthantering.',
      ctaButton: 'Boka demo',
    },
    security: {
      title: 'Säkerhet & dataskydd',
      description:
        'Hur Lectero arbetar med säkerhet, integritet och dataskydd — sammanfattat på en sida för IT-ansvariga och upphandlare.',
      heroTitle: 'Säkerhet & dataskydd',
      heroSubtitle:
        'Hur vi arbetar med integritet och säkerhet, vad våra produkter får göra och vad de inte kan göra ens om de skulle vilja.',
      intro:
        'Lectero bygger verktyg som hanterar verksamhetsdata. Det innebär att säkerhet och dataskydd inte är en separat tillvalsfunktion — utan en arkitektonisk gräns som styr vad varje del av systemet får göra. Den här sidan beskriver de gemensamma principerna. För produktspecifika svar på vad systemet faktiskt rör, lagrar och skickar vidare hänvisar vi till respektive produkt.',
      principlesHeading: 'Gemensamma principer',
      principles: [
        {
          title: 'Arkitektoniska gränser, inte goda intentioner',
          text: 'Säkerhet bygger vi in genom att vissa förmågor inte finns i vissa delar av systemet. När serverdelen saknar både autentiseringsuppgifter och förmågan att läsa kundens data kan en bugg eller incident inte avslöja något som inte finns där.',
        },
        {
          title: 'Mänsklig kontroll som standard',
          text: 'Inget skickas, ingen åtgärd vidtas och inget beslut låses utan att en människa godkänner det. Det är inte en spärr ovanpå automation — det är hur produkten fungerar normalt. Automation utan mänsklig granskning är en explicit konfiguration, inte en default.',
        },
        {
          title: 'Dataminimering på riktigt',
          text: 'Vi loggar det vi behöver för att driva och felsöka systemet. Inte mer. Operativa loggar är inte ett sekundärt arkiv av kundkommunikation, och innehåll som behövs för utvärdering hanteras separat med striktare åtkomst.',
        },
        {
          title: 'Transparenta gränser för AI',
          text: 'När vi använder LLM-tjänster är det tydligt vad de ser, vad de inte ser och vad som händer om de inte svarar. Vi anonymiserar innan extern bearbetning och vi tränar inte modeller på kunddata.',
        },
      ],
      productLinkHeading: 'Produktspecifika säkerhetssidor',
      productLinkBody:
        'För procurement-frågor med konkreta svar om dataflöden, leverantörer, retention, PUB och DSAR — gå till produktens egen säkerhetssida.',
      productLinkCta: 'MBot — säkerhet & dataskydd',
      contactHeading: 'Säkerhetskontakt',
      contactBody:
        'Frågor om säkerhet, sårbarhetsrapporter eller PUB-avtal hanteras via vår vanliga kontaktväg under upphandling. Akuta säkerhetsincidenter eskaleras direkt till teamet.',
    },
    mbotSecurity: {
      title: 'MBot — säkerhet & dataskydd',
      description:
        'Procurement-grade dokumentation om MBots säkerhetsmodell, dataflöden, leverantörer, retention, PUB och DSAR.',
      heroTitle: 'MBot — säkerhet & dataskydd',
      heroSubtitle:
        'Hur MBot är byggt, vad systemet får göra, vilka leverantörer som är involverade och vad vi faktiskt kan lova idag.',
      audienceNote:
        'Sidan är skriven för IT-ansvariga och upphandlare som behöver konkreta svar innan demo eller pilot. Tonen är teknisk och saklig — inte marknadsmässig. Saker vi inte kan lova står inte här.',
      modelHeading: 'Säkerhetsmodell i korthet',
      modelLead:
        'Säkerheten i MBot bygger på fyra arkitektoniska gränser. De är inte policies — de är begränsningar i vad varje komponent har förmåga att göra.',
      modelBoundaries: [
        {
          title: 'Servern kan inte läsa klubbens brevlåda',
          text: 'All Microsoft 365-autentisering sker i klienten, med behörigheter klubben själv tilldelar. MBot-servern har inga tokens, inga lösenord och ingen mekanism för att initiera kontakt med Exchange. Detta är en arkitektonisk avgränsning, inte en policyfråga.',
        },
        {
          title: 'Identitet skiljs från innehåll innan LLM',
          text: 'Klienten anonymiserar avsändare, mottagare och andra identifierande uppgifter innan innehåll skickas vidare för LLM-bearbetning. Servern och AI-tjänsten ser endast avidentifierad text. Kopplingen mellan analysresultat och faktisk avsändare återupprättas i klienten.',
        },
        {
          title: 'Mänsklig granskning är obligatorisk',
          text: 'Default i MBot är "skapa utkast", inte "skicka". Personalen läser, justerar och beslutar. Eventuell autoskick kräver explicit konfiguration per ärendekategori — och även då är riskmotorn ett aktivt veto.',
        },
        {
          title: 'Operativa loggar separeras från utvärderingskorpus',
          text: 'Det vi loggar för drift och felsökning är skiljt från det vi behåller för produktutvärdering. Två datatyper, två retention-policys, två åtkomstnivåer. Operativa loggar får inte bli ett sekundärt arkiv över kundkommunikation.',
        },
      ],
      flowHeading: 'Datapath: från inkorg till svarsförslag',
      flowLead:
        'Stegen nedan visar exakt vad som händer med ett inkommande mejl, vad som överförs vart, och var identifierande information avlägsnas.',
      flowSteps: [
        { step: '1. Mejl anländer i Microsoft 365', description: 'Mejlet ligger i klubbens egen Microsoft 365-miljö. MBot-servern har inte sett det och kan inte se det.' },
        { step: '2. Klienten hämtar mejlet via Microsoft Graph', description: 'Klienten autentiserar mot M365 med behörigheter klubben tilldelat. Tokens lämnar aldrig klientmiljön.' },
        { step: '3. Klienten anonymiserar innehåll', description: 'Avsändarens namn, e-postadress och andra identifierande uppgifter ersätts eller tas bort. En avsändar-hash genereras för intern korrelering vid behov.' },
        { step: '4. Avidentifierat innehåll skickas till MBot-servern', description: 'MBot-servern tar emot ett rensat textinnehåll utan koppling till en identifierbar person.' },
        { step: '5. MBot-servern anropar LLM', description: 'OpenAI är primär; Anthropic Claude är automatisk failover. Ingen LLM-leverantör tränar modeller på kunddata.' },
        { step: '6. Klassificering, riskbedömning, draft-utkast genereras', description: 'Resultatet returneras till klienten — inte direkt till mottagaren.' },
        { step: '7. Klienten kopplar samman draft med faktisk avsändare', description: 'Endast i klienten existerar identitet och innehåll tillsammans. Personalen ser draft i Outlook, granskar och beslutar.' },
        { step: '8. Mänsklig granskning före utskick', description: 'Inget skickas utan att personalen aktivt godkänt det. Detta är default i alla konfigurationer.' },
      ],
      storageHeading: 'Lagring, loggar och retention',
      storageLead:
        'MBot skiljer mellan operativa loggar (för drift, felsökning och audit) och en utvärderingskorpus (för produktförbättring). De har olika regler.',
      storageOpsTitle: 'Operativa loggar — vad får finnas',
      storageOpsAllowed: [
        'sender_hash (avsändar-hash, ej fullständig adress)',
        'tidsstämplar',
        'kategori och underkategori',
        'medlemsstatus',
        'åtgärdstyp',
        'workflow-tillstånd',
        'modellversion',
        'prompt-versionsidentifierare',
        'statuskoder',
      ],
      storageOpsForbidden: [
        'fullständig e-postadress',
        'rå e-postkropp',
        'fullständig ämnesrad',
        'rå användar-redigerad svarstext',
        'fritextundantag som citerar kundinnehåll',
        'fullständiga LLM-prompts som citerar kundinnehåll',
      ],
      storageEvalTitle: 'Utvärderingskorpus — vad och varför',
      storageEvalBody:
        'För längsgående analys, prompt-jämförelser och förbättring av drafts kan rikare innehåll behållas under explicit, granskad governance. Korpusen har striktare åtkomst än operativa loggar, har egen retention-policy, och täcks av DSAR. Den är ett medvetet datalager — inte ett sidoeffekt-arkiv.',
      retentionHeading: 'Retention',
      retentionLead:
        'Aktuell policy. Tider kan ändras inom ramen för en uppdaterad GDPR-policy och dokumenteras då här.',
      retentionRows: [
        { field: 'archived_emails.body_text', rule: 'anonymisera efter 30 dagar, radera rad efter 180 dagar' },
        { field: 'archived_emails.subject', rule: 'anonymisera efter 30 dagar, radera rad efter 180 dagar' },
        { field: 'archived_drafts.draft_body', rule: 'radera efter 90 dagar' },
        { field: 'events.payload_json', rule: 'sanering vid skrivning, radera efter 90 dagar' },
        { field: 'jobs.message_json', rule: 'behålls bara så länge det behövs operativt; terminala jobb raderas efter 30 dagar' },
        { field: 'rudeness_analysis.reasoning', rule: 'radera efter 30 dagar' },
        { field: 'rudeness_analysis.suggested_responses_json', rule: 'radera efter 30 dagar' },
        { field: 'sender_rudeness_history.previous_scores_json', rule: 'radera eller sammanfatta efter 90 dagar' },
        { field: 'clients (klient-installationer)', rule: 'behålls under aktiv användning; inaktiva tas bort efter 180 dagar' },
        { field: 'llm_token_usage', rule: 'aggregerad användning behålls långsiktigt; person-länkbar detaljnivå undviks bortom 90 dagar' },
        { field: 'evaluation corpus', rule: 'separat schema, godkänt per användning' },
      ],
      processorsHeading: 'Underbiträden och tredjelandsöverföring',
      processorsLead:
        'Tjänster som MBot använder och deras roll i dataflödet. Personuppgiftsbiträdesavtal (PUB) finns eller kan ingås per leverantör.',
      processors: [
        {
          name: 'Microsoft 365 (Exchange / Graph)',
          role: 'Mejl- och identitetstjänst — klubbens egen miljö',
          region: 'EU (klubbens M365-region)',
          transferBasis: 'Direktrelation klubben↔Microsoft; ingen Lectero-pass',
        },
        {
          name: 'OpenAI',
          role: 'Primär LLM (klassificering, draft-generering)',
          region: 'USA (DPA inkluderar SCC)',
          transferBasis: 'Avidentifierat innehåll; inget träning på kunddata enligt avtal',
        },
        {
          name: 'Anthropic',
          role: 'LLM-failover när OpenAI är otillgänglig',
          region: 'USA (DPA inkluderar SCC)',
          transferBasis: 'Avidentifierat innehåll; inget träning på kunddata enligt avtal',
        },
        {
          name: 'Lectero (MBot-server)',
          role: 'Orkestrering, riskbedömning, retention-styrning',
          region: 'EU',
          transferBasis: 'Behandlar endast avidentifierat innehåll',
        },
      ],
      gdprOpsHeading: 'PUB, DSAR och incidenthantering',
      gdprOpsLead:
        'Det praktiska. Vad ni får, vad ni kan begära och vad som händer om något går fel.',
      pubTitle: 'PUB / personuppgiftsbiträdesavtal',
      pubBody:
        'Lectero ingår PUB med kund för MBot-användning. Avtalet definierar oss som biträde, klubben som personuppgiftsansvarig, beskriver behandlingar, listar underbiträden och stipulerar audit-rätt. Vi delar mall-PUB på begäran inför upphandling.',
      dsarTitle: 'DSAR — begäran om utdrag, rättelse, radering',
      dsarBody:
        'En registrerad person har rätt att få veta vilken information om hen som finns och kan begära radering eller anonymisering. För MBot innebär det: primär uppslagsnyckel är e-postadress, korrelering sker via sender_hash, export omfattar både operativa data och utvärderingskorpus, och radering tillämpar field-level-anonymisering enligt retention-policy. Vi behåller endast PII-fri audit av att DSAR-begäran utförts.',
      incidentTitle: 'Incidenthantering',
      incidentBody:
        'Vid säkerhetsincident kontaktas klubben utan onödigt dröjsmål och senast inom 72 timmar efter att vi blivit medvetna. Vi tillhandahåller den information som krävs för att klubben (som personuppgiftsansvarig) ska kunna anmäla till IMY enligt GDPR artikel 33. Process, kontaktväg och tidsfönster definieras i PUB.',
      statusHeading: 'Vad vi kan lova idag',
      statusLead:
        'Honest list över vad som är skarpt nu och vad som ligger på roadmap. Vi listar inte certifieringar vi inte har.',
      statusToday: [
        'Mänsklig granskning som default; ingen autoskick utan explicit konfiguration',
        'Klient-side anonymisering före LLM-bearbetning',
        'Separation mellan operativa loggar och utvärderingskorpus',
        'PUB-avtal kan ingås med varje kund',
        'DSAR-stöd över båda dataklasserna',
        'OpenAI och Anthropic enligt avtal som utesluter modellträning på kunddata',
        'Incidentnotifiering inom 72 timmar',
      ],
      statusRoadmap: [
        'ISO 27001-certifiering — under utvärdering, ej beslutat',
        'SOC 2 Type II — utanför nuvarande scope',
        'Krypterad lokal SQLite-databas — under utvärdering',
        'Single sign-on för admin-UI mot kundens identity provider',
        'Externt pen-test publicerat med åtgärds-rapport',
      ],
      faqHeading: 'Vanliga procurement-frågor',
      faqLead: 'Direkta svar på de frågor IT-ansvariga ställer först.',
      faq: [
        {
          q: 'Tränar ni AI-modeller på vår data?',
          a: 'Nej. Avtalen med både OpenAI och Anthropic utesluter modellträning på kunddata. Vi själva tränar inga modeller på kundinnehåll.',
        },
        {
          q: 'Kan er server läsa vår brevlåda?',
          a: 'Nej. Microsoft 365-autentisering sker i klienten med behörigheter ni själva tilldelar. MBot-servern har inga tokens och kan inte initiera kontakt med Exchange.',
        },
        {
          q: 'Var lagras data?',
          a: 'Mejlet stannar i klubbens M365-miljö (EU). Avidentifierat innehåll behandlas av MBot-server (EU) och LLM-leverantör (USA, under SCC). Operativa loggar lagras i EU.',
        },
        {
          q: 'Vad händer vid incident?',
          a: 'Vi notifierar klubben utan onödigt dröjsmål och senast inom 72 timmar och ger den information som krävs för anmälan till IMY enligt artikel 33. Process detaljeras i PUB.',
        },
        {
          q: 'Hur hanterar ni en DSAR-begäran?',
          a: 'E-postadress används som primär uppslagsnyckel. Vi exporterar retention-täckta operativa data och utvärderingskorpus, och tillämpar field-level-radering enligt vår policy. Endast PII-fri audit av DSAR-utförandet behålls.',
        },
        {
          q: 'Vilka underbiträden är inblandade?',
          a: 'Microsoft 365 (klubbens direktrelation), OpenAI (primär LLM), Anthropic (LLM-failover). Vi uppdaterar listan här om något ändras.',
        },
        {
          q: 'Kan vi få ett PUB-avtal innan pilot?',
          a: 'Ja. Mall-PUB delas på begäran. Det signeras innan produktiv pilot startar.',
        },
        {
          q: 'Vad krypteras hur?',
          a: 'All transport mellan klient ↔ MBot-server ↔ LLM-leverantör går över TLS. Vi gör inte påståenden om "krypterat i vila" som vi inte kan stå för fullt ut — den lokala SQLite-databasen är inte explicit krypterad i nuläget. Det är på roadmap.',
        },
      ],
      contactHeading: 'Säkerhetskontakt',
      contactBody:
        'För upphandlingsfrågor, sårbarhetsrapporter eller begäran om PUB/DPA: använd den vanliga kontaktvägen. Akuta säkerhetsincidenter eskaleras direkt till teamet och hanteras enligt PUB.',
      contactCta: 'Kontakta oss',
      lastReviewed: 'Senast granskad: april 2026.',
    },
  },
  en: {
    meta: {
      siteDescription: 'Lectero — Digital tools for sustainability and automation',
    },
    nav: {
      about: 'About',
      news: 'News',
      contact: 'Contact',
      products: 'Our products',
      skipToMain: 'Skip to main content',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    footer: {
      tagline: 'Digital tools driving sustainability and efficiency.',
      products: 'Our products',
      contact: 'Contact',
      contactUs: 'Contact us',
      aboutLectero: 'About Lectero',
      rightsReserved: 'All rights reserved.',
    },
    languageSwitcher: {
      label: 'Language',
      sv: 'Svenska',
      en: 'English',
    },
    home: {
      title: 'Home',
      heroTitle: 'Digital tools that drive change',
      heroSubtitle:
        'Lectero builds purpose-built solutions for organisations that value correctness, traceability and accountability — not just speed.',
      heroCta: 'Explore MBot',
      productsHeading: 'Our products',
      productsLead:
        'Tools that solve real problems — not generic platforms that take weeks to configure.',
      mbotDescription:
        'Controlled, AI-assisted email handling for organisations with a back office. Reads incoming mail, classifies cases and proposes drafts — never auto-send.',
      greenopsDescription:
        'Weather-aware operational control for robotic mowers and irrigation. Vendor-neutral, traceable and built for facilities with high reliability requirements.',
      whyHeading: 'Why Lectero?',
      whySwedish: {
        title: 'Swedish & close',
        text: 'We understand the Nordic market and build tools tailored to Nordic organisations and regulations.',
      },
      whyTech: {
        title: 'Technology that works',
        text: 'Robust systems built with proven technology. We prioritise reliability and security over hype.',
      },
      whySustainability: {
        title: 'Genuine sustainability',
        text: 'From smart green-space management to efficient resource use — sustainability runs through everything we do.',
      },
      ctaHeading: 'Ready to get started?',
      ctaText:
        'Get in touch and we’ll tell you more about how our tools can help your organisation.',
      ctaButton: 'Contact us',
    },
    about: {
      title: 'About',
      description: 'About Lectero — who we are, how we work and what we believe in',
      heroTitle: 'About Lectero',
      heroSubtitle:
        'A small, focused workshop building digital tools where correctness and traceability matter more than maximum automation.',
      storyP1:
        'Lectero is a team of seasoned developers who set out to solve real problems for organisations that fall between the cracks — too big for one-person tools, too small for enterprise platforms.',
      storyP2:
        'We don’t build generic SaaS products. We build specific solutions for domains we understand deeply, using AI as a working partner and deterministic rules where they matter. The result is tools that are easy to use but honest about what they do — and don’t do.',
      storyP3:
        'Our background spans academic research, industrial software development and agile leadership. That gives us both the technical depth and the practical leadership experience needed to take an idea from sketch to running system without losing quality along the way.',
      teamHeading: 'The team',
      teamLead:
        'Three people with different backgrounds but one shared belief: good software is built by teams that understand both the technology and the business.',
      approachHeading: 'How we work',
      approach1Title: 'AI as a partner, not a replacement',
      approach1Text:
        'We use AI where it earns its place — text generation, pattern recognition, automation — but always with human oversight and clear boundaries. We build the same principle into our products: AI assists, humans decide.',
      approach2Title: 'Control and transparency',
      approach2Text:
        'Every product we build has traceability, clear decision logic and the ability to inspect what the system is doing and why. No black box.',
      approach3Title: 'Depth over breadth',
      approach3Text:
        'We focus on specific domains where we understand the context. That lets us build solutions that actually fit — not generic platforms that need weeks of configuration.',
      techHeading: 'Technology we work with',
      techLead: 'We choose tools per case — but these come up often.',
      techBackend: 'Backend & API',
      techAi: 'AI & LLM',
      techIntegration: 'Integration',
      techInfra: 'Infrastructure',
      ctaHeading: 'Sound interesting?',
      ctaText: 'We’re happy to grab a coffee and discuss how we can help your business.',
      ctaButton: 'Contact us',
    },
    contact: {
      title: 'Contact',
      description: 'Contact Lectero — we’d love to hear from you',
      heroTitle: 'Contact us',
      heroSubtitle:
        'Interested in our products or have questions? Drop us a line and we’ll get back to you.',
      formName: 'Name',
      formEmail: 'Email',
      formCompany: 'Company',
      formMessage: 'Message',
      formSubmit: 'Send message',
      formSubmitting: 'Sending...',
      formSuccessTitle: 'Thank you for your message!',
      formSuccessBody: 'We’ll get back to you as soon as we can.',
      formError: 'Something went wrong. Please try again or contact us directly via email.',
    },
    teamCard: {
      portraitOf: (name) => `Portrait of ${name}`,
    },
    mbot: {
      title: 'MBot',
      description: 'MBot — controlled, AI-assisted email handling for organisations with a back office',
      heroSubtitle:
        'Controlled, AI-assisted email handling for organisations where correctness, traceability and accountability matter more than maximum automation.',
      heroCta: 'Contact us',
      intro:
        'MBot reads incoming email in Microsoft 365, classifies cases, proposes drafts and helps the back office work consistently without losing human control. Built for organisations with a clear service mission — such as Swedish golf clubs — where every reply must be both fast and right.',
      badges: [
        'Human-in-the-loop',
        'Microsoft 365',
        'Risk-driven automation',
        'Traceability',
        'GDPR by design',
        'Multi-LLM with failover',
      ],
      problemHeading: 'The problem',
      problemP1:
        'Email is often an organisation’s most important service channel — and the most unstructured. Members, customers and suppliers ask about everything imaginable, and staff are expected to reply quickly, correctly and consistently without losing the personal tone.',
      problemP2:
        'Without policy and templates, AI automation is just a faster route to mistakes. MBot therefore builds in the requirement of explicit policy and forces structure before it starts generating replies.',
      howHeading: 'How it works',
      howLead:
        'Six steps from incoming email to sent reply. Every step is logged, every decision is traceable.',
      howSteps: [
        { title: 'Scans the inbox', description: 'Fetches new messages and metadata via the Microsoft Graph API.' },
        { title: 'Classifies cases', description: 'Each email is matched against the organisation’s own taxonomy — category and sub-category with explicit confidence.' },
        { title: 'Evaluates risk', description: 'A deterministic engine decides the outcome: manual handling, draft or (rarely) auto-send.' },
        { title: 'Drafts a reply', description: 'AI draft in the right tone for the sender type — member, guest or supplier.' },
        { title: 'Staff reviews', description: 'Staff read, adjust and decide. The system proposes — humans decide.' },
        { title: 'Sends', description: 'Always with human control as default. Every step is logged for traceability.' },
      ],
      featuresHeading: 'Features',
      featuresLead: 'The core capabilities that make MBot more than just another AI bot.',
      features: [
        { icon: '📂', title: 'Classification', description: 'Taxonomy in YAML, readable by office staff — not just engineers. Full control over categories and sub-categories.' },
        { icon: '✏️', title: 'Draft replies', description: 'AI-generated drafts with tone tuned to the sender type. Draft is the default — never auto-send.' },
        { icon: '🛡️', title: 'Risk-driven automation', description: 'Deterministic decision logic across four dimensions: clarity, complexity, risk and policy fit. Never a black box.' },
        { icon: '🔒', title: 'GDPR by design', description: 'Personal data never leaves Microsoft 365. The AI service only sees de-identified content. Privacy by design.' },
        { icon: '📊', title: 'Traceability & analytics', description: 'Full logging per step. Volume per category, response times and manual interventions — measurable from day one.' },
        { icon: '📬', title: 'Outlook Add-in', description: 'Fully working Task Pane in Outlook — classification, drafts, corrections and case handling without leaving the inbox.' },
        { icon: '🔁', title: 'Multi-LLM with failover', description: 'OpenAI as the primary LLM with Anthropic Claude as automatic failover. Redundancy without configuration — the system switches silently on failure.' },
        { icon: '🚨', title: 'Rudeness filter', description: 'Four escalation levels (ok → borderline → over the line → escalated). Inappropriate messages are flagged automatically and never enter the regular reply flow.' },
      ],
      hitlHeading: 'Why human-in-the-loop?',
      hitlP1:
        'MBot never sends email automatically by default. Every reply is reviewed by office staff before it goes out. That’s a deliberate design choice, not a shortcoming.',
      hitlP2:
        'Risk-driven automation means the system knows what it doesn’t know. When in doubt, MBot always falls back to manual handling — slower and right beats fast and wrong. Over time the rules calibrate based on the organisation’s own data.',
      diffHeading: 'What sets MBot apart from a regular chatbot?',
      diffLead:
        'Most AI solutions focus on speed. MBot focuses on control and learning.',
      differentiators: [
        { title: 'Default is always draft', description: 'No auto-send by default. Staff review every reply before it goes out.' },
        { title: 'Policy is owned by the organisation', description: 'Not by the AI model. You decide what may be automated and what never may.' },
        { title: 'Deterministic rules drive the flow', description: 'Not probabilities. Escalation and risk decisions are predictable and inspectable.' },
        { title: 'Full traceability', description: 'Every step is logged with timestamps and reasons. Analytics surface patterns that improve processes.' },
        { title: 'Organisational learning', description: 'Classification data becomes the basis for better routines — not just faster replies.' },
      ],
      docHeading: 'Documentation',
      docLead: 'Deeper reading for those who want to understand the technology, pricing and limits.',
      docCards: [
        { title: 'Product', description: 'What MBot does, how the risk logic works and how templates and policy fit together.', href: '/products/mbot/product/features/' },
        { title: 'Manual', description: 'External documentation describing workflow, architecture, states and template work.', href: '/products/mbot/manual/' },
        { title: 'Download', description: 'Install the MBot client on Windows or macOS. The onboarding wizard guides you through Azure registration in 5–10 min.', href: '/products/mbot/download/' },
        { title: 'Whitepaper', description: 'Whitepaper as web pages, with PDF download for archiving and sharing.', href: '/products/mbot/whitepaper/' },
        { title: 'Security & data protection', description: 'Procurement-grade documentation: security model, data flow, processors, retention, DPA and DSAR.', href: '/products/mbot/security/' },
        { title: 'Pricing', description: 'Offer, quota tiers, rollover, buffer and how excess capacity is handled.', href: '/products/mbot/business/offer/' },
        { title: 'FAQ', description: 'Frequent questions, limitations and what counts as reasonable use.', href: '/products/mbot/reference/faq/' },
      ],
      ctaHeading: 'Want to see MBot in real life?',
      ctaText:
        'Get in touch and we’ll book a demo to walk through how MBot fits into your email handling.',
      ctaButton: 'Book a demo',
    },
    security: {
      title: 'Security & data protection',
      description:
        'How Lectero approaches security, privacy and data protection — summarised on one page for IT leads and procurement.',
      heroTitle: 'Security & data protection',
      heroSubtitle:
        'How we approach privacy and security, what our products are allowed to do and what they cannot do even if they wanted to.',
      intro:
        'Lectero builds tools that handle business data. That means security and data protection are not optional add-ons — they are architectural boundaries that constrain what each part of the system is allowed to do. This page describes the shared principles. For product-specific answers about what the system actually touches, stores and forwards, see the relevant product page.',
      principlesHeading: 'Shared principles',
      principles: [
        {
          title: 'Architectural boundaries, not good intentions',
          text: 'We build security in by ensuring certain capabilities simply do not exist in certain parts of the system. When the server lacks both authentication credentials and the ability to read customer data, a bug or incident cannot expose what isn’t there.',
        },
        {
          title: 'Human control by default',
          text: 'Nothing is sent, no action taken, no decision locked without a human approving it. It is not a guard on top of automation — it is how the product normally works. Automation without human review is an explicit configuration, not a default.',
        },
        {
          title: 'Real data minimisation',
          text: 'We log what we need to operate and troubleshoot. Not more. Operational logs are not a secondary archive of customer communications, and content needed for evaluation is handled separately under stricter access.',
        },
        {
          title: 'Transparent boundaries for AI',
          text: 'When we use LLM services it is clear what they see, what they don’t see and what happens if they fail. We anonymise before external processing and we do not train models on customer data.',
        },
      ],
      productLinkHeading: 'Product-specific security pages',
      productLinkBody:
        'For procurement-grade answers about data flows, processors, retention, DPA and DSAR — go to the product’s own security page.',
      productLinkCta: 'MBot — security & data protection',
      contactHeading: 'Security contact',
      contactBody:
        'Security questions, vulnerability reports and DPA requests are handled via our normal contact channel during procurement. Urgent security incidents are escalated directly to the team.',
    },
    mbotSecurity: {
      title: 'MBot — security & data protection',
      description:
        'Procurement-grade documentation of MBot’s security model, data flows, processors, retention, DPA and DSAR.',
      heroTitle: 'MBot — security & data protection',
      heroSubtitle:
        'How MBot is built, what the system is allowed to do, which providers are involved, and what we can credibly commit to today.',
      audienceNote:
        'This page is written for IT leads and procurement teams that need concrete answers before a demo or pilot. The tone is technical and factual — not marketing. Things we cannot commit to are not on this page.',
      modelHeading: 'Security model in brief',
      modelLead:
        'MBot’s security rests on four architectural boundaries. They are not policies — they are constraints on what each component is capable of doing.',
      modelBoundaries: [
        {
          title: 'The server cannot read the club’s mailbox',
          text: 'All Microsoft 365 authentication happens in the client, with permissions the club itself grants. The MBot server has no tokens, no passwords and no mechanism to initiate contact with Exchange. This is an architectural constraint, not a policy.',
        },
        {
          title: 'Identity is separated from content before LLM',
          text: 'The client anonymises sender, recipient and other identifying information before content is forwarded for LLM processing. The server and AI service only see de-identified text. The mapping between analysis result and actual sender is reconstructed in the client.',
        },
        {
          title: 'Human review is mandatory',
          text: 'The default in MBot is "create draft", not "send". Staff read, adjust and decide. Any auto-send requires explicit per-category configuration — and even then the risk engine actively vetoes when warranted.',
        },
        {
          title: 'Operational logs are separated from evaluation corpus',
          text: 'What we log for operations and troubleshooting is separate from what we keep for product evaluation. Two data classes, two retention policies, two access levels. Operational logs are not allowed to become a secondary archive of customer communications.',
        },
      ],
      flowHeading: 'Data path: from inbox to draft reply',
      flowLead:
        'The steps below show exactly what happens to an incoming email, what is transferred where, and where identifying information is stripped.',
      flowSteps: [
        { step: '1. Email arrives in Microsoft 365', description: 'The email lives in the club’s own M365 environment. The MBot server has not seen it and cannot see it.' },
        { step: '2. The client fetches the email via Microsoft Graph', description: 'The client authenticates against M365 with the permissions the club has granted. Tokens never leave the client.' },
        { step: '3. The client anonymises content', description: 'Sender name, email address and other identifying fields are replaced or removed. A sender hash is generated for internal correlation when needed.' },
        { step: '4. De-identified content is sent to the MBot server', description: 'The MBot server receives a cleaned text payload with no link to an identifiable person.' },
        { step: '5. The MBot server invokes the LLM', description: 'OpenAI is primary; Anthropic Claude is automatic failover. No LLM provider trains models on customer data.' },
        { step: '6. Classification, risk assessment and draft are generated', description: 'The result returns to the client — not directly to the recipient.' },
        { step: '7. The client reconnects draft with actual sender', description: 'Identity and content only exist together in the client. Staff see the draft in Outlook, review and decide.' },
        { step: '8. Human review before sending', description: 'Nothing is sent without staff actively approving it. This is the default in every configuration.' },
      ],
      storageHeading: 'Storage, logging and retention',
      storageLead:
        'MBot distinguishes operational logs (for operation, troubleshooting and audit) from an evaluation corpus (for product improvement). They have different rules.',
      storageOpsTitle: 'Operational logs — what is allowed',
      storageOpsAllowed: [
        'sender_hash (sender hash, not the full address)',
        'timestamps',
        'category and sub-category',
        'membership status',
        'action type',
        'workflow state',
        'model version',
        'prompt version identifiers',
        'status codes',
      ],
      storageOpsForbidden: [
        'full email address',
        'raw email body',
        'full subject line',
        'raw user-edited reply text',
        'free-text exception dumps containing customer content',
        'full LLM prompts that quote customer content',
      ],
      storageEvalTitle: 'Evaluation corpus — what and why',
      storageEvalBody:
        'For longitudinal analysis, prompt comparison and draft improvement, richer content can be retained under explicit governed governance. The corpus has stricter access than operational logs, has its own retention policy, and is covered by DSAR. It is a deliberate data store — not an accidental archive.',
      retentionHeading: 'Retention',
      retentionLead:
        'Current policy. Times can change as part of an updated GDPR policy and would be documented here.',
      retentionRows: [
        { field: 'archived_emails.body_text', rule: 'anonymise after 30 days, delete row after 180 days' },
        { field: 'archived_emails.subject', rule: 'anonymise after 30 days, delete row after 180 days' },
        { field: 'archived_drafts.draft_body', rule: 'delete after 90 days' },
        { field: 'events.payload_json', rule: 'sanitised on write, delete after 90 days' },
        { field: 'jobs.message_json', rule: 'kept only as long as operationally needed; terminal jobs deleted after 30 days' },
        { field: 'rudeness_analysis.reasoning', rule: 'delete after 30 days' },
        { field: 'rudeness_analysis.suggested_responses_json', rule: 'delete after 30 days' },
        { field: 'sender_rudeness_history.previous_scores_json', rule: 'delete or summarise after 90 days' },
        { field: 'clients (client installations)', rule: 'kept while in active use; inactive entries removed after 180 days' },
        { field: 'llm_token_usage', rule: 'aggregated usage retained long-term; person-linkable detail avoided beyond 90 days' },
        { field: 'evaluation corpus', rule: 'separate schedule, approved per use' },
      ],
      processorsHeading: 'Processors and third-country transfers',
      processorsLead:
        'Services that MBot uses and their role in the data flow. Data Processing Agreements (DPA) are signed or signable per provider.',
      processors: [
        {
          name: 'Microsoft 365 (Exchange / Graph)',
          role: 'Mail and identity service — the club’s own environment',
          region: 'EU (the club’s M365 region)',
          transferBasis: 'Direct relationship club↔Microsoft; not via Lectero',
        },
        {
          name: 'OpenAI',
          role: 'Primary LLM (classification, draft generation)',
          region: 'US (DPA includes SCC)',
          transferBasis: 'De-identified content; no model training on customer data per contract',
        },
        {
          name: 'Anthropic',
          role: 'LLM failover when OpenAI is unavailable',
          region: 'US (DPA includes SCC)',
          transferBasis: 'De-identified content; no model training on customer data per contract',
        },
        {
          name: 'Lectero (MBot server)',
          role: 'Orchestration, risk assessment, retention enforcement',
          region: 'EU',
          transferBasis: 'Processes only de-identified content',
        },
      ],
      gdprOpsHeading: 'DPA, DSAR and incident handling',
      gdprOpsLead:
        'The practical bits. What you get, what you can request, and what happens if something goes wrong.',
      pubTitle: 'DPA / data processing agreement',
      pubBody:
        'Lectero signs a DPA with the customer for MBot use. The agreement defines us as processor and the club as controller, describes the processing, lists subprocessors and grants audit rights. We share the template DPA on request during procurement.',
      dsarTitle: 'DSAR — access, rectification, erasure',
      dsarBody:
        'A data subject has the right to know what information about them exists and can request erasure or anonymisation. For MBot this means: primary lookup key is email address, correlation uses sender_hash, export covers both operational data and evaluation corpus, and erasure applies field-level anonymisation per the retention policy. Only PII-free audit of DSAR execution itself is retained.',
      incidentTitle: 'Incident handling',
      incidentBody:
        'In the event of a security incident the club is contacted without undue delay and within 72 hours of our becoming aware. We provide the information needed for the club (as controller) to notify IMY under GDPR article 33. Process, contact channel and time window are defined in the DPA.',
      statusHeading: 'What we can commit to today',
      statusLead:
        'Honest list of what is in production today and what is on the roadmap. We do not list certifications we do not have.',
      statusToday: [
        'Human review by default; no auto-send without explicit configuration',
        'Client-side anonymisation before LLM processing',
        'Separation between operational logs and evaluation corpus',
        'DPA available with every customer',
        'DSAR support across both data classes',
        'OpenAI and Anthropic under contract that excludes model training on customer data',
        'Incident notification within 72 hours',
      ],
      statusRoadmap: [
        'ISO 27001 certification — under evaluation, not committed',
        'SOC 2 Type II — outside current scope',
        'Encrypted local SQLite database — under evaluation',
        'Single sign-on for admin UI against the customer’s identity provider',
        'External pen-test published with remediation report',
      ],
      faqHeading: 'Common procurement questions',
      faqLead: 'Direct answers to the questions IT leads ask first.',
      faq: [
        {
          q: 'Do you train AI models on our data?',
          a: 'No. Our agreements with both OpenAI and Anthropic exclude training on customer data. We do not train any models on customer content ourselves.',
        },
        {
          q: 'Can your server read our mailbox?',
          a: 'No. Microsoft 365 authentication happens in the client with permissions you grant. The MBot server has no tokens and cannot initiate contact with Exchange.',
        },
        {
          q: 'Where is data stored?',
          a: 'Email stays in the club’s M365 environment (EU). De-identified content is processed by the MBot server (EU) and the LLM provider (US, under SCC). Operational logs are stored in the EU.',
        },
        {
          q: 'What happens in an incident?',
          a: 'We notify the club without undue delay and within 72 hours and provide the information needed for IMY notification under article 33. Process is detailed in the DPA.',
        },
        {
          q: 'How do you handle a DSAR request?',
          a: 'Email address is the primary lookup key. We export retention-covered operational data and evaluation corpus, and apply field-level erasure per our policy. Only PII-free audit of the DSAR execution is retained.',
        },
        {
          q: 'Which subprocessors are involved?',
          a: 'Microsoft 365 (your direct relationship), OpenAI (primary LLM), Anthropic (LLM failover). We update the list here if anything changes.',
        },
        {
          q: 'Can we get a DPA before piloting?',
          a: 'Yes. The template DPA is shared on request and signed before a productive pilot starts.',
        },
        {
          q: 'What is encrypted how?',
          a: 'All transport between client ↔ MBot server ↔ LLM provider goes over TLS. We do not make claims about "encrypted at rest" that we cannot fully stand behind — the local SQLite database is not explicitly encrypted today. That is on the roadmap.',
        },
      ],
      contactHeading: 'Security contact',
      contactBody:
        'For procurement questions, vulnerability reports or DPA requests use the normal contact channel. Urgent security incidents are escalated directly to the team and handled per the DPA.',
      contactCta: 'Contact us',
      lastReviewed: 'Last reviewed: April 2026.',
    },
  },
};

export function getStrings(locale: Locale | string | undefined): Strings {
  if (locale && (locales as readonly string[]).includes(locale)) {
    return strings[locale as Locale];
  }
  return strings[defaultLocale];
}
