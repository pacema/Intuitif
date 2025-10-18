import logoVideo from '@assets/Intuitif Rotating Logo_1760762202652.mp4';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-28 w-auto opacity-60"
            style={{ objectFit: 'contain' }}
          >
            <source src={logoVideo} type="video/mp4" />
          </video>
          <p className="text-sm text-muted-foreground">
            © 2025 Intuitif Marketing & AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
