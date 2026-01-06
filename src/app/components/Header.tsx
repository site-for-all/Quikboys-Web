import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-[#0A2540] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-white">
            <img src="/images/logo.png" alt="QuikBoys Logo" className="h-14 w-auto" />
          </Link>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              className="bg-[#4A90E2] hover:bg-[#3A7BC8] text-white"
              onClick={() => navigate('/driver-onboarding')}
            >
              Join as a Rider
            </Button>
            <Button 
              variant="outline"
              className="border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white"
              onClick={() => navigate('/hub-captain')}
            >
              Join as Hub Captain
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A2540] border-t border-[#4A90E2]">
          <div className="px-4 py-4 space-y-2">
            <Button 
              className="bg-[#4A90E2] hover:bg-[#3A7BC8] text-white w-full"
              onClick={() => {
                navigate('/driver-onboarding');
                setMobileMenuOpen(false);
              }}
            >
              Join as a Rider
            </Button>
            <Button 
              variant="outline"
              className="border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white w-full"
              onClick={() => {
                navigate('/hub-captain');
                setMobileMenuOpen(false);
              }}
            >
              Join as Hub Captain
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}