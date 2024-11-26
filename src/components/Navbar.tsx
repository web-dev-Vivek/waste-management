import { Menu, X, Leaf } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export function Navbar({ currentView, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (view: string) => {
    setIsOpen(false);
    onNavigate(view);
  };

  return (
    <nav className="bg-green-50 border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button 
              onClick={() => handleNavigation('home')}
              className="flex items-center"
            >
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-semibold text-green-800">EcoMarket</span>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('home')}
              className={`text-green-700 hover:text-green-900 ${currentView === 'home' ? 'font-semibold' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('contact')}
              className={`text-green-700 hover:text-green-900 ${currentView === 'contact' ? 'font-semibold' : ''}`}
            >
              Contact
            </button>
            <button 
              onClick={() => handleNavigation('blog')}
              className={`text-green-700 hover:text-green-900 ${currentView === 'blog' ? 'font-semibold' : ''}`}
            >
              Blog
            </button>
            <button 
              onClick={() => handleNavigation('login')}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-green-700 hover:text-green-900"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button 
              onClick={() => handleNavigation('home')}
              className="block w-full text-left px-3 py-2 text-green-700 hover:text-green-900"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('contact')}
              className="block w-full text-left px-3 py-2 text-green-700 hover:text-green-900"
            >
              Contact
            </button>
            <button 
              onClick={() => handleNavigation('blog')}
              className="block w-full text-left px-3 py-2 text-green-700 hover:text-green-900"
            >
              Blog
            </button>
            <button 
              onClick={() => handleNavigation('login')}
              className="block w-full text-left px-3 py-2 text-green-700 hover:text-green-900"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}