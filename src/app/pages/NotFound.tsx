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
