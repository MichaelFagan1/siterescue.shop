import restaurantImg from "@/assets/portfolio-restaurant.jpg";
import fitnessImg from "@/assets/portfolio-fitness.jpg";
import realEstateImg from "@/assets/portfolio-realestate.jpg";
import techImg from "@/assets/portfolio-tech.jpg";

const projects = [
  {
    image: restaurantImg,
    title: "Modern Restaurant",
    category: "Food & Hospitality",
    tags: ["Dark Theme", "Menu Layout", "Mobile-First"],
  },
  {
    image: fitnessImg,
    title: "Fitness Studio",
    category: "Health & Wellness",
    tags: ["Bold Typography", "Energy", "Conversion CTA"],
  },
  {
    image: realEstateImg,
    title: "Luxury Real Estate",
    category: "Property & Homes",
    tags: ["Minimal", "Photo-Forward", "Premium Feel"],
  },
  {
    image: techImg,
    title: "SaaS Dashboard",
    category: "Tech & Software",
    tags: ["Data Viz", "Dark UI", "Modern Layout"],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-28 px-6" style={{ background: "hsl(var(--navy-deep))" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">Portfolio</p>
          <h2 className="font-syne font-extrabold text-4xl md:text-5xl">
            Sites That Convert
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A look at some of the website makeovers and designs I've crafted across different industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-border hover:border-primary/40 transition-all duration-500 hover:-translate-y-2"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                <p className="text-primary text-xs font-medium uppercase tracking-widest mb-1">{project.category}</p>
                <h3 className="font-syne font-extrabold text-2xl mb-3">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {/* Always-visible label */}
              <div className="absolute top-4 left-4">
                <span className="text-xs px-3 py-1 rounded-full font-medium"
                  style={{ background: "hsl(var(--background)/0.85)", color: "hsl(var(--foreground))", backdropFilter: "blur(8px)" }}>
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
