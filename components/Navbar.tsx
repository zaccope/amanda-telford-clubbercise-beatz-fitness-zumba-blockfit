'use client'

import { useState, useEffect } from 'react'
import { List, X } from '@phosphor-icons/react'

const navLinks = [
  { label: 'Classes', href: '#classes' },
  { label: 'About', href: '#about' },
  { label: 'Timetable', href: '#timetable' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 32)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-cream-50/95 backdrop-blur-md border-b border-plum-200/60'
            : 'bg-cream-50/85 backdrop-blur-sm'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-20 gap-4">
          <a href="#" className="flex items-baseline gap-2 min-w-0" aria-label="Amanda Telford Fitness — Home">
            <Logo />
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] tracking-[0.28em] uppercase text-plum-800 hover:text-coral-600 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => {
                if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
                  window.gtag('event', 'cta_click', { event_category: 'navbar' })
                }
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-plum-950 text-cream-50 text-[11px] font-semibold tracking-[0.2em] uppercase rounded-[4px] hover:bg-plum-900 active:scale-[0.97] transition-all"
            >
              Book a class
            </a>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden w-11 h-11 flex items-center justify-center text-plum-900 rounded-[4px] border border-plum-200 bg-cream-50"
            aria-label="Open menu"
            aria-expanded={isOpen}
          >
            <List weight="bold" className="w-5 h-5" />
          </button>
        </nav>
      </header>

      {/* Mobile Menu — SOLID cream-50 background, never transparent */}
      <div
        className={`md:hidden fixed inset-0 z-[60] transition-opacity duration-400 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="absolute inset-0 bg-cream-50" />
        <div className="absolute inset-0 glow-spot-soft pointer-events-none" />

        <div className="relative h-full flex flex-col">
          <div className="relative z-10 flex items-center justify-between gap-4 h-20 px-5 border-b border-plum-200/60 flex-shrink-0 bg-cream-50">
            <Logo />
            <button
              onClick={() => setIsOpen(false)}
              className="w-11 h-11 flex items-center justify-center text-plum-900 rounded-[4px] border border-plum-200 bg-cream-50 flex-shrink-0"
              aria-label="Close menu"
            >
              <X weight="bold" className="w-5 h-5" />
            </button>
          </div>

          <div className="relative flex-1 flex flex-col justify-center px-6 sm:px-8">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-between py-5 border-b border-plum-200/50"
                  style={{
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? 'translateX(0)' : 'translateX(-16px)',
                    transition: `opacity 500ms ease ${i * 70 + 100}ms, transform 500ms cubic-bezier(0.16, 1, 0.3, 1) ${i * 70 + 100}ms`,
                  }}
                >
                  <span className="font-heading italic text-3xl sm:text-4xl text-plum-900 group-hover:text-coral-600 transition-colors">
                    {link.label}
                  </span>
                  <span className="font-body text-[11px] tracking-[0.3em] uppercase text-plum-400 group-hover:text-coral-500 transition-colors">
                    0{i + 1}
                  </span>
                </a>
              ))}
            </nav>

            <div
              className="mt-10"
              style={{
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateY(0)' : 'translateY(12px)',
                transition: `opacity 500ms ease 460ms, transform 500ms cubic-bezier(0.16, 1, 0.3, 1) 460ms`,
              }}
            >
              <a
                href="#contact"
                onClick={() => {
                  setIsOpen(false)
                  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
                    window.gtag('event', 'cta_click', { event_category: 'mobile_menu' })
                  }
                }}
                className="flex items-center justify-center gap-3 w-full py-4 bg-plum-950 text-cream-50 font-semibold tracking-[0.16em] uppercase text-sm rounded-[4px] active:scale-[0.98] transition-transform"
              >
                Book a class
              </a>
              <a
                href="tel:+447780515350"
                className="block text-center text-[12px] tracking-[0.25em] uppercase text-plum-600 hover:text-coral-600 transition-colors mt-5"
              >
                07780 515350
              </a>
              <p className="text-center text-[11px] tracking-[0.3em] uppercase text-plum-400 mt-3">
                Telford &middot; Shropshire
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function Logo() {
  return (
    <div className="flex items-center gap-2.5 min-w-0 leading-none">
      <span className="font-heading italic text-[22px] md:text-[26px] leading-none text-plum-950 tracking-tight whitespace-nowrap">
        Amanda&nbsp;Telford
      </span>
      <span className="font-body text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-coral-600 whitespace-nowrap">
        Fitness
      </span>
    </div>
  )
}
