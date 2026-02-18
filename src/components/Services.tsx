import { Search, Palette, Rocket, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery",
    description: "We audit your current site — what's working, what's not, and where you're losing visitors.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Design & Rebuild",
    description: "I redesign your site from the ground up with modern aesthetics, fast load times, and clear CTAs.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Launch",
    description: "Your new site goes live. Clean code, mobile-ready, and SEO-optimized from day one.",
  },
  {
    icon: HeartHandshake,
    number: "04",
    title: "Ongoing Care",
    description: "Optional monthly maintenance keeps your site secure, updated, and performing at its best.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="font-syne font-extrabold text-4xl md:text-5xl">
            Simple. Fast. Effective.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="card-glass rounded-2xl p-6 group hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="p-3 rounded-xl"
                  style={{ background: "hsl(var(--primary) / 0.15)" }}
                >
                  <step.icon size={22} className="text-primary" />
                </div>
                <span className="font-syne font-extrabold text-4xl text-muted/30 leading-none">{step.number}</span>
              </div>
              <h3 className="font-syne font-bold text-xl mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
