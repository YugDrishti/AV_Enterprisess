import { services } from "@/lib/mockData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, ChevronDown, Award, TrendingUp, Users } from "lucide-react";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Custom data mapping for the dynamic sections
const serviceContent: Record<string, any> = {
  "buy-property": {
    process: [
      { title: "Consultation", desc: "Understanding your dream home requirements, lifestyle, and budget." },
      { title: "Property Tour", desc: "Exclusive private tours of off-market and premium properties matching your criteria." },
      { title: "Negotiation", desc: "Expert negotiation by our veteran agents to get you the best market price." },
      { title: "Closing", desc: "Seamless paperwork, legal checks, and finally handing over the keys." }
    ],
    faqs: [
      { q: "How long does it take to buy a home?", a: "Typically 30-60 days after finding the perfect property, depending on financing and legal checks." },
      { q: "Do you help with financing?", a: "Yes, we partner with top-tier lenders to secure the best mortgage rates for you." },
      { q: "Are there any hidden fees?", a: "Absolutely not. We pride ourselves on transparent, honest transactions from day one." }
    ]
  },
  "sell-property": {
    process: [
      { title: "Valuation", desc: "Comprehensive market analysis to price your property perfectly." },
      { title: "Staging & Media", desc: "Professional staging, drone footage, and 4K photography." },
      { title: "Marketing", desc: "Multi-channel marketing to reach qualified buyers globally." },
      { title: "Closing", desc: "Managing offers, negotiations, and ensuring a smooth handover." }
    ],
    faqs: [
      { q: "How do you market my property?", a: "We use targeted digital ads, our exclusive broker network, and premium real estate platforms." },
      { q: "What is your commission rate?", a: "Our rates are competitive, transparent, and tailored to the property type and market conditions." },
      { q: "Should I renovate before selling?", a: "Our experts will advise you on which minor upgrades will yield the highest return on investment." }
    ]
  },
  "rent-property": {
    process: [
      { title: "Requirements", desc: "Defining your ideal location, space requirements, and budget constraints." },
      { title: "Property Viewing", desc: "Touring the best available residential or commercial rental options." },
      { title: "Application", desc: "Assisting with background checks, references, and lease applications." },
      { title: "Move-in", desc: "Finalizing the lease agreement and coordinating your move-in logistics." }
    ],
    faqs: [
      { q: "What documents are required to rent?", a: "Usually government ID, proof of income, and previous landlord references." },
      { q: "Do you handle commercial leases?", a: "Yes, we specialize in both luxury residential and high-end commercial leasing." },
      { q: "How long are typical lease terms?", a: "Standard residential leases are 12 months, while commercial leases typically range from 3 to 5 years." }
    ]
  },
  "property-management": {
    process: [
      { title: "Property Audit", desc: "Initial inspection, compliance checks, and optimization recommendations." },
      { title: "Tenant Sourcing", desc: "Rigorous screening to find reliable, high-quality tenants." },
      { title: "Maintenance", desc: "24/7 support and proactive property upkeep using trusted contractors." },
      { title: "Financials", desc: "Detailed monthly statements and hassle-free, on-time rent collection." }
    ],
    faqs: [
      { q: "How do you handle maintenance emergencies?", a: "We operate a 24/7 hotline and have trusted, vetted contractors on call at all times." },
      { q: "When do I receive my rental income?", a: "Rent is processed and disbursed directly to your account by the 5th of every month." },
      { q: "How do you handle evictions?", a: "Our legal team handles the entire process strictly following local regulations to protect your asset." }
    ]
  }
};

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const content = serviceContent[resolvedParams.slug] || serviceContent["buy-property"];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <Image 
          src={service.image} 
          alt={service.title}
          fill
          className="object-cover brightness-[0.4]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 text-center mt-16">
          <Link href="/services" className="inline-flex items-center text-white/80 hover:text-white font-semibold mb-8 transition-colors uppercase tracking-widest text-sm">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white mb-6 drop-shadow-lg">
            {service.title}
          </h1>
          <div className="w-24 h-1.5 bg-[#E67E22] mx-auto mb-8 rounded-full shadow-lg"></div>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light drop-shadow-md">
            {service.description}
          </p>
        </div>
      </section>

      {/* 2. OVERVIEW & FEATURES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">Service Overview</h2>
              <div className="w-16 h-1 bg-[#E67E22] mb-8"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                At AV Enterprises, we approach <strong>{service.title.toLowerCase()}</strong> with unparalleled dedication. We blend our deep market insights with a client-first philosophy to ensure that your real estate journey is not just successful, but truly exceptional.
              </p>
              <div className="space-y-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-100">
                    <div className="bg-white p-2 rounded-full shadow-sm border border-gray-100">
                      <CheckCircle2 className="w-6 h-6 text-[#E67E22]" />
                    </div>
                    <span className="font-bold text-gray-800 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <Image 
                src={service.image} 
                alt="Service Overview"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE PROCESS */}
      <section className="py-24 bg-gray-50 border-t border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Our Proven Process</h2>
            <div className="w-24 h-1 bg-[#E67E22] mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">A transparent, step-by-step framework designed to deliver outstanding results.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {content.process.map((step: any, idx: number) => (
              <div key={idx} className="relative group">
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 transition-all h-full z-10 relative">
                  <div className="w-12 h-12 bg-[#E67E22]/10 rounded-full flex items-center justify-center mb-6">
                    <span className="text-2xl font-black text-[#E67E22]">0{idx + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
                {/* Connecting Line (desktop only) */}
                {idx < 3 && (
                  <div className="hidden md:block absolute top-14 left-1/2 w-full h-[2px] bg-gray-200 -z-0">
                    <div className="w-0 h-full bg-[#E67E22] transition-all duration-1000 group-hover:w-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">The AV Advantage</h2>
            <div className="w-24 h-1 bg-[#E67E22] mx-auto mb-6 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#E67E22]">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Premium Quality</h3>
              <p className="text-gray-600">We only deal in properties and services that meet our strict standards for luxury and reliability.</p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#E67E22]">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Market Expertise</h3>
              <p className="text-gray-600">Our deep understanding of local market trends ensures you always get the best possible deal.</p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#E67E22]">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Client-First Focus</h3>
              <p className="text-gray-600">Your success is our success. We prioritize your needs and maintain transparent communication.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ (Native HTML Details/Summary for 0-JS Server Component) */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-[#E67E22] mx-auto mb-6 rounded-full"></div>
          </div>
          
          <div className="space-y-4">
            {content.faqs.map((faq: any, idx: number) => (
              <details key={idx} className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg text-primary hover:text-[#E67E22] transition-colors outline-none">
                  {faq.q}
                  <span className="transition group-open:rotate-180">
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </span>
                </summary>
                <div className="p-6 pt-0 text-gray-600 leading-relaxed bg-white">
                  <div className="w-full h-px bg-gray-100 mb-6"></div>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="py-24 bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D] text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F4B400] via-[#E67E22] to-[#D64541]"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Ready to Experience the Best?</h2>
          <p className="text-xl mb-10 text-gray-300">
            Contact Pradeep Gavhane and our expert team today to discuss how our {service.title.toLowerCase()} services can help you achieve your real estate goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-[#F4B400] via-[#E67E22] to-[#D64541] text-white hover:opacity-90 font-bold px-12 py-8 shadow-xl border-none text-lg rounded-full w-full sm:w-auto">
                Contact Us Now
              </Button>
            </Link>
            <Link href="/properties">
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-12 py-8 shadow-lg text-lg rounded-full w-full sm:w-auto">
                View Properties
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
