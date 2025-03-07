import { genPageMetadata } from 'app/seo'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import SectionContainer from '@/components/SectionContainer'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

// Define metadata for the page (server-side)
export const metadata: Metadata = genPageMetadata({
  title: 'Resume | Florian Dos Santos',
  description:
    "Ingénieur DevOps et développeur expérimenté avec plus de 5 ans d'expérience dans le développement web et la gestion de projets.",
})

// Import the PDF viewer component dynamically with no SSR
const PDFViewer = dynamic(() => import('@/components/PDFViewer'), {
  ssr: false,
  loading: () => <div className="py-12 text-center">Chargement du PDF Viewer</div>,
})

export default function ResumePage() {
  const pdfFile = '/static/28102024-CV-Florian-Dos-Santos.pdf'

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <div className="resume-container">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
            CV
          </h1>
          <a
            href={pdfFile}
            download="Florian-Dos-Santos-Resume.pdf"
            className="hover:bg-primary-600 rounded bg-primary-500 px-4 py-2 font-bold text-white"
          >
            Télécharger le CV (PDF)
          </a>
        </div>

        {/* SEO-friendly hidden text summary */}
        <div className="sr-only">
          <h2>Florian Dos Santos - CV</h2>
          <p>
            Ingénieur DevOps et développeur expérimenté avec plus de 5 ans d'expérience dans le
            développement web et la gestion de projets. Spécialisé dans la conception et
            l'implémentation de solutions cloud, l'automatisation des déploiements et la gestion des
            infrastructures. Compétences techniques : AWS, Docker, Kubernetes, Terraform, CI/CD,
            Node.js, React, TypeScript, Python, et plus.
          </p>
        </div>

        <PDFViewer pdfFile={pdfFile} />
      </div>
    </SectionContainer>
  )
}
