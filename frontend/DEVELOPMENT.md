# 🛠️ Development Guide - TripNest AI

## Quick Start Commands

```bash
# Development
npm run dev          # Start dev server (http://localhost:3000)

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 📋 Development Checklist

### Before Starting Development
- [ ] Node.js 20.9+ installed
- [ ] Dependencies installed (`npm install`)
- [ ] Dev server running (`npm run dev`)
- [ ] Browser open at `http://localhost:3000`

### Adding New Features
- [ ] Create component in appropriate directory
- [ ] Use TypeScript for type safety
- [ ] Follow existing naming conventions
- [ ] Use utility classes from `globals.css`
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Test dark mode compatibility
- [ ] Add animations with Framer Motion
- [ ] Run build to check for errors

## 🎨 Design System Reference

### Spacing Scale
```css
/* Use Tailwind spacing utilities */
p-4   /* 1rem / 16px */
p-6   /* 1.5rem / 24px */
p-8   /* 2rem / 32px */
p-12  /* 3rem / 48px */
p-16  /* 4rem / 64px */
```

### Typography Scale
```tsx
<h1>  /* 4xl-6xl, font-bold */
<h2>  /* 3xl-5xl, font-bold */
<h3>  /* 2xl-3xl, font-semibold */
<h4>  /* xl-2xl, font-semibold */
<p>   /* base, leading-relaxed */
```

### Color Usage
```tsx
// Primary Actions
className="bg-sky-500 hover:bg-sky-600"

// Secondary Actions  
className="border-2 border-gray-200 hover:border-sky-500"

// Accent/Highlights
className="bg-orange-500 hover:bg-orange-600"

// Text
className="text-gray-900 dark:text-white"
className="text-gray-600 dark:text-gray-400"
```

### Common Patterns

#### Card Component
```tsx
<div className="card-hover p-6">
  {/* Content */}
</div>
```

#### Button Styles
```tsx
<button className="btn-primary">Primary Action</button>
<button className="btn-secondary">Secondary Action</button>
<button className="btn-accent">Accent Action</button>
```

#### Input Fields
```tsx
<input className="input-field" />
```

#### Section Layout
```tsx
<section className="section-padding">
  <div className="container-custom">
    {/* Content */}
  </div>
</section>
```

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
  visible: { opacity: 1, y: 0 },
};

<motion.div variants={containerVariants} initial="hidden" whileInView="visible">
  {items.map(item => (
    <motion.div key={item.id} variants={itemVariants}>
      {/* Item */}
    </motion.div>
  ))}
</motion.div>
```

### Hover Effects
```tsx
<motion.div
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.3 }}
>
  {/* Content */}
</motion.div>
```

## 📱 Responsive Design Guidelines

### Mobile First Approach
```tsx
// Base styles for mobile
className="text-base p-4"

// Tablet and up
className="md:text-lg md:p-6"

// Desktop and up  
className="lg:text-xl lg:p-8"
```

### Grid Layouts
```tsx
// 1 column mobile, 2 tablet, 3 desktop
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
```

### Hide/Show Elements
```tsx
// Hide on mobile, show on desktop
className="hidden lg:block"

// Show on mobile, hide on desktop
className="block lg:hidden"
```

## 🌙 Dark Mode Implementation

### Using Dark Mode Classes
```tsx
// Background
className="bg-white dark:bg-gray-900"

// Text
className="text-gray-900 dark:text-white"

// Borders
className="border-gray-200 dark:border-gray-800"

// Hover States
className="hover:bg-gray-100 dark:hover:bg-gray-800"
```

### Theme Toggle
The theme toggle is already implemented in `src/components/shared/theme-toggle.tsx` and included in the navbar.

## 🔧 Common Tasks

### Adding a New Section

1. **Create the component**
```bash
# Create file
touch src/components/sections/new-section.tsx
```

2. **Component template**
```tsx
"use client";

import { motion } from "framer-motion";

export function NewSection() {
  return (
    <section id="new-section" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Section <span className="gradient-text">Title</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Section description
          </p>
        </motion.div>
        
        {/* Section content */}
      </div>
    </section>
  );
}
```

3. **Add to page**
```tsx
// src/app/page.tsx
import { NewSection } from "@/components/sections/new-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Other sections */}
        <NewSection />
      </main>
      <Footer />
    </div>
  );
}
```

### Adding a New Utility Class

Edit `src/app/globals.css`:

```css
@layer utilities {
  .my-custom-utility {
    @apply /* Tailwind classes */;
  }
}
```

### Creating a Reusable Component

```tsx
// src/components/ui/button.tsx
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent";
}

export function Button({ 
  variant = "primary", 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        variant === "primary" && "btn-primary",
        variant === "secondary" && "btn-secondary",
        variant === "accent" && "btn-accent",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
```

## 🐛 Debugging Tips

### Check TypeScript Errors
```bash
# Run TypeScript compiler check
npx tsc --noEmit
```

### Check for Unused Imports
```bash
npm run lint
```

### Clear Next.js Cache
```bash
rm -rf .next
npm run dev
```

### Check Build Output
```bash
npm run build
# Review any warnings or errors
```

## 📊 Performance Optimization

### Image Optimization
Always use Next.js Image component:
```tsx
import Image from "next/image";

<Image
  src="/path/to/image.jpg"
  alt="Description"
  width={800}
  height={600}
  className="object-cover"
/>
```

### Code Splitting
Use dynamic imports for heavy components:
```tsx
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("./heavy-component"), {
  loading: () => <div>Loading...</div>,
});
```

### Reduce Client-Side JavaScript
- Use Server Components by default
- Only add "use client" when needed (hooks, events, animations)
- Keep client components small and focused

## 🎯 Best Practices

### Component Organization
- ✅ One component per file
- ✅ Use descriptive names
- ✅ Group related components in folders
- ✅ Export from index files for cleaner imports

### TypeScript
- ✅ Define interfaces for props
- ✅ Use type inference when possible
- ✅ Avoid `any` type
- ✅ Use strict mode

### Styling
- ✅ Use utility classes from globals.css
- ✅ Keep component-specific styles minimal
- ✅ Use Tailwind's responsive modifiers
- ✅ Test dark mode for all components

### Animations
- ✅ Use GPU-accelerated properties (transform, opacity)
- ✅ Keep animations under 500ms
- ✅ Use `viewport={{ once: true }}` for scroll animations
- ✅ Provide reduced motion alternatives

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
1. Build the project: `npm run build`
2. Upload `.next` folder and `package.json`
3. Set build command: `npm run build`
4. Set start command: `npm start`
5. Set Node.js version: 20.9+

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Lucide Icons](https://lucide.dev/)

---

Happy coding! 🎉
