import { Linkedin, Mail, FileText } from "lucide-react";

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
          Reach out and let’s talk about transforming your website. I typically respond within 24 hours.
        </p>

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

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://www.linkedin.com/in/michael-fagan-michael-fagan/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-w-[190px] h-12 px-6 rounded-xl font-syne font-bold border border-primary/40 transition-all duration-300 hover:scale-105"
              style={{ color: "hsl(var(--foreground))" }}
            >
              <Linkedin size={18} />
              Connect on LinkedIn
            </a>

            <a
              href="mailto:michael@siterescue.shop"
              className="inline-flex items-center justify-center gap-2 min-w-[190px] h-12 px-6 rounded-xl font-syne font-bold border border-primary/40 transition-all duration-300 hover:scale-105"
              style={{ color: "hsl(var(--foreground))" }}
            >
              <Mail size={18} />
              Connect Email
            </a>

            <a
              href="#intake-form"
              className="inline-flex items-center justify-center gap-2 min-w-[190px] h-12 px-6 rounded-xl font-syne font-bold border border-primary/40 transition-all duration-300 hover:scale-105"
              style={{ color: "hsl(var(--foreground))" }}
            >
              <FileText size={18} />
              Fill Out Form
            </a>
          </div>
        </div>

        <div
          id="intake-form"
          className="rounded-3xl p-8 border border-primary/20 text-left"
          style={{
            background: "linear-gradient(145deg, hsl(var(--card)), hsl(174 25% 10%))",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <h4 className="font-syne font-bold text-2xl mb-2">Project Intake Form</h4>
          <p className="text-muted-foreground mb-6">Share your details and current website. I’ll review and reply with next steps.</p>

          <form action="https://formsubmit.co/michael@siterescue.shop" method="POST" className="space-y-4">
            <input type="hidden" name="_subject" value="New SiteRescue Lead" />
            <input type="hidden" name="_captcha" value="false" />
            <div>
              <label className="block text-sm mb-2 text-muted-foreground">Name</label>
              <input
                name="name"
                required
                className="w-full rounded-lg bg-background/60 border border-border px-4 py-3 text-foreground"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-muted-foreground">Contact Info (email or phone)</label>
              <input
                name="contact"
                required
                className="w-full rounded-lg bg-background/60 border border-border px-4 py-3 text-foreground"
                placeholder="you@email.com or (555) 555-5555"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-muted-foreground">Website URL</label>
              <input
                type="url"
                name="website"
                required
                className="w-full rounded-lg bg-background/60 border border-border px-4 py-3 text-foreground"
                placeholder="https://yourwebsite.com"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-syne font-bold transition-all duration-300 hover:scale-105"
              style={{
                background: "hsl(var(--primary))",
                color: "hsl(var(--primary-foreground))",
                boxShadow: "var(--shadow-btn)",
              }}
            >
              Submit Form
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
