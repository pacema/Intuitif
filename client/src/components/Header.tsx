import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import logo from '@assets/Intuitif_1760748313055.png';

interface HeaderProps {
  onNavigate?: (section: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    if (onNavigate) {
      onNavigate(sectionId);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center"
          data-testid="button-logo"
        >
          <img src={logo} alt="Intuitif Marketing + AI" className="h-16 md:h-20 w-auto" />
        </button>
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-about"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-services"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('impact')}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-impact"
          >
            Impact
          </button>
          <Button
            onClick={() => scrollToSection('contact')}
            className="bg-accent text-accent-foreground border border-accent-border hover:bg-background hover:text-foreground"
            data-testid="button-contact"
          >
            Contact
          </Button>
        </nav>
      </div>
    </header>
  );
}
