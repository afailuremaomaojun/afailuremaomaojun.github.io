import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { profile } from '../data/siteContent'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#research' },
  { label: 'Publications', href: '#publications' },
  { label: 'News', href: '#news' },
  { label: 'Education', href: '#education' },
]

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const emailLink = `mailto:${profile.email}`

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#about" onClick={() => setMenuOpen(false)} aria-label={`${profile.name}, back to about`}>
          <span className="brand-mark" aria-hidden="true">{profile.initials}</span>
          <span className="brand-name">{profile.name}</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <a className="header-contact" href={emailLink}>
          Contact <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-nav ${menuOpen ? 'is-open' : ''}`}
        aria-label="Mobile navigation"
        hidden={!menuOpen}
      >
        <div className="container mobile-nav-inner">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
          <a href={emailLink} onClick={() => setMenuOpen(false)}>
            Email {profile.name.split(' ')[0]} <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  )
}
