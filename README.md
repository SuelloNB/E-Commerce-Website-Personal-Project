# JONAYNS - Premium Streetwear eCommerce Frontend

A modern, premium ecommerce website for **JONAYNS**, a high-end streetwear brand. Built with React, Vite, and Tailwind CSS. This frontend-first implementation showcases a clean, editorial design with smooth animations and a luxury shopping experience.

## 🎯 Project Overview

**JONAYNS** is a premium streetwear ecommerce frontend designed with editorial sophistication and modern web standards. The website features:

- **Premium Visual Design**: Minimal monochrome palette with bold typography and strong whitespace
- **Responsive Layout**: Fully responsive across desktop, tablet, and mobile devices
- **Smooth Animations**: Refined, subtle motion design that feels luxurious
- **Component-Based Architecture**: Reusable React components for easy maintenance
- **Placeholder Data**: Includes mock products, categories, and collections for immediate use

## 🛠 Tech Stack

- **React 18**: UI library for building interactive components
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **JavaScript (ES6+)**: Modern JavaScript for component logic

## 📁 Project Structure

```
jonayns-store/
├── src/
│   ├── components/
│   │   ├── Header.jsx              # Navigation bar with mobile menu
│   │   ├── Hero.jsx                # Full-screen hero section
│   │   ├── Categories.jsx          # Category grid showcase
│   │   ├── ProductCard.jsx         # Reusable product card component
│   │   ├── FeaturedProducts.jsx    # Featured products grid
│   │   ├── EditorialSection.jsx    # Brand story section
│   │   ├── CollectionSpotlight.jsx # Featured collection showcase
│   │   ├── Marquee.jsx             # Scrolling brand statement banner
│   │   ├── Newsletter.jsx          # Email subscription form
│   │   └── Footer.jsx              # Footer with links and socials
│   ├── data/
│   │   └── products.js             # Product data, categories, collections
│   ├── App.jsx                     # Main app component
│   ├── index.css                   # Global styles and Tailwind directives
│   └── main.jsx                    # Entry point
├── index.html                      # HTML template
├── tailwind.config.js              # Tailwind configuration
├── postcss.config.js               # PostCSS configuration
├── package.json                    # Dependencies and scripts
└── vite.config.js                  # Vite configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

1. **Navigate to project directory**:
   ```bash
   cd jonayns-store
   ```

2. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Design System

### Color Palette
- **Primary**: Black (#000000)
- **Secondary**: White (#FFFFFF)
- **Neutral**: Gray tones for borders and secondary content
- **Background**: Soft off-white

### Typography
- **Display Font**: Bold sans-serif for headlines (h1-h6)
- **Body Font**: Clean sans-serif for body text
- **Font Sizes**: Responsive scaling from mobile to desktop

### Component Classes

#### Buttons
```jsx
<button className="btn-primary">Primary Button</button>
<button className="btn-secondary">Secondary Button</button>
<button className="btn-outline">Outline Button</button>
```

#### Layout
```jsx
<div className="section-container">     {/* Full width with padding */}
  <div className="max-width-container"> {/* Max width wrapper */}
    {/* Content */}
  </div>
</div>
```

#### Grid
```jsx
<div className="grid-cols-auto">        {/* 1-3 columns responsive grid */}
  {/* Grid items */}
</div>
```

#### Animations
```jsx
<div className="animate-fade-up">      {/* Fade in + slide up */}
<div className="animate-fade-in">      {/* Simple fade in */}
<div className="animate-scale-in">     {/* Scale and fade in */}
```

## 📦 Components

### Header Component
- Sticky navbar that becomes solid on scroll
- Desktop navigation menu
- Utility icons (search, account, wishlist, cart)
- Mobile responsive hamburger menu

### Hero Section
- Full-screen hero with overlay gradient
- Large bold headline for JONAYNS
- Supporting brand message
- CTA buttons
- Scroll indicator animation

### Categories Component
- 6-column responsive grid
- Image-based category cards
- Hover zoom effects
- Semi-transparent overlay on hover

### Product Card Component
- Product image with hover zoom
- Image swap on click
- Tag badges (New, Limited, Sold Out)
- Quick view button on hover
- Product name, category, and price

### Featured Products Section
- Grid layout of 6 featured products
- Staggered fade-up animations
- View All Products CTA

### Editorial Section
- Two-column layout
- Brand story messaging
- Image with hover scale effect
- Alternating image/text for rhythm

### Collection Spotlight
- Featured collection showcase
- Large hero image
- Collection description
- Shop Collection CTA

### Marquee Component
- Horizontally scrolling text strip
- Repeating brand phrases
- Smooth infinite animation

### Newsletter Component
- Email input field
- Subscribe button
- Success message on submission
- Minimal, premium styling

### Footer
- Brand logo and description
- 4-column link structure (Shop, Support, Brand, Company)
- Social links
- Copyright information

## 🎯 Features Implemented

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Sticky header with scroll transition
- ✅ Mobile hamburger menu
- ✅ Product cards with image swap
- ✅ Hover effects (zoom, scale, overlay)
- ✅ Smooth scroll animations
- ✅ Newsletter subscription form
- ✅ Reusable component architecture
- ✅ Clean semantic HTML
- ✅ Premium visual design
- ✅ Dark and light section variations

## 📊 Data Structure

### Product Object
```javascript
{
  id: 1,
  name: 'Essential Oversized Hoodie',
  category: 'Hoodies',
  price: '$149',
  image: 'url',
  image2: 'url',
  tag: 'New',           // or 'Limited', 'Sold Out', null
  featured: true
}
```

### Category Object
```javascript
{
  id: 1,
  name: 'Hoodies',
  image: 'url',
  slug: 'hoodies'
}
```

### Collection Object
```javascript
{
  id: 1,
  name: 'Spring/Summer 2024',
  slug: 'spring-summer-2024',
  description: 'Description',
  image: 'url'
}
```

## 🔄 State Management

Currently using React's built-in `useState` hook for:
- Mobile menu toggle
- Navbar scroll state
- Newsletter subscription status
- Product image swapping
- Form inputs

## 🎬 Animations & Transitions

- **fade-up**: Fade in + slide up 0.8s
- **fade-in**: Simple fade in 0.6s
- **scale-in**: Scale from 0.95 to 1, fade in 0.6s
- **slide-in**: Slide from left to center 0.4s
- **hover effects**: 300-500ms transitions
- **staggered animations**: 0.1s delays per item

## 🔮 Future Backend Integration

To connect to a real backend API:

1. **Replace placeholder data** in `src/data/products.js` with API calls
2. **Add API service layer**: Create `src/services/api.js`
3. **Implement React hooks**: Use `useEffect` and `useContext` for data fetching
4. **Add error handling**: Loading states, error boundaries
5. **Implement authentication**: User login/logout flow
6. **Add to cart functionality**: Cart state management (Context API or Redux)
7. **Product detail pages**: Create product detail route and component
8. **Search & filter**: Implement product search and category filtering
9. **Checkout flow**: Create multi-step checkout process
10. **Payment integration**: Stripe, PayPal integration

Example API integration:
```javascript
// src/services/api.js
export const fetchProducts = async () => {
  const response = await fetch('https://api.jonayns.com/products');
  return response.json();
};

// In component
useEffect(() => {
  fetchProducts().then(setProducts);
}, []);
```

## 📱 Responsive Breakpoints

- **Mobile**: Default (< 640px)
- **Small**: `sm` (640px+)
- **Medium**: `md` (768px+)
- **Large**: `lg` (1024px+)
- **X-Large**: `xl` (1280px+)
- **2X-Large**: `2xl` (1536px+)

## 🎨 Customization Guide

### Change Brand Name
1. Edit logo text in `Header.jsx`
2. Update footer branding in `Footer.jsx`
3. Update hero headline in `Hero.jsx`

### Change Colors
Edit `tailwind.config.js` - modify the color system or swap variables throughout components.

### Add Products
Add new product objects to `src/data/products.js` - the grid will automatically display them.

### Update Hero Image
Replace the gradient background in `Hero.jsx` with a real image URL.

### Modify Typography
Update font sizes and weights in `tailwind.config.js` or individual components.

## 📋 Component Guidelines

### Creating New Components
1. Create component file in `src/components/`
2. Use clear, descriptive names
3. Accept props for reusability
4. Include animations for premium feel
5. Use Tailwind utility classes
6. Follow existing naming conventions

### Styling Principles
- Use Tailwind utilities first
- Minimize custom CSS
- Keep component styles in component files
- Use responsive prefixes (md:, lg:, etc.)
- Maintain whitespace and breathing room

## 🐛 Troubleshooting

### Dev server not starting
```bash
# Clear node_modules and reinstall
rm -r node_modules package-lock.json
npm install
npm run dev
```

### Tailwind styles not applying
```bash
# Check postcss.config.js and tailwind.config.js exist
# Restart dev server
npm run dev
```

### Build errors
```bash
# Check for syntax errors in components
npm run build
```

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vite.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [JavaScript ES6+ Features](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 📄 License

This project is created for the JONAYNS brand. All rights reserved.

---

**Built with premium design principles and modern web technology.**
JONAYNS - Premium Streetwear for the Modern Era
