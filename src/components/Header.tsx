import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img src="/mainlogo.svg" alt="Toto Finance" className="h-10 w-auto" />
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/product" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Product
            </a>
            <a href="/#about" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              About
            </a>
            <a href="/#services" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Services
            </a>
            <a href="/#technology" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Technology
            </a>
            <a href="/#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Contact
            </a>
          </nav>

          {/* CTA */}
          <Button variant="goldOutline" size="sm" asChild>
            <Link to="/product">Investment</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
