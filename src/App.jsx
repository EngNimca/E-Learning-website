import { Hero, Blog, Courses, Testimonials, 
    FAQ, HowItWorks, Pricing, Statistics, 
    WhyChooseUs, CTA, Footer } from './Sections'
import Nav from "./components/Nav"
import ImpactStats from "./Sections/ImpactStats";

function App() {
  return (
    <main>
      <Nav />
    <section >
        <Hero />
    </section>
    <section>
        <ImpactStats />
    </section>
    <section>
        <Statistics />
    </section>
    <section>
        <WhyChooseUs />
    </section>
    <section>
        <HowItWorks />
    </section>
    <section>
        <Courses />
    </section>
    <section>
        <Pricing />
    </section>
    <section>
        <FAQ />
    </section>
    <section>
        <Testimonials />
    </section>
    <section>
        <Blog />
    </section>
    <section>
        <CTA />
    </section>
    <section>
        <Footer />
    </section>
    </main>
  )
}

export default App
