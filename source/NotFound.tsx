import React, { useEffect, useState } from 'react'

export default function NotFound(): JSX.Element {
  const [animate, setAnimate] = useState(false)
  useEffect(() => setAnimate(true), [])

  return (
    <div className={`${animate ? 'page-animate' : ''} text-center py-20`}>
      <h2 className="text-3xl font-bold">404 — Not Found</h2>
      <p className="mt-4 text-muted">The page you requested could not be found.</p>
    </div>
  )
}
