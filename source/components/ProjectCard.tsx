import React from 'react'

type Props = {
  title: string
  description: React.ReactNode
  tech?: string
  link?: string
  video?: string
  pdf?: string
  thumbnail?: string
  repo?: string
  collaborators?: string
  screenshots?: string[]
}

import { useState } from 'react'
import MediaModal from './MediaModal'

export default function ProjectCard({ title, description, tech, link, video, pdf, thumbnail, repo, collaborators, screenshots }: Props): JSX.Element {
  const [animate, setAnimate] = useState(false)
  React.useEffect(() => setAnimate(true), [])
  const [openPdf, setOpenPdf] = useState(false)
  const [openVideo, setOpenVideo] = useState(false)
  const [openScreenshots, setOpenScreenshots] = useState(false)

  return (
    <article className={`${animate ? 'card-animate' : ''} site-card text-white shadow-sm rounded-lg p-4 mb-4`}>
      <div className="flex gap-4 items-start">
        {/* thumbnail removed per request */}

        <div className="flex-1">
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="mt-2 text-gray-300">{description}</div>
          {tech && <p className="mt-2 text-sm text-gray-400">Tech: {tech}</p>}
          {collaborators && <p className="mt-2 text-sm text-gray-400">Collaborators: {collaborators}</p>}

          <div className="mt-3 flex gap-3 items-center">
            {video && (
              <button onClick={() => setOpenVideo(true)} className="px-3 py-1 btn-accent rounded">
                Preview Demo
              </button>
            )}

            {pdf && (
              <button onClick={() => setOpenPdf(true)} className="px-3 py-1 btn-accent rounded">
                Preview Code
              </button>
            )}

            {screenshots && screenshots.length > 0 && (
              <button onClick={() => setOpenScreenshots(true)} className="px-3 py-1 btn-accent rounded">Preview screenshots</button>
            )}

            {repo && (
              <a href={repo} className="px-3 py-1 btn-accent rounded inline-flex items-center" target="_blank" rel="noopener noreferrer">
                Repository
              </a>
            )}

            {link && (
              <a href={link} className="px-3 py-1 border rounded hover:bg-gray-700" target="_blank" rel="noopener noreferrer">
                View project
              </a>
            )}
          </div>
        </div>
      </div>

        <MediaModal open={openPdf} onClose={() => setOpenPdf(false)} pdf={pdf} title={title} />
        <MediaModal open={openVideo} onClose={() => setOpenVideo(false)} video={video} title={title} />
        <MediaModal open={openScreenshots} onClose={() => setOpenScreenshots(false)} screenshots={screenshots} title={title} />
    </article>
  )
}
