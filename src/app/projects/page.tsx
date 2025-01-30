// app/projects/page.tsx

type Project = {
    title: string
    description: string
    link: string
  }
  
  const projects: Project[] = [
    {
      title: 'Project One',
      description: 'An innovative project that uses AI to do X.',
      link: 'https://example.com',
    },
    {
      title: 'Project Two',
      description: 'A sleek app that showcases Y with modern design.',
      link: 'https://example.com',
    },
    {
      title: 'Project Three',
      description: 'An experimental website exploring 3D transformations.',
      link: 'https://example.com',
    },
  ]
  
  export default function ProjectsPage() {
    return (
      <div className="mt-8">
        <h2 className="text-3xl md:text-5xl font-bold text-glow">My Projects</h2>
        <p className="mt-2 mb-8 max-w-xl">
          Here are a few standout projects that reflect my passion for innovation
          and creativity:
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                block
                bg-white/10
                rounded-lg
                p-6
                hover:bg-white/20
                transition-colors
              "
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    )
  }
  