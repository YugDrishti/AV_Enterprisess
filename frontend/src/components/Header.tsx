"use client"
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="/logo.png?v=3" 
            alt="AV Enterprises Logo" 
            width={240} 
            height={70} 
            className="object-contain h-16 w-auto"
            priority
            unoptimized
          />
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-semibold">
          <Link href="/" className="transition-colors hover:text-color-orange text-primary">Home</Link>
          <Link href="/about" className="transition-colors hover:text-color-orange text-primary">About Us</Link>
          <Link href="/services" className="transition-colors hover:text-color-orange text-primary">Services</Link>
          <Link href="/properties" className="transition-colors hover:text-color-orange text-primary">Properties</Link>
          <Link href="/contact" className="transition-colors hover:text-color-orange text-primary">Contact</Link>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-[#F4B400] via-[#E67E22] to-[#D64541] hover:opacity-90 text-white font-bold border-none shadow-md transition-opacity cursor-pointer">
                Free Consultation
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-primary hover:text-color-orange transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-white p-4 flex flex-col gap-4 shadow-xl absolute w-full">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="px-2 py-2 text-lg font-bold text-primary hover:text-color-orange">Home</Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="px-2 py-2 text-lg font-bold text-primary hover:text-color-orange">About Us</Link>
          <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="px-2 py-2 text-lg font-bold text-primary hover:text-color-orange">Services</Link>
          <Link href="/properties" onClick={() => setIsMobileMenuOpen(false)} className="px-2 py-2 text-lg font-bold text-primary hover:text-color-orange">Properties</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="px-2 py-2 text-lg font-bold text-primary hover:text-color-orange">Contact</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            <Button className="w-full mt-4 bg-gradient-to-r from-[#F4B400] via-[#E67E22] to-[#D64541] hover:opacity-90 text-white font-bold text-lg h-12 border-none cursor-pointer">Free Consultation</Button>
          </Link>
        </div>
      )}
    </header>
  );
}
