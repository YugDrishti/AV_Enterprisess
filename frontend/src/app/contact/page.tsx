import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="container mx-auto px-4">

        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-4">Contact Us</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#F4B400] via-[#E67E22] to-[#D64541] mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you are buying, selling, or have a question about our properties, we are here to help.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">

          {/* Contact Information */}
          <div className="lg:w-1/3 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold font-heading text-primary mb-6">Get In Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-50 p-3 rounded-full text-[#E67E22]">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Office Address</h4>
                    <p className="text-gray-600 mt-1">Shop No.17R6, Commercial Life Republic<br />Hinjewadi, Pune - 411057</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-50 p-3 rounded-full text-[#E67E22]">
                    <Phone className="h-6 w-6" />

                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Phone</h4>
                    <p className="text-gray-600 mt-1">Pradeep Gavhane: +91 94041 65237</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-50 p-3 rounded-full text-[#E67E22]">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Email</h4>
                    <p className="text-gray-600 mt-1">info@aventerprises.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-50 p-3 rounded-full text-[#E67E22]">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Business Hours</h4>
                    <p className="text-gray-600 mt-1">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat - Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold font-heading text-primary mb-6">Send Us A Message</h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-semibold text-gray-700">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E67E22]/50 focus:border-[#E67E22] transition-colors" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-semibold text-gray-700">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E67E22]/50 focus:border-[#E67E22] transition-colors" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E67E22]/50 focus:border-[#E67E22] transition-colors" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold text-gray-700">Subject</label>
                <select id="subject" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E67E22]/50 focus:border-[#E67E22] transition-colors bg-white">
                  <option value="">Select an option</option>
                  <option value="buy">Looking to Buy</option>
                  <option value="sell">Looking to Sell</option>
                  <option value="rent">Looking to Rent</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E67E22]/50 focus:border-[#E67E22] transition-colors resize-none" placeholder="How can we help you today?"></textarea>
              </div>

              <Button type="button" className="w-full bg-gradient-to-r from-[#F4B400] via-[#E67E22] to-[#D64541] text-white hover:opacity-90 font-bold py-6 text-lg border-none shadow-lg mt-4">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
