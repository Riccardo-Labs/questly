export interface NavLink {
  label: string
  href: string
}

export interface NavContent {
  links: NavLink[]
  cta: string
}

export interface HeroBullet {
  num: string
  text: string
}

export interface HeroCta {
  label: string
  href: string
  variant: 'primary' | 'secondary'
}

export interface HeroContent {
  badge: string
  headlinePart1: string
  headlinePart2?: string
  headlineAccent: string
  sub: string
  bullets: HeroBullet[]
  ctas: HeroCta[]
  tags: string[]
}

export interface Problem {
  num: string
  title: string
  body: string
}

export interface SolutionFeature {
  icon: string
  title: string
  body: string
}

export type TerminalLineType = 'cmd' | 'ok' | 'arrow' | 'blank'

export interface TerminalLine {
  type: TerminalLineType
  text: string
}

export interface SolutionContent {
  label: string
  headline: string
  sub: string
  features: SolutionFeature[]
  terminalTitle: string
  terminal: TerminalLine[]
}

export interface ServiceItem {
  tag: string
  icon: string
  title: string
  body: string
  list: string[]
}

export interface ServicesContent {
  label: string
  headline: string
  sub: string
  items: ServiceItem[]
}

export interface Step {
  num: string
  title: string
  body: string
}

export interface HowWeWorkContent {
  label: string
  headline: string
  steps: Step[]
}

export interface WhyFeature {
  icon: string
  title: string
  body: string
}

export interface WhyContent {
  label: string
  headline: string
  sub1: string
  sub2: string
  cta: string
  features: WhyFeature[]
}

export interface CtaBannerContent {
  headline: string
  sub: string
  cta: string
}

export interface FaqItem {
  q: string
  a: string
}

export interface FaqContent {
  label: string
  headline: string
  sub: string
  items: FaqItem[]
}

export interface FinalCtaContent {
  headlinePart1: string
  headlineAccent: string
  sub: string
  primary: string
  secondary: string
}

export interface FooterLink {
  label: string
  href: string
}

export interface FooterContent {
  copyright: string
  links: FooterLink[]
}

export interface ContactFormData {
  nome: string
  email: string
  messaggio: string
}

export interface ServiceFeature {
  icon: string
  title: string
  text: string
}

export interface ServiceStat {
  val: string
  lbl: string
}

export interface ServiceData {
  tag: string
  title: string
  desc: string
  features: ServiceFeature[]
  stats: ServiceStat[]
}

export interface WidgetItem {
  num: string
  title: string
  sub: string
}
