import React, { useEffect, useState } from 'react'

type Links = {
  linkedin?: string
  github?: string
  resume?: string
}

export default function SocialWidget(): JSX.Element {
  const [links, setLinks] = useState<Links>({})
  const [open, setOpen] = useState(false)

  useEffect(() => {
    fetch('/social.json')
      .then((r) => r.json())
      .then((data) => setLinks(data))
      .catch(() => {
        /* ignore - keep defaults */
      })
  }, [])

  return (
    <div className="flex items-center">
      {/* Desktop: show icons */}
      <div className="hidden sm:flex items-center gap-3">
        {links.linkedin && (
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex items-center gap-2 px-3 py-1 rounded hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 accent-text icon-anim icon-pulse" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.5c0-1.119-.023-2.56-1.56-2.56-1.56 0-1.8 1.219-1.8 2.48v4.58h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v5.7z" />
            </svg>
            <span className="hidden sm:inline text-sm">LinkedIn</span>
          </a>
        )}

        {links.github && (
          <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex items-center gap-2 px-3 py-1 rounded hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 icon-anim icon-wiggle" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5c-6.63 0-12 5.37-12 12 0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.089-.744.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.305.76-1.605-2.665-.305-5.467-1.335-5.467-5.93 0-1.31.468-2.381 1.236-3.22-.124-.304-.536-1.527.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.046.138 3.006.404 2.289-1.552 3.294-1.23 3.294-1.23.656 1.649.244 2.872.12 3.176.77.839 1.235 1.91 1.235 3.22 0 4.61-2.807 5.622-5.48 5.92.43.37.823 1.102.823 2.222 0 1.606-.014 2.9-.014 3.293 0 .32.216.694.825.576 4.765-1.587 8.2-6.087 8.2-11.386 0-6.63-5.37-12-12-12z" />
              <path d="M12 .5c-6.63 0-12 5.37-12 12 0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.089-.744.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.305.76-1.605-2.665-.305-5.467-1.335-5.467-5.93 0-1.31.468-2.381 1.236-3.22-.124-.304-.536-1.527.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.046.138 3.006.404 2.289-1.552 3.294-1.23 3.294-1.23.656 1.649.244 2.872.12 3.176.77.839 1.235 1.91 1.235 3.22 0 4.61-2.807 5.622-5.48 5.92.43.37.823 1.102.823 2.222 0 1.606-.014 2.9-.014 3.293 0 .32.216.694.825.576 4.765-1.587 8.2-6.087 8.2-11.386 0-6.63-5.37-12-12-12z" />
            </svg>
            <span className="hidden sm:inline text-sm">GitHub</span>
          </a>
        )}

        {links.resume && (
          <a href={links.resume} target="_blank" rel="noopener noreferrer" aria-label="Resume" className="flex items-center gap-2 px-3 py-1 rounded hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-muted" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 2h7l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8 7V3.5L19.5 9H14z" />
              <path d="M6 2h7l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8 7V3.5L19.5 9H14z" />
            </svg>
            <span className="hidden sm:inline text-sm">Resume</span>
          </a>
        )}
      </div>

      {/* Mobile: collapsed menu */}
      <div className="sm:hidden relative">
        <button onClick={() => setOpen((v) => !v)} className="p-2 rounded hover:bg-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 12h18M3 6h18M3 18h18" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-44 site-card border rounded shadow py-2">
            {links.linkedin && (
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-sm hover:bg-gray-700">LinkedIn</a>
            )}
            {links.github && (
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-sm hover:bg-gray-700">GitHub</a>
            )}
            {links.resume && (
              <a href={links.resume} target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-sm hover:bg-gray-700">Resume</a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
