import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6">
              About <span className="text-[#E67E22]">AV Enterprises</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              We are a premier real estate agency dedicated to providing exceptional service in buying, selling, and renting luxury properties. With over 15 years of industry experience, our foundation is built on trust, integrity, and a commitment to excellence.
            </p>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-[#F4B400] via-[#E67E22] to-[#D64541] text-white hover:opacity-90 font-bold px-8 py-6 text-lg border-none shadow-lg">
                Work With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop" 
                alt="Our Team"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">Our Mission & Vision</h2>
              <div className="w-20 h-1 bg-[#F4B400] mb-8"></div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our mission is to simplify the real estate process for our clients while maximizing their investment returns. We envision a world where finding your dream home or ideal commercial space is a seamless, exciting journey rather than a stressful task.
              </p>
              <ul className="space-y-4">
                {[
                  "Client-Centric Approach", 
                  "Unmatched Market Knowledge", 
                  "Transparent & Honest Transactions", 
                  "Innovative Marketing Strategies"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-800 font-medium">
                    <CheckCircle2 className="text-[#E67E22] h-6 w-6" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Meet Our Leadership</h2>
          <div className="w-20 h-1 bg-[#E67E22] mb-12 mx-auto"></div>
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 relative rounded-full overflow-hidden shadow-xl mb-6 border-4 border-white bg-white">
              {/* Using a professional placeholder image - you can replace this with his actual photo later */}
              <Image 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                alt="Pradeep Gavhane"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-primary">Pradeep Gavhane</h3>
            <p className="text-[#E67E22] font-semibold text-lg mb-4">Founder & Owner</p>
            <p className="text-gray-600 max-w-2xl text-center leading-relaxed">
              With a deep passion for real estate and a commitment to excellence, Pradeep founded AV Enterprises to redefine the property buying, selling, and renting experience. His visionary leadership and unmatched market knowledge have established AV Enterprises as one of the most trusted names in the industry.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#F4B400] via-[#E67E22] to-[#D64541] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Ready to Find Your Next Property?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">Let our expert agents guide you through every step of the real estate journey.</p>
          <Link href="/properties">
            <Button variant="outline" className="bg-white text-[#E67E22] hover:bg-gray-100 border-none font-bold px-8 py-6 text-lg shadow-lg">
              Explore Our Listings
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
