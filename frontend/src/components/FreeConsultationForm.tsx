'use client'

import { useState } from 'react'
import { Button } from './ui/button'

export default function FreeConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: ''
  })
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.propertyType) {
      setError('Please fill in your name, phone number, and property interest.')
      return
    }

    setError('')

    // WhatsApp configuration
    const phoneNumber = '919404165237' // Pradeep Gavhane
    
    // Draft the WhatsApp message
    const message = `Hello AV Enterprises! I'm interested in a free consultation.%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email || 'Not provided'}%0A*Phone:* ${formData.phone}%0A*Looking to:* ${formData.propertyType}%0A%0APlease get back to me.`
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    
    // Redirect to WhatsApp in a new tab
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-md w-full">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Consultation</h3>
        <p className="text-gray-500 text-sm">Expert advice for buying, selling, or renting properties.</p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200 text-sm text-center font-medium">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            placeholder="John Doe"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#25D366] focus:border-[#25D366] outline-none transition-all"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            placeholder="john@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#25D366] focus:border-[#25D366] outline-none transition-all"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            placeholder="+91 98765 43210"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#25D366] focus:border-[#25D366] outline-none transition-all"
          />
        </div>

        <div>
          <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">I am looking to... *</label>
          <select
            id="propertyType"
            value={formData.propertyType}
            onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#25D366] focus:border-[#25D366] outline-none transition-all bg-white"
          >
            <option value="">Select an option</option>
            <option value="buy">Buy a property</option>
            <option value="sell">Sell a property</option>
            <option value="rent">Rent a property</option>
            <option value="other">Other</option>
          </select>
        </div>

        <Button type="submit" className="w-full py-6 text-lg font-bold bg-[#25D366] hover:bg-[#128C7E] text-white border-none shadow-md shadow-[#25D366]/30 transition-colors cursor-pointer">
          Chat on WhatsApp
        </Button>
        <p className="text-xs text-center text-gray-400 mt-4">You will be redirected to WhatsApp to send your details.</p>
      </form>
    </div>
  )
}
