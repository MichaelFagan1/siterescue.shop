import { Linkedin, Mail, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-28 px-6" style={{ background: "hsl(var(--navy-deep))" }}>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">Get In Touch</p>
        <h2 className="font-syne font-extrabold text-4xl md:text-6xl mb-6">
          Ready for a
          <br />
          <span className="text-gradient">Makeover?</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto leading-relaxed">
          Reach out on LinkedIn and let's talk about transforming your website. I typically respond within 24 hours.
        </p>

        {/* Main CTA card */}
        <div
          className="rounded-3xl p-10 mb-8 border border-primary/20"
          style={{
            background: "linear-gradient(145deg, hsl(var(--card)), hsl(174 25% 10%))",
            boxShadow: "var(--glow-teal), var(--shadow-card)",
          }}
        >
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ background: "hsl(var(--primary)/0.15)", border: "1px solid hsl(var(--primary)/0.3)" }}
          >
            <Linkedin size={36} className="text-primary" />
          </div>
          <h3 className="font-syne font-bold text-2xl mb-2">Michael Fagan</h3>
          <p className="text-muted-foreground mb-8">Web Designer & Developer</p>

          <a
            href="https://www.linkedin.com/in/michael-fagan-michael-fagan/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-4 rounded-xl font-syne font-bold text-lg transition-all duration-300 hover:scale-105"
            style={{
              background: "hsl(var(--primary))",
              color: "hsl(var(--primary-foreground))",
              boxShadow: "var(--shadow-btn)",
            }}
          >
            Connect on LinkedIn
            <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <p className="text-muted-foreground text-sm">
          Prefer email? Send a message through LinkedIn and I'll get back to you promptly.
        </p>
      </div>
    </section>
  );
};

export default Contact;
