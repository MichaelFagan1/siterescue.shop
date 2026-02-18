import { Linkedin, ArrowRight, Sparkles } from "lucide-react";

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5"
      style={{ background: "linear-gradient(to bottom, hsl(220,30%,6%), transparent)" }}>
      <div className="font-syne font-extrabold text-xl tracking-tight">
        <span className="text-gradient">Fagan</span>
        <span className="text-foreground">Designs</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-inter text-muted-foreground">
        <button onClick={() => scrollTo("services")} className="hover:text-primary transition-colors">Services</button>
        <button onClick={() => scrollTo("portfolio")} className="hover:text-primary transition-colors">Portfolio</button>
        <button onClick={() => scrollTo("pricing")} className="hover:text-primary transition-colors">Pricing</button>
        <button onClick={() => scrollTo("contact")} className="hover:text-primary transition-colors">Contact</button>
      </div>
      <a
        href="https://www.linkedin.com/in/michael-fagan-michael-fagan/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
        style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))", boxShadow: "var(--shadow-btn)" }}
      >
        <Linkedin size={15} />
        <span className="hidden sm:inline">LinkedIn</span>
      </a>
    </nav>
  );
};

export default Navbar;
