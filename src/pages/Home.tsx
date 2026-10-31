import { useState, type CSSProperties } from 'react'
import { ArrowRight, ArrowUpRight, BookOpen, GraduationCap, Mail, MapPin } from 'lucide-react'
import SiteHeader from '../components/SiteHeader'
import PublicationExplorer from '../components/PublicationExplorer'
import TopicIcon from '../components/TopicIcon'
import ResearchOverview from '../components/ResearchOverview'
import { EcosystemIllustration, EmpiricalIllustration } from '../components/ResearchIllustrations'
import {
  education,
  news,
  profile,
  publications,
  topics,
  type TopicId,
} from '../data/siteContent'
import '../App.css'

export default function Home() {
  const [activeTopic, setActiveTopic] = useState<TopicId | 'all'>('all')
  const emailLink = `mailto:${profile.email}`

  const exploreTopic = (topic: TopicId) => {
    setActiveTopic(topic)
    document.getElementById('publications')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
        <section className="hero container" id="about" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div className="hero-main">
              <span className="eyebrow">{profile.role}</span>
              <h1 id="hero-title">{profile.name}</h1>
              <p className="hero-lede">{profile.headline}</p>
              <p className="hero-bio">{profile.bio}</p>
              <div className="research-keywords" aria-label="Research interests">
                {profile.researchInterests.map((interest) => <span key={interest}>{interest}</span>)}
              </div>
            </div>

            <aside className="profile-rail" aria-label="Academic profile">
              <EcosystemIllustration />
              <dl className="profile-details">
                <div>
                  <dt><GraduationCap size={17} aria-hidden="true" /> Institution</dt>
                  <dd>{profile.institution}</dd>
                </div>
                <div>
                  <dt><BookOpen size={17} aria-hidden="true" /> Advisor</dt>
                  <dd>{profile.advisor}</dd>
                </div>
                <div>
                  <dt><MapPin size={17} aria-hidden="true" /> Location</dt>
                  <dd>{profile.location}</dd>
                </div>
              </dl>
              <a className="profile-email" href={emailLink}>
                <Mail size={17} aria-hidden="true" />
                {profile.email}
              </a>
            </aside>
          </div>

          <div className="stats-grid" aria-label="Publication summary">
            <div><strong>{publications.length}</strong><span>Publications</span></div>
            <div><strong>{publications.filter((paper) => paper.rank === 'CCF-A').length}</strong><span>CCF-A papers</span></div>
            <div><strong>{publications.filter((paper) => paper.firstAuthor).length}</strong><span>First-author papers</span></div>
            <div><strong>{publications.filter((paper) => paper.award).length}</strong><span>Distinguished Paper Award</span></div>
          </div>
        </section>

        <section className="research-section container section-space" id="research" aria-labelledby="research-title">
          <div className="section-heading-grid">
            <div>
              <span className="eyebrow">Research map</span>
              <h2 id="research-title">Research areas in software engineering</h2>
            </div>
            <p>{profile.researchIntro}</p>
          </div>
          <ResearchOverview onTopicSelect={exploreTopic} />
          <div className="topic-list">
            {topics.map((topic) => {
              const paperCount = publications.filter((paper) => paper.topic === topic.id).length
              return (
                <button
                  className="topic-row"
                  type="button"
                  key={topic.id}
                  style={{ '--topic-color': topic.color } as CSSProperties}
                  onClick={() => exploreTopic(topic.id)}
                >
                  <TopicIcon className="topic-icon" topic={topic.id} size={27} />
                  <span className="topic-title">{topic.title}</span>
                  <span className="topic-description">{topic.description}</span>
                  <span className="topic-count">{paperCount} {paperCount === 1 ? 'paper' : 'papers'}</span>
                  <ArrowRight className="topic-arrow" size={22} strokeWidth={1.5} aria-hidden="true" />
                </button>
              )
            })}
          </div>
        </section>

        <section className="publications-section container section-space" id="publications" aria-labelledby="publications-title">
          <div className="section-heading-grid publications-heading">
            <div>
              <span className="eyebrow">Bibliography</span>
              <h2 id="publications-title">Publications</h2>
            </div>
            <div className="publications-heading-aside">
              <EmpiricalIllustration />
              <p>Peer-reviewed conference and journal papers. Select a research area above or use the filters to find a specific contribution.</p>
            </div>
          </div>
          <PublicationExplorer activeTopic={activeTopic} onTopicChange={setActiveTopic} />
        </section>

        <div className="lower-section container section-space">
          <section className="news-section" id="news" aria-labelledby="news-title">
            <div className="section-heading-small">
              <span className="eyebrow">Updates</span>
              <h2 id="news-title">News</h2>
            </div>
            <div className="news-list">
              {news.map((item, index) => (
                <div className="news-item" key={`${item.date}-${index}`}>
                  <time>{item.date}</time>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="education-section" id="education" aria-labelledby="education-title">
            <div className="section-heading-small">
              <span className="eyebrow">Background</span>
              <h2 id="education-title">Education</h2>
            </div>
            <div className="education-list">
              {education.map((item) => (
                <article className="education-item" key={item.date}>
                  <span className="education-date">{item.date}</span>
                  <h3>{item.degree}</h3>
                  <p>{item.institution}</p>
                  <span>{item.location}</span>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div>
            <span className="eyebrow eyebrow-on-dark">Contact</span>
            <h2>{profile.footerHeading}</h2>
          </div>
          <a className="footer-email" href={emailLink}>
            {profile.email} <ArrowUpRight size={22} aria-hidden="true" />
          </a>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>{profile.institution}</span>
          <a href={profile.repository} target="_blank" rel="noreferrer">
            Source on GitHub <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </footer>
    </>
  )
}
