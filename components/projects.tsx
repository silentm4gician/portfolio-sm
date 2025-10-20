import { ProjectCard } from "@/components/project-card";

const landingPages = [
  {
    title: "IgnaMatko",
    description: "Portfolio for the musician Igna Matko",
    tech: ["React", "Vite.js", "Tailwind CSS"],
    liveUrl: "https://ignamatko.vercel.app",
    githubUrl: null,
    image: "/igna.png",
  },
  {
    title: "v4Code",
    description: "Landing page for a tech startup",
    tech: ["Next.js", "React.js", "Tailwind CSS"],
    liveUrl: "https://v4code.vercel.app",
    githubUrl: null,
    image: "/v4.png",
  },
  {
    title: "Robin Cotillon",
    description: "Landing page for party flavor store",
    tech: ["Next.js", "React.js", "Tailwind CSS"],
    liveUrl: "https://robin-cotillon.vercel.app",
    githubUrl: null,
    image: "/robin.png",
  },
];

const streamingApps = [
  {
    title: "FreeNime",
    description: "Web app to watch free anime with a modern interface",
    tech: ["Next.js", "React.js", "Tailwind CSS", "Consumet API"],
    liveUrl: "https://free-nime.vercel.app/",
    githubUrl: "https://github.com/silentm4gician/freeNime",
    image: "/freenime.png",
  },
  {
    title: "GriddyMovies",
    description: "Web app to watch series and movies",
    tech: ["Next.js", "React.js", "Tailwind CSS", "TMDB API"],
    liveUrl: "https://www.griddy-movies.site/",
    githubUrl: "https://github.com/silentm4gician/griddy-movies",
    image: "/griddy.png",
  },
];

const webPlatforms = [
  {
    title: "Luxmagius",
    description: "Web platform to share photos and galleries",
    tech: ["Next.js", "React.js", "Tailwind CSS", "Firebase", "Google Cloud"],
    liveUrl: "https://luxmagius.site",
    githubUrl: null,
    image: "/luxmagius.png",
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-4 py-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Projects</h2>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Landing Pages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {landingPages.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Streaming Apps
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {streamingApps.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Web Platforms
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {webPlatforms.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
