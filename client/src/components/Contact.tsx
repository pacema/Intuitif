import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-4">
          Let's Create Something Intuitive.
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Ready to blend intuition with intelligence? Reach out and let's start the conversation.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6 mb-12">
          <div>
            <Input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              data-testid="input-name"
              className="text-base"
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              data-testid="input-email"
              className="text-base"
            />
          </div>
          <div>
            <Textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={6}
              data-testid="input-message"
              className="text-base resize-none"
            />
          </div>
          <Button
            type="submit"
            size="lg"
            className="w-full bg-accent text-accent-foreground border border-accent-border hover:bg-background hover:text-foreground"
            data-testid="button-submit-contact"
          >
            Send Message
          </Button>
        </form>

        <div className="flex items-center justify-center gap-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-linkedin"
          >
            <Linkedin className="w-5 h-5" />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a
            href="mailto:hello@intuitif.marketing"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-email"
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm">Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}
