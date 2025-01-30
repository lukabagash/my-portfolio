// app/about/page.tsx

export default function AboutPage() {
    return (
      <div className="mt-8 space-y-6">
        <h2 className="text-3xl md:text-5xl font-bold text-glow">About Me</h2>
        <p className="leading-relaxed max-w-3xl">
          I’m a multi-disciplinary developer with a passion for creating beautiful,
          functional web applications. My interests span front-end development,
          UX design, and emerging technologies.
        </p>
        <p className="leading-relaxed max-w-3xl">
          Outside of coding, you might find me exploring new art exhibitions,
          hiking scenic trails, or experimenting with creative coding and
          generative art projects.
        </p>
        {/* Example: Add a skill set grid, timeline, or other interesting components here */}
      </div>
    )
  }
  