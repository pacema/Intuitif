# Design Guidelines: Intuitif Marketing Website

## Design Approach
**Reference-Based Approach**: Apple and Matter of Form aesthetic - modern, elegant, editorial, and balanced with generous white space and sophisticated minimalism.

## Core Design Elements

### A. Color Palette
- **Deep Charcoal** `#020202` - Headlines
- **Graphite Gray** `#4B4B4B` - Body text
- **Light Gray** `#C0D1D9` - Primary accent for links, hover states, buttons
- **Stark White** `#FFFFFF` - Main background
- **Dark Blue** `#296887` - Contrast background sections
- **Cloud White** `#F4F4F4` - Alternative background
- **Rusty Orange** `#CC4E00` - Occasional highlight/accent

### B. Typography
- **Headings**: Neue Haas Grotesk or Helvetica Now Display (bold, uppercase or sentence case)
- **Body Text**: DM Sans or Inter (regular to medium weight)
- **Quote/Accent Text**: Playfair Display (italic, for luxury tone)
- Implement fluid typography that scales responsively across devices

### C. Layout System
- Full-width sections with generous white space
- Subtle horizontal dividers between sections
- Tailwind spacing: Use py-20 to py-32 for section padding (desktop), py-12 to py-16 (mobile)
- Max-width container: max-w-7xl for content
- Optimize for <2MB total site weight

### D. Component Library

**Header**
- Sticky header with subtle shadow on scroll
- Left: "Intuitif Marketing + AI" logo (SVG)
- Right: Navigation links - "About," "Services," "Impact," "Contact"
- Clean, minimal design with smooth transitions

**Hero Section**
- Clean white background with faint linear gradient or abstract spiral/fingerprint accent in pale gray
- Tagline: "Where intuition meets intelligence."
- Subline: "We help premium and purpose-driven brands grow through emotionally resonant, AI-powered marketing."
- CTA Button: "Start the Conversation" (smooth scroll to contact)
- Centered layout with fade-in animation

**About Section**
- Headline: "Intuition + Intelligence = Impact."
- 2-3 sentence overview in DM Sans/Inter
- Optional italic quote in Playfair Display for emphasis
- Clean white background

**Services Section**
- Headline: "What We Do"
- Three horizontally aligned cards (grid-cols-1 md:grid-cols-3):
  1. **Strategy & Leadership** - Fractional CMO and brand strategy
  2. **Brand Storytelling** - Emotionally intelligent content and positioning
  3. **AI-Powered Growth** - ML tools for optimization
- Subtle hover lift animation on cards (transform translateY)
- Cards with light background, rounded corners

**Impact Section**
- Headline: "Our Work"
- 2-3 case study tiles with placeholder imagery
- Hover overlay showing metrics or client quotes
- CTA: "View More Impact" button
- Grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3

**Contact Section**
- Headline: "Let's Create Something Intuitive."
- Simple contact form: Name, Email, Message fields
- Social icons: LinkedIn + Email
- Clean, centered layout

**Footer**
- Small gray text: "© 2025 Intuitif Marketing & AI"
- Minimal, elegant styling

**Buttons**
- Rounded style with Light Gray (#C0D1D9) background, white text
- Hover state: color invert (white background, Light Gray text)
- Smooth transition on all states

### E. Animations
- Smooth scroll-based reveals with fade-up effect for all sections
- Subtle hover lift on service cards (4-8px translateY)
- Smooth scroll behavior for navigation links
- All animations should be subtle and elegant - avoid heavy or distracting effects

## Additional Specifications

**Favicon**
- White fingerprint image on #175C7D colored circle background

**Responsive Design**
- Mobile-first approach
- Fluid typography scaling
- Single column layout on mobile, multi-column on tablet/desktop
- All sections stack gracefully on smaller screens

**Performance**
- Keep total site size under 2MB
- Optimize all images and assets
- Use efficient animations (CSS transforms)

**Accessibility**
- Maintain WCAG contrast ratios with specified color palette
- Semantic HTML structure
- Keyboard navigation support
- Smooth scroll without causing motion sickness

## Images
- **Hero Section**: Faint abstract spiral or fingerprint accent graphic in pale gray (subtle background element, not dominant image)
- **Impact Section**: Placeholder images for 2-3 case study tiles showing project work or brand imagery