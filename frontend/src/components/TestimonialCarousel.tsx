"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/mockData";

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div 
      className="relative w-full max-w-7xl mx-auto h-[450px] flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button 
        onClick={handlePrev}
        className="absolute left-4 md:left-12 z-40 w-12 h-12 bg-white/90 backdrop-blur hover:bg-white text-primary rounded-full flex items-center justify-center shadow-lg transition transform hover:scale-105 cursor-pointer border border-gray-100"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button 
        onClick={handleNext}
        className="absolute right-4 md:right-12 z-40 w-12 h-12 bg-white/90 backdrop-blur hover:bg-white text-primary rounded-full flex items-center justify-center shadow-lg transition transform hover:scale-105 cursor-pointer border border-gray-100"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="relative w-full h-full flex items-center justify-center pointer-events-none" style={{ perspective: "1200px" }}>
        <AnimatePresence mode="popLayout">
          {testimonials.map((testimonial, index) => {
            const N = testimonials.length;
            let offset = index - activeIndex;
            
            // Infinite loop wrap-around logic
            if (offset > Math.floor(N / 2)) {
              offset -= N;
            } else if (offset < -Math.floor(N / 2)) {
              offset += N;
            }

            const isVisible = Math.abs(offset) <= 2;
            const isActive = offset === 0;

            if (!isVisible) return null;

            return (
              <motion.div
                key={testimonial.id}
                initial={false}
                animate={{
                  x: offset * (typeof window !== 'undefined' && window.innerWidth < 768 ? 100 : 250),
                  scale: isActive ? 1 : 0.85,
                  z: isActive ? 50 : 0,
                  opacity: isActive ? 1 : 0.4,
                  rotateY: offset * -15,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.32, 0.72, 0, 1]
                }}
                className={`absolute w-[90%] md:w-[450px] pointer-events-auto cursor-pointer ${
                  isActive ? "shadow-2xl" : "shadow-md"
                }`}
                onClick={() => {
                  if (!isActive) setActiveIndex(index);
                }}
                style={{ 
                  zIndex: 30 - Math.abs(offset),
                  transformOrigin: "center center"
                }}
              >
                <div className={`bg-white rounded-2xl p-8 md:p-10 border border-gray-100 relative h-full min-h-[300px] flex flex-col transition-colors duration-500 ${isActive ? 'bg-white' : 'bg-gray-50'}`}>
                  <div className="absolute top-6 right-6 text-gray-100">
                    <Quote className="w-16 h-16 fill-current opacity-50" />
                  </div>
                  
                  <div className="flex gap-1 mb-6 relative z-10">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className={`h-6 w-6 fill-[#F4B400] text-[#F4B400] transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-40'}`} />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 italic text-lg leading-relaxed mb-8 flex-grow relative z-10">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="relative z-10 border-t border-gray-100 pt-6">
                    <h4 className="font-bold text-xl text-primary">{testimonial.name}</h4>
                    <p className="text-sm font-semibold text-[#E67E22] uppercase tracking-wider mt-1">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
