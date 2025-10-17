export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
            Intuition + Intelligence = Impact.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto">
            We believe marketing is both art and science — the fusion of human intuition and machine intelligence. 
            At Intuitif, we design strategies that connect data with emotion to move audiences and drive growth.
          </p>
          <blockquote className="font-serif italic text-xl md:text-2xl text-center text-foreground/90 pt-8">
            "The best marketing feels effortless because it's deeply understood."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
