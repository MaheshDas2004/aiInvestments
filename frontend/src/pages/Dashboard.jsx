import Navbar from '../components/Navbar.jsx'
import SearchSection from '../components/SearchSection.jsx'
import Footer from '../components/Footer.jsx'
import { useAuth } from '../context/AuthContext.jsx'

export default function Dashboard() {
  const { user } = useAuth()

  return (
    <div className="flex min-h-screen flex-col pt-20">
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-[88rem] px-4 pt-10 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-paper sm:text-3xl">
            Welcome back, {user?.email}
          </h1>
          <p className="mt-2 text-sm text-mist">
            You are logged in. Start analyzing companies from your dashboard.
          </p>
        </section>
        <SearchSection />
      </main>
      <Footer />
    </div>
  )
}
