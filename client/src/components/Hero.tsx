import { Button } from '@/components/ui/button';
import heroBackground from '@assets/generated_images/Subtle_fingerprint_spiral_background_536116ef.png';
import bannerImage from '@assets/Banner of City with AI connections_1760994602549.jpg';

interface HeroProps {
  onCTAClick?: () => void;
}

export default function Hero({ onCTAClick }: HeroProps) {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    if (onCTAClick) {
      onCTAClick();
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Full-width banner */}
      <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <img 
          src={bannerImage} 
          alt="AI-connected cityscape" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero content */}
      <div className="relative flex-1 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center py-16 md:py-20">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Where intuition meets intelligence.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              We help premium and purpose-driven brands grow through emotionally resonant, AI-powered marketing.
            </p>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-accent text-accent-foreground border border-accent-border hover:bg-background hover:text-foreground text-base px-8 py-6 rounded-full"
              data-testid="button-start-conversation"
            >
              Start the Conversation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
