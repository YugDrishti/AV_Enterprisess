"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Bed, Bath, Square, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

interface Property {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  client: string; // Price
  duration: string; // Location
  image: string;
}

interface PropertyModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PropertyModal({ property, isOpen, onClose }: PropertyModalProps) {
  if (!property) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image Section */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative shrink-0">
              <Image
                src={property.image}
                alt={property.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 z-10 bg-[#E67E22] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                {property.category}
              </div>
            </div>

            {/* Details Section */}
            <div className="w-full md:w-1/2 p-6 md:p-10 overflow-y-auto flex flex-col">
              <h2 className="text-3xl font-heading font-bold text-primary mb-2 pr-8">{property.title}</h2>
              <div className="flex items-center text-gray-500 mb-6 font-medium">
                <MapPin className="w-4 h-4 mr-1 text-[#E67E22]" />
                {property.duration}
              </div>

              <div className="text-4xl font-extrabold text-[#E67E22] mb-8">
                {property.client}
              </div>

              {/* Mock Amenities */}
              <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-gray-100">
                <div className="flex flex-col items-center justify-center bg-gray-50 p-3 rounded-lg">
                  <Bed className="w-6 h-6 text-gray-400 mb-2" />
                  <span className="font-bold text-gray-800">4 Beds</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-50 p-3 rounded-lg">
                  <Bath className="w-6 h-6 text-gray-400 mb-2" />
                  <span className="font-bold text-gray-800">3 Baths</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-50 p-3 rounded-lg">
                  <Square className="w-6 h-6 text-gray-400 mb-2" />
                  <span className="font-bold text-gray-800">2,500 SqFt</span>
                </div>
              </div>

              <h3 className="font-bold text-xl mb-3 text-gray-800">Property Overview</h3>
              <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                {property.description}
              </p>

              <div className="mt-auto pt-6 border-t border-gray-100">
                <Link href="/contact">
                  <Button onClick={onClose} className="w-full bg-gradient-to-r from-[#F4B400] via-[#E67E22] to-[#D64541] text-white hover:opacity-90 font-bold border-none shadow-md py-6 text-lg group">
                    Contact Agent
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
