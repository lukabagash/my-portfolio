// app/page.tsx

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center mt-10 space-y-8">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-glow leading-tight">
          Hello, I’m <span className="text-red-300">Your Name</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl max-w-2xl mx-auto">
          A Web Developer & Designer who loves crafting unique digital
          experiences.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex space-x-4">
        <a
          href="/projects"
          className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-full text-white font-semibold"
        >
          Explore My Work
        </a>
        <a
          href="/contact"
          className="bg-transparent border border-white hover:bg-white hover:text-black px-6 py-3 rounded-full font-semibold"
        >
          Get in Touch
        </a>
      </div>

      {/* Cool Visual / Image (optional) */}
      <div className="mt-12">
        {/* Replace this with your own image or illustration */}
        <div className="w-64 h-64 rounded-full bg-white/20 flex items-center justify-center">
          <span className="text-4xl">🪄</span>
        </div>
      </div>
    </section>
  )
}
