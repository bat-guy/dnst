# Dong Nhan Stone Website - Complete Code Export

## Project Overview

A modern, responsive redesign of the Dong Nhan Stone website featuring:
- **Brand Colors:** Primary #51237d (Purple), Secondary #ffcf01 (Yellow)
- **Brand Fonts:** Lexend (primary), Special Elite (secondary)
- **Technology:** React + TypeScript + Tailwind CSS + React Router
- **Pages:** Home, About Us, CaCO₃ Powder, White Stone, News, Contact

---

## File Structure

```
src/
├── app/
│   ├── App.tsx
│   ├── routes.ts
│   ├── components/
│   │   ├── Navigation.tsx
│   │   └── Layout.tsx
│   └── pages/
│       ├── Home.tsx
│       ├── About.tsx
│       ├── CaCO3Powder.tsx
│       ├── WhiteStone.tsx
│       ├── News.tsx
│       ├── Contact.tsx
│       └── NotFound.tsx
└── styles/
    ├── fonts.css
    └── theme.css
```

---

## CSS Files

### src/styles/fonts.css

@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');

---

### src/styles/theme.css

```css
@custom-variant dark (&:is(.dark *));

:root {
  --font-size: 16px;
  --background: #ffffff;
  --foreground: #1a1a1a;
  --card: #ffffff;
  --card-foreground: #1a1a1a;
  --popover: #ffffff;
  --popover-foreground: #1a1a1a;
  --primary: #51237d;
  --primary-foreground: #ffffff;
  --secondary: #ffcf01;
  --secondary-foreground: #1a1a1a;
  --muted: #f5f5f5;
  --muted-foreground: #666666;
  --accent: #ffcf01;
  --accent-foreground: #1a1a1a;
  --destructive: #d4183d;
  --destructive-foreground: #ffffff;
  --border: rgba(81, 35, 125, 0.15);
  --input: transparent;
  --input-background: #f9f9f9;
  --switch-background: #cbced4;
  --font-weight-medium: 500;
  --font-weight-normal: 400;
  --ring: #51237d;
  --chart-1: #51237d;
  --chart-2: #ffcf01;
  --chart-3: #8b4fb3;
  --chart-4: #ffd633;
  --chart-5: #3d1a5f;
  --radius: 0.5rem;
  --sidebar: #51237d;
  --sidebar-foreground: #ffffff;
  --sidebar-primary: #ffcf01;
  --sidebar-primary-foreground: #1a1a1a;
  --sidebar-accent: #3d1a5f;
  --sidebar-accent-foreground: #ffffff;
  --sidebar-border: rgba(255, 207, 1, 0.2);
  --sidebar-ring: #ffcf01;
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.145 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.145 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.396 0.141 25.723);
  --destructive-foreground: oklch(0.637 0.237 25.331);
  --border: oklch(0.269 0 0);
  --input: oklch(0.269 0 0);
  --ring: oklch(0.439 0 0);
  --font-weight-medium: 500;
  --font-weight-normal: 400;
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(0.269 0 0);
  --sidebar-ring: oklch(0.439 0 0);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-input-background: var(--input-background);
  --color-switch-background: var(--switch-background);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  body {
    @apply bg-background text-foreground;
    font-family: 'Lexend', sans-serif;
  }

  /**
  * Default typography styles for HTML elements (h1-h4, p, label, button, input).
  * These are in @layer base, so Tailwind utility classes (like text-sm, text-lg) automatically override them.
  */

  html {
    font-size: var(--font-size);
  }

  h1 {
    font-size: var(--text-2xl);
    font-weight: var(--font-weight-medium);
    line-height: 1.5;
  }

  h2 {
    font-size: var(--text-xl);
    font-weight: var(--font-weight-medium);
    line-height: 1.5;
  }

  h3 {
    font-size: var(--text-lg);
    font-weight: var(--font-weight-medium);
    line-height: 1.5;
  }

  h4 {
    font-size: var(--text-base);
    font-weight: var(--font-weight-medium);
    line-height: 1.5;
  }

  label {
    font-size: var(--text-base);
    font-weight: var(--font-weight-medium);
    line-height: 1.5;
  }

  button {
    font-size: var(--text-base);
    font-weight: var(--font-weight-medium);
    line-height: 1.5;
  }

  input {
    font-size: var(--text-base);
    font-weight: var(--font-weight-normal);
    line-height: 1.5;
  }
}
```

---

## React/TypeScript Components

### src/app/App.tsx

```tsx
import { RouterProvider } from 'react-router';
import { router } from './routes';

export default function App() {
  return <RouterProvider router={router} />;
}```

---

### src/app/routes.ts

```tsx
import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { CaCO3Powder } from './pages/CaCO3Powder';
import { WhiteStone } from './pages/WhiteStone';
import { News } from './pages/News';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'caco3-powder', Component: CaCO3Powder },
      { path: 'white-stone', Component: WhiteStone },
      { path: 'news', Component: News },
      { path: 'contact', Component: Contact },
      { path: '*', Component: NotFound },
    ],
  },
]);
```

---

### src/app/components/Navigation.tsx

```tsx
import { Link, useLocation } from 'react-router';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/caco3-powder', label: 'CaCO₃ Powder' },
    { path: '/white-stone', label: 'White Stone' },
    { path: '/news', label: 'News' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
              <span className="font-bold text-2xl text-primary">DN</span>
            </div>
            <div>
              <div className="font-bold text-xl">Dong Nhan Stone</div>
              <div className="text-xs text-secondary">Premium Stone Supplier</div>
            </div>
          </Link>

          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive(item.path)
                    ? 'bg-secondary text-primary font-semibold'
                    : 'hover:bg-primary-foreground/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive(item.path)
                    ? 'bg-secondary text-primary font-semibold'
                    : 'hover:bg-primary-foreground/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
```

---

### src/app/components/Layout.tsx

```tsx
import { Outlet } from 'react-router';
import { Navigation } from './Navigation';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-secondary">Dong Nhan Stone</h3>
              <p className="text-sm opacity-90">
                Premium CaCO₃ Powder & White Stone supplier from Vietnam, committed to quality, innovation, and sustainable solutions.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-secondary">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/about" className="hover:text-secondary transition-colors">About Us</a></li>
                <li><a href="/caco3-powder" className="hover:text-secondary transition-colors">CaCO₃ Powder</a></li>
                <li><a href="/white-stone" className="hover:text-secondary transition-colors">White Stone</a></li>
                <li><a href="/news" className="hover:text-secondary transition-colors">News</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-secondary">Contact</h3>
              <p className="text-sm opacity-90">
                Vietnam<br />
                Email: info@dongnhanstone.com<br />
                Phone: +84 XXX XXX XXX
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-75">
            © {new Date().getFullYear()} Dong Nhan Stone. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
```

---

## Page Components

### src/app/pages/Home.tsx

```tsx
import { Link } from 'react-router';
import { ArrowRight, CheckCircle, Award, Users, Globe } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1695169152266-d9ac86fab9c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9uZSUyMHF1YXJyeSUyMG1pbmluZ3xlbnwxfHx8fDE3NzUxMzA5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Stone quarry"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-20 text-center px-4 max-w-5xl">
          <div className="text-secondary mb-4" style={{ fontFamily: "'Special Elite', cursive" }}>
            Think alike, grow together
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Premium CaCO₃ Powder & White Stone Supplier
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Quality, Innovation, and Sustainable Solutions from Vietnam
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/caco3-powder"
              className="bg-secondary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-all duration-300 transform hover:scale-105"
            >
              Explore CaCO₃ Powder
            </Link>
            <Link
              to="/white-stone"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
            >
              View White Stone
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-secondary mb-2" style={{ fontFamily: "'Special Elite', cursive" }}>
              About Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Thinking Alike, Growing Together for a Stronger Future
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Dong Nhan Stone, we are committed to delivering premium quality CaCO₃ powder and white stone products to industries worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-muted rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-secondary" size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">Quality Assured</h3>
              <p className="text-gray-600">Rigorous testing and quality control standards</p>
            </div>

            <div className="text-center p-6 bg-muted rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-secondary" size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">Global Reach</h3>
              <p className="text-gray-600">Serving customers across multiple countries</p>
            </div>

            <div className="text-center p-6 bg-muted rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-secondary" size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">Expert Team</h3>
              <p className="text-gray-600">Experienced professionals dedicated to excellence</p>
            </div>

            <div className="text-center p-6 bg-muted rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-secondary" size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">Sustainable</h3>
              <p className="text-gray-600">Environmentally responsible practices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-secondary mb-2" style={{ fontFamily: "'Special Elite', cursive" }}>
              Our Specialties
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Premium Products
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/caco3-powder" className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1772543983082-a8a8051ab612?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzdG9uZSUyMHF1YXJyeSUyMG1pbmluZ3xlbnwxfHx8fDE3NzUxMzA5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="CaCO3 Powder"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">CaCO₃ Powder</h3>
                  <p className="text-gray-600 mb-4">
                    High-purity calcium carbonate powder for diverse industrial applications, from construction to manufacturing.
                  </p>
                  <div className="flex items-center text-secondary font-semibold group-hover:translate-x-2 transition-transform">
                    Learn More <ArrowRight className="ml-2" size={20} />
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/white-stone" className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1759494373228-f2b9f5d0dc2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxzdG9uZSUyMHF1YXJyeSUyMG1pbmluZ3xlbnwxfHx8fDE3NzUxMzA5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="White Stone Blocks"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">White Stone Blocks</h3>
                  <p className="text-gray-600 mb-4">
                    Premium quality white stone blocks perfect for construction, landscaping, and decorative applications.
                  </p>
                  <div className="flex items-center text-secondary font-semibold group-hover:translate-x-2 transition-transform">
                    Learn More <ArrowRight className="ml-2" size={20} />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-secondary mb-2" style={{ fontFamily: "'Special Elite', cursive" }}>
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Experience, Quality, and Reliability You Can Trust
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <div className="text-5xl font-bold text-secondary mb-4">15+</div>
              <h3 className="text-xl font-semibold mb-2">Years of Experience</h3>
              <p className="text-white/80">Proven track record in the stone industry</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <div className="text-5xl font-bold text-secondary mb-4">99.9%</div>
              <h3 className="text-xl font-semibold mb-2">Purity Standard</h3>
              <p className="text-white/80">Premium quality CaCO₃ products</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <div className="text-5xl font-bold text-secondary mb-4">20+</div>
              <h3 className="text-xl font-semibold mb-2">Countries Served</h3>
              <p className="text-white/80">Global distribution network</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-secondary to-secondary/80">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-primary/80 mb-8">
            Contact us today to discuss your stone and powder needs
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary text-white px-10 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
```

---

### src/app/pages/About.tsx

```tsx
import { Target, TrendingUp, Shield, Lightbulb } from 'lucide-react';

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-primary to-primary/80">
        <div className="text-center px-4 max-w-4xl">
          <div className="text-secondary mb-4" style={{ fontFamily: "'Special Elite', cursive" }}>
            About Dong Nhan Stone
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Thinking Alike, Growing Together for a Stronger Future
          </h1>
          <p className="text-xl text-white/90">
            Building partnerships through quality and innovation
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                Dong Nhan Stone has been at the forefront of Vietnam's stone and mineral industry for over 15 years. What began as a small quarry operation has grown into a leading supplier of premium CaCO₃ powder and white stone products.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Our commitment to quality and customer satisfaction has enabled us to expand our operations across Southeast Asia and beyond, serving clients in over 20 countries worldwide.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to invest in cutting-edge technology and sustainable practices, ensuring that we deliver the highest quality products while minimizing our environmental impact.
              </p>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1695169152303-fdbd96a95cc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzdG9uZSUyMHF1YXJyeSUyMG1pbmluZ3xlbnwxfHx8fDE3NzUxMzA5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Our quarry"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6">
                <Shield className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on the quality of our products, ensuring every shipment meets the highest standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Innovation</h3>
              <p className="text-gray-600">
                Continuous improvement through research, technology, and modern processing techniques.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6">
                <Target className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Reliability</h3>
              <p className="text-gray-600">
                Consistent delivery, transparent communication, and dependable partnerships with our clients.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Sustainability</h3>
              <p className="text-gray-600">
                Environmentally responsible practices that protect our planet for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-sm p-10 rounded-xl">
              <h2 className="text-3xl font-bold text-secondary mb-6">Our Mission</h2>
              <p className="text-lg text-white/90 leading-relaxed">
                To provide premium quality CaCO₃ powder and white stone products that exceed customer expectations while maintaining sustainable and environmentally responsible operations. We strive to be a trusted partner in our clients' success through innovation, reliability, and exceptional service.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-10 rounded-xl">
              <h2 className="text-3xl font-bold text-secondary mb-6">Our Vision</h2>
              <p className="text-lg text-white/90 leading-relaxed">
                To become the leading stone and mineral supplier in Southeast Asia, recognized globally for our commitment to quality, innovation, and sustainability. We envision a future where our products contribute to building stronger communities and a better world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expansion Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Expanding Our Reach
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              New Laos factory under construction - strengthening our regional presence
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary to-primary/90 p-12 rounded-2xl text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-6">Our Commitment to Growth</h3>
              <p className="text-lg mb-6 leading-relaxed">
                We are currently expanding our operations with a new state-of-the-art facility in Laos. This strategic investment will increase our production capacity, improve efficiency, and allow us to better serve our growing customer base across the region.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="text-3xl font-bold text-secondary mb-2">2026</div>
                  <div className="text-sm">Expected Completion</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="text-3xl font-bold text-secondary mb-2">+50%</div>
                  <div className="text-sm">Increased Capacity</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="text-3xl font-bold text-secondary mb-2">150+</div>
                  <div className="text-sm">New Jobs Created</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
```

---

### src/app/pages/CaCO3Powder.tsx

```tsx
import { Link } from 'react-router';
import { Factory, Beaker, Package, TrendingUp, CheckCircle } from 'lucide-react';

export function CaCO3Powder() {
  const applications = [
    {
      title: 'Construction & Building',
      description: 'Essential component in cement, concrete, and building materials for enhanced strength and durability.',
      icon: Factory,
    },
    {
      title: 'Paints & Coatings',
      description: 'Improves opacity, whiteness, and durability in paint formulations and protective coatings.',
      icon: Beaker,
    },
    {
      title: 'Plastics & Polymers',
      description: 'Acts as a filler to reduce costs and improve physical properties in plastic manufacturing.',
      icon: Package,
    },
    {
      title: 'Paper Industry',
      description: 'Enhances brightness, opacity, and printability in paper production processes.',
      icon: TrendingUp,
    },
  ];

  const specifications = [
    { property: 'Chemical Formula', value: 'CaCO₃' },
    { property: 'Purity', value: '≥ 99.5%' },
    { property: 'Whiteness', value: '≥ 95%' },
    { property: 'Particle Size', value: 'Custom (1-100 μm)' },
    { property: 'Moisture Content', value: '≤ 0.5%' },
    { property: 'pH Value', value: '8-10' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-primary to-primary/80">
        <div className="text-center px-4 max-w-4xl">
          <div className="text-secondary mb-4" style={{ fontFamily: "'Special Elite', cursive" }}>
            Premium Quality
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            CaCO₃ Powder
          </h1>
          <p className="text-xl text-white/90">
            High-purity calcium carbonate for diverse industrial applications
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Product Overview</h2>
              <p className="text-lg text-gray-600 mb-4">
                Our premium CaCO₃ (Calcium Carbonate) powder is produced using advanced processing techniques to ensure exceptional purity and consistency. Sourced from high-quality limestone deposits, our product meets the stringent requirements of various industries.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Available in multiple particle size distributions, our CaCO₃ powder can be customized to meet your specific application needs, from fine to ultra-fine grades.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold">
                  ≥99.5% Purity
                </div>
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold">
                  Custom Particle Size
                </div>
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold">
                  ISO Certified
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1772543983082-a8a8051ab612?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzdG9uZSUyMHF1YXJyeSUyMG1pbmluZ3xlbnwxfHx8fDE3NzUxMzA5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="CaCO3 Production"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Applications in Modern Industries
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our CaCO₃ powder is trusted across multiple sectors for its versatility and quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, index) => {
              const Icon = app.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">{app.title}</h3>
                  <p className="text-gray-600">{app.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Technical Specifications
            </h2>
            <p className="text-lg text-gray-600">
              Detailed product specifications for quality assurance
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary to-primary/90 p-10 rounded-2xl shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {specifications.map((spec, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <div className="text-secondary font-semibold mb-2">{spec.property}</div>
                    <div className="text-white text-2xl font-bold">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-96 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1761549052038-8f5aafbf236c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxzdG9uZSUyMHF1YXJyeSUyMG1pbmluZ3xlbnwxfHx8fDE3NzUxMzA5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Quality control"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-primary mb-6">Quality Assurance</h2>
              <p className="text-lg text-gray-600 mb-6">
                Every batch of our CaCO₃ powder undergoes rigorous testing to ensure it meets international quality standards. Our state-of-the-art laboratory facilities and experienced quality control team guarantee consistent product excellence.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-secondary mr-3 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-lg mb-1">ISO 9001:2015 Certified</h4>
                    <p className="text-gray-600">International quality management standards</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-secondary mr-3 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Advanced Testing</h4>
                    <p className="text-gray-600">XRF, particle size analysis, and purity testing</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-secondary mr-3 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Complete Documentation</h4>
                    <p className="text-gray-600">Certificates of analysis with every shipment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-secondary to-secondary/80">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Request a Quote
          </h2>
          <p className="text-xl text-primary/80 mb-8">
            Get in touch to discuss your CaCO₃ powder requirements and pricing
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary text-white px-10 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
          >
            Contact Our Sales Team
          </Link>
        </div>
      </section>
    </div>
  );
}
```

---

### src/app/pages/WhiteStone.tsx

```tsx
import { Link } from 'react-router';
import { Home, TreePine, Palette, Building2, CheckCircle, Ruler } from 'lucide-react';

export function WhiteStone() {
  const applications = [
    {
      title: 'Construction Projects',
      description: 'Ideal for structural foundations, walls, and building facades with excellent load-bearing properties.',
      icon: Building2,
    },
    {
      title: 'Landscaping',
      description: 'Perfect for garden features, retaining walls, pathways, and decorative outdoor elements.',
      icon: TreePine,
    },
    {
      title: 'Interior Design',
      description: 'Elegant flooring, wall cladding, and architectural features for modern and classic interiors.',
      icon: Home,
    },
    {
      title: 'Decorative Applications',
      description: 'Sculptures, monuments, and artistic installations showcasing the natural beauty of white stone.',
      icon: Palette,
    },
  ];

  const sizes = [
    '100 x 100 x 50 mm',
    '200 x 100 x 50 mm',
    '200 x 200 x 100 mm',
    '300 x 150 x 100 mm',
    '400 x 200 x 100 mm',
    'Custom sizes available',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-primary to-primary/80">
        <div className="text-center px-4 max-w-4xl">
          <div className="text-secondary mb-4" style={{ fontFamily: "'Special Elite', cursive" }}>
            Natural Beauty
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            White Stone Blocks
          </h1>
          <p className="text-xl text-white/90">
            Premium quality natural white stone for construction and design
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-96 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1759494373228-f2b9f5d0dc2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxzdG9uZSUyMHF1YXJyeSUyMG1pbmluZ3xlbnwxfHx8fDE3NzUxMzA5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="White stone blocks"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-primary mb-6">Product Overview</h2>
              <p className="text-lg text-gray-600 mb-4">
                Our white stone blocks are carefully extracted from premium quarries, selected for their exceptional whiteness, uniformity, and structural integrity. Each block undergoes precise cutting and finishing to meet exact specifications.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                The natural beauty and durability of our white stone makes it an ideal choice for both functional construction and aesthetic applications, from modern architecture to traditional craftsmanship.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold">
                  Natural White
                </div>
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold">
                  High Durability
                </div>
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold">
                  Custom Sizes
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Versatile Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From construction to decoration, our white stone serves countless purposes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, index) => {
              const Icon = app.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">{app.title}</h3>
                  <p className="text-gray-600">{app.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sizes & Specifications */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Available Sizes & Specifications
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We offer a wide range of standard sizes and can also provide custom-cut blocks to meet your specific project requirements. All blocks are precision-cut and quality-checked before shipment.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {sizes.map((size, index) => (
                  <div key={index} className="flex items-center bg-muted p-4 rounded-lg">
                    <Ruler className="text-secondary mr-3 flex-shrink-0" size={20} />
                    <span className="font-semibold text-primary">{size}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary to-primary/90 p-10 rounded-2xl shadow-2xl text-white">
              <h3 className="text-2xl font-bold text-secondary mb-6">Product Characteristics</h3>
              <div className="space-y-4">
                <div className="border-b border-white/20 pb-3">
                  <div className="text-sm text-white/70 mb-1">Color</div>
                  <div className="text-lg font-semibold">Pure White to Off-White</div>
                </div>
                <div className="border-b border-white/20 pb-3">
                  <div className="text-sm text-white/70 mb-1">Density</div>
                  <div className="text-lg font-semibold">2.6 - 2.8 g/cm³</div>
                </div>
                <div className="border-b border-white/20 pb-3">
                  <div className="text-sm text-white/70 mb-1">Compressive Strength</div>
                  <div className="text-lg font-semibold">≥ 100 MPa</div>
                </div>
                <div className="border-b border-white/20 pb-3">
                  <div className="text-sm text-white/70 mb-1">Water Absorption</div>
                  <div className="text-lg font-semibold">≤ 0.5%</div>
                </div>
                <div className="pb-3">
                  <div className="text-sm text-white/70 mb-1">Finish Options</div>
                  <div className="text-lg font-semibold">Natural, Polished, Honed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Why Choose Our White Stone
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <CheckCircle className="text-secondary mb-4" size={40} />
              <h3 className="text-xl font-bold text-primary mb-3">Superior Quality</h3>
              <p className="text-gray-600">
                Carefully selected from premium quarries, each block meets strict quality standards for color consistency and structural integrity.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <CheckCircle className="text-secondary mb-4" size={40} />
              <h3 className="text-xl font-bold text-primary mb-3">Weather Resistant</h3>
              <p className="text-gray-600">
                Excellent durability and resistance to weathering, making it ideal for both interior and exterior applications.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <CheckCircle className="text-secondary mb-4" size={40} />
              <h3 className="text-xl font-bold text-primary mb-3">Sustainable Sourcing</h3>
              <p className="text-gray-600">
                Responsibly quarried with minimal environmental impact, supporting sustainable construction practices.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <CheckCircle className="text-secondary mb-4" size={40} />
              <h3 className="text-xl font-bold text-primary mb-3">Easy to Work With</h3>
              <p className="text-gray-600">
                Can be easily cut, shaped, and finished to meet specific design requirements and architectural visions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <CheckCircle className="text-secondary mb-4" size={40} />
              <h3 className="text-xl font-bold text-primary mb-3">Timeless Elegance</h3>
              <p className="text-gray-600">
                Natural white stone brings classic beauty and sophistication to any project, from traditional to contemporary.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <CheckCircle className="text-secondary mb-4" size={40} />
              <h3 className="text-xl font-bold text-primary mb-3">Cost-Effective</h3>
              <p className="text-gray-600">
                Competitive pricing with excellent value for money, combined with long-lasting durability that reduces replacement costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-secondary to-secondary/80">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Request a Quote
          </h2>
          <p className="text-xl text-primary/80 mb-8">
            Contact us to discuss your white stone requirements and receive a custom quote
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary text-white px-10 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
```

---

### src/app/pages/News.tsx

```tsx
import { Calendar, ArrowRight } from 'lucide-react';

export function News() {
  const newsArticles = [
    {
      title: 'New Laos Factory Under Construction – Dong Nhan Stone Expands Production',
      date: 'October 10, 2025',
      excerpt: 'Dong Nhan Stone announces major expansion with new state-of-the-art facility in Laos, set to increase production capacity by 50% and create over 150 new jobs in the region.',
      image: 'https://images.unsplash.com/photo-1695169152266-d9ac86fab9c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9uZSUyMHF1YXJyeSUyMG1pbmluZ3xlbnwxfHx8fDE3NzUxMzA5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Company News',
    },
    {
      title: 'Applications of CaCO₃ Powder in Modern Industries',
      date: 'September 15, 2025',
      excerpt: 'Exploring the diverse applications of calcium carbonate powder across construction, manufacturing, and emerging industries. Learn how CaCO₃ is shaping the future of sustainable materials.',
      image: 'https://images.unsplash.com/photo-1772543983082-a8a8051ab612?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzdG9uZSUyMHF1YXJyeSUyMG1pbmluZ3xlbnwxfHx8fDE3NzUxMzA5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Industry Insights',
    },
    {
      title: 'Dong Nhan Stone Quality Assurance Process',
      date: 'August 22, 2025',
      excerpt: 'A behind-the-scenes look at our comprehensive quality control procedures that ensure every shipment meets the highest international standards.',
      image: 'https://images.unsplash.com/photo-1761549052038-8f5aafbf236c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxzdG9uZSUyMHF1YXJyeSUyMG1pbmluZ3xlbnwxfHx8fDE3NzUxMzA5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Quality & Standards',
    },
    {
      title: 'DNST CaCO₃ Powder Product Launch',
      date: 'July 5, 2025',
      excerpt: 'Introducing our new premium line of ultra-fine CaCO₃ powder, specially formulated for high-performance applications in the paint and coating industry.',
      image: 'https://images.unsplash.com/photo-1695169152303-fdbd96a95cc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzdG9uZSUyMHF1YXJyeSUyMG1pbmluZ3xlbnwxfHx8fDE3NzUxMzA5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Product Launch',
    },
    {
      title: 'Sustainable Mining Practices at Dong Nhan Stone',
      date: 'June 18, 2025',
      excerpt: 'Our commitment to environmental responsibility through innovative mining techniques, land rehabilitation programs, and renewable energy adoption.',
      image: 'https://images.unsplash.com/photo-1759494373228-f2b9f5d0dc2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxzdG9uZSUyMHF1YXJyeSUyMG1pbmluZ3xlbnwxfHx8fDE3NzUxMzA5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Sustainability',
    },
    {
      title: 'Partnership Announcement: Expanding into European Markets',
      date: 'May 30, 2025',
      excerpt: 'Dong Nhan Stone announces strategic partnership with leading European distributors to strengthen our presence in Western markets.',
      image: 'https://images.unsplash.com/photo-1695169152266-d9ac86fab9c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9uZSUyMHF1YXJyeSUyMG1pbmluZ3xlbnwxfHx8fDE3NzUxMzA5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Partnerships',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center bg-gradient-to-r from-primary to-primary/80">
        <div className="text-center px-4 max-w-4xl">
          <div className="text-secondary mb-4" style={{ fontFamily: "'Special Elite', cursive" }}>
            Latest Updates
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            News & Insights
          </h1>
          <p className="text-xl text-white/90">
            Stay informed about our latest developments and industry trends
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="h-96 md:h-auto">
                <img
                  src={newsArticles[0].image}
                  alt={newsArticles[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-10 md:p-12 flex flex-col justify-center text-white">
                <div className="inline-block bg-secondary text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4 w-fit">
                  Featured
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {newsArticles[0].title}
                </h2>
                <div className="flex items-center text-secondary mb-4">
                  <Calendar size={18} className="mr-2" />
                  <span>{newsArticles[0].date}</span>
                </div>
                <p className="text-lg text-white/90 mb-6">
                  {newsArticles[0].excerpt}
                </p>
                <button className="flex items-center text-secondary font-semibold hover:translate-x-2 transition-transform w-fit">
                  Read Full Story <ArrowRight className="ml-2" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Recent Articles</h2>
            <p className="text-lg text-gray-600">Explore our latest news and updates</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.slice(1).map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    {article.category}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar size={14} className="mr-2" />
                    <span>{article.date}</span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-secondary font-semibold group-hover:translate-x-2 transition-transform">
                    Read More <ArrowRight className="ml-2" size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to our newsletter for the latest news, insights, and industry updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary"
            />
            <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
```

---

### src/app/pages/Contact.tsx

```tsx
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center bg-gradient-to-r from-primary to-primary/80">
        <div className="text-center px-4 max-w-4xl">
          <div className="text-secondary mb-4" style={{ fontFamily: "'Special Elite', cursive" }}>
            Get in Touch
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-white/90">
            We're here to answer your questions and discuss your needs
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-gradient-to-br from-primary to-primary/90 rounded-xl text-white shadow-lg">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-white/90">+84 XXX XXX XXX</p>
              <p className="text-white/90">+84 YYY YYY YYY</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-primary to-primary/90 rounded-xl text-white shadow-lg">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-white/90">info@dongnhanstone.com</p>
              <p className="text-white/90">sales@dongnhanstone.com</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-primary to-primary/90 rounded-xl text-white shadow-lg">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-white/90">Vietnam</p>
              <p className="text-white/90">Serving 20+ Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-muted">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Send Us a Message</h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and our team will get back to you within 24 hours
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-primary mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="+84 XXX XXX XXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-primary mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="caco3">CaCO₃ Powder Inquiry</option>
                  <option value="whitestone">White Stone Inquiry</option>
                  <option value="quote">Request a Quote</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center"
              >
                <Send className="mr-2" size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map or Additional Info Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">
              Our Facilities
            </h2>
            <p className="text-lg text-white/90">
              Operating across multiple locations to serve you better
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-secondary mb-4">Vietnam Headquarters</h3>
              <p className="text-white/90 mb-4">
                Our main production facility and headquarters are located in Vietnam, where we operate state-of-the-art quarries and processing plants.
              </p>
              <div className="space-y-2 text-white/80">
                <p>✓ Main quarry operations</p>
                <p>✓ CaCO₃ processing facility</p>
                <p>✓ Quality control laboratory</p>
                <p>✓ Administrative offices</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-secondary mb-4">Laos Facility (Under Construction)</h3>
              <p className="text-white/90 mb-4">
                Our new facility in Laos will significantly expand our production capacity and strengthen our regional presence.
              </p>
              <div className="space-y-2 text-white/80">
                <p>✓ Expected completion: 2026</p>
                <p>✓ +50% production capacity</p>
                <p>✓ Advanced processing technology</p>
                <p>✓ 150+ new jobs created</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-primary mb-6">Business Hours</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-primary/90">
            <div>
              <h4 className="font-bold text-lg mb-2">Office Hours</h4>
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 8:00 AM - 12:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Support</h4>
              <p>24/7 Email Support</p>
              <p>Emergency Hotline Available</p>
              <p>Quick Response Guaranteed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
```

---

### src/app/pages/NotFound.tsx

```tsx
import { Link } from 'react-router';
import { Home, ArrowLeft } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary/90 px-4">
      <div className="text-center text-white">
        <h1 className="text-9xl font-bold text-secondary mb-4">404</h1>
        <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="text-xl text-white/90 mb-8">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/"
            className="bg-secondary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-all duration-300 inline-flex items-center"
          >
            <Home className="mr-2" size={20} />
            Go to Homepage
          </Link>
          <button
            onClick={() => window.history.back()}
            className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 inline-flex items-center"
          >
            <ArrowLeft className="mr-2" size={20} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
```

---

## Installation & Setup

### Required Dependencies

```bash
# Install dependencies
pnpm install react-router lucide-react
```

### Package.json Dependencies

```json
{
  "dependencies": {
    "react": "^18.x",
    "react-dom": "^18.x",
    "react-router": "^7.x",
    "lucide-react": "latest"
  }
}
```

### Running the Project

```bash
# Development server
pnpm dev

# Build for production
pnpm build
```

---

## Features

### Navigation
- Responsive mobile navigation with hamburger menu
- Active page highlighting
- Sticky header with brand logo

### Pages

1. **Home** - Hero section, about overview, product showcase, why choose us, CTA
2. **About Us** - Company story, values, mission/vision, expansion info
3. **CaCO₃ Powder** - Product details, applications, specifications, quality assurance
4. **White Stone** - Product overview, applications, sizes, characteristics
5. **News** - Featured article, news grid, newsletter signup
6. **Contact** - Contact form, business info, facilities, hours

### Design Features
- Modern gradient backgrounds
- Hover animations and transitions
- Responsive grid layouts
- Card-based content sections
- Image integration from Unsplash
- Brand color consistency (#51237d purple, #ffcf01 yellow)
- Lexend font throughout

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Hamburger menu for mobile
- Flexible grid layouts
- Touch-friendly interactive elements

---

## Customization Notes

### Changing Colors
Update the CSS variables in `src/styles/theme.css`:
- `--primary: #51237d` (purple)
- `--secondary: #ffcf01` (yellow)

### Changing Fonts
Update font imports in `src/styles/fonts.css` and modify:
```css
body {
  font-family: 'Lexend', sans-serif;
}
```

### Adding New Pages
1. Create new component in `src/app/pages/`
2. Add route in `src/app/routes.ts`
3. Add navigation link in `src/app/components/Navigation.tsx`

---

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Performance Optimizations

- Lazy loading images
- Optimized font loading
- Minimal JavaScript bundle
- CSS-in-Tailwind approach
- React Router code splitting

---

## License

© 2026 Dong Nhan Stone. All rights reserved.

