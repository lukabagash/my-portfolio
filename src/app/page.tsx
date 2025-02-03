import './main.css'
import ParallaxSection from '@/app/components/ParallaxSection';

export default function Home() {
  return (
    <>
      <main className="main">
        <div className="mainDiv">
          <h1 className="bigTitle">
            <span className="welcomeText">Welcome</span> to my blog
          </h1>
          <div className="research">Scroll down to discover</div>
          <div className="line" />
        </div>
      </main>

      {/* Parallax Section appears further down the page */}
      <ParallaxSection />

      {/* Target Sections */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <p>This is the Projects section. Here you can showcase your projects.</p>
      </section>

      <section id="about-me" className="section">
        <h2>About Me</h2>
        <p>This is the About Me section. Add your biography, skills, and interests here.</p>
      </section>

      <section id="contact-me" className="section">
        <h2>Contact Me</h2>
        <p>This is the Contact Me section. Provide your contact details or a contact form here.</p>
      </section>
    </>
  );
}
