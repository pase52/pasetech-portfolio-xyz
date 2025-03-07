'use client'

import { useState, useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'

// We'll initialize the worker in a useEffect hook instead
// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

interface PDFViewerProps {
  pdfFile: string
}

export default function PDFViewer({ pdfFile }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [windowWidth, setWindowWidth] = useState<number>(0)
  const [workerInitialized, setWorkerInitialized] = useState(false)

  // Initialize PDF.js worker from public directory
  useEffect(() => {
    const initializeWorker = async () => {
      try {
        pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs'
        setWorkerInitialized(true)
      } catch (error) {
        console.error('Failed to load PDF.js worker:', error)
      }
    }

    initializeWorker()
  }, [])

  // Handle window resize for responsive design
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    setWindowWidth(window.innerWidth)

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Calculate width based on screen size
  const getWidth = () => {
    if (windowWidth > 1024) return 900
    if (windowWidth > 768) return 600
    return windowWidth - 40
  }

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
  }

  if (!workerInitialized) {
    return <div className="loading">Initialisation du PDF Viewer...</div>
  }

  return (
    <div className="pdf-container flex justify-center">
      <Document
        file={pdfFile}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<div className="loading">Chargement du CV...</div>}
        error={
          <div className="error">
            Impossible de charger le CV, vous pouvez le télécharger directement.
          </div>
        }
      >
        {Array.from(new Array(numPages), (_, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            width={getWidth()}
            renderTextLayer={true}
            renderAnnotationLayer={true}
          />
        ))}
      </Document>
    </div>
  )
}
