import React, { useEffect, useState } from 'react'
import ProjectCard from './components/ProjectCard'

type Project = {
  id: string
  title: string
  description: React.ReactNode
  tech?: string
  video?: string
  pdf?: string
  link?: string
  collaborators?: string
  screenshots?: string[]
}

const projects: Project[] = [
  {
    id: 'mathguru',
    title: 'MathGuru: Multifunction calculator',
    description: (
      <>
        <div>
          Developed during Spring 2024 for AP Computer Science Principles (Professor Lee).
        </div>
        <ul className="list-disc ml-5 mt-2">
          <li>Developed a calculator capable of arithmetic, conversion, and exponential operations</li>
          <li>Implemented a user-friendly interface with buttons and input fields</li>
          <li>Implemented user history for past calculations</li>
        </ul>
      </>
    ),
    tech: 'JavaScript, Code.org App Lab',
    pdf: '/assets/mathguru-code.pdf',
    video: '/assets/mathguru-demo.mp4',
    thumbnail: '/assets/mathguru-thumb.jpg',

  },
  {
    id: 'cyberspace',
    title: 'CyberSpace: The Hacker Within!',
    description: (
        <>
        <div>
      Developed during Fall of 2025 for CS100 (Professor Neftali).
        </div>
        <ul className="list-disc ml-5 mt-2">
            <li> Developed a terminal turn-based role-playing game that includes class based characters, combat mechanics, enemy AI, and saved progression.</li>
            <li> Applied Liskov Subsitution Principle, Abstraction/Polymorphism, and Single Responsibility Principle</li>
            <li> Conducted scrub meetings and weekly sprints for project management</li>
        </ul>
        <div>
        Personal Contributions:
                    </div>
                    <ul className="list-disc ml-5 mt-2">
                        <li>Implemented core Player class with health, inventory, and abilities</li>
                        <li>Expanded on ability system to include multiple effects and class dependencies</li>
                        <li>Fixed bugs in player, item, and game state logic</li>
                    </ul>
      </>
    ),
    tech: 'C++, Git, CMake, Github Actions, GTest',
    collaborators: 'Benito Sanchez III, Jaden Matthew, Erik Windgassen',
    repo: 'https://github.com/cs100/final-project-bsanc136-vacos022-ewind002-jmatt042',
    screenshots: [
      '/assets/cyberspace_preview_1.png',
      '/assets/cyberspace_preview_2.png',
      '/assets/cyberspace_preview_3.png',
      '/assets/cyberspace_preview_4.png',
    ],
  },
  {
      id: 'coming-soon',
      title: 'More Projects coming soon!',
      description: (
        <div>
            I have a few projects in the works that I will add here when they're ready. Check back soon!
        </div>
      )
  }

]

export default function Projects(): JSX.Element {
  const [animate, setAnimate] = useState(false)
  useEffect(() => setAnimate(true), [])

  return (
    <section className={`${animate ? 'page-animate' : ''}`}>
      <h2 className="text-2xl font-bold">Projects</h2>
      <p className="mt-2 text-muted">Here is a list of projects I have worked on individually and with others!</p>

      <div className="mt-4">
        {projects.map((p) => (
          <ProjectCard
            key={p.id}
            title={p.title}
            description={p.description}
            tech={p.tech}
            link={p.link}
            repo={(p as any).repo}
            pdf={p.pdf}
            video={p.video}
            thumbnail={p.thumbnail}
            collaborators={p.collaborators}
            screenshots={(p as any).screenshots}
          />
        ))}
      </div>
    </section>
  )
}
