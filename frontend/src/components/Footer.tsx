import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700 pt-16 pb-8 mt-auto relative overflow-hidden">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F4B400] via-[#E67E22] to-[#D64541]"></div>
      
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <Image 
            src="/logo.png?v=3" 
            alt="AV Enterprises Logo" 
            width={300} 
            height={90} 
            className="object-contain h-16 w-auto"
            unoptimized
          />
          <p className="text-sm text-gray-600 mt-4 leading-relaxed font-medium">
            Building Trust. Delivering Excellence. We provide premium real estate solutions to buy, sell, and rent properties.
          </p>
        </div>
        
        <div>
          <h4 className="font-heading font-bold text-lg text-primary mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm font-semibold text-gray-600">
            <li><Link href="/about" className="hover:text-[#E67E22] transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-[#E67E22] transition-colors">Our Services</Link></li>
            <li><Link href="/properties" className="hover:text-[#E67E22] transition-colors">Properties</Link></li>
            <li><Link href="/contact" className="hover:text-[#E67E22] transition-colors">Contact Us</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-heading font-bold text-lg text-primary mb-6">Services</h4>
          <ul className="space-y-3 text-sm font-semibold text-gray-600">
            <li><Link href="/services/buy-property" className="hover:text-[#E67E22] transition-colors">Buy Property</Link></li>
            <li><Link href="/services/sell-property" className="hover:text-[#E67E22] transition-colors">Sell Property</Link></li>
            <li><Link href="/services/rent-property" className="hover:text-[#E67E22] transition-colors">Rent Property</Link></li>
            <li><Link href="/services/property-management" className="hover:text-[#E67E22] transition-colors">Property Management</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-heading font-bold text-lg text-primary mb-6">Contact</h4>
          <ul className="space-y-4 text-sm font-semibold text-gray-600">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 mt-0.5 text-[#E67E22] shrink-0" />
              <span>Shop No.17R6, Commercial Life Republic<br />Hinjewadi, Pune - 411057</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-[#E67E22] shrink-0" />
              <span>Pradeep Gavhane: +91 94041 65237</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-[#E67E22] shrink-0" />
              <span>contact@aventerprises.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 mt-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm font-semibold text-gray-500">&copy; {new Date().getFullYear()} AV Enterprises. All rights reserved.</p>
        
        {/* Social Links */}
        <div className="flex gap-4">
          <Link href="https://www.instagram.com/av_enterprises01/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#E67E22] hover:text-white transition-colors shadow-sm">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}
