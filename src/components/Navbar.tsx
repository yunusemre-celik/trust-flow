import React from 'react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const navLinks = [
    { label: 'Product', href: '#product' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Company', href: '#company' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-10 md:px-14 py-4 sm:py-5 flex items-center justify-between pointer-events-auto">
      {/* Left zone: Logo & Wordmark */}
      <a href="#" className="flex items-center gap-2.5 group cursor-pointer focus:outline-none">
        <Logo className="w-6 h-6 text-[#191919] transition-transform duration-200 group-hover:scale-105" />
        <span className="font-semibold text-base tracking-tight text-[#191919]">
          Boomerang
        </span>
      </a>

      {/* Center zone: Links (hidden below md) */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm text-[#191919]/70 hover:text-[#191919] transition-colors duration-200 font-medium"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Right zone: CTA button */}
      <div>
        <a
          href="#book-a-demo"
          className="inline-block px-5 py-2.5 bg-[#191919] text-white text-sm font-medium rounded-lg hover:bg-[#191919]/90 transition-colors duration-200 shadow-sm"
        >
          Book A Demo
        </a>
      </div>
    </nav>
  );
};
