import { Code2, GitBranch, Flame } from "lucide-react";

const skillCategories = [
  {
    category: "Languages",
    icon: Code2,
    skills: ["JavaScript", "HTML5", "CSS3", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    icon: Flame,
    skills: ["Next.js", "React.js", "Vite.js", , "Node.js", "Tailwind CSS"],
  },
  {
    category: "Tools & Services",
    icon: GitBranch,
    skills: [
      "Git",
      "GitHub",
      "Firebase",
      "Google Cloud",
      "Vercel",
      "AWS (currently learning)",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="px-4 py-20 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.category}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.category}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
