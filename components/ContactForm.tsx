'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight } from '@phosphor-icons/react'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      classType: (form.elements.namedItem('classType') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error('Failed')

      setStatus('sent')
      form.reset()

      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'form_submit', { event_category: 'contact' })
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClasses =
    'w-full px-4 py-3.5 bg-cream-50 border border-plum-200 rounded-[4px] text-plum-900 placeholder:text-plum-400 focus:outline-none focus:border-coral-500 focus:ring-1 focus:ring-coral-500/30 transition-colors'

  const labelClasses =
    'block text-[10px] uppercase tracking-[0.28em] text-coral-700 mb-2 font-medium'

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClasses}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={inputClasses}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClasses}>Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className={inputClasses}
            placeholder="07xxx xxxxxx"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClasses}>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className={inputClasses}
          placeholder="you@email.com"
        />
      </div>

      <div>
        <label htmlFor="classType" className={labelClasses}>Which class?</label>
        <select
          id="classType"
          name="classType"
          defaultValue=""
          className={inputClasses}
        >
          <option value="" disabled>Pick a class</option>
          <option value="Clubbercise">Clubbercise</option>
          <option value="Beatz Fitness">Beatz Fitness</option>
          <option value="Zumba">Zumba</option>
          <option value="BlockFit">BlockFit</option>
          <option value="Class Bundle">Multi-class bundle</option>
          <option value="Not sure yet">Not sure yet — recommend one</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>Anything I should know?</label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className={`${inputClasses} resize-none`}
          placeholder="New to classes? Any injuries? Just say hi."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full inline-flex items-center justify-center gap-3 py-4 bg-plum-950 text-cream-50 font-semibold tracking-[0.14em] uppercase text-[13px] rounded-[4px] hover:bg-plum-900 active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Sending…' : 'Save me a spot'}
        {status !== 'sending' && <ArrowRight weight="bold" className="w-4 h-4" />}
      </button>

      {status === 'sent' && (
        <p className="text-coral-700 text-sm text-center pt-2">
          Message received. I&rsquo;ll be in touch within 24 hours.
        </p>
      )}
      {status === 'error' && (
        <p className="text-red-700 text-sm text-center pt-2">
          Something went wrong. Please message me on Facebook instead.
        </p>
      )}
    </form>
  )
}
