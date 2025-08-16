import Navbar from "@/components/Navbar/page";
import Hero from "@/components/Hero/page";
import AboutMe from "@/components/About/page";
import Projects from "@/components/Projects/page";
import ServicesSection from "@/components/services/page";
import ContactSection from "@/components/Contact/page";
import FooterSection from "@/components/Footer/page";

export default function Home() {
  return (
    <main className="relative w-full scroll-smooth bg-black">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about">
        <AboutMe />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* What I Do / Services Section */}
      <section id="services">
        <ServicesSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-neutral-100 dark:bg-neutral-900">
        <ContactSection />
      </section>

      {/* Footer Section */}
      <section id="footer">
        <FooterSection />
      </section>
    </main>
  );
}