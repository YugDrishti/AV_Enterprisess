import { services } from "@/lib/mockData";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

async function getServices() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return services;
}

export default async function ServicesPage() {
  const data = await getServices();

  return (
    <div className="min-h-screen bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">Our Services</h1>
          <div className="w-24 h-1 bg-color-secondary mb-6"></div>
          <p className="text-gray-600 max-w-2xl text-lg">
            Comprehensive business and construction solutions tailored for the modern enterprise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {data.map((service) => (
            <div key={service.id} className="flex flex-col lg:flex-row gap-6 bg-gray-50 hover:bg-gray-100 transition-colors p-6 rounded-xl border border-gray-100 group">
              <div className="w-full lg:w-2/5 h-48 lg:h-auto min-h-[200px] relative overflow-hidden rounded-lg">
                <Image 
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="w-full lg:w-3/5 flex flex-col justify-center">
                <h3 className="text-2xl font-heading font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map(feature => (
                    <span key={feature} className="px-3 py-1 bg-white text-xs font-semibold text-color-orange border border-color-orange/20 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <Link href={`/services/${service.slug}`}>
                    <Button variant="link" className="p-0 text-color-secondary hover:text-color-orange font-bold transition-colors">
                      Explore Service &rarr;
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
