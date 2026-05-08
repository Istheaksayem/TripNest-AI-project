# 🌍 TripNest AI - AI-Powered Travel Booking Platform

A modern, premium travel booking platform built with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion. Features an AI-powered trip planner, beautiful animations, and full dark mode support.

![TripNest AI](https://img.shields.io/badge/Next.js-16.2.6-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🎨 Design & UI
- **Premium Modern Design** - Clean, professional interface inspired by Airbnb and Booking.com
- **Fully Responsive** - Perfect experience on mobile, tablet, and desktop
- **Dark/Light Mode** - Seamless theme switching with system preference detection
- **Smooth Animations** - Powered by Framer Motion for fluid, engaging interactions
- **Glassmorphism Effects** - Modern glass-card designs with backdrop blur

### 🚀 Core Features
- **AI Trip Planner** - Intelligent itinerary generation based on user preferences
- **Smart Search** - Advanced travel search with destination, dates, and guest selection
- **Popular Destinations** - Curated collection of trending travel spots
- **Feature Showcase** - Highlight platform capabilities with animated cards
- **Testimonials** - Social proof with user reviews and ratings
- **FAQ Section** - Accordion-style frequently asked questions
- **Newsletter Subscription** - Email capture with animated form

### 🎯 Technical Highlights
- **Next.js 16 App Router** - Latest Next.js with server components
- **TypeScript** - Full type safety throughout the application
- **Tailwind CSS v4** - Modern utility-first CSS framework
- **Framer Motion** - Production-ready animations
- **next-themes** - Persistent theme management
- **Lucide Icons** - Beautiful, consistent icon system

## 🎨 Color System

The design uses a carefully crafted color palette:

| Color | Hex | Usage |
|-------|-----|-------|
| **Sky Blue** | `#0EA5E9` | Primary brand color, CTAs |
| **Cyan** | `#06B6D4` | Secondary accents, gradients |
| **Orange** | `#F97316` | Accent color, highlights |
| **White** | `#FFFFFF` | Light mode background |
| **Light Gray** | `#F5F7FA` | Light mode surfaces |
| **Dark Gray** | `#111827` | Dark mode surfaces |
| **Black** | `#000000` | Dark mode background |

## 📁 Project Structure

```
tripnest-ai/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with theme provider
│   │   ├── page.tsx            # Homepage with all sections
│   │   ├── globals.css         # Global styles & utilities
│   │   └── favicon.ico
│   ├── components/
│   │   ├── sections/           # Page sections
│   │   │   ├── hero-section.tsx
│   │   │   ├── destinations-section.tsx
│   │   │   ├── features-section.tsx
│   │   │   ├── ai-planner-section.tsx
│   │   │   ├── testimonials-section.tsx
│   │   │   ├── faq-section.tsx
│   │   │   └── newsletter-section.tsx
│   │   ├── shared/             # Reusable components
│   │   │   ├── navbar.tsx
│   │   │   ├── footer.tsx
│   │   │   └── theme-toggle.tsx
│   │   └── ui/                 # UI primitives (future)
│   ├── lib/
│   │   └── utils.ts            # Utility functions
│   └── providers/
│       └── theme-provider.tsx  # Theme context provider
├── public/                     # Static assets
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20.9 or higher
- npm, pnpm, yarn, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tripnest-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Global CSS Utilities

The project includes a comprehensive set of utility classes in `globals.css`:

### Layout & Spacing
- `.container-custom` - Responsive container with padding
- `.section-padding` - Standard section spacing
- `.section-padding-sm` - Small section spacing
- `.section-padding-lg` - Large section spacing

### Gradients
- `.gradient-text` - Multi-color gradient text
- `.gradient-text-primary` - Primary gradient text
- `.gradient-bg` - Gradient background
- `.gradient-bg-light` - Light gradient background

### Cards & Effects
- `.glass-card` - Glassmorphism card effect
- `.glass-card-strong` - Stronger glass effect
- `.card` - Standard card style
- `.card-hover` - Card with hover animation

### Shadows
- `.soft-shadow` - Subtle shadow
- `.soft-shadow-lg` - Large soft shadow
- `.glow-shadow` - Glowing shadow effect

### Hover Effects
- `.hover-lift` - Lift on hover
- `.hover-scale` - Scale on hover
- `.hover-glow` - Glow on hover

### Buttons
- `.btn-primary` - Primary gradient button
- `.btn-secondary` - Secondary outline button
- `.btn-accent` - Accent gradient button

### Animations
- `.animate-float` - Floating animation
- `.animate-pulse-slow` - Slow pulse animation
- `.animate-gradient` - Animated gradient

## 🎭 Component Overview

### Navbar
- Sticky navigation with blur effect
- Mobile-responsive menu
- Theme toggle integration
- Smooth scroll to sections

### Hero Section
- Full-screen hero with animated background
- Advanced search form with date pickers
- Floating gradient elements
- CTA buttons with hover effects

### Destinations Section
- Grid layout of popular destinations
- Image cards with hover effects
- Rating and pricing display
- Responsive 1-2-3 column layout

### Features Section
- 8 feature cards with icons
- Gradient icon backgrounds
- Hover animations
- Dot pattern background

### AI Planner Section
- Large textarea for trip description
- Example prompts for quick start
- Loading state animation
- Gradient background with floating elements

### Testimonials Section
- 6 user testimonials
- Avatar images with ratings
- Grid layout with hover effects
- Stats section with key metrics

### FAQ Section
- Accordion-style questions
- Smooth expand/collapse animations
- Contact CTA at bottom
- 8 common questions covered

### Newsletter Section
- Email subscription form
- Gradient background
- Animated floating elements
- Benefits display

### Footer
- Multi-column link layout
- Social media links
- Responsive design
- Copyright and contact info

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `src/app/globals.css`:

```css
:root {
  --color-primary: 14 165 233;    /* Sky Blue */
  --color-secondary: 6 182 212;   /* Cyan */
  --color-accent: 249 115 22;     /* Orange */
}
```

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Import and add to `src/app/page.tsx`
3. Use existing utility classes for consistency

### Modifying Animations

Adjust Framer Motion variants in component files:

```tsx
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Technologies Used

- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[clsx](https://github.com/lukeed/clsx)** - Conditional classnames
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge Tailwind classes

## 🎯 Performance

- **Optimized Images** - Next.js Image component with lazy loading
- **Code Splitting** - Automatic route-based splitting
- **Server Components** - Reduced client-side JavaScript
- **CSS Optimization** - Tailwind CSS purging unused styles
- **Animation Performance** - GPU-accelerated transforms

## 🌐 Browser Support

- Chrome 111+
- Edge 111+
- Firefox 111+
- Safari 16.4+

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or support, reach out to hello@tripnest.ai

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
