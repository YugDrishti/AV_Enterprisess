"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { services, projects, stats, testimonials } from "@/lib/mockData"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Star } from "lucide-react"
import InstagramReel from "@/components/InstagramReel"
import PropertyModal from "@/components/PropertyModal"
import TestimonialCarousel from "@/components/TestimonialCarousel"
import { useState } from "react"

export default function Home() {
  const [selectedProperty, setSelectedProperty] = useState<any | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* HERO SECTION - LIGHT VERSION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          {/* Light elegant gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50/80 to-yellow-50/50 z-10" />
          <Image 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Hero Background"
            fill
            className="object-cover opacity-50 object-center mix-blend-overlay"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 z-20 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 tracking-tight text-primary">
              Your Premier<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4B400] via-[#E67E22] to-[#D64541]">Real Estate Partner.</span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-800 font-medium max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Discover an exclusive portfolio of luxury homes, commercial spaces, and premium properties. We provide end-to-end real estate solutions tailored to your unique lifestyle and business needs. Whether you are buying, selling, or renting, we build trust and deliver excellence.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="bg-gradient-to-r from-[#F4B400] via-[#E67E22] to-[#D64541] text-white hover:opacity-90 w-full font-bold px-8 shadow-lg shadow-[#E67E22]/30 border-none cursor-pointer">
                Request a Quote
              </Button>
            </Link>
            <Link href="/services" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="bg-white text-[#E67E22] border-[#E67E22] hover:bg-orange-50 w-full font-bold px-8 shadow-sm cursor-pointer">
                Our Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-heading font-extrabold text-[#E67E22] mb-2 drop-shadow-sm">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm md:text-base font-bold text-primary uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 bg-color-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4">Our Premium Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-color-secondary to-color-orange mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We provide a comprehensive suite of premium services designed to bring your grandest visions to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col border border-gray-100 shadow-sm hover:shadow-xl hover:border-color-orange/30 transition-all overflow-hidden group bg-white">
                  <div className="h-48 relative overflow-hidden">
                    <Image 
                      src={service.image} 
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-heading text-primary">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/services/${service.slug}`} className="text-color-red font-bold flex items-center group-hover:text-color-orange transition-colors">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROPERTIES SECTION - LIGHT VERSION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-primary">Featured Properties</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-color-orange to-color-red mb-6 rounded-full"></div>
              <p className="text-gray-600 max-w-2xl text-lg">
                Explore our portfolio of premium real estate properties that define luxury and modern architecture.
              </p>
            </div>
            <Link href="/properties">
              <Button className="bg-gradient-to-r from-[#F4B400] via-[#E67E22] to-[#D64541] text-white hover:opacity-90 font-bold border-none shadow-md cursor-pointer">
                View All Properties
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, 4).map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-[400px] rounded-xl overflow-hidden cursor-pointer shadow-md"
                onClick={() => setSelectedProperty(project)}
              >
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                
                <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <div className="text-color-red font-extrabold tracking-wider text-sm mb-2 uppercase">{project.category}</div>
                  <h3 className="text-3xl font-heading font-bold text-primary mb-2">{project.title}</h3>
                  <p className="text-gray-700 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PropertyModal 
        property={selectedProperty} 
        isOpen={!!selectedProperty} 
        onClose={() => setSelectedProperty(null)} 
      />

      {/* INSTAGRAM REEL SECTION */}
      <section className="py-24 bg-gray-50 border-t border-gray-100 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4">Client Success Reels</h2>
            <div className="w-24 h-1 bg-[#E67E22] mb-6 rounded-full mx-auto"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Watch our latest property tours and happy client reviews directly from our Instagram. 
              <strong> Make sure to turn on the sound!</strong>
            </p>
          </div>
          
          <div className="w-full -mx-4 sm:mx-0">
            <InstagramReel />
          </div>

          <div className="mt-8 text-center">
            <Link href="https://www.instagram.com/av_enterprises01/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-[#F4B400] via-[#E67E22] to-[#D64541] text-white hover:opacity-90 font-bold border-none shadow-md px-8 py-6 text-lg">
                Follow Us on Instagram
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 bg-color-gray-light border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4">Client Success Stories</h2>
            <div className="w-24 h-1 bg-color-secondary mx-auto mb-6 rounded-full"></div>
          </div>

          <div className="w-full -mx-4 sm:mx-0">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

    </div>
  )
}
