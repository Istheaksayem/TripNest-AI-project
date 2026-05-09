# 🎨 Authentication System - Visual Guide

## 📱 Page Layouts

### Login Page Layout

```
┌─────────────────────────────────────────────────────────────┐
│  Desktop View (Split Screen)                                │
├──────────────────────────┬──────────────────────────────────┤
│                          │                                  │
│  LEFT SIDE               │  RIGHT SIDE                      │
│  (Promotional)           │  (Login Form)                    │
│                          │                                  │
│  ┌────────────────────┐  │  ┌────────────────────────────┐ │
│  │ TripNest AI Logo   │  │  │ Welcome Back               │ │
│  │                    │  │  │ Sign in to continue        │ │
│  │ Gradient BG        │  │  │                            │ │
│  │ + Floating shapes  │  │  │ [Email Input]              │ │
│  │                    │  │  │ [Password Input] [👁]      │ │
│  │ "Your AI-Powered   │  │  │                            │ │
│  │  Travel Companion" │  │  │ [✓] Remember me            │ │
│  │                    │  │  │     Forgot password?       │ │
│  │ ✨ Features:       │  │  │                            │ │
│  │ • AI planning      │  │  │ [Sign In Button]           │ │
│  │ • Personalized     │  │  │                            │ │
│  │ • Secure booking   │  │  │ ─── Or continue with ───   │ │
│  │ • 24/7 support     │  │  │                            │ │
│  │                    │  │  │ [Google Sign In]           │ │
│  └────────────────────┘  │  │ [Try Demo Account]         │ │
│                          │  │                            │ │
│                          │  │ Don't have an account?     │ │
│                          │  │ Sign up for free           │ │
│                          │  └────────────────────────────┘ │
└──────────────────────────┴──────────────────────────────────┘

Mobile View (Stacked)
┌──────────────────────┐
│ TripNest AI Logo     │
│                      │
│ Welcome Back         │
│ Sign in to continue  │
│                      │
│ [Email Input]        │
│ [Password] [👁]      │
│                      │
│ [✓] Remember me      │
│ Forgot password?     │
│                      │
│ [Sign In Button]     │
│                      │
│ ─── Or ───           │
│                      │
│ [Google Sign In]     │
│ [Try Demo]           │
│                      │
│ Sign up for free     │
└──────────────────────┘
```

### Register Page Layout

```
┌─────────────────────────────────────────────────────────────┐
│  Desktop View                                                │
├──────────────────────────┬──────────────────────────────────┤
│  LEFT SIDE               │  RIGHT SIDE                      │
│  (Same as Login)         │  (Register Form)                 │
│                          │                                  │
│  Animated gradient       │  Create Account                  │
│  background with         │  Join TripNest AI                │
│  floating elements       │                                  │
│                          │  [Full Name] 👤                  │
│                          │  [Email] ✉                       │
│                          │  [Phone] ☎                       │
│                          │  [Password] [👁]                 │
│                          │  ▓▓▓░░ Medium (Strength)         │
│                          │  [Confirm Password] [👁]         │
│                          │                                  │
│                          │  Travel Style (Optional)         │
│                          │  ┌──┬──┬──┬──┐                  │
│                          │  │🏖│⛰│👑│💕│                  │
│                          │  └──┴──┴──┴──┘                  │
│                          │  ┌──┬──┬──┬──┐                  │
│                          │  │👤│👨‍👩‍👧│🌲│⛺│                  │
│                          │  └──┴──┴──┴──┘                  │
│                          │                                  │
│                          │  Budget Range (Optional)         │
│                          │  ┌──────────┬──────────┐        │
│                          │  │ Under    │ $300-    │        │
│                          │  │ $300     │ $700     │        │
│                          │  └──────────┴──────────┘        │
│                          │  ┌──────────┬──────────┐        │
│                          │  │ $700-    │ Luxury   │        │
│                          │  │ $1500    │ Travel   │        │
│                          │  └──────────┴──────────┘        │
│                          │                                  │
│                          │  [✓] I agree to Terms            │
│                          │                                  │
│                          │  [Create Account]                │
│                          │  [Google Sign Up]                │
│                          │                                  │
│                          │  Already have account? Sign in   │
└──────────────────────────┴──────────────────────────────────┘
```

### Forgot Password Layout

```
┌─────────────────────────────────────────────────────────────┐
│  Step 1: Enter Email                                         │
├──────────────────────────┬──────────────────────────────────┤
│  LEFT SIDE               │  RIGHT SIDE                      │
│  (Promotional)           │  (Form)                          │
│                          │                                  │
│                          │  ← Back to Login                 │
│                          │                                  │
│                          │  Forgot Password?                │
│                          │  Enter email for reset link      │
│                          │                                  │
│                          │  [Email Input] ✉                 │
│                          │  We'll send you a link           │
│                          │                                  │
│                          │  [Send Reset Link]               │
│                          │                                  │
│                          │  Remember password? Sign in      │
│                          │  Don't have account? Sign up     │
└──────────────────────────┴──────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  Step 2: Success Screen                                      │
├──────────────────────────┬──────────────────────────────────┤
│  LEFT SIDE               │  RIGHT SIDE                      │
│  (Promotional)           │  (Success)                       │
│                          │                                  │
│                          │      ✓                           │
│                          │   (Green)                        │
│                          │                                  │
│                          │  Email Sent Successfully!        │
│                          │                                  │
│                          │  We've sent a reset link to      │
│                          │  your@email.com                  │
│                          │                                  │
│                          │  Check inbox and click link.     │
│                          │  Link expires in 24 hours.       │
│                          │                                  │
│                          │  [Resend Email]                  │
│                          │  [← Back to Login]               │
│                          │                                  │
│                          │  Didn't receive? Check spam      │
└──────────────────────────┴──────────────────────────────────┘
```

## 🎨 Component Styles

### Button Variants

```
┌─────────────────────────────────────┐
│ Primary Button (Gradient)           │
│ ┌─────────────────────────────────┐ │
│ │  Sign In  (Sky → Cyan gradient) │ │
│ └─────────────────────────────────┘ │
│                                     │
│ Secondary Button (Outline)          │
│ ┌─────────────────────────────────┐ │
│ │  Try Demo  (Border + BG hover)  │ │
│ └─────────────────────────────────┘ │
│                                     │
│ Accent Button (Orange gradient)     │
│ ┌─────────────────────────────────┐ │
│ │  Try AI Planner (Orange → Pink) │ │
│ └─────────────────────────────────┘ │
│                                     │
│ Loading State                       │
│ ┌─────────────────────────────────┐ │
│ │  ⟳ Loading...  (Spinning icon)  │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

### Input Fields

```
┌─────────────────────────────────────┐
│ Normal State                        │
│ ┌─────────────────────────────────┐ │
│ │ ✉ you@example.com               │ │
│ └─────────────────────────────────┘ │
│                                     │
│ Focus State (Blue ring)             │
│ ┌─────────────────────────────────┐ │
│ │ ✉ you@example.com  ◀ (focused)  │ │
│ └─────────────────────────────────┘ │
│                                     │
│ Error State (Red border)            │
│ ┌─────────────────────────────────┐ │
│ │ ✉ invalid-email                 │ │
│ └─────────────────────────────────┘ │
│ ⚠ Invalid email address             │
│                                     │
│ Password with Toggle                │
│ ┌─────────────────────────────────┐ │
│ │ ••••••••  👁 (Show/Hide)        │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

### Password Strength Meter

```
┌─────────────────────────────────────┐
│ Weak (Red)                          │
│ Password Strength:           Weak   │
│ ▓▓░░░░░░░░ (20%)                    │
│                                     │
│ Medium (Yellow)                     │
│ Password Strength:         Medium   │
│ ▓▓▓▓▓▓░░░░ (60%)                    │
│                                     │
│ Strong (Green)                      │
│ Password Strength:         Strong   │
│ ▓▓▓▓▓▓▓▓▓▓ (100%)                   │
└─────────────────────────────────────┘
```

### Travel Style Selector

```
┌─────────────────────────────────────┐
│ Preferred Travel Style (Optional)   │
│                                     │
│ ┌────┬────┬────┬────┐              │
│ │ 🏖 │ ⛰  │ 👑 │ 💕 │              │
│ │Beac│Adve│Luxu│Hone│              │
│ │h   │ntur│ry  │ymoo│              │
│ │    │e   │    │n   │              │
│ └────┴────┴────┴────┘              │
│ ┌────┬────┬────┬────┐              │
│ │ 👤 │ 👨‍👩‍👧 │ 🌲 │ ⛺ │              │
│ │Solo│Fami│Natu│Camp│              │
│ │    │ly  │re  │ing │              │
│ └────┴────┴────┴────┘              │
│                                     │
│ Selected: Blue border + bg          │
│ Hover: Border color change          │
└─────────────────────────────────────┘
```

### Budget Range Selector

```
┌─────────────────────────────────────┐
│ Budget Range (Optional)             │
│                                     │
│ ┌──────────────┬──────────────┐    │
│ │ $ Under $300 │ $ $300 - $700│    │
│ └──────────────┴──────────────┘    │
│ ┌──────────────┬──────────────┐    │
│ │ $ $700-$1500 │ $ Luxury     │    │
│ └──────────────┴──────────────┘    │
│                                     │
│ Selected: Blue border + bg          │
└─────────────────────────────────────┘
```

### Checkbox

```
┌─────────────────────────────────────┐
│ Unchecked                           │
│ ☐ Remember me                       │
│                                     │
│ Checked (Blue with checkmark)       │
│ ☑ Remember me                       │
│                                     │
│ With Error                          │
│ ☐ I agree to Terms & Conditions     │
│ ⚠ You must agree to continue        │
└─────────────────────────────────────┘
```

## 🎭 Animations

### Page Load Animation

```
1. Fade in (opacity 0 → 1)
2. Scale up (0.95 → 1)
3. Duration: 0.5s
```

### Floating Elements (Left Side)

```
Element 1: 
- Move: Y axis (0 → -20 → 0)
- Rotate: (0° → 5° → 0°)
- Duration: 6s infinite

Element 2:
- Move: Y axis (0 → 20 → 0)
- Rotate: (0° → -5° → 0°)
- Duration: 8s infinite

Element 3:
- Move: Y axis (0 → -15 → 0)
- Duration: 7s infinite
```

### Button Hover

```
1. Scale: 1 → 1.05
2. Shadow: Increase
3. Duration: 0.3s
```

### Input Focus

```
1. Border: Gray → Blue
2. Ring: Appear (2px blue)
3. Duration: 0.2s
```

## 🎨 Color Usage

### From global.css Variables

```css
Background:
- Light: rgb(255, 255, 255)
- Dark: rgb(0, 0, 0)

Surface:
- Light: rgb(245, 247, 250)
- Dark: rgb(17, 24, 39)

Text:
- Light: rgb(17, 24, 39)
- Dark: rgb(255, 255, 255)

Muted Text:
- Light: rgb(107, 114, 128)
- Dark: rgb(156, 163, 175)

Border:
- Light: rgb(229, 231, 235)
- Dark: rgb(31, 41, 55)

Primary (Sky Blue):
- rgb(14, 165, 233)

Secondary (Cyan):
- rgb(6, 182, 212)

Accent (Orange):
- rgb(249, 115, 22)
```

## 📱 Responsive Behavior

### Mobile (< 768px)

```
- Hide left promotional side
- Show logo at top
- Single column form
- Stack all inputs
- Full-width buttons
- 2-column travel styles
- 1-column budget ranges
```

### Tablet (768px - 1024px)

```
- Show left promotional side
- Split-screen layout
- 2-column travel styles
- 2-column budget ranges
- Larger form width
```

### Desktop (> 1024px)

```
- Full split-screen
- 4-column travel styles
- 2-column budget ranges
- Maximum form width
- Show all animations
```

## 🎯 Interactive States

### Button States

```
Default → Hover → Active → Loading → Disabled

Default:  Normal appearance
Hover:    Scale 1.05, shadow increase
Active:   Scale 0.98
Loading:  Spinner icon, disabled
Disabled: Opacity 0.5, cursor not-allowed
```

### Input States

```
Default → Focus → Error → Disabled

Default:  Gray border
Focus:    Blue ring, blue border
Error:    Red border, error message
Disabled: Gray background, cursor not-allowed
```

### Checkbox States

```
Unchecked → Hover → Checked → Disabled

Unchecked: Empty box
Hover:     Border color change
Checked:   Blue bg, white checkmark
Disabled:  Gray, cursor not-allowed
```

## 🎨 Toast Notifications

```
┌─────────────────────────────────────┐
│ Success (Green)                     │
│ ✓ Login successful! Redirecting...  │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ Error (Red)                         │
│ ✗ Login failed. Please try again.   │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ Info (Blue)                         │
│ ℹ Demo: admin@tripnest.ai           │
└─────────────────────────────────────┘
```

---

**This visual guide shows exactly how your authentication system looks and behaves!**
