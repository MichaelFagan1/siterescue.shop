import { ArrowRight, Zap } from "lucide-react";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />
      {/* Teal glow orb */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(var(--primary)), transparent)" }}
      />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in">
          <Zap size={14} />
          Website Makeovers — Starting at $200
        </div>

        <h1 className="font-syne font-extrabold text-5xl md:text-7xl lg:text-8xl leading-none mb-6 animate-fade-up">
          Your Website,
          <br />
          <span className="text-gradient">Reinvented.</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.15s" }}>
          I transform outdated, underperforming websites into sleek, conversion-ready experiences — fast, affordable, and built to impress.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <button
            onClick={() => scrollTo("pricing")}
            className="group flex items-center gap-2 px-8 py-4 rounded-xl font-syne font-bold text-lg transition-all duration-300 hover:scale-105"
            style={{
              background: "hsl(var(--primary))",
              color: "hsl(var(--primary-foreground))",
              boxShadow: "var(--shadow-btn)",
            }}
          >
            Get a Makeover
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo("portfolio")}
            className="px-8 py-4 rounded-xl font-syne font-semibold text-lg border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground transition-all duration-300"
          >
            See My Work
          </button>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-up" style={{ animationDelay: "0.45s" }}>
          {[
            { value: "$200", label: "Flat Rate" },
            { value: "7 Days", label: "Avg. Turnaround" },
            { value: "100%", label: "Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-syne font-extrabold text-2xl text-primary">{stat.value}</div>
              <div className="text-muted-foreground text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground text-xs animate-bounce">
        <span>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
