# 🧩 Component Documentation - TripNest AI

Complete reference for all components in the TripNest AI platform.

## 📁 Component Structure

```
src/components/
├── sections/          # Full-page sections
│   ├── hero-section.tsx
│   ├── destinations-section.tsx
│   ├── features-section.tsx
│   ├── ai-planner-section.tsx
│   ├── testimonials-section.tsx
│   ├── faq-section.tsx
│   └── newsletter-section.tsx
├── shared/            # Reusable layout components
│   ├── navbar.tsx
│   ├── footer.tsx
│   └── theme-toggle.tsx
└── ui/                # UI primitives (future)
```

---

## 🎯 Shared Components

### Navbar
**File:** `src/components/shared/navbar.tsx`

**Purpose:** Sticky navigation bar with responsive menu and theme toggle.

**Features:**
- Sticky positioning with blur effect on scroll
- Mobile hamburger menu with smooth animation
- Theme toggle integration
- Smooth scroll to page sections
- Responsive design

**Props:** None (self-contained)

**Usage:**
```tsx
import { Navbar } from "@/components/shared/navbar";

<Navbar />
```

**Key States:**
- `isScrolled` - Triggers blur effect when scrolling
- `isMobileMenuOpen` - Controls mobile menu visibility

---

### Footer
**File:** `src/components/shared/footer.tsx`

**Purpose:** Site footer with links, social media, and contact info.

**Features:**
- Multi-column link layout
- Social media icons
- Newsletter signup CTA
- Responsive grid layout
- Dark mode support

**Props:** None (self-contained)

**Usage:**
```tsx
import { Footer } from "@/components/shared/footer";

<Footer />
```

**Data Structure:**
```tsx
const footerLinks = {
  company: [{ name: string, href: string }],
  support: [{ name: string, href: string }],
  legal: [{ name: string, href: string }],
};
```

---

### ThemeToggle
**File:** `src/components/shared/theme-toggle.tsx`

**Purpose:** Toggle between light and dark mode.

**Features:**
- Smooth theme transition
- System preference detection
- Persistent theme storage
- Icon animation

**Props:** None (uses next-themes context)

**Usage:**
```tsx
import { ThemeToggle } from "@/components/shared/theme-toggle";

<ThemeToggle />
```

---

## 📄 Section Components

### HeroSection
**File:** `src/components/sections/hero-section.tsx`

**Purpose:** Landing hero with search functionality.

**Features:**
- Full-screen hero layout
- Animated background patterns
- Travel search form (destination, dates, guests)
- Floating gradient elements
- CTA buttons
- Scroll indicator

**Props:** None (self-contained)

**Usage:**
```tsx
import { HeroSection } from "@/components/sections/hero-section";

<HeroSection />
```

**Form State:**
```tsx
{
  destination: string,
  checkIn: string,
  checkOut: string,
  guests: string,
}
```

**Animations:**
- Fade in on mount
- Floating background elements
- Scroll indicator bounce

---

### DestinationsSection
**File:** `src/components/sections/destinations-section.tsx`

**Purpose:** Showcase popular travel destinations.

**Features:**
- Grid layout (1-2-3 columns responsive)
- Destination cards with images
- Ratings and reviews
- Pricing display
- Hover effects
- "Book Now" CTAs

**Props:** None (uses internal data)

**Usage:**
```tsx
import { DestinationsSection } from "@/components/sections/destinations-section";

<DestinationsSection />
```

**Data Structure:**
```tsx
{
  id: number,
  name: string,
  image: string,
  rating: number,
  reviews: number,
  price: number,
  tag: string,
}
```

**Animations:**
- Staggered card entrance
- Image scale on hover
- Card lift on hover

---

### FeaturesSection
**File:** `src/components/sections/features-section.tsx`

**Purpose:** Highlight platform features and benefits.

**Features:**
- 8 feature cards
- Gradient icon backgrounds
- Hover animations
- Responsive grid (1-2-4 columns)
- Dot pattern background

**Props:** None (uses internal data)

**Usage:**
```tsx
import { FeaturesSection } from "@/components/sections/features-section";

<FeaturesSection />
```

**Data Structure:**
```tsx
{
  icon: LucideIcon,
  title: string,
  description: string,
  gradient: string, // Tailwind gradient classes
}
```

**Features List:**
1. AI Trip Planner
2. Secure Booking
3. Smart Recommendations
4. Budget Friendly
5. 24/7 Support
6. Global Coverage
7. Expert Guidance
8. Best Price Guarantee

---

### AIPlannerSection
**File:** `src/components/sections/ai-planner-section.tsx`

**Purpose:** AI-powered trip planning interface.

**Features:**
- Large textarea for trip description
- Example prompts
- Generate button with loading state
- Animated gradient background
- Feature highlights

**Props:** None (self-contained)

**Usage:**
```tsx
import { AIPlannerSection } from "@/components/sections/ai-planner-section";

<AIPlannerSection />
```

**State:**
```tsx
{
  prompt: string,
  isGenerating: boolean,
}
```

**Animations:**
- Rotating gradient backgrounds
- Loading spinner
- Button hover effects

---

### TestimonialsSection
**File:** `src/components/sections/testimonials-section.tsx`

**Purpose:** Display user testimonials and social proof.

**Features:**
- 6 testimonial cards
- User avatars and ratings
- Grid layout (1-2-3 columns)
- Stats section
- Hover effects

**Props:** None (uses internal data)

**Usage:**
```tsx
import { TestimonialsSection } from "@/components/sections/testimonials-section";

<TestimonialsSection />
```

**Data Structure:**
```tsx
{
  id: number,
  name: string,
  role: string,
  avatar: string,
  rating: number,
  text: string,
}
```

**Stats Displayed:**
- 50K+ Happy Travelers
- 4.9/5 Average Rating
- 150+ Countries
- 24/7 Support

---

### FAQSection
**File:** `src/components/sections/faq-section.tsx`

**Purpose:** Frequently asked questions with accordion UI.

**Features:**
- 8 common questions
- Accordion expand/collapse
- Smooth animations
- Contact CTA
- Single item open at a time

**Props:** None (uses internal data)

**Usage:**
```tsx
import { FAQSection } from "@/components/sections/faq-section";

<FAQSection />
```

**State:**
```tsx
{
  openIndex: number | null,
}
```

**Questions Covered:**
1. How does the AI trip planner work?
2. Is my payment information secure?
3. Can I modify my trip after booking?
4. What if I need to cancel my trip?
5. Do you offer travel insurance?
6. How do I contact customer support?
7. Can I book for a group or family?
8. What makes TripNest AI different?

---

### NewsletterSection
**File:** `src/components/sections/newsletter-section.tsx`

**Purpose:** Email newsletter subscription.

**Features:**
- Email input form
- Gradient background
- Animated floating elements
- Benefits display
- Loading state
- Privacy notice

**Props:** None (self-contained)

**Usage:**
```tsx
import { NewsletterSection } from "@/components/sections/newsletter-section";

<NewsletterSection />
```

**State:**
```tsx
{
  email: string,
  isSubmitting: boolean,
}
```

**Benefits:**
- Exclusive Deals
- Weekly Updates
- Travel Tips

---

## 🎨 Styling Conventions

### Common Patterns

#### Section Wrapper
```tsx
<section id="section-name" className="section-padding">
  <div className="container-custom">
    {/* Content */}
  </div>
</section>
```

#### Section Header
```tsx
<div className="text-center mb-16">
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
    <Icon className="w-4 h-4 text-sky-500" />
    <span className="text-sm font-medium">Badge Text</span>
  </div>
  <h2 className="mb-4">
    Title <span className="gradient-text">Highlighted</span>
  </h2>
  <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
    Description text
  </p>
</div>
```

#### Card Component
```tsx
<div className="card-hover p-6">
  {/* Card content */}
</div>
```

#### Button Styles
```tsx
<button className="btn-primary">Primary</button>
<button className="btn-secondary">Secondary</button>
<button className="btn-accent">Accent</button>
```

---

## 🎭 Animation Patterns

### Fade In on Scroll
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  {/* Content */}
</motion.div>
```

### Stagger Children
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {items.map(item => (
    <motion.div key={item.id} variants={itemVariants}>
      {/* Item */}
    </motion.div>
  ))}
</motion.div>
```

### Hover Scale
```tsx
<motion.div
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.3 }}
>
  {/* Content */}
</motion.div>
```

---

## 🔧 Customization Guide

### Changing Section Order

Edit `src/app/page.tsx`:

```tsx
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        {/* Reorder these sections as needed */}
        <DestinationsSection />
        <FeaturesSection />
        <AIPlannerSection />
        <TestimonialsSection />
        <FAQSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
```

### Modifying Section Data

Each section component contains its data at the top of the file:

```tsx
// Example: destinations-section.tsx
const destinations = [
  {
    id: 1,
    name: "Bali, Indonesia",
    // ... modify or add more destinations
  },
];
```

### Changing Colors

Edit `src/app/globals.css`:

```css
:root {
  --color-primary: 14 165 233;    /* Change primary color */
  --color-secondary: 6 182 212;   /* Change secondary color */
  --color-accent: 249 115 22;     /* Change accent color */
}
```

### Adding New Animations

Use Framer Motion variants:

```tsx
const customVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    rotate: -10 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    }
  },
};
```

---

## 📱 Responsive Behavior

All components follow mobile-first responsive design:

- **Mobile (< 768px)**: Single column, stacked layout
- **Tablet (768px - 1024px)**: 2 columns where applicable
- **Desktop (> 1024px)**: Full multi-column layouts

### Testing Responsive Design

```bash
# Use browser dev tools
# Or test at these breakpoints:
# - 375px (Mobile)
# - 768px (Tablet)
# - 1024px (Desktop)
# - 1440px (Large Desktop)
```

---

## 🎯 Accessibility

All components include:
- ✅ Semantic HTML
- ✅ ARIA labels where needed
- ✅ Keyboard navigation support
- ✅ Focus visible states
- ✅ Color contrast compliance
- ✅ Alt text for images

---

## 🚀 Performance Tips

1. **Images**: Use Next.js Image component with proper sizing
2. **Animations**: Use `viewport={{ once: true }}` to prevent re-animation
3. **Client Components**: Only use "use client" when necessary
4. **Code Splitting**: Components are automatically code-split by Next.js

---

## 📚 Related Documentation

- [README.md](./README.md) - Project overview
- [DEVELOPMENT.md](./DEVELOPMENT.md) - Development guide
- [Next.js Docs](https://nextjs.org/docs) - Framework documentation

---

**Need help?** Check the component source code for detailed implementation examples!
