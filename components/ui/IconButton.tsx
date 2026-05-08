import {
  Globe,
  MapPin,
  Bot,
  Settings2,
  Target,
  MessageSquare,
  Wrench,
  ShieldCheck,
  PenTool,
  Zap,
  TrendingUp,
  MapPinned,
  Star,
  Clock,
  Workflow,
  Plug,
  ScanLine,
  RefreshCw,
  BarChart3,
} from 'lucide-react'

interface IconButtonProps {
  icon: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const iconMap: Record<string, React.ElementType> = {
  // Main services
  globe: Globe,
  location: MapPin,
  robot: Bot,
  settings: Settings2,

  // Why Questly / Solution features
  target: Target,
  chat: MessageSquare,
  wrench: Wrench,
  shield: ShieldCheck,

  // Web dev details
  'pen-tool': PenTool,
  bolt: Zap,
  'trending-up': TrendingUp,

  // Local SEO details
  'map-pinned': MapPinned,
  star: Star,

  // AI automation details
  workflow: Workflow,
  clock: Clock,
  plug: Plug,

  // Process management details
  scan: ScanLine,
  'refresh-cw': RefreshCw,
  'bar-chart': BarChart3,
}

export function IconButton({ icon, size = 'md', className = '' }: IconButtonProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  }
  const iconSizes = {
    sm: 14,
    md: 18,
    lg: 22,
  }

  const LucideIcon = iconMap[icon] ?? Target

  return (
    <div
      className={`${sizeClasses[size]} flex items-center justify-center rounded-full bg-[#3d6aff] text-white shadow-[0_0_20px_rgba(61,106,255,0.4)] hover:shadow-[0_0_30px_rgba(61,106,255,0.6)] transition-shadow ${className}`}
      aria-hidden="true"
    >
      <LucideIcon size={iconSizes[size]} strokeWidth={1.75} />
    </div>
  )
}
