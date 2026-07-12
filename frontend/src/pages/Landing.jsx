import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import SearchSection from '../components/SearchSection.jsx'
import FeatureCards from '../components/FeatureCards.jsx'
import Footer from '../components/Footer.jsx'

export default function Landing() {
  return (
    <div className="flex min-h-screen flex-col pt-20">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SearchSection />
        <FeatureCards />
      </main>
      <Footer />
    </div>
  )
}
