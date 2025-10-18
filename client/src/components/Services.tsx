import { Card } from '@/components/ui/card';
import { Lightbulb, BookOpen, Brain } from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    title: 'Strategy & Leadership',
    description: 'Fractional CMO and brand strategy guidance for purpose-driven and premium businesses.',
  },
  {
    icon: BookOpen,
    title: 'Brand Storytelling',
    description: 'Crafting emotionally intelligent content and positioning that builds desire and trust.',
  },
  {
    icon: Brain,
    title: 'AI-Powered Growth',
    description: 'Leveraging machine learning tools to optimize content, ads, and audience insight.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-16">
          What We Do
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-md transition-transform duration-300 hover:-translate-y-2"
              style={{ backgroundColor: '#296887' }}
              data-testid={`card-service-${index}`}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-md bg-white/20 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-white">{service.title}</h3>
                <p className="text-white/90 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
