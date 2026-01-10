import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { CountrySelector } from './ui/country-selector';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"


export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNav = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="QuikBoys Logo" className="h-10 sm:h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link to="/" className="text-[#1A2744] font-medium hover:text-[#DC2626] transition-colors">
              Home
            </Link>
            <Link to="/about-us" className="text-[#1A2744] font-medium hover:text-[#DC2626] transition-colors">
              About Us
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-[#1A2744] font-medium hover:text-[#DC2626] transition-colors focus:outline-none data-[state=open]:text-[#DC2626]">
                Join Us <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => navigate('/driver-onboarding')} className="cursor-pointer">
                  Ride With Us
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/hub-operations')} className="cursor-pointer">
                  Hub Operations
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/careers" className="text-[#1A2744] font-medium hover:text-[#DC2626] transition-colors">
              Careers
            </Link>
            <Link to="/partner-with-us" className="text-[#1A2744] font-medium hover:text-[#DC2626] transition-colors">
              Partner with Us
            </Link>
            <Link to="/contact" className="text-[#1A2744] font-medium hover:text-[#DC2626] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-4">
            <CountrySelector />
            <Button
              className="bg-[#1A2744] hover:bg-[#0A1830] text-white"
              onClick={() => navigate('/hub-operations')}
            >
              Join Hub Operations
            </Button>
            <Button
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white"
              onClick={() => navigate('/driver-onboarding')}
            >
              Join as a Rider
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#1A2744] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg h-[calc(100vh-64px)] overflow-y-auto">
          <div className="px-4 py-6 space-y-6">
            <div className="flex flex-col space-y-4">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-[#1A2744] font-medium text-lg">
                Home
              </Link>
              <Link to="/about-us" onClick={() => setMobileMenuOpen(false)} className="text-[#1A2744] font-medium text-lg">
                About Us
              </Link>

              <Accordion type="single" collapsible className="w-full border-none">
                <AccordionItem value="join-us" className="border-none">
                  <AccordionTrigger className="text-[#1A2744] font-medium text-lg py-0 hover:no-underline hover:text-[#DC2626]">
                    Join Us
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pl-4 flex flex-col space-y-3">
                    <button onClick={() => handleNav('/driver-onboarding')} className="text-left text-gray-600 font-medium">
                      Ride With Us
                    </button>
                    <button onClick={() => handleNav('/hub-operations')} className="text-left text-gray-600 font-medium">
                      Hub Operations
                    </button>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Link to="/careers" onClick={() => setMobileMenuOpen(false)} className="text-[#1A2744] font-medium text-lg">
                Careers
              </Link>
              <Link to="/partner-with-us" onClick={() => setMobileMenuOpen(false)} className="text-[#1A2744] font-medium text-lg">
                Partner with Us
              </Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-[#1A2744] font-medium text-lg">
                Contact
              </Link>
            </div>

            <div className="pt-6 border-t border-gray-100 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-500 font-medium">Country</span>
                <CountrySelector />
              </div>
              <Button
                className="bg-[#1A2744] hover:bg-[#0A1830] text-white w-full"
                onClick={() => handleNav('/hub-operations')}
              >
                Join Hub Operations
              </Button>
              <Button
                className="bg-[#DC2626] hover:bg-[#B91C1C] text-white w-full"
                onClick={() => handleNav('/driver-onboarding')}
              >
                Join as a Rider
              </Button>
              <Button
                variant="outline"
                className="border-[#DC2626] text-[#DC2626] hover:bg-[#DC2626] hover:text-white w-full"
                onClick={() => handleNav('/partner-with-us')}
              >
                Partner with Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}