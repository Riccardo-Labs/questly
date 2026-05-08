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
  ServiceData,
  WidgetItem,
} from '@/types'

export const nav: NavContent = {
  links: [
    { label: 'Servizi', href: '#servizi' },
    { label: 'Come lavoriamo', href: '#come-lavoriamo' },
    { label: 'FAQ', href: '#faq' },
  ],
  cta: 'Contattaci',
}

export const hero: HeroContent = {
  badge: 'Soluzioni digitali per PMI e imprenditori italiani',
  headlinePart1: 'Il tuo',
  headlinePart2: 'partner',
  headlineAccent: 'digitale.',
  sub: '',
  bullets: [
    { num: '01', text: 'Siti progettati per trasformare visitatori in contatti' },
    { num: '02', text: 'Visibilità su Google Maps e ricerca locale' },
    { num: '03', text: 'Automazioni che ti restituiscono ore ogni settimana' },
  ],
  ctas: [
    { label: 'Prenota una chiamata gratuita →', href: '#', variant: 'primary' },
    { label: 'Scopri i servizi ↓', href: '#servizi', variant: 'secondary' },
  ],
  tags: [
    '// web development',
    '// SEO locale',
    '// AI & automazioni',
    '// ottimizzazione processi',
  ],
}

export const logos: string[] = [
  'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vite', 'Tailwind CSS', 'Bootstrap',
  'Node.js', 'Express', 'FastAPI', 'Python', 'PHP', 'C#', 'Java', 'Golang',
  'MongoDB', 'PostgreSQL',
  'Kotlin', 'Swift',
  'WordPress', 'Shopify', 'WooCommerce',
  'Docker', 'AWS', 'Azure', 'Google Cloud', 'Firebase',
  'Google Analytics', 'Google Search Console', 'Google Business Profile',
  'Figma', 'Adobe XD',
]

export const problems: Problem[] = [
  {
    num: '// 01',
    title: 'Il tuo sito esiste, ma non porta nulla',
    body: 'Hai speso soldi per farlo costruire, ma non genera contatti. Nessuno compila il form, nessuno chiama. È diventato una brochure dimenticata invece di uno strumento di acquisizione.',
  },
  {
    num: '// 02',
    title: 'Non ti trovano quando cercano su Google',
    body: 'I tuoi concorrenti escono prima di te nelle ricerche locali. Il tuo profilo Google è incompleto o non esiste. Ogni giorno perdi clienti che cercano esattamente quello che offri.',
  },
  {
    num: '// 03',
    title: 'Perdi ore in lavoro manuale ripetitivo',
    body: 'Rispondi sempre alle stesse domande, gestisci appuntamenti a mano, mandi email una per una. Attività che potrebbero essere automatizzate ti rubano il tempo che dovresti dedicare ai clienti.',
  },
  {
    num: '// 04',
    title: 'Vuoi crescere, ma non sai da dove partire',
    body: "L'intenzione c'è. Ma tra sito, social, Google Ads e AI non è chiaro cosa abbia senso fare prima. Senza una direzione chiara ogni spesa rischia di non tornare.",
  },
]

export const solution: SolutionContent = {
  label: 'La soluzione',
  headline: 'Un sistema digitale costruito per far crescere la tua azienda.',
  sub: 'Non vendiamo pacchetti preconfezionati. Capiamo la tua situazione e costruiamo un percorso pratico con obiettivi chiari.',
  features: [
    {
      icon: 'globe',
      title: 'Un sito che lavora per te',
      body: 'Ogni pagina è progettata con un obiettivo preciso: spingere il visitatore a contattarti. Non solo estetica — architettura, velocità e testi orientati alla conversione.',
    },
    {
      icon: 'location',
      title: 'Visibilità locale su Google',
      body: 'Ottimizziamo il tuo profilo Google Business Profile e il tuo sito per le ricerche locali. Quando qualcuno cerca il tuo servizio nella tua città, vuoi essere tu il primo risultato.',
    },
    {
      icon: 'robot',
      title: 'AI senza complicazioni',
      body: 'Chatbot che risponde h24, reminder automatici, follow-up sui lead. Strumenti concreti integrati nei tuoi flussi di lavoro — senza che tu debba capire come funzionano dentro.',
    },
    {
      icon: 'settings',
      title: 'Processi più veloci, meno errori',
      body: 'Identifichiamo dove perdi tempo e costruiamo automazioni su misura. Il risultato: meno lavoro manuale, più tempo per i clienti.',
    },
  ],
  terminalTitle: 'questly — analisi.sh',
  terminal: [
    { type: 'cmd', text: 'analizza --azienda "La tua PMI"' },
    { type: 'arrow', text: 'Analisi sito web in corso...' },
    { type: 'ok', text: 'Tasso conversione attuale: basso' },
    { type: 'ok', text: 'Opportunità identificate: 4' },
    { type: 'blank', text: '' },
    { type: 'arrow', text: 'Analisi presenza locale...' },
    { type: 'ok', text: 'Google Business Profile: incompleto' },
    { type: 'ok', text: 'Visibilità locale: scarsa' },
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
  headline: 'Tre aree. Un solo obiettivo.',
  sub: 'Puoi partire da un servizio solo o affidarci tutto il percorso. Ogni area si integra con le altre.',
  items: [
    {
      tag: '01 / Siti Web',
      icon: 'globe',
      title: 'Siti web che convertono',
      body: 'Non costruiamo siti per farli belli. Li costruiamo perché portino clienti. Ogni scelta — testi, struttura, velocità — serve a trasformare il visitatore in un contatto.',
      list: [
        'Siti vetrina e siti aziendali',
        'Landing page per campagne',
        'Ottimizzazione velocità e Core Web Vitals',
        'Integrazione WhatsApp, form e analytics',
      ],
    },
    {
      tag: '02 / Presenza Locale',
      icon: 'location',
      title: 'Google Business e SEO locale',
      body: 'La maggior parte dei tuoi potenziali clienti ti cerca su Google prima di chiamarti. Ottimizziamo la tua presenza locale perché tu sia trovato — non il concorrente.',
      list: [
        'Setup e ottimizzazione Google Business Profile',
        'Gestione mensile scheda Google',
        'SEO on-page per ricerche locali',
        'Report mensile con dati reali',
      ],
    },
    {
      tag: '03 / AI & Automazioni',
      icon: 'robot',
      title: 'Automazioni AI su misura',
      body: 'Analizziamo i tuoi processi e identifichiamo dove puoi recuperare tempo. Poi costruiamo le automazioni — chatbot, workflow, integrazioni — e te le consegniamo pronte all\'uso.',
      list: [
        'Chatbot FAQ su sito e WhatsApp',
        'Automazione appuntamenti e reminder',
        'Follow-up automatico sui lead',
        'Integrazione con i tuoi strumenti esistenti',
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
      title: 'Ascoltiamo',
      body: 'Partiamo da una chiamata. Capiamo la tua azienda, i tuoi clienti e cosa non sta funzionando. Nessuna domanda stupida, nessun termine tecnico.',
    },
    {
      num: 'step_02',
      title: 'Progettiamo',
      body: 'Costruiamo un piano su misura con priorità chiare, tempi realistici e costi trasparenti. Sai esattamente cosa aspettarti prima di dire sì.',
    },
    {
      num: 'step_03',
      title: 'Realizziamo',
      body: 'Eseguiamo quello che abbiamo pianificato insieme. Ti aggiorniamo con regolarità, senza sorprese e senza sparire per settimane.',
    },
    {
      num: 'step_04',
      title: 'Ottimizziamo',
      body: 'Non finiamo con il lancio. Monitoriamo i dati e miglioriamo nel tempo. Quello che non funziona viene corretto, quello che funziona viene amplificato.',
    },
  ],
}

export const whyQuestly: WhyContent = {
  label: 'Perché Questly',
  headline: 'Concreti. Diretti. Senza promesse impossibili.',
  sub1: 'Non promettiamo prime posizioni garantite su Google. Non gonfiamo i numeri. Ti diciamo quello che funziona davvero per il tuo tipo di azienda — e lo costruiamo insieme.',
  sub2: 'Lavoriamo con poche aziende alla volta, perché ognuna merita attenzione reale. Il tuo successo è il nostro unico caso studio che conta.',
  cta: 'Parlaci del tuo progetto →',
  features: [
    { icon: 'target', title: 'Risultati misurabili', body: 'Ogni azione ha un obiettivo preciso. Sai sempre cosa stiamo facendo e perché.' },
    { icon: 'chat', title: 'Zero gergo tecnico', body: 'Ti spieghiamo tutto in italiano chiaro. Nessun termine che devi googlare dopo la call.' },
    { icon: 'wrench', title: 'Su misura, sempre', body: 'Nessun pacchetto standard calato dall\'alto. Il percorso si costruisce attorno alla tua realtà.' },
    { icon: 'shield', title: 'Ownership completa', body: 'Dominio, hosting, account Google — tutto tuo. Non dipendi da noi per esistere online.' },
  ],
}

export const ctaBanner: CtaBannerContent = {
  headline: 'Parlaci del tuo progetto.',
  sub: 'Una chiamata di 30 minuti. Senza impegno.',
  cta: 'Scrivici ora →',
}

export const faq: FaqContent = {
  label: 'FAQ',
  headline: 'Domande frequenti',
  sub: 'Le risposte a quello che ci chiedono più spesso.',
  items: [
    {
      q: 'Quanto tempo ci vuole per vedere i primi risultati?',
      a: 'Dipende dal servizio. Un sito si lancia in 2–4 settimane. I risultati SEO richiedono 3–6 mesi di lavoro costante. Google Business Profile ottimizzato può portare più visibilità già nelle prime settimane.',
    },
    {
      q: 'Lavorate anche con aziende molto piccole?',
      a: 'Sì, è il nostro target principale. Artigiani, professionisti, PMI con 1–15 persone. Siamo abituati a budget contenuti e sappiamo dove concentrare gli sforzi per ottenere il massimo.',
    },
    {
      q: 'Devo già avere un sito?',
      a: 'No. Possiamo partire da zero o migliorare quello che hai già. Prima di fare qualsiasi cosa, capiamo i tuoi obiettivi — poi decidiamo insieme cosa costruire.',
    },
    {
      q: "L'AI è complicata da gestire?",
      a: 'No. Ci occupiamo noi di tutta la parte tecnica. Tu vedi il risultato: meno lavoro manuale, risposte automatiche ai clienti, processi più veloci. Zero configurazioni, zero complicazioni.',
    },
    {
      q: 'Come funziona la prima chiamata?',
      a: 'È gratuita, dura 30 minuti e non c\'è nessun impegno. Ti facciamo alcune domande sulla tua situazione e sui tuoi obiettivi. Alla fine ti diciamo con franchezza se e come possiamo aiutarti.',
    },
    {
      q: 'Quanto costa?',
      a: 'Un sito vetrina parte da circa 1.200€. I canoni mensili per la gestione della presenza locale partono da 149€/mese. Prima della chiamata non ci sono costi di nessun tipo. Il preventivo è sempre scritto e dettagliato prima di iniziare.',
    },
  ],
}

export const finalCta: FinalCtaContent = {
  headlinePart1: 'Pronto a costruire qualcosa',
  headlineAccent: 'che funziona davvero?',
  sub: 'Raccontaci la tua situazione. Capiamo insieme da dove ha senso partire.',
  primary: 'Prenota una consulenza gratuita →',
  secondary: 'O chiamaci direttamente',
}

export const footer: FooterContent = {
  copyright: '© 2024 Questly — Soluzioni digitali per PMI italiane',
  links: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Cookie Policy', href: '/cookie' },
  ],
}

export const heroWidgetItems: WidgetItem[] = [
  { num: '01', title: 'Web Development', sub: '// siti che convertono' },
  { num: '02', title: 'SEO Locale', sub: '// visibilità su Google Maps' },
  { num: '03', title: 'AI & Automazioni', sub: '// risparmia ore ogni settimana' },
  { num: '04', title: 'Ottimizzazione Processi', sub: '// flussi di lavoro intelligenti' },
]

export const serviceDetails: ServiceData[] = [
  {
    tag: '// 01 — web development',
    title: 'Siti web che<br /><em>convertono.</em>',
    desc: 'Progettiamo e sviluppiamo siti web su misura, ottimizzati per trasformare i visitatori in clienti. Niente template generici: ogni sito è costruito attorno ai tuoi obiettivi di business.',
    features: [
      { icon: 'pen-tool', title: 'Design su misura', text: 'Interfacce progettate partendo dai tuoi utenti, non da template preconfezionati.' },
      { icon: 'bolt', title: 'Velocità e performance', text: 'Ottimizzazione Core Web Vitals per ranking migliori e utenti più soddisfatti.' },
      { icon: 'trending-up', title: 'Conversione al centro', text: 'CTA, form e struttura pensati per massimizzare i contatti generati.' },
    ],
    stats: [
      { val: '+220%', lbl: 'conversioni medie' },
      { val: '<2s', lbl: 'tempo di caricamento' },
    ],
  },
  {
    tag: '// 02 — seo locale',
    title: 'Visibilità su<br /><em>Google Maps.</em>',
    desc: 'Ottimizziamo la tua presenza locale su Google, Maps e nei risultati di ricerca geo-targettizzati.',
    features: [
      { icon: 'map-pinned', title: 'Google Business Profile', text: 'Setup e ottimizzazione completa della scheda Google per massimizzare le impressioni.' },
      { icon: 'star', title: 'Gestione recensioni', text: 'Strategie per aumentare le recensioni positive e rispondere in modo professionale.' },
      { icon: 'target', title: 'Citazioni locali', text: 'Costruzione di citazioni coerenti su directory e portali di settore.' },
    ],
    stats: [
      { val: 'Top 3', lbl: 'posizione Maps media' },
      { val: '+180%', lbl: 'chiamate organiche' },
    ],
  },
  {
    tag: '// 03 — ai & automazioni',
    title: 'Automazioni che<br /><em>lavorano per te.</em>',
    desc: 'Integriamo flussi di lavoro automatizzati e strumenti AI nei tuoi processi.',
    features: [
      { icon: 'workflow', title: 'Automazione lead', text: 'Ogni nuovo contatto viene accolto, qualificato e indirizzato automaticamente.' },
      { icon: 'clock', title: 'Risparmio di tempo', text: 'Elimina le attività ripetitive: follow-up, reminder, report e molto altro.' },
      { icon: 'plug', title: 'Integrazione tools', text: 'Colleghiamo i tuoi strumenti esistenti: CRM, email, calendario, WhatsApp.' },
    ],
    stats: [
      { val: '12h', lbl: 'risparmiate/settimana' },
      { val: '×3', lbl: 'velocità di risposta' },
    ],
  },
  {
    tag: '// 04 — ottimizzazione processi',
    title: 'Processi<br /><em>più intelligenti.</em>',
    desc: 'Analizziamo i tuoi flussi operativi e li riprogettiamo per eliminare colli di bottiglia.',
    features: [
      { icon: 'scan', title: 'Analisi dei processi', text: 'Mappatura completa dei flussi esistenti per identificare inefficienze e opportunità.' },
      { icon: 'refresh-cw', title: 'Redesign operativo', text: 'Riprogettazione dei processi con focus su velocità, qualità e scalabilità.' },
      { icon: 'bar-chart', title: 'Monitoraggio KPI', text: 'Dashboard e report per tenere tutto sotto controllo in tempo reale.' },
    ],
    stats: [
      { val: '-40%', lbl: 'costi operativi' },
      { val: '+95%', lbl: 'soddisfazione team' },
    ],
  },
]
