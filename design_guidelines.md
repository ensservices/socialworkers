# RWA President Social Work Showcase - Design Guidelines

## Design Approach
**Reference-Based Approach** drawing from modern nonprofit and community leadership websites. Inspiration from organizations like United Way, community foundations, and civic leadership platforms that balance professionalism with warmth and accessibility.

**Core Principles:**
- Trust and credibility through clean, professional layouts
- Community warmth through thoughtful spacing and approachable design
- Impact-focused visual storytelling
- Clear information hierarchy emphasizing achievements

## Typography System
**Font Families:**
- Primary: Inter or Manrope (headers, navigation)
- Secondary: System fonts for body text (optimized readability)

**Hierarchy:**
- Hero headline: text-5xl to text-7xl, font-bold
- Section headers: text-3xl to text-4xl, font-semibold
- Subsection titles: text-xl to text-2xl, font-medium
- Body text: text-base to text-lg, normal weight
- Captions/metadata: text-sm, slightly reduced opacity

## Layout System
**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Component padding: p-6 to p-8
- Section spacing: py-16 to py-24 (desktop), py-12 (mobile)
- Grid gaps: gap-6 to gap-8
- Container: max-w-7xl with px-6

**Responsive Breakpoints:**
- Mobile-first approach
- Single column on mobile
- 2-column grids at md breakpoint
- 3-4 columns at lg+ where appropriate

## Page Structure & Sections

### Hero Section (80vh)
- **Large hero image**: President engaging with community OR impactful community work scene
- Overlay with mission statement/tagline
- Primary CTA button with blurred background
- Trust indicator: "Serving [Community Name] since [Year]" or similar

### Impact Dashboard (Multi-column)
- 3-4 column grid (lg:grid-cols-4)
- Numerical metrics with icons: Projects completed, Families helped, Events organized, Volunteers engaged
- Large numbers with descriptive labels

### Social Work Initiatives Gallery
- Card-based layout with images
- 2-column on tablet, 3-column on desktop
- Each card: Project image, title, brief description, "Learn More" link
- Hover effect: subtle elevation

### President's Message Section
- 2-column layout: Professional photo (left) + message content (right)
- Quote styling for key message
- Signature element at bottom

### Events Timeline
- Chronological layout mixing past achievements and upcoming events
- Alternating left-right pattern (desktop) for visual interest
- Each event: Date badge, title, description, photo (optional)
- Filter tabs: "All", "Completed", "Upcoming"

### Community Testimonials
- 2-column grid with testimonial cards
- Resident photos, names, and quotes
- Emphasize authenticity and real community voices

### Footer (Comprehensive)
- Multi-column layout: About RWA, Quick Links, Contact Info, Social Media
- Newsletter signup for RWA updates
- Office hours and meeting schedule
- Address with embedded map consideration

## Component Library

**Navigation:**
- Sticky header with RWA logo
- Clean horizontal menu (desktop)
- Hamburger menu (mobile)
- CTA: "Contact" or "Get Involved" button

**Buttons:**
- Primary: Solid with blurred backgrounds when on images
- Secondary: Outline style
- Sizes: Regular (px-6 py-3) and Large (px-8 py-4)

**Cards:**
- Rounded corners (rounded-lg)
- Subtle shadows (shadow-md)
- White/light backgrounds
- Consistent padding (p-6)

**Icons:**
- Font Awesome (community-related icons)
- Strategic placement: metrics, features, contact methods
- Consistent sizing (h-8 w-8 for feature icons)

**Form Elements:**
- Contact form in dedicated section
- Full-width fields with clear labels
- Textarea for messages
- Submit button with loading states

## Images Strategy

**Required Images:**
1. **Hero**: Large, high-quality image of president with community members or at event (full-width, 80vh)
2. **President Portrait**: Professional headshot for About/Message section
3. **Project Gallery**: 6-9 images of social work initiatives, community events
4. **Testimonial Photos**: Small circular photos of 4-6 residents
5. **Event Photos**: 3-5 images for timeline/past events section

**Image Treatment:**
- Consistent aspect ratios within sections
- Subtle overlays on hero for text readability
- Lazy loading for performance

## Accessibility & Performance
- WCAG compliant contrast ratios
- Semantic HTML throughout
- Keyboard navigation support
- Alt text for all images
- Fast loading with optimized assets

## Animations
**Minimal approach:**
- Smooth scroll behavior
- Fade-in on scroll for section reveals (subtle)
- Hover states on cards (transform: translateY)
- No distracting parallax or complex animations

## Key Differentiators
- **Trust signals**: Prominently display RWA affiliation, tenure, achievements
- **Community-centric**: Design emphasizes residents and impact over self-promotion
- **Actionable**: Clear CTAs for getting involved, contacting, attending events
- **Comprehensive**: Rich content showcasing breadth of social work without feeling cluttered