
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { CountrySelector } from './ui/country-selector';

export function Footer() {
  return (
    <footer className="bg-[#1A2744] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <a href="/" className="inline-block bg-white px-2 py-1 rounded-md">
              <img
                src="/images/omlvs-quikboys-logo.png"
                alt="OMLVS QuikBoys Logo"
                className="h-12 w-auto"
              />
            </a>
            <p className="text-gray-400 leading-relaxed">
              India's smartest logistics network. Delivering happiness, one verified kilometer at a time.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/1hYLhcg7se/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-[#DC2626] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/quik-boys-b502a53a3"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-[#DC2626] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/quikboys_com?igsh=MW0wMHUwZjljZWtrMw=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-[#DC2626] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://wa.me/918341345599"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-[#DC2626] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-[#DC2626] transition-colors">Home</Link></li>
              <li><Link to="/about-us" className="text-gray-400 hover:text-[#DC2626] transition-colors">About Us</Link></li>
              <li><Link to="/driver-onboarding" className="text-gray-400 hover:text-[#DC2626] transition-colors">Ride With Us</Link></li>
              <li><Link to="/hub-operations" className="text-gray-400 hover:text-[#DC2626] transition-colors">Hub Operations</Link></li>
              <li><Link to="/partner-with-us" className="text-gray-400 hover:text-[#DC2626] transition-colors">Partner With Us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-[#DC2626] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-400 hover:text-[#DC2626] transition-colors">Terms of Service</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-[#DC2626] transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">

              {/* Email */}
              <li>
                <a
                  href="mailto:support@quikboys.com"
                  className="text-gray-400 hover:text-[#DC2626] transition-colors"
                >
                  support@quikboys.com
                </a>
              </li>

              {/* WhatsApp */}
              <li>
                <a
                  href="https://wa.me/918904538989"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#DC2626] transition-colors"
                >
                  WhatsApp: +91 8904538989
                </a>
              </li>

              <li>
                <a
                  href="tel:18004014018"
                  className="text-gray-400 hover:text-[#DC2626] transition-colors"
                >
                  Toll Free: 1800 401 4018
                </a>
              </li>

              <li className="pt-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm">Region:</span>
                  <div className="light-theme-wrapper">
                    <CountrySelector />
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">

          <div className="text-gray-400 text-sm flex flex-col items-center md:items-start">

            <p>
              © {new Date().getFullYear()} OMLVS Private Limited. All rights reserved.
            </p>

            <div className="mt-2 flex items-center justify-center md:justify-start gap-2">
              <span className="opacity-60 text-xs text-white">Powered by:</span>

              <img
                src="/images/omlvs-logo.png"
                alt="OMLVS"
                className="h-6 w-auto object-contain"
              />
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}
