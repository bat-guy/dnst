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
