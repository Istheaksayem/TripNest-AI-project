# 🎨 CSS Variables Usage Guide

এই project এ সব জায়গায় `globals.css` এ define করা CSS variables ব্যবহার করা হয়েছে।

## 📋 Available CSS Variables

### Colors

#### Primary Colors
```css
--color-primary: 14 165 233;    /* Sky Blue #0EA5E9 */
--color-secondary: 6 182 212;   /* Cyan #06B6D4 */
--color-accent: 249 115 22;     /* Orange #F97316 */
```

#### Neutral Colors (Auto-switching for Light/Dark Mode)
```css
/* Light Mode */
--color-background: 255 255 255;  /* White */
--color-surface: 245 247 250;     /* Light Gray */
--color-text: 17 24 39;           /* Dark Gray */
--color-text-muted: 107 114 128;  /* Gray */
--color-border: 229 231 235;      /* Light Border */

/* Dark Mode (automatically applied) */
--color-background: 0 0 0;        /* Black */
--color-surface: 17 24 39;        /* Dark Gray */
--color-text: 255 255 255;        /* White */
--color-text-muted: 156 163 175;  /* Light Gray */
--color-border: 31 41 55;         /* Dark Border */
```

## 🎯 How to Use

### Method 1: Using Utility Classes (Recommended)

```tsx
// Background colors
<div className="bg-background">     // Auto light/dark background
<div className="bg-surface">        // Auto light/dark surface
<div className="bg-primary">        // Sky Blue
<div className="bg-secondary">      // Cyan
<div className="bg-accent">         // Orange

// Text colors
<p className="text-primary">        // Auto light/dark text
<p className="text-muted">          // Auto light/dark muted text
<p className="text-primary-color">  // Sky Blue text
<p className="text-secondary-color">// Cyan text
<p className="text-accent-color">   // Orange text

// Borders
<div className="border border-custom">  // Auto light/dark border

// Cards (already using variables)
<div className="card">              // Auto light/dark card
<div className="card-hover">        // Auto light/dark card with hover
```

### Method 2: Using Inline Styles

```tsx
// For backgrounds with opacity
<div style={{ backgroundColor: 'rgba(var(--color-background), 0.95)' }}>
  Content
</div>

// For solid colors
<div style={{ backgroundColor: 'rgb(var(--color-primary))' }}>
  Content
</div>

// For text colors
<p style={{ color: 'rgb(var(--color-text))' }}>
  Text
</p>
```

### Method 3: In CSS/Tailwind

```css
/* In your CSS */
.my-custom-class {
  background-color: rgb(var(--color-background));
  color: rgb(var(--color-text));
  border-color: rgb(var(--color-border));
}

/* With opacity */
.my-transparent-bg {
  background-color: rgba(var(--color-background), 0.8);
}
```

## ✅ Updated Components

এই components গুলোতে CSS variables ব্যবহার করা হয়েছে:

- ✅ `src/app/page.tsx` - Main page background
- ✅ `src/app/globals.css` - All utility classes
- ✅ `src/components/shared/navbar.tsx` - Navbar colors
- ✅ Body background (automatic)
- ✅ Card components (automatic)

## 🎨 Benefits

### 1. **Automatic Light/Dark Mode**
```tsx
// এই code automatically light/dark mode support করে
<div className="bg-background text-primary">
  Content
</div>
```

### 2. **Consistent Colors**
সব জায়গায় same color variables ব্যবহার হয়, তাই:
- Design consistency বজায় থাকে
- একবার change করলে সব জায়গায় change হয়

### 3. **Easy Customization**
শুধু `globals.css` এ variables change করলেই পুরো site এর color change হবে:

```css
:root {
  --color-primary: 14 165 233;  /* এটা change করুন */
}
```

## 🔄 Migration Guide

### Old Way (Hardcoded)
```tsx
// ❌ Don't use
<div className="bg-white dark:bg-black">
<p className="text-gray-900 dark:text-white">
```

### New Way (CSS Variables)
```tsx
// ✅ Use this
<div className="bg-background">
<p className="text-primary">
```

## 📝 Examples

### Example 1: Section Background
```tsx
<section className="section-padding bg-surface">
  <div className="container-custom">
    <h2 className="text-primary">Title</h2>
    <p className="text-muted">Description</p>
  </div>
</section>
```

### Example 2: Card Component
```tsx
<div className="card-hover p-6">
  <h3 className="text-primary mb-2">Card Title</h3>
  <p className="text-muted">Card description</p>
</div>
```

### Example 3: Custom Component with Opacity
```tsx
<div 
  className="backdrop-blur-md"
  style={{ backgroundColor: 'rgba(var(--color-background), 0.9)' }}
>
  <p className="text-primary">Content</p>
</div>
```

## 🎯 Best Practices

1. **Always use utility classes first**
   ```tsx
   // ✅ Good
   <div className="bg-background text-primary">
   
   // ❌ Avoid
   <div className="bg-white dark:bg-black text-gray-900 dark:text-white">
   ```

2. **Use inline styles for opacity**
   ```tsx
   // ✅ Good
   style={{ backgroundColor: 'rgba(var(--color-background), 0.8)' }}
   
   // ❌ Avoid
   className="bg-white/80 dark:bg-black/80"
   ```

3. **Keep color consistency**
   ```tsx
   // ✅ Good - uses variables
   <button className="bg-primary text-white">
   
   // ❌ Avoid - hardcoded
   <button className="bg-sky-500 text-white">
   ```

## 🚀 Next Steps

আপনার বাকি components গুলোতেও এই CSS variables ব্যবহার করুন:

1. `src/components/sections/destinations-section.tsx`
2. `src/components/sections/features-section.tsx`
3. `src/components/sections/ai-planner-section.tsx`
4. `src/components/sections/testimonials-section.tsx`
5. `src/components/sections/faq-section.tsx`
6. `src/components/sections/newsletter-section.tsx`
7. `src/components/shared/footer.tsx`

প্রতিটি component এ:
- `bg-white dark:bg-black` → `bg-background`
- `text-gray-900 dark:text-white` → `text-primary`
- `text-gray-600 dark:text-gray-400` → `text-muted`
- `border-gray-200 dark:border-gray-800` → `border-custom`

---

**Happy Coding! 🎨**
