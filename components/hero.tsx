import { Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/20 to-background z-10" />
        <img
          src="/background.jpg"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="max-w-4xl w-full relative z-20">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
            Leandro González Matkovich
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Web Developer
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Freelance developer specializing in creating modern web
            experiences with Next.js, React.js, and Tailwind CSS.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild variant="default" size="lg">
              <a
                href="https://github.com/silentM4gician"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=leandroGonzalezMat@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
