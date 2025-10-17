import logo from '@assets/Intuitif Logo_1760745167631.png';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          <img src={logo} alt="Intuitif Marketing + AI" className="h-8 opacity-60" />
          <p className="text-sm text-muted-foreground">
            © 2025 Intuitif Marketing & AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
