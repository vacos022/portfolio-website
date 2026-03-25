import React, { useEffect, useState } from 'react'

export default function About(): JSX.Element {
  const [animate, setAnimate] = useState(false)
  useEffect(() => setAnimate(true), [])

  return (
    <section className={`${animate ? 'page-animate' : ''} max-w-4xl mx-auto p-6 site-card rounded-lg`}>
      <div className="text-gray-100 shadow p-6 md:flex md:gap-6">
        <div className="md:w-1/3 flex flex-col items-center">
          <img
            src="/assets/profile_website.jpg"
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover border border-gray-700"
            onError={(e) => { (e.target as HTMLImageElement).src = '/assets/profile-placeholder.jpg' }}
          />
          <h1 className="text-2xl font-bold mt-4">Victor Acosta</h1>
          <p className="text-sm text-gray-400 mt-1">Computer Science and Engineering</p>
            <p className="text-sm text-gray-400">University of California, Riverside</p>
        </div>

        <div className="mt-6 md:mt-0 md:flex-1">
          <h2 className="text-xl font-semibold text-white">About</h2>
          <p className="mt-3 text-gray-300">Hey there! I'm Victor and welcome to my portfolio! I have a strong interest in software and game development and enjoy building projects that solve problems or entertain.</p>

          <section className="mt-6">
            <h3 className="text-lg font-bold text-white">Skills & focus</h3>
            <ul className="list-disc ml-5 mt-2 text-muted">
              <li>Languages (JavaScript, C++)</li>
              <li>Version control and CI (Git, GitHub Actions)</li>
              <li>Back-end development and logic design</li>
            </ul>
          </section>

          <section className="mt-6">
            <h3 className="text-lg font-bold text-white">When I'm not coding</h3>
            <ul className="list-disc ml-5 mt-2 text-muted">
              <li>Playing video games like Call of Duty, Fallout, and Rainbow Six Siege</li>
              <li>I'm also very passionate about competitive gaming!</li>
              <li>Listening to music like Pink Floyd, Radiohead, and Soda Stereo</li>
              <li>I like to learn/work on cars and attend car meets!</li>

            </ul>
          </section>
        </div>
      </div>
    </section>
  )
}
