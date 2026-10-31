import { useMemo, useState, type CSSProperties } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowUpRight, Check, Copy, Quote, Search, X } from 'lucide-react'
import { getBibtex, publications, topics, type Publication, type TopicId } from '../data/siteContent'
import TopicIcon from './TopicIcon'

type Filter = 'all' | 'first' | 'ccf-a' | '2026' | '2025'
type TopicFilter = TopicId | 'all'

interface PublicationExplorerProps {
  activeTopic: TopicFilter
  onTopicChange: (topic: TopicFilter) => void
}

const filters: Array<{ id: Filter; label: string }> = [
  { id: 'all', label: 'All papers' },
  { id: 'first', label: 'First author' },
  { id: 'ccf-a', label: 'CCF-A' },
  { id: '2026', label: '2026' },
  { id: '2025', label: '2025' },
]

function Authors({ authors }: { authors: string }) {
  const parts = authors.split('Wentao Chen')
  return (
    <p className="publication-authors">
      {parts[0]}
      <strong>Wentao Chen</strong>
      {parts[1]}
    </p>
  )
}

async function copyText(text: string) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text)
    return
  }
  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  textarea.remove()
}

export default function PublicationExplorer({ activeTopic, onTopicChange }: PublicationExplorerProps) {
  const [filter, setFilter] = useState<Filter>('all')
  const [query, setQuery] = useState('')
  const [citing, setCiting] = useState<Publication | null>(null)
  const [copied, setCopied] = useState(false)

  const visiblePapers = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return publications.filter((paper) => {
      if (activeTopic !== 'all' && paper.topic !== activeTopic) return false
      if (filter === 'first' && !paper.firstAuthor) return false
      if (filter === 'ccf-a' && paper.rank !== 'CCF-A') return false
      if ((filter === '2026' || filter === '2025') && paper.year !== Number(filter)) return false
      if (!normalizedQuery) return true
      const topic = topics.find((item) => item.id === paper.topic)?.title ?? ''
      return `${paper.title} ${paper.authors} ${paper.venue} ${topic}`.toLowerCase().includes(normalizedQuery)
    })
  }, [activeTopic, filter, query])

  const resetFilters = () => {
    setFilter('all')
    setQuery('')
    onTopicChange('all')
  }

  const handleCopy = async () => {
    if (!citing) return
    await copyText(getBibtex(citing))
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div className="publication-explorer">
      <div className="publication-tools">
        <label className="search-field">
          <Search size={18} strokeWidth={1.8} aria-hidden="true" />
          <span className="sr-only">Search publications</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search title, author, or venue"
          />
          {query && (
            <button type="button" onClick={() => setQuery('')} aria-label="Clear publication search">
              <X size={17} aria-hidden="true" />
            </button>
          )}
        </label>
        <div className="filter-row" aria-label="Filter publications">
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              className={filter === item.id ? 'filter-button is-active' : 'filter-button'}
              aria-pressed={filter === item.id}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="results-meta" aria-live="polite">
        <span>Showing {visiblePapers.length} of {publications.length} papers</span>
        {(activeTopic !== 'all' || filter !== 'all' || query) && (
          <button type="button" onClick={resetFilters}>Clear all filters</button>
        )}
      </div>

      {activeTopic !== 'all' && (
        <div
          className="active-topic"
          style={{ '--topic-color': topics.find((topic) => topic.id === activeTopic)?.color } as CSSProperties}
        >
          <span>Research area</span>
          <TopicIcon topic={activeTopic} size={19} />
          <strong>{topics.find((topic) => topic.id === activeTopic)?.title}</strong>
          <button type="button" onClick={() => onTopicChange('all')} aria-label="Clear research area filter">
            <X size={16} aria-hidden="true" />
          </button>
        </div>
      )}

      <div className="publication-list">
        {visiblePapers.map((paper) => {
          const topic = topics.find((item) => item.id === paper.topic)
          return (
            <article className="publication-row" key={paper.id}>
              <div className="publication-year">
                <span>{paper.year}</span>
                <span>{paper.type}</span>
              </div>
              <div className="publication-main">
                <div className="publication-kicker">
                  <span>{paper.venueShort}</span>
                  <span aria-hidden="true">/</span>
                  <span>{paper.rank}</span>
                  {paper.firstAuthor && <span className="first-author-label">First author</span>}
                </div>
                <h3>
                  <a href={paper.url} target="_blank" rel="noreferrer">
                    {paper.title}
                    <ArrowUpRight size={18} strokeWidth={1.7} aria-hidden="true" />
                  </a>
                </h3>
                <Authors authors={paper.authors} />
                <p
                  className="publication-topic"
                  style={{ '--topic-color': topic?.color } as CSSProperties}
                >
                  <TopicIcon topic={paper.topic} size={14} />
                  <span>{topic?.title}</span>
                </p>
                {paper.award && <p className="publication-award">{paper.award}</p>}
              </div>
              <div className="publication-actions">
                <a href={paper.url} target="_blank" rel="noreferrer" aria-label={`Open paper: ${paper.title}`}>
                  Paper <ArrowUpRight size={14} aria-hidden="true" />
                </a>
                <button type="button" onClick={() => { setCiting(paper); setCopied(false) }}>
                  <Quote size={14} aria-hidden="true" /> Cite
                </button>
              </div>
            </article>
          )
        })}
      </div>

      {visiblePapers.length === 0 && (
        <div className="empty-state">
          <h3>No publications found</h3>
          <p>Try a different keyword or clear the current filters.</p>
          <button type="button" onClick={resetFilters}>Show all papers</button>
        </div>
      )}

      <Dialog.Root open={Boolean(citing)} onOpenChange={(open) => { if (!open) setCiting(null) }}>
        <Dialog.Portal>
          <Dialog.Overlay className="dialog-overlay" />
          <Dialog.Content className="dialog-content citation-dialog">
            <div className="dialog-heading">
              <div>
                <span className="eyebrow">Citation</span>
                <Dialog.Title>BibTeX</Dialog.Title>
              </div>
              <Dialog.Close className="dialog-close" aria-label="Close citation dialog">
                <X size={20} aria-hidden="true" />
              </Dialog.Close>
            </div>
            <Dialog.Description className="dialog-description">
              {citing?.title}
            </Dialog.Description>
            <pre className="bibtex-block"><code>{citing ? getBibtex(citing) : ''}</code></pre>
            <div className="dialog-footer">
              <button className="primary-button" type="button" onClick={handleCopy}>
                {copied ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}
                {copied ? 'Copied to clipboard' : 'Copy BibTeX'}
              </button>
              {citing?.doi && <span>DOI {citing.doi}</span>}
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}
