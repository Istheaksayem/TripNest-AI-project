# 🚀 Authentication System - Quick Start

## ⚡ 3-Step Setup

### Step 1: Install Dependencies

```bash
cd frontend
npm install react-hook-form zod @hookform/resolvers sonner
```

### Step 2: Restart Dev Server

```bash
# Stop current server (Ctrl+C)
npm run dev
```

### Step 3: Test the Pages

Open your browser and visit:

- **Login**: http://localhost:3000/login
- **Register**: http://localhost:3000/register
- **Forgot Password**: http://localhost:3000/forgot-password

## ✅ What's Included

### 📄 Pages Created
- ✅ Login page with demo account
- ✅ Register page with travel preferences
- ✅ Forgot password with email confirmation
- ✅ Split-screen responsive layout
- ✅ Animated promotional side

### 🎨 UI Components
- ✅ Button (with loading state)
- ✅ Input (with error handling)
- ✅ Label (accessible)
- ✅ Checkbox (custom styled)
- ✅ Password Input (with show/hide)
- ✅ Password Strength Meter

### ✨ Features
- ✅ Form validation (Zod + React Hook Form)
- ✅ Password strength indicator
- ✅ Toast notifications
- ✅ Loading states
- ✅ Error handling
- ✅ Dark mode support
- ✅ Fully responsive
- ✅ Smooth animations
- ✅ Travel style selector
- ✅ Budget range selector

## 🎯 Quick Test

### Test Login
1. Go to http://localhost:3000/login
2. Click "Try Demo Account" button
3. Use: `admin@tripnest.ai` / `password123`

### Test Register
1. Go to http://localhost:3000/register
2. Fill in the form
3. Select travel style and budget
4. Watch password strength meter
5. Submit form

### Test Forgot Password
1. Go to http://localhost:3000/forgot-password
2. Enter email
3. See success confirmation

## 🎨 Using CSS Variables

All colors come from your `global.css`:

```tsx
// ✅ Correct way
<div className="bg-background text-primary">
<button className="btn-primary">

// ❌ Don't do this
<div className="bg-white dark:bg-black">
```

## 📱 Responsive Design

- **Mobile**: Single column, stacked layout
- **Tablet**: Show promotional side
- **Desktop**: Full split-screen

## 🔧 Customization

### Change Travel Styles

Edit `frontend/src/app/(auth)/register/page.tsx`:

```typescript
const travelStyles = [
  { value: "beach", label: "Beach", icon: Palmtree },
  // Add your own styles here
];
```

### Change Validation Rules

Edit `frontend/src/lib/validations/auth.ts`:

```typescript
export const registerSchema = z.object({
  password: z.string().min(8, "Your custom message"),
  // Modify rules here
});
```

### Change Colors

Edit `frontend/src/app/globals.css`:

```css
:root {
  --color-primary: 14 165 233;  /* Change this */
}
```

## 🐛 Common Issues

### Issue: "Module not found: react-hook-form"

**Solution:**
```bash
npm install react-hook-form zod @hookform/resolvers sonner
```

### Issue: Toast not showing

**Solution:** Check if Toaster is in `(auth)/layout.tsx`:
```tsx
import { Toaster } from "sonner";
<Toaster position="top-right" richColors />
```

### Issue: Dark mode not working

**Solution:** Clear browser cache and hard refresh:
- Windows: `Ctrl + Shift + R`
- Mac: `Cmd + Shift + R`

## 📚 Next Steps

1. **Connect to API**: Replace mock API calls with real endpoints
2. **Add OAuth**: Implement Google/Facebook login
3. **Email Service**: Set up email verification
4. **Session Management**: Add JWT or session handling
5. **Protected Routes**: Add authentication middleware

## 🎉 You're Done!

Your authentication system is ready to use!

Visit the pages and test all features. Everything uses your existing design system from `global.css`.

---

**Need more details?** Check `AUTH_SYSTEM_GUIDE.md` for complete documentation.
