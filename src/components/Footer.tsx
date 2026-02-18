import { Linkedin } from "lucide-react";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-10 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-syne font-extrabold text-lg tracking-tight">
          <span className="text-gradient">Fagan</span>
          <span className="text-foreground">Designs</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <button onClick={() => scrollTo("services")} className="hover:text-primary transition-colors">Services</button>
          <button onClick={() => scrollTo("portfolio")} className="hover:text-primary transition-colors">Portfolio</button>
          <button onClick={() => scrollTo("pricing")} className="hover:text-primary transition-colors">Pricing</button>
          <button onClick={() => scrollTo("contact")} className="hover:text-primary transition-colors">Contact</button>
        </div>

        <a
          href="https://www.linkedin.com/in/michael-fagan-michael-fagan/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
        >
          <Linkedin size={16} />
          LinkedIn
        </a>
      </div>
      <div className="max-w-6xl mx-auto mt-6 pt-6 border-t border-border/50 text-center text-muted-foreground text-xs">
        © {new Date().getFullYear()} Fagan Designs. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
