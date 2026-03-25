import React, { lazy, Suspense } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './Home'
import SocialWidget from './components/SocialWidget'

const About = lazy(() => import('./About'))
const Projects = lazy(() => import('./Projects'))
const Contact = lazy(() => import('./Contact'))
const NotFound = lazy(() => import('./NotFound'))

export default function App(): JSX.Element {
  return (
    <div className="min-h-screen">
      <nav className="nav-bg shadow">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link font-medium text-white' : 'nav-link font-medium text-gray-300')}>Home</NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'nav-link font-medium text-white' : 'nav-link font-medium text-gray-300')}
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? 'nav-link font-medium text-white' : 'nav-link font-medium text-gray-300')}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'nav-link font-medium text-white' : 'nav-link font-medium text-gray-300')}
            >
              Contact
            </NavLink>
          </div>

          <SocialWidget />
        </div>
      </nav>

      <main className="container mx-auto p-6">
        <Suspense fallback={<div className="p-6 text-center">Loading…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  )
}
