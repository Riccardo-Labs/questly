import type {
  NavContent,
  HeroContent,
  Problem,
  SolutionContent,
  ServicesContent,
  HowWeWorkContent,
  WhyContent,
  CtaBannerContent,
  FaqContent,
  FinalCtaContent,
  FooterContent,
} from '@/types'

export const nav: NavContent = {
  links: [
    { label: 'Servizi', href: '#servizi' },
    { label: 'Come lavoriamo', href: '#come-lavoriamo' },
    { label: 'FAQ', href: '#faq' },
  ],
  cta: 'Richiedi una consulenza',
}

export const hero: HeroContent = {
  badge: 'Crescita digitale per PMI e imprenditori',
  headlinePart1: 'Il tuo sito',
  headlineAccent: 'dovrebbe portarti clienti.',
  sub: 'Aiutiamo le aziende a ottenere più contatti online. Con siti costruiti per convertire, marketing che funziona e strumenti AI concreti.',
  bullets: [
    { num: '01', text: 'Siti web progettati per generare richieste di contatto' },
    { num: '02', text: 'Campagne marketing con obiettivi chiari e misurabili' },
    { num: '03', text: 'Automazioni AI per lavorare meglio, non di più' },
  ],
  ctas: [
    { label: 'Richiedi una consulenza gratuita →', href: '#', variant: 'primary' },
    { label: 'Scopri i servizi', href: '#servizi', variant: 'secondary' },
  ],
  tags: [
    '// web development',
    '// digital marketing',
    '// AI integration',
    '// process optimization',
  ],
}

export const logos: string[] = [
  'Next.js', 'React', 'FastAPI', 'Python', 'Make', 'n8n',
  'OpenAI', 'Vercel', 'GA4', 'Google Ads', 'Meta Ads', 'WhatsApp Business',
]

export const problems: Problem[] = [
  {
    num: '// 01',
    title: 'Hai un sito, ma non porta clienti',
    body: 'Il sito c\'è, ma nessuno compila il form. Le visite arrivano, le richieste no. È diventato una brochure digitale invece che uno strumento di acquisizione clienti.',
  },
  {
    num: '// 02',
    title: 'Il marketing non dà risultati chiari',
    body: 'Hai investito in campagne o social, ma non sai cosa ha funzionato. Il budget si consuma e i clienti non arrivano. Manca una strategia con obiettivi misurabili.',
  },
  {
    num: '// 03',
    title: 'I processi interni rallentano tutto',
    body: 'Troppo lavoro manuale, informazioni disperse, comunicazioni lente. Perdi ore preziose in attività che potrebbero essere automatizzate o ottimizzate.',
  },
  {
    num: '// 04',
    title: 'Vuoi crescere, ma manca una direzione',
    body: 'L\'intenzione c\'è, ma non sai da dove partire. Senza una strategia chiara, ogni azione rischia di essere un investimento senza ritorno.',
  },
]

export const solution: SolutionContent = {
  label: 'La soluzione',
  headline: 'Un sistema digitale costruito per far crescere la tua azienda.',
  sub: 'Non vendiamo servizi preconfezionati. Analizziamo la tua situazione e costruiamo insieme un percorso pratico e misurabile.',
  features: [
    {
      icon: '🌐',
      title: 'Un sito che lavora per te',
      body: 'Progettato con un unico obiettivo: trasformare i visitatori in persone che ti contattano. Non semplice estetica.',
    },
    {
      icon: '📊',
      title: 'Marketing con una logica chiara',
      body: 'Ogni campagna parte da una strategia. Sai sempre cosa stiamo facendo, perché lo facciamo e quali risultati porta.',
    },
    {
      icon: '🤖',
      title: 'AI senza complicazioni',
      body: 'Strumenti di intelligenza artificiale integrati in modo pratico nei tuoi flussi di lavoro. Risparmi tempo e fai di più.',
    },
    {
      icon: '⚙️',
      title: 'Processi più veloci, meno errori',
      body: 'Identifichiamo dove perdi tempo e costruiamo flussi operativi più snelli, adattati alla tua realtà aziendale.',
    },
  ],
  terminalTitle: 'questly — analisi.sh',
  terminal: [
    { type: 'cmd', text: 'analizza --azienda "La tua PMI"' },
    { type: 'arrow', text: 'Analisi sito web in corso...' },
    { type: 'ok', text: 'Tasso conversione attuale: basso' },
    { type: 'ok', text: 'Opportunità identificate: 4' },
    { type: 'blank', text: '' },
    { type: 'arrow', text: 'Analisi marketing...' },
    { type: 'ok', text: 'Canali attivi: 1/3' },
    { type: 'ok', text: 'ROI misurabile: no' },
    { type: 'blank', text: '' },
    { type: 'arrow', text: 'Analisi processi...' },
    { type: 'ok', text: 'Ore manuali/sett: ~14h' },
    { type: 'ok', text: 'Automazione possibile: sì' },
    { type: 'blank', text: '' },
    { type: 'cmd', text: 'genera --strategia personalizzata' },
    { type: 'arrow', text: 'Pronto.' },
  ],
}

export const services: ServicesContent = {
  label: 'Cosa facciamo',
  headline: 'Tre aree di lavoro, un solo obiettivo.',
  sub: 'Ogni servizio è pensato per integrarsi con gli altri. Puoi partire da uno o affidarci tutto il percorso.',
  items: [
    {
      tag: '01 / Sviluppo Web',
      icon: '🌐',
      title: 'Siti Web e Landing Page',
      body: 'Non costruiamo siti per farli belli. Li costruiamo perché portino clienti. Ogni dettaglio è progettato per spingere il visitatore a contattarti.',
      list: [
        'Siti web orientati alla conversione',
        'Landing page per campagne',
        'Ottimizzazione UX e velocità',
        'Design chiaro e moderno',
      ],
    },
    {
      tag: '02 / Marketing',
      icon: '📈',
      title: 'Marketing Digitale',
      body: 'Campagne Google, Meta, SEO e email con un obiettivo preciso: portare contatti qualificati. Senza sprechi di budget, con report leggibili.',
      list: [
        'Google Ads e Meta Ads',
        'SEO e contenuti',
        'Email marketing',
        'Analisi e ottimizzazione continua',
      ],
    },
    {
      tag: '03 / AI & Processi',
      icon: '🤖',
      title: 'AI e Ottimizzazione',
      body: 'Integriamo strumenti di intelligenza artificiale in modo pratico. Automatizziamo i processi che ti rubano tempo e miglioriamo quelli che già funzionano.',
      list: [
        'Analisi processi aziendali',
        'Chatbot e automazioni',
        'Integrazione AI su misura',
        'Formazione e supporto',
      ],
    },
  ],
}

export const howWeWork: HowWeWorkContent = {
  label: 'Come lavoriamo',
  headline: 'Quattro passi. Nessuna sorpresa.',
  steps: [
    {
      num: 'step_01',
      title: 'Analisi iniziale',
      body: 'Partiamo da una conversazione. Capiamo la tua azienda, i tuoi clienti e i tuoi obiettivi. Senza presupposti, senza pacchetti preconfezionati.',
    },
    {
      num: 'step_02',
      title: 'Strategia personalizzata',
      body: 'Costruiamo un piano su misura per te. Con priorità chiare, tempi realistici e costi trasparenti. Sai sempre cosa aspettarti.',
    },
    {
      num: 'step_03',
      title: 'Sviluppo e implementazione',
      body: 'Realizziamo tutto quello che abbiamo pianificato. Ti teniamo aggiornato con regolarità, senza gergo tecnico.',
    },
    {
      num: 'step_04',
      title: 'Ottimizzazione continua',
      body: 'Non finisce con il lancio. Monitoriamo i dati e ottimizziamo nel tempo. Il sistema migliora con i risultati reali.',
    },
  ],
}

export const whyQuestly: WhyContent = {
  label: 'Perché Questly',
  headline: 'Concreti. Diretti. Orientati al risultato.',
  sub1: 'Non promettiamo miracoli. Non usiamo numeri gonfiati. Ti diciamo quello che funziona davvero per il tuo tipo di azienda, e lo costruiamo insieme.',
  sub2: 'Lavoriamo con chiarezza, rispettando il tuo tempo e con un obiettivo condiviso: far crescere il tuo business in modo solido e sostenibile.',
  cta: 'Parliamo del tuo progetto →',
  features: [
    { icon: '🎯', title: 'Focus sul risultato', body: 'Ogni scelta ha un motivo pratico: portarti più clienti o farti risparmiare tempo.' },
    { icon: '💬', title: 'Linguaggio semplice', body: 'Nessun termine tecnico inutile. Sai sempre cosa stiamo facendo e perché.' },
    { icon: '🔧', title: 'Su misura per te', body: 'Nessun pacchetto standard. Il percorso si costruisce attorno alle tue esigenze.' },
    { icon: '👂', title: 'Prima ascoltiamo', body: 'Capiamo la tua situazione prima di proporre qualsiasi soluzione.' },
  ],
}

export const ctaBanner: CtaBannerContent = {
  headline: 'Parlaci del tuo progetto.',
  sub: 'Una call di 30 minuti per capire la tua situazione. Senza impegno.',
  cta: 'Scrivici ora →',
}

export const faq: FaqContent = {
  label: 'FAQ',
  headline: 'Domande frequenti',
  sub: 'Le risposte alle domande che ci fanno più spesso.',
  items: [
    {
      q: 'Quanto tempo ci vuole per vedere risultati?',
      a: 'Dipende dal servizio. Un sito web si lancia in 2–4 settimane. I risultati SEO richiedono 3–6 mesi. Le campagne Google e Meta possono portare i primi contatti in pochi giorni dalla pubblicazione.',
    },
    {
      q: 'È adatto anche a piccole aziende?',
      a: 'Sì, lavoriamo principalmente con PMI, artigiani e professionisti. Siamo abituati a budget contenuti e sappiamo dove concentrare gli sforzi per ottenere il massimo risultato.',
    },
    {
      q: 'Devo già avere un sito web?',
      a: 'No. Possiamo partire da zero oppure migliorare quello che hai già. In entrambi i casi, la prima cosa che facciamo è capire i tuoi obiettivi e solo dopo decidiamo cosa costruire.',
    },
    {
      q: "L'AI è difficile da usare per chi non è tecnico?",
      a: 'No. Ci occupiamo noi di tutto l\'aspetto tecnico. Tu vedi solo il risultato: meno lavoro manuale, risposte automatiche ai clienti, processi più veloci. Zero gergo, zero complicazioni.',
    },
    {
      q: 'Come funziona la prima consulenza?',
      a: 'È una call gratuita di 30 minuti. Ti facciamo alcune domande sulla tua azienda, sui tuoi obiettivi e su quello che non sta funzionando oggi. Alla fine ti diciamo con franchezza se e come possiamo aiutarti.',
    },
    {
      q: 'Quanto costa lavorare con Questly?',
      a: 'Dipende dal progetto. Un sito vetrina parte da circa 1.500€. I canoni mensili partono da 149€/mese. Prima della consulenza non ci sono costi di nessun tipo. Ti mandiamo sempre un preventivo chiaro prima di iniziare qualsiasi lavoro.',
    },
  ],
}

export const finalCta: FinalCtaContent = {
  headlinePart1: 'Pronto a costruire',
  headlineAccent: 'qualcosa che funziona?',
  sub: 'Raccontaci la tua situazione. Capiamo insieme da dove partire.',
  primary: 'Richiedi una consulenza gratuita →',
  secondary: 'O chiamaci direttamente',
}

export const footer: FooterContent = {
  copyright: '© 2026 Questly — Crescita digitale per PMI italiane',
  links: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Cookie Policy', href: '/cookie' },
  ],
}
