import React, { useState, useEffect } from 'react'

export default function Contact(): JSX.Element {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)
  const [copied, setCopied] = useState(false)
  const [animate, setAnimate] = useState(false)
  useEffect(() => setAnimate(true), [])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Contact from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:vacos022@ucr.edu?subject=${subject}&body=${body}`
    setSent(true)
  }

  function copyEmail() {
    navigator.clipboard?.writeText('vacos022@ucr.edu').then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    })
  }

  return (
    <section className={`${animate ? 'page-animate' : ''} max-w-xl mx-auto`}>
      <h2 className="text-2xl font-bold">Contact Me!</h2>
      <p className="mt-2 text-muted">Feel free to reach out if you have any questions about the portfolio or just want to shoot a quick message!</p>

      <div className="mt-3 text-muted">
        <p>
          You can also email me directly at <a href="mailto:vacos022@ucr.edu" className="accent-text">vacos022@ucr.edu</a>
          <button type="button" onClick={copyEmail} className="ml-3 px-2 py-1 text-sm rounded bg-gray-700 hover:bg-gray-600">Copy</button>
          {copied && <span className="ml-2 text-sm text-green-400">Copied!</span>}
        </p>
        <p className="mt-1">Or connect with me on LinkedIn, my profile is linked in the social links at the top-right</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input required value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full border rounded p-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full border rounded p-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea required value={message} onChange={(e) => setMessage(e.target.value)} rows={6} className="mt-1 block w-full border rounded p-2" />
        </div>

        <div className="flex items-center gap-3">
          <button type="submit" className="px-4 py-2 btn-accent rounded">Send</button>
          {sent && <span className="text-green-600">Opened mail client — finish sending to complete.</span>}
        </div>
      </form>
    </section>
  )
}
