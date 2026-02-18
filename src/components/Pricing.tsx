import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Website Makeover",
    price: "$200",
    period: "one-time",
    description: "A complete redesign of your existing website. No recurring fees — just one flat rate.",
    cta: "Get Started",
    highlight: false,
    features: [
      "Full visual redesign",
      "Mobile-responsive layout",
      "Basic SEO optimization",
      "Modern, fast codebase",
      "Up to 5 pages",
      "1 round of revisions",
      "7-day delivery",
    ],
  },
  {
    name: "Makeover + Maintenance",
    price: "$200",
    period: "upfront + monthly",
    description: "Get the full makeover plus ongoing care to keep your site secure, fresh, and high-performing.",
    cta: "Best Value — Start Here",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Everything in Makeover",
      "Monthly performance checks",
      "Security & plugin updates",
      "Content updates (2/mo)",
      "Analytics reporting",
      "Priority support",
      "Hosting assistance",
    ],
  },
];

const Pricing = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="font-syne font-extrabold text-4xl md:text-5xl">
            Transparent. Affordable.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            No hidden fees. No confusing packages. Just great work at a fair price.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.highlight
                  ? "border-2 border-primary hover:-translate-y-2"
                  : "card-glass hover:-translate-y-1"
              }`}
              style={
                plan.highlight
                  ? {
                      background: "linear-gradient(145deg, hsl(var(--card)), hsl(174 30% 12%))",
                      boxShadow: "var(--glow-teal), var(--shadow-card)",
                    }
                  : {}
              }
            >
              {plan.badge && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
                  style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
                >
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-syne font-bold text-xl mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="font-syne font-extrabold text-5xl text-primary">{plan.price}</span>
                <span className="text-muted-foreground text-sm ml-2">/ {plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: "hsl(var(--primary)/0.15)" }}>
                      <Check size={12} className="text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => scrollTo("contact")}
                className={`group w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-syne font-bold text-base transition-all duration-300 hover:scale-105 ${
                  plan.highlight ? "" : "border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
                }`}
                style={
                  plan.highlight
                    ? {
                        background: "hsl(var(--primary))",
                        color: "hsl(var(--primary-foreground))",
                        boxShadow: "var(--shadow-btn)",
                      }
                    : {}
                }
              >
                {plan.cta}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
