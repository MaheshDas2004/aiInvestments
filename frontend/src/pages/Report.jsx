import { useEffect, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, FileDown } from 'lucide-react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import ResearchReport from '../components/ResearchReport.jsx'

export default function Report() {
  const location = useLocation()
  const navigate = useNavigate()

  const payload = useMemo(() => {
    const stateReport = location.state?.report
    const stateCompany = location.state?.companyName

    if (stateReport) {
      return {
        companyName: stateCompany,
        report: stateReport,
      }
    }

    try {
      const cached = sessionStorage.getItem('investiq-report')
      if (!cached) return null
      return JSON.parse(cached)
    } catch {
      return null
    }
  }, [location.state])

  useEffect(() => {
    if (payload?.report) {
      sessionStorage.setItem('investiq-report', JSON.stringify(payload))
    }
  }, [payload])

  if (!payload?.report) {
    return (
      <div className="flex min-h-screen flex-col pt-20">
        <Navbar />
        <main className="mx-auto flex w-full max-w-[88rem] flex-1 items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-2xl border border-white/[0.08] p-6 text-center">
            <p className="text-sm text-mist">No report found. Run a search from the home page first.</p>
            <button onClick={() => navigate('/')} className="btn-primary mt-4">
              Go home
            </button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const handleExportPdf = () => {
    window.print()
  }

  return (
    <div className="flex min-h-screen flex-col pt-20">
      <Navbar />
      <main className="flex-1">
        <div className="no-print mx-auto flex w-full max-w-[88rem] items-center justify-between gap-3 px-4 pt-8 sm:px-6 lg:px-8">
          <button onClick={() => navigate(-1)} className="btn-ghost">
            <ArrowLeft size={16} />
            Back
          </button>
          <button onClick={handleExportPdf} className="btn-primary">
            <FileDown size={16} />
            Export to PDF
          </button>
        </div>

        <div className="report-frame">
          <ResearchReport data={payload.report} companyName={payload.companyName} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
