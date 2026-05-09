# 🔐 TripNest AI Authentication System

A complete, production-ready authentication system built with Next.js 15, TypeScript, React Hook Form, Zod, and Framer Motion.

## 📋 Features

### ✅ Complete Authentication Flow
- **Login Page** - Email/password with remember me
- **Register Page** - Full registration with travel preferences
- **Forgot Password** - Email-based password reset
- **Google OAuth** - Social login integration ready
- **Demo Account** - Quick testing access

### ✅ Form Validation
- **Zod Schema Validation** - Type-safe validation
- **React Hook Form** - Performant form handling
- **Real-time Validation** - Instant feedback
- **Password Strength Meter** - Visual strength indicator
- **Custom Error Messages** - User-friendly errors

### ✅ UI/UX Features
- **Responsive Design** - Mobile, tablet, desktop
- **Dark Mode Support** - Uses global CSS variables
- **Smooth Animations** - Framer Motion throughout
- **Loading States** - Button loading indicators
- **Toast Notifications** - Success/error feedback
- **Password Toggle** - Show/hide password
- **Glassmorphism** - Modern glass effects

### ✅ Travel-Specific Features
- **Travel Style Selector** - 8 travel preferences
- **Budget Range Selector** - 4 budget options
- **Phone Number Field** - International format
- **Terms & Conditions** - Required checkbox

## 🎨 Design System

All colors and styles use CSS variables from `global.css`:

```css
/* Used throughout auth system */
--color-primary      /* Text colors */
--color-background   /* Backgrounds */
--color-surface      /* Card surfaces */
--color-text-muted   /* Secondary text */
--color-border       /* Borders */
```

### Utility Classes Used
- `.bg-background` - Auto light/dark background
- `.text-primary` - Auto light/dark text
- `.text-muted` - Muted text color
- `.border-custom` - Border color
- `.btn-primary` - Primary button
- `.btn-secondary` - Secondary button
- `.input-field` - Input styling

## 📁 File Structure

```
frontend/src/
├── app/
│   └── (auth)/
│       ├── layout.tsx              # Auth layout (no navbar/footer)
│       ├── login/
│       │   └── page.tsx            # Login page
│       ├── register/
│       │   └── page.tsx            # Register page
│       └── forgot-password/
│           └── page.tsx            # Forgot password page
├── components/
│   ├── auth/
│   │   ├── auth-layout.tsx         # Split-screen layout
│   │   ├── password-input.tsx      # Password with toggle
│   │   └── password-strength.tsx   # Strength meter
│   └── ui/
│       ├── button.tsx              # Reusable button
│       ├── input.tsx               # Reusable input
│       ├── label.tsx               # Form label
│       └── checkbox.tsx            # Custom checkbox
└── lib/
    └── validations/
        └── auth.ts                 # Zod schemas
```

## 🚀 Installation

### 1. Install Dependencies

```bash
cd frontend
npm install react-hook-form zod @hookform/resolvers sonner
```

### 2. Restart Dev Server

```bash
npm run dev
```

## 📝 Usage Examples

### Login Page

```tsx
// Navigate to: http://localhost:3000/login

Features:
- Email/password login
- Remember me checkbox
- Forgot password link
- Google login button
- Demo account button
- Link to register
```

### Register Page

```tsx
// Navigate to: http://localhost:3000/register

Features:
- Full name, email, phone
- Password with strength meter
- Confirm password
- Travel style selector (8 options)
- Budget range selector (4 options)
- Terms & conditions checkbox
- Google signup button
- Link to login
```

### Forgot Password

```tsx
// Navigate to: http://localhost:3000/forgot-password

Features:
- Email input
- Send reset link button
- Success confirmation screen
- Resend email option
- Back to login link
```

## 🎯 Form Validation Rules

### Login
```typescript
email: Valid email format
password: Minimum 6 characters
```

### Register
```typescript
fullName: Minimum 2 characters
email: Valid email format
phone: Minimum 10 digits
password: 
  - Minimum 8 characters
  - At least 1 uppercase letter
  - At least 1 lowercase letter
  - At least 1 number
confirmPassword: Must match password
agreeToTerms: Must be checked
```

### Password Strength
```typescript
Weak: < 50% (Red)
Medium: 50-74% (Yellow)
Strong: 75-100% (Green)

Criteria:
- Length (8+ chars = 25%, 12+ chars = 50%)
- Uppercase letters (15%)
- Lowercase letters (15%)
- Numbers (10%)
- Special characters (10%)
```

## 🎨 Customization

### Change Colors

All colors come from `global.css`. To customize:

```css
/* In global.css */
:root {
  --color-primary: 14 165 233;  /* Change primary color */
}
```

### Add New Travel Styles

```typescript
// In register/page.tsx
const travelStyles = [
  { value: "new-style", label: "New Style", icon: YourIcon },
  // ... existing styles
];
```

### Modify Validation

```typescript
// In lib/validations/auth.ts
export const registerSchema = z.object({
  // Add or modify fields
  newField: z.string().min(5, "Custom error message"),
});
```

## 🔧 API Integration

### Login Example

```typescript
const onSubmit = async (data: LoginFormData) => {
  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    
    if (response.ok) {
      const { token } = await response.json();
      // Store token
      localStorage.setItem("token", token);
      // Redirect
      router.push("/dashboard");
    }
  } catch (error) {
    toast.error("Login failed");
  }
};
```

### Register Example

```typescript
const onSubmit = async (data: RegisterFormData) => {
  try {
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    
    if (response.ok) {
      toast.success("Account created! Please verify your email.");
      router.push("/login");
    }
  } catch (error) {
    toast.error("Registration failed");
  }
};
```

## 🎭 Animations

### Page Transitions

```typescript
// Fade in on mount
initial={{ opacity: 0, scale: 0.95 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.5 }}
```

### Floating Elements

```typescript
// Continuous floating animation
animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
transition={{ duration: 6, repeat: Infinity }}
```

### Input Focus

```typescript
// Automatic via input-field class
focus:ring-2 focus:ring-sky-500
```

## ♿ Accessibility

### Keyboard Navigation
- ✅ Tab through all inputs
- ✅ Enter to submit forms
- ✅ Space to toggle checkboxes
- ✅ Escape to close modals

### Screen Readers
- ✅ Proper label associations
- ✅ ARIA labels on icons
- ✅ Error announcements
- ✅ Loading state announcements

### Focus Management
- ✅ Visible focus rings
- ✅ Logical tab order
- ✅ Focus trapping in modals

## 🐛 Troubleshooting

### Issue: Forms not submitting

**Solution:** Check if dependencies are installed:
```bash
npm install react-hook-form zod @hookform/resolvers sonner
```

### Issue: Toast notifications not showing

**Solution:** Ensure Toaster is in layout:
```tsx
import { Toaster } from "sonner";
<Toaster position="top-right" richColors />
```

### Issue: Dark mode not working

**Solution:** Check ThemeProvider in root layout:
```tsx
<ThemeProvider attribute="class" defaultTheme="system">
```

### Issue: CSS variables not working

**Solution:** Ensure using utility classes:
```tsx
// ✅ Correct
<div className="bg-background text-primary">

// ❌ Wrong
<div className="bg-white dark:bg-black">
```

## 📱 Responsive Breakpoints

```css
Mobile: < 768px
  - Single column layout
  - Stacked form fields
  - Full-width buttons

Tablet: 768px - 1024px
  - Show promotional side
  - 2-column travel styles
  - Larger form

Desktop: > 1024px
  - Split-screen layout
  - 4-column travel styles
  - Maximum width form
```

## 🎯 Best Practices

### 1. Always Use CSS Variables
```tsx
// ✅ Good
className="bg-background text-primary"

// ❌ Bad
className="bg-white dark:bg-black"
```

### 2. Handle Loading States
```tsx
<Button isLoading={isLoading}>Submit</Button>
```

### 3. Show User Feedback
```tsx
toast.success("Success message");
toast.error("Error message");
```

### 4. Validate on Submit
```tsx
const { handleSubmit } = useForm({
  resolver: zodResolver(schema),
});
```

### 5. Secure Password Handling
```tsx
// Never log passwords
console.log(data.password); // ❌ Don't do this

// Use HTTPS in production
// Hash passwords on backend
// Use secure session management
```

## 🚀 Production Checklist

- [ ] Install all dependencies
- [ ] Test all form validations
- [ ] Test responsive design
- [ ] Test dark mode
- [ ] Connect to real API
- [ ] Add rate limiting
- [ ] Add CAPTCHA (optional)
- [ ] Set up email service
- [ ] Configure OAuth providers
- [ ] Add error logging
- [ ] Test accessibility
- [ ] Add analytics
- [ ] Security audit
- [ ] Performance testing

## 📚 Resources

- [React Hook Form Docs](https://react-hook-form.com/)
- [Zod Documentation](https://zod.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [Sonner Toast](https://sonner.emilkowal.ski/)
- [Next.js Auth](https://nextjs.org/docs/authentication)

---

**Built with ❤️ for TripNest AI**

Need help? Check the component source code for detailed examples!
