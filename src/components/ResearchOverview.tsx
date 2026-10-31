import type { CSSProperties } from 'react'
import { ArrowDown, Database, FlaskConical, Target } from 'lucide-react'
import { researchOverview, topics, type TopicId } from '../data/siteContent'
import TopicIcon from './TopicIcon'

interface ResearchOverviewProps {
  onTopicSelect: (topic: TopicId) => void
}

function FlowConnector() {
  return (
    <div className="overview-connector" aria-hidden="true">
      <span />
      <ArrowDown size={18} strokeWidth={1.6} />
      <span />
    </div>
  )
}

export default function ResearchOverview({ onTopicSelect }: ResearchOverviewProps) {
  return (
    <figure className="research-overview" aria-labelledby="research-overview-title">
      <div className="overview-header">
        <div>
          <span className="overview-eyebrow">{researchOverview.eyebrow}</span>
          <h3 id="research-overview-title">{researchOverview.title}</h3>
        </div>
        <p>{researchOverview.description}</p>
      </div>

      <div className="overview-body">
        <div className="overview-stage">
          <span className="overview-stage-label">
            <Database size={16} aria-hidden="true" />
            {researchOverview.inputsLabel}
          </span>
          <div className="overview-inputs">
            {researchOverview.inputs.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>

        <FlowConnector />

        <div className="overview-stage">
          <span className="overview-stage-label">{researchOverview.directionsLabel}</span>
          <div className="overview-topic-grid">
            {topics.map((topic) => (
              <button
                className="overview-topic"
                type="button"
                key={topic.id}
                style={{ '--topic-color': topic.color } as CSSProperties}
                onClick={() => onTopicSelect(topic.id)}
                aria-label={`View publications on ${topic.title}`}
              >
                <TopicIcon topic={topic.id} size={25} />
                <span>{topic.title}</span>
              </button>
            ))}
          </div>
        </div>

        <FlowConnector />

        <div className="overview-methods">
          <span className="overview-stage-label">
            <FlaskConical size={16} aria-hidden="true" />
            {researchOverview.methodsLabel}
          </span>
          <div className="overview-method-names">
            {researchOverview.methods.map((method, index) => (
              <span className="overview-method" key={method}>
                {index > 0 && <span className="overview-method-plus" aria-hidden="true">+</span>}
                <span>{method}</span>
              </span>
            ))}
          </div>
        </div>

        <FlowConnector />

        <div className="overview-stage">
          <span className="overview-stage-label">
            <Target size={16} aria-hidden="true" />
            {researchOverview.outcomesLabel}
          </span>
          <div className="overview-outcomes">
            {researchOverview.outcomes.map((outcome) => <span key={outcome}>{outcome}</span>)}
          </div>
        </div>
      </div>
      <figcaption className="sr-only">
        A unified research framework connecting research objects, five research directions,
        cross-cutting methods, and goals for trustworthy open-source software ecosystems.
      </figcaption>
    </figure>
  )
}
