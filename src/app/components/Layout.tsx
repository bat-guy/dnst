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
