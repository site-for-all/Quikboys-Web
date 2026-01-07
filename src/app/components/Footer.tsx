import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0A2540] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center gap-2">
              <img src="/images/delivery-logo.png" alt="QuikBoys Logo" className="h-20 w-auto" />
            </div>
            <p className="text-[#4A90E2] text-lg">Hero Return × Zero Dead KM</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-6">
            <a
              href="https://www.facebook.com/share/1hYLhcg7se/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#4A90E2] transition duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-8 h-8 sm:w-10 sm:h-10" />
            </a>
            <a
              href="https://www.linkedin.com/in/quik-boys-b502a53a3"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#4A90E2] transition duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-8 h-8 sm:w-10 sm:h-10" />
            </a>
            <a
              href="https://www.instagram.com/quikboys_com?igsh=MW0wMHUwZjljZWtrMw=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#4A90E2] transition duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-8 h-8 sm:w-10 sm:h-10" />
            </a>
            <a
              href="https://wa.me/918341345599"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#4A90E2] transition duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10" />
            </a>
          </div>

          {/* Application Links */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center">
            <Link
              to="/driver-onboarding"
              className="text-white hover:text-[#4A90E2] transition duration-300 underline"
            >
              Join as a Rider
            </Link>
            <Link
              to="/hub-captain"
              className="text-white hover:text-[#4A90E2] transition duration-300 underline"
            >
              Join as Hub Captain
            </Link>
            <Link
              to="/partner-with-us"
              className="text-white hover:text-[#4A90E2] transition duration-300 underline"
            >
              Partner with Us
            </Link>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm text-gray-300">
            <Link to="/privacy-policy" className="hover:text-[#4A90E2] transition">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link to="/terms-of-service" className="hover:text-[#4A90E2] transition">
              Terms of Service
            </Link>
            <span>|</span>
            <Link to="/rider-agreement" className="hover:text-[#4A90E2] transition">
              Rider Agreement
            </Link>
            <span>|</span>
            <Link to="/cookie-policy" className="hover:text-[#4A90E2] transition">
              Cookie Policy
            </Link>
          </div>

          
          {/* Powered By Section */}
          <div className="flex flex-col items-center space-y-2 pb-4">
            <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">Powered By</span>
            <img src="/images/omlvs-logo.png" alt="OMLVS Logo" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity" />
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-400 pt-4 border-t border-gray-700 w-full">
            <p>© 2026 QuikBoys. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
