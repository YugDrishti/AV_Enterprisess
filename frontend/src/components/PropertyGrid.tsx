"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import PropertyModal from "./PropertyModal";

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

export default function PropertyGrid({ properties }: { properties: Property[] }) {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((project) => (
          <div key={project.id} className="group relative rounded-xl overflow-hidden shadow-lg bg-white flex flex-col">
            <div className="h-64 relative overflow-hidden">
              <Image 
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="text-color-secondary font-bold text-xs uppercase tracking-wider mb-2">{project.category}</div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">{project.description}</p>
              <Button 
                onClick={() => setSelectedProperty(project)}
                className="w-full bg-gradient-to-r from-[#F4B400] via-[#E67E22] to-[#D64541] text-white hover:opacity-90 border-none shadow-sm transition-opacity"
              >
                View Property Details
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <PropertyModal 
        property={selectedProperty} 
        isOpen={!!selectedProperty} 
        onClose={() => setSelectedProperty(null)} 
      />
    </>
  );
}
