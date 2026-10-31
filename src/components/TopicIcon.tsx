import {
  Boxes,
  BrainCircuit,
  GitBranch,
  Scale,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react'
import type { TopicId } from '../data/siteContent'

const icons: Record<TopicId, LucideIcon> = {
  components: Boxes,
  reliability: ShieldCheck,
  licensing: Scale,
  maintenance: GitBranch,
  models: BrainCircuit,
}

interface TopicIconProps {
  topic: TopicId
  size?: number
  className?: string
}

export default function TopicIcon({ topic, size = 24, className }: TopicIconProps) {
  const Icon = icons[topic]
  return <Icon className={className} size={size} strokeWidth={1.7} aria-hidden="true" />
}
