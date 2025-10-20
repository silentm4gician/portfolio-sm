export function About() {
  return (
    <section id="about" className="px-4 py-20 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I'm a passionate web developer with experience in Next.js, React.js, and Tailwind CSS. I work as a
            freelancer developing websites for clients and have experience collaborating in small teams on web projects.
          </p>
          <p>
            I specialize in creating modern interfaces, performance optimization, and API consumption. Currently
            expanding my knowledge in React Native for mobile app development.
          </p>
          <div className="pt-6">
            <h3 className="text-xl font-semibold text-foreground mb-3">Education</h3>
            <div className="space-y-2">
              <div>
                <p className="font-medium text-foreground">University Technician in Programming</p>
                <p className="text-sm">National Technological University | 2021 - 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
