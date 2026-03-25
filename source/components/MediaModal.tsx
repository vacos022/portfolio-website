import React from 'react'
import { createPortal } from 'react-dom'

type Props = {
  open: boolean
  onClose: () => void
  video?: string
  pdf?: string
  title?: string
  screenshots?: string[]
}
export default function MediaModal({ open, onClose, video, pdf, title, screenshots }: Props): JSX.Element | null {
  const [index, setIndex] = React.useState(0)
  const containerRef = React.useRef<HTMLDivElement | null>(null)
  const touchStartX = React.useRef<number | null>(null)
  const touchDeltaX = React.useRef<number>(0)
  const [loadedVideo, setLoadedVideo] = React.useState<string | null>(null)
  const [loadedPdf, setLoadedPdf] = React.useState<string | null>(null)

  React.useEffect(() => {
    if (!open) setIndex(0)
  }, [open])

  React.useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') setIndex((i) => Math.max(0, i - 1))
      if (e.key === 'ArrowRight') setIndex((i) => Math.min((screenshots?.length || 1) - 1, i + 1))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose, screenshots])

  React.useEffect(() => {
    if (!open) return
    // lazy-set media src to avoid preloading until modal opens
    if (video) {
      // small delay so modal animation can start
      const id = setTimeout(() => setLoadedVideo(video), 100)
      return () => clearTimeout(id)
    }
    if (pdf) {
      const id = setTimeout(() => setLoadedPdf(pdf), 100)
      return () => clearTimeout(id)
    }
    return undefined
  }, [open, video, pdf])

  // lock body scroll while modal is open to prevent underlying elements
  React.useEffect(() => {
    const orig = document.body.style.overflow
    if (open) document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = orig }
  }, [open])

  function handleTouchStart(e: React.TouchEvent) {
    const t = e.touches[0]
    touchStartX.current = t.clientX
    touchDeltaX.current = 0
  }

  function handleTouchMove(e: React.TouchEvent) {
    if (touchStartX.current == null) return
    const t = e.touches[0]
    touchDeltaX.current = t.clientX - touchStartX.current
  }

  function handleTouchEnd() {
    const delta = touchDeltaX.current
    const threshold = 50
    if (delta > threshold) {
      // swipe right -> previous
      setIndex((i) => Math.max(0, i - 1))
    } else if (delta < -threshold) {
      // swipe left -> next
      setIndex((i) => Math.min((screenshots?.length || 1) - 1, i + 1))
    }
    touchStartX.current = null
    touchDeltaX.current = 0
  }

  if (!open) return null

  const hasScreens = screenshots && screenshots.length > 0

  const modalContent = (
    <div onClick={(e) => { if (e.target === e.currentTarget) onClose() }} className="fixed inset-0 z-[9999] flex items-start justify-center modal-overlay px-4 py-12 overflow-y-auto" role="dialog" aria-modal="true">
      <div ref={containerRef} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} className="site-card text-white rounded-lg max-w-6xl w-full max-h-[92vh] overflow-auto modal-body" tabIndex={-1}>
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold">{title ?? 'Preview'}</h3>
          <button onClick={onClose} className="text-gray-300 hover:text-white modal-close">Close</button>
        </div>

        <div className="p-4">
          {video && (
            <div className="mb-4">
              <video className="w-full rounded bg-black max-h-[56vh]" controls src={loadedVideo ?? undefined} preload="none">
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          {pdf && (
            <div className="border rounded overflow-hidden mb-4 border-gray-700" style={{ height: '56vh' }}>
              <iframe src={loadedPdf ?? undefined} title="PDF preview" className="w-full h-full media-iframe deferred-hidden" onLoad={(e) => (e.currentTarget.className = 'w-full h-full media-iframe deferred-visible')} />
            </div>
          )}

          {hasScreens && (
            <div>
              <div className="mb-2 flex items-center justify-between">
                <div className="text-sm text-gray-300">Screenshot {index + 1} of {screenshots!.length}</div>
                <div className="flex gap-2">
                  <button onClick={() => setIndex((i) => Math.max(0, i - 1))} className="px-2 py-1 border rounded border-gray-600">Prev</button>
                  <button onClick={() => setIndex((i) => Math.min((screenshots!.length || 1) - 1, i + 1))} className="px-2 py-1 border rounded border-gray-600">Next</button>
                </div>
              </div>

              <div className="border rounded overflow-hidden">
                <img key={index} src={screenshots![index]} alt={`screenshot-${index + 1}`} className="media-img" />
              </div>
            </div>
          )}

          {!video && !pdf && !hasScreens && <p className="text-gray-300">No media available.</p>}
        </div>
      </div>
    </div>
  )

  return createPortal(modalContent, document.body)
}

