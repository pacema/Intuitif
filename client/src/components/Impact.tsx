import { useState } from 'react';
import caseStudy1 from '@assets/generated_images/Marketing_case_study_mockup_38f7e090.png';
import caseStudy2 from '@assets/generated_images/Brand_storytelling_case_study_e7d45601.png';
import caseStudy3 from '@assets/generated_images/AI_analytics_case_study_0f4d7023.png';

const caseStudies = [
  {
    image: caseStudy1,
    title: 'Premium Brand Launch',
    metric: '3x revenue growth in 6 months',
    quote: 'Intuitif transformed our brand story into a movement.',
  },
  {
    image: caseStudy2,
    title: 'Content Strategy Overhaul',
    metric: '250% increase in engagement',
    quote: 'They understood our audience better than we did.',
  },
  {
    image: caseStudy3,
    title: 'AI-Driven Campaign',
    metric: '40% reduction in CAC',
    quote: 'Data-driven insights with a human touch.',
  },
];

export default function Impact() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="impact" className="py-24 md:py-32" style={{ backgroundColor: '#296887' }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-16 text-white">
          Our Work
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-md cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              data-testid={`card-case-study-${index}`}
            >
              <img
                src={study.image}
                alt={study.title}
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className={`absolute inset-0 bg-primary/90 transition-opacity duration-300 flex flex-col items-center justify-center p-8 text-center ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <h3 className="text-2xl font-bold text-primary-foreground mb-3">
                  {study.title}
                </h3>
                <p className="text-lg text-primary-foreground/90 mb-4 font-semibold">
                  {study.metric}
                </p>
                <p className="text-sm text-primary-foreground/80 italic font-serif">
                  "{study.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={() => console.log('View more impact clicked')}
            className="text-white font-medium hover:underline transition-all"
            data-testid="button-view-more-impact"
          >
            View More Impact →
          </button>
        </div>
      </div>
    </section>
  );
}
