import React, { useState } from 'react';
import { 
  Calendar, Clock, CheckCircle2, MessageCircle, Send, 
  ShieldCheck, ArrowRight, User, Phone, Mail, MapPin, Sparkles 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { STUDIO_INFO } from '../data/interiorData';

export const ConsultationPage = () => {
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    propertyType: 'Penthouse / Duplex',
    city: 'Mumbai',
    area: '4200',
    budgetRange: '₹1.5 Cr – ₹3 Cr',
    designStyle: 'Modern Luxury',
    serviceType: 'Full Turnkey Architecture & Interiors',
    preferredDate: '',
    preferredTime: '11:00 AM (Morning)',
    requirements: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.phone.trim() || formData.phone.length < 8) errs.phone = 'Valid Phone Number is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid Email Address is required';
    if (!formData.preferredDate) errs.preferredDate = 'Please select a date';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    try {
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
    } catch (e) {
      console.error(e);
    }
  };

  const generateWhatsAppMessage = () => {
    const msg = `Hello Aurelia & Stone Atelier,
I would like to schedule a private architectural consultation.
Name: ${formData.fullName}
Property: ${formData.propertyType} (${formData.area} sq.ft, ${formData.city})
Style: ${formData.designStyle}
Budget: ${formData.budgetRange}
Date: ${formData.preferredDate} at ${formData.preferredTime}
Brief: ${formData.requirements || 'Turnkey interior design inquiry'}`;
    const phone = STUDIO_INFO.whatsapp.replace('+', '');
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-ivory text-charcoal pt-20 pb-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="border-b border-stone-300 pb-8 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block">
            Private Atelier Enclave
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal tracking-tight">
            Book a Design Consultation
          </h1>
          <p className="text-stone-600 text-sm max-w-2xl leading-relaxed">
            Engage with our principal architects for a private review of your floor plans, material aspirations, and turnkey delivery timeline.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-stone-200 p-5 sm:p-8 shadow-luxury">
          {/* Conceptual Disclaimer */}
          <div className="bg-stone-50 border-l-2 border-gold p-3.5 mb-8 flex items-center justify-between text-xs text-stone-600">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
              <span>
                <strong>Atelier Protocol:</strong> Consultations are subject to principal architect calendar availability. Confirmation details will be transmitted to your email and phone within 24 business hours.
              </span>
            </div>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Contact Details */}
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold block border-b border-stone-100 pb-2">
                  01 &bull; Patron Contact Information
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs text-stone-600 block mb-1">Full Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Vikram Singhania"
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full bg-stone-50 border px-3.5 py-2.5 text-xs text-charcoal focus:outline-none focus:border-gold ${
                        errors.fullName ? 'border-rose-500' : 'border-stone-300'
                      }`}
                    />
                    {errors.fullName && <span className="text-[10px] text-rose-500">{errors.fullName}</span>}
                  </div>

                  <div>
                    <label className="text-xs text-stone-600 block mb-1">Mobile Phone *</label>
                    <input
                      type="tel"
                      placeholder="+91 98200 00000"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full bg-stone-50 border px-3.5 py-2.5 text-xs text-charcoal focus:outline-none focus:border-gold ${
                        errors.phone ? 'border-rose-500' : 'border-stone-300'
                      }`}
                    />
                    {errors.phone && <span className="text-[10px] text-rose-500">{errors.phone}</span>}
                  </div>

                  <div>
                    <label className="text-xs text-stone-600 block mb-1">Email Address *</label>
                    <input
                      type="email"
                      placeholder="vikram@example.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full bg-stone-50 border px-3.5 py-2.5 text-xs text-charcoal focus:outline-none focus:border-gold ${
                        errors.email ? 'border-rose-500' : 'border-stone-300'
                      }`}
                    />
                    {errors.email && <span className="text-[10px] text-rose-500">{errors.email}</span>}
                  </div>
                </div>
              </div>

              {/* Space Parameters */}
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold block border-b border-stone-100 pb-2">
                  02 &bull; Property Typology &amp; Scope
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs text-stone-600 block mb-1">Property Typology</label>
                    <select
                      value={formData.propertyType}
                      onChange={e => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-300 px-3.5 py-2.5 text-xs text-charcoal focus:outline-none focus:border-gold"
                    >
                      <option>Penthouse / Duplex</option>
                      <option>Luxury Villa / Bungalow</option>
                      <option>High-Rise Apartment</option>
                      <option>Corporate Office Headquarters</option>
                      <option>Hospitality / Boutique Suite</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-stone-600 block mb-1">Project City / Location</label>
                    <select
                      value={formData.city}
                      onChange={e => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-300 px-3.5 py-2.5 text-xs text-charcoal focus:outline-none focus:border-gold"
                    >
                      <option>Mumbai</option>
                      <option>New Delhi / NCR</option>
                      <option>Bengaluru</option>
                      <option>Dubai / UAE</option>
                      <option>Goa</option>
                      <option>Other Metropolitan Area</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-stone-600 block mb-1">Approximate Area (sq.ft)</label>
                    <input
                      type="number"
                      value={formData.area}
                      onChange={e => setFormData({ ...formData, area: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-300 px-3.5 py-2.5 text-xs text-charcoal focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs text-stone-600 block mb-1">Anticipated Budget Range</label>
                    <select
                      value={formData.budgetRange}
                      onChange={e => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-300 px-3.5 py-2.5 text-xs text-charcoal focus:outline-none focus:border-gold"
                    >
                      <option>₹50 Lakhs – ₹1 Crore</option>
                      <option>₹1 Crore – ₹2.5 Crores</option>
                      <option>₹2.5 Crores – ₹5 Crores</option>
                      <option>₹5 Crores+</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-stone-600 block mb-1">Preferred Style</label>
                    <select
                      value={formData.designStyle}
                      onChange={e => setFormData({ ...formData, designStyle: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-300 px-3.5 py-2.5 text-xs text-charcoal focus:outline-none focus:border-gold"
                    >
                      <option>Modern Luxury</option>
                      <option>Japandi &amp; Wabi-Sabi</option>
                      <option>Contemporary Minimalist</option>
                      <option>Neo-Classical Heritage</option>
                      <option>Biophilic Architecture</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-stone-600 block mb-1">Required Engagement</label>
                    <select
                      value={formData.serviceType}
                      onChange={e => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-300 px-3.5 py-2.5 text-xs text-charcoal focus:outline-none focus:border-gold"
                    >
                      <option>Full Turnkey Architecture &amp; Interiors</option>
                      <option>Design &amp; 3D Visualization Only</option>
                      <option>Gourmet Modular Kitchen Suite</option>
                      <option>Renovation &amp; Remodeling</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Consultation Scheduling */}
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold block border-b border-stone-100 pb-2">
                  03 &bull; Preferred Appointment Schedule
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-stone-600 block mb-1">Preferred Date *</label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={e => setFormData({ ...formData, preferredDate: e.target.value })}
                      className={`w-full bg-stone-50 border px-3.5 py-2.5 text-xs text-charcoal focus:outline-none focus:border-gold ${
                        errors.preferredDate ? 'border-rose-500' : 'border-stone-300'
                      }`}
                    />
                    {errors.preferredDate && <span className="text-[10px] text-rose-500">{errors.preferredDate}</span>}
                  </div>

                  <div>
                    <label className="text-xs text-stone-600 block mb-1">Preferred Time Window</label>
                    <select
                      value={formData.preferredTime}
                      onChange={e => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-300 px-3.5 py-2.5 text-xs text-charcoal focus:outline-none focus:border-gold"
                    >
                      <option>11:00 AM (Morning Salon)</option>
                      <option>02:30 PM (Afternoon Review)</option>
                      <option>05:00 PM (Late Afternoon)</option>
                      <option>07:00 PM (Evening Digital Video)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-stone-600 block mb-1">Additional Project Brief / Specific Questions</label>
                  <textarea
                    rows="3"
                    placeholder="Provide context regarding possession date, ceiling height, structural changes, or inspiration references..."
                    value={formData.requirements}
                    onChange={e => setFormData({ ...formData, requirements: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-300 p-3 text-xs text-charcoal focus:outline-none focus:border-gold"
                  />
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[11px] text-stone-400">
                  Data handled with strict confidentiality.
                </span>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-walnut text-ivory font-semibold text-xs uppercase tracking-[0.2em] hover:bg-charcoal transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5 text-gold" />
                  <span>Transmit Consultation Request</span>
                </button>
              </div>
            </form>
          ) : (
            /* CONFIRMATION PREVIEW SCREEN */
            <div className="space-y-6 text-center py-8 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-500/40 text-emerald-800 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block">
                  Dossier Submitted Successfully
                </span>
                <h3 className="font-serif text-3xl text-charcoal">
                  Thank You, {formData.fullName}
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
                  Your spatial consultation parameters have been registered. A senior partner architect will contact you at <strong>{formData.phone}</strong> to confirm your slot for <strong>{formData.preferredDate}</strong>.
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-stone-50 border border-stone-200 p-5 text-left max-w-md mx-auto text-xs space-y-1.5 font-mono text-stone-600">
                <div><strong className="text-charcoal font-sans">Typology:</strong> {formData.propertyType} ({formData.area} sq.ft)</div>
                <div><strong className="text-charcoal font-sans">City:</strong> {formData.city}</div>
                <div><strong className="text-charcoal font-sans">Style:</strong> {formData.designStyle}</div>
                <div><strong className="text-charcoal font-sans">Budget:</strong> {formData.budgetRange}</div>
                <div><strong className="text-charcoal font-sans">Preferred Slot:</strong> {formData.preferredDate} &bull; {formData.preferredTime}</div>
              </div>

              {/* WhatsApp instant dispatch */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={generateWhatsAppMessage}
                  className="w-full sm:w-auto px-6 py-3 bg-emerald-700 text-white font-semibold text-xs uppercase tracking-wider hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Continue on WhatsApp Concierge</span>
                </button>

                <button
                  onClick={() => setSubmitted(false)}
                  className="w-full sm:w-auto px-6 py-3 border border-stone-300 text-stone-600 text-xs uppercase tracking-wider hover:bg-stone-100"
                >
                  Edit Information
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
