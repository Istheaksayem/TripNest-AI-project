# 🚀 Quick Start Guide - TripNest AI

Get up and running with TripNest AI in under 5 minutes!

## ⚡ Super Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser
# Visit http://localhost:3000
```

That's it! Your TripNest AI platform is now running locally. 🎉

---

## 📋 What You'll See

When you open `http://localhost:3000`, you'll see:

1. **Sticky Navbar** - With logo, navigation, theme toggle, and login button
2. **Hero Section** - Large heading with travel search form
3. **Popular Destinations** - 6 beautiful destination cards
4. **Features Section** - 8 feature cards showcasing platform benefits
5. **AI Planner Section** - Interactive AI trip planning interface
6. **Testimonials** - 6 user reviews with ratings
7. **FAQ Section** - 8 common questions with accordion UI
8. **Newsletter** - Email subscription form
9. **Footer** - Links, social media, and contact info

---

## 🎨 Try These Features

### Toggle Dark Mode
Click the moon/sun icon in the navbar to switch between light and dark themes.

### Mobile Menu
Resize your browser to mobile width and click the hamburger menu icon.

### Search Form
Fill out the travel search form in the hero section (destination, dates, guests).

### AI Planner
Scroll to the AI Planner section and try the example prompts or write your own.

### FAQ Accordion
Click on any FAQ question to expand/collapse the answer.

### Hover Effects
Hover over destination cards, feature cards, and buttons to see smooth animations.

---

## 🛠️ Quick Customization

### Change Colors

Edit `src/app/globals.css` (lines 8-10):

```css
:root {
  --color-primary: 14 165 233;    /* Sky Blue - Change this! */
  --color-secondary: 6 182 212;   /* Cyan - Change this! */
  --color-accent: 249 115 22;     /* Orange - Change this! */
}
```

### Change Site Name

Edit `src/components/shared/navbar.tsx` and `src/components/shared/footer.tsx`:

```tsx
// Find and replace "TripNest AI" with your name
<span className="text-xl font-bold gradient-text">
  Your Site Name
</span>
```

### Add Your Logo

Replace the plane icon in navbar and footer:

```tsx
// Before
<Plane className="w-6 h-6 text-white" />

// After - use your own icon or image
<YourIcon className="w-6 h-6 text-white" />
```

### Modify Destinations

Edit `src/components/sections/destinations-section.tsx`:

```tsx
const destinations = [
  {
    id: 1,
    name: "Your Destination",
    image: "your-image-url",
    rating: 4.9,
    reviews: 1000,
    price: 999,
    tag: "Popular",
  },
  // Add more destinations...
];
```

---

## 📱 Test Responsive Design

### Using Browser DevTools

1. Open DevTools (F12 or Cmd+Option+I)
2. Click the device toolbar icon (Cmd+Shift+M)
3. Try these sizes:
   - **iPhone SE**: 375px
   - **iPad**: 768px
   - **Desktop**: 1440px

### What to Check

- ✅ Mobile menu appears on small screens
- ✅ Grid layouts adjust (1 → 2 → 3 columns)
- ✅ Text sizes scale appropriately
- ✅ Buttons remain touch-friendly
- ✅ Images resize properly

---

## 🎯 Next Steps

### 1. Read the Documentation
- **README.md** - Full project overview
- **DEVELOPMENT.md** - Development guide
- **COMPONENTS.md** - Component reference
- **PROJECT_SUMMARY.md** - What's included

### 2. Customize the Content
- Update destination data
- Modify feature descriptions
- Change testimonials
- Update FAQ questions

### 3. Add Your Branding
- Replace logo
- Update color scheme
- Modify typography
- Add your images

### 4. Build for Production
```bash
npm run build
npm start
```

### 5. Deploy
- **Vercel** (Recommended): `vercel`
- **Netlify**: Connect your Git repo
- **Other**: Upload `.next` folder

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill the process on port 3000
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Try building again
npm run build
```

### TypeScript Errors
```bash
# Check for type errors
npx tsc --noEmit
```

### Dark Mode Not Working
- Check if JavaScript is enabled
- Clear browser cache
- Try incognito/private mode

---

## 💡 Pro Tips

### 1. Use the Utility Classes
The project includes 30+ custom utility classes in `globals.css`:

```tsx
<div className="card-hover">Card with hover effect</div>
<button className="btn-primary">Primary button</button>
<h2 className="gradient-text">Gradient text</h2>
```

### 2. Follow the Component Patterns
All sections follow a consistent structure:

```tsx
<section id="section-name" className="section-padding">
  <div className="container-custom">
    {/* Section header */}
    {/* Section content */}
  </div>
</section>
```

### 3. Use Framer Motion for Animations
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  {/* Animated content */}
</motion.div>
```

### 4. Keep Components Small
- One component per file
- Extract reusable logic
- Use TypeScript interfaces

### 5. Test Dark Mode
Always test your changes in both light and dark modes:

```tsx
// Use dark mode classes
className="bg-white dark:bg-gray-900"
className="text-gray-900 dark:text-white"
```

---

## 📚 Learn More

### Official Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Project Documentation
- [README.md](./README.md) - Complete overview
- [DEVELOPMENT.md](./DEVELOPMENT.md) - Developer guide
- [COMPONENTS.md](./COMPONENTS.md) - Component docs

---

## 🎉 You're Ready!

You now have a fully functional, production-ready travel booking platform!

### What's Included
✅ 7 complete page sections
✅ Dark/light mode
✅ Fully responsive
✅ Smooth animations
✅ Type-safe code
✅ Production optimized

### What You Can Do
- Customize the design
- Add new features
- Deploy to production
- Use in your portfolio

---

**Happy coding! 🚀**

Need help? Check the documentation files or review the component source code for examples.
