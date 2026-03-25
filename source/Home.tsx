import React, { useEffect, useState } from 'react'

export default function Home(): JSX.Element {
    const [animate, setAnimate] = useState(false)
    useEffect(() => setAnimate(true), [])

    return (
        <main className={`${animate ? 'page-animate' : ''} min-h-screen flex items-center justify-center`}>
            <div className="text-center p-8">
                <h1 className="text-4xl font-bold mb-2 accent-text">Victor Acosta</h1>
                <p className="text-lg text-muted">Welcome to my portfolio!</p>
                <p className="mt-4 text-muted">Explore my projects, learn about me, or get in touch using the other tabs!</p>
            </div>
        </main>
    )
}