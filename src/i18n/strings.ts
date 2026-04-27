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
  cases: {
    title: string;
    description: string;
    heroTitle: string;
    heroSubtitle: string;
    indexEmpty: string;
    backToList: string;
    metricsHeading: string;
    quoteHeading: string;
    customerHeading: string;
    anonymousFallback: string;
    teaserHeading: string;
    teaserCta: string;
    readCase: string;
    publishedDate: (date: string) => string;
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
        { title: 'GDPR', description: 'Dataskydd genom design: ingen personidentifierande information skickas till AI-tjänsten.', href: '/products/mbot/overview/gdpr/' },
        { title: 'Priser', description: 'Erbjudande, kvotnivåer, rollover, buffert, och hur överkapacitet hanteras.', href: '/products/mbot/business/offer/' },
        { title: 'FAQ', description: 'Vanliga frågor, begränsningar, och vad som är ett rimligt användningssätt.', href: '/products/mbot/reference/faq/' },
      ],
      ctaHeading: 'Vill ni se MBot i verkligheten?',
      ctaText:
        'Hör av er så bokar vi en demo och går igenom hur MBot kan passa in i er e-posthantering.',
      ctaButton: 'Boka demo',
    },
    cases: {
      title: 'Kundcase',
      description:
        'Verkliga resultat från verksamheter som använder Lectero — siffror, citat och vad som faktiskt förändras i kansliet.',
      heroTitle: 'Resultat hos våra kunder',
      heroSubtitle:
        'Konkreta siffror och citat från kanslier som arbetar med MBot i sin dagliga e-posthantering.',
      indexEmpty:
        'Det finns inga publicerade kundcase ännu. Vi väljer ut piloter med omsorg och publicerar först när siffrorna är verifierade och kunden har godkänt texten.',
      backToList: '← Alla kundcase',
      metricsHeading: 'Mätbara resultat',
      quoteHeading: 'Så säger kunden',
      customerHeading: 'Om kunden',
      anonymousFallback: 'Verksamheten har valt att vara anonym',
      teaserHeading: 'Resultat hos våra kunder',
      teaserCta: 'Läs hela kundcaset',
      readCase: 'Läs kundcaset',
      publishedDate: (date) => `Publicerat ${date}`,
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
        { title: 'GDPR', description: 'Data protection by design: no personally identifying information is sent to the AI service.', href: '/products/mbot/overview/gdpr/' },
        { title: 'Pricing', description: 'Offer, quota tiers, rollover, buffer and how excess capacity is handled.', href: '/products/mbot/business/offer/' },
        { title: 'FAQ', description: 'Frequent questions, limitations and what counts as reasonable use.', href: '/products/mbot/reference/faq/' },
      ],
      ctaHeading: 'Want to see MBot in real life?',
      ctaText:
        'Get in touch and we’ll book a demo to walk through how MBot fits into your email handling.',
      ctaButton: 'Book a demo',
    },
    cases: {
      title: 'Customer cases',
      description:
        'Real-world results from organisations using Lectero — numbers, quotes and what actually changes in the back office.',
      heroTitle: 'Results from our customers',
      heroSubtitle:
        'Concrete numbers and quotes from back offices working with MBot every day.',
      indexEmpty:
        'No published customer cases yet. We select pilots carefully and publish only after the numbers are verified and the customer has approved the text.',
      backToList: '← All cases',
      metricsHeading: 'Measurable results',
      quoteHeading: 'In their words',
      customerHeading: 'About the customer',
      anonymousFallback: 'The customer chose to remain anonymous',
      teaserHeading: 'Results from our customers',
      teaserCta: 'Read the full case',
      readCase: 'Read the case',
      publishedDate: (date) => `Published ${date}`,
    },
  },
};

export function getStrings(locale: Locale | string | undefined): Strings {
  if (locale && (locales as readonly string[]).includes(locale)) {
    return strings[locale as Locale];
  }
  return strings[defaultLocale];
}
