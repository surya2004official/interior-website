import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, MessageCircle, Send, 
  CheckCircle2, ShieldCheck, ArrowRight 
} from 'lucide-react';
import { STUDIO_INFO } from '../data/interiorData';

export const ContactPage = () => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', city: 'Mumbai', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', phone: '', city: 'Mumbai', message: '' });
    }, 4000);
  };

  return (
    <div className="bg-ivory text-charcoal pt-20 pb-10">
      <div className="w-full px-4 sm:px-6 mb-8">
        <div className="border-b border-stone-300 pb-8 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block">
            Atelier Directory &bull; Global Presence
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal tracking-tight">
            Connect With Our Architectural Studios
          </h1>
          <p className="text-stone-600 text-sm max-w-2xl leading-relaxed">
            Our atelier welcomes patrons across our private design studios in Mumbai, New Delhi, Bengaluru, and Dubai.
          </p>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Form & Direct Contact */}
          <div className="lg:col-span-7 bg-white p-5 sm:p-8 border border-stone-200 shadow-luxury space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold block mb-1">
                Direct Atelier Dispatch
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-charcoal">Send a Written Inquiry</h2>
            </div>

            {submitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-400 text-emerald-900 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="font-serif text-lg">Inquiry Successfully Transmitted</h4>
                <p className="text-xs text-emerald-700">
                  Our private client concierge will respond within 12 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-stone-600 block mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Vikram Singhania"
                      value={formState.name}
                      onChange={e => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-300 p-2.5 text-xs text-charcoal focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-stone-600 block mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="vikram@example.com"
                      value={formState.email}
                      onChange={e => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-300 p-2.5 text-xs text-charcoal focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-stone-600 block mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98200 00000"
                      value={formState.phone}
                      onChange={e => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-300 p-2.5 text-xs text-charcoal focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-stone-600 block mb-1">Studio of Choice</label>
                    <select
                      value={formState.city}
                      onChange={e => setFormState({ ...formState, city: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-300 p-2.5 text-xs text-charcoal focus:outline-none focus:border-gold"
                    >
                      <option>Mumbai (BKC Atelier)</option>
                      <option>New Delhi (Claridges Atelier)</option>
                      <option>Bengaluru (UB City)</option>
                      <option>Dubai (DIFC Gate Precinct)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-stone-600 block mb-1">Project Brief / Message</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Tell us about your property location, target possession date, and architectural style..."
                    value={formState.message}
                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-300 p-3 text-xs text-charcoal focus:outline-none focus:border-gold"
                  />
                </div>

                <div className="flex justify-between items-center pt-2">
                  <span className="text-[11px] text-stone-400">Response within 12h guaranteed.</span>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-walnut text-ivory text-xs uppercase tracking-wider font-semibold hover:bg-charcoal transition-colors flex items-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5 text-gold" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}

            {/* Direct WhatsApp Concierge CTA */}
            <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-charcoal block">Need an Instant Response?</span>
                  <span className="text-[11px] text-stone-500">Connect with an Atelier Partner on WhatsApp</span>
                </div>
              </div>

              <a
                href={`https://wa.me/${STUDIO_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent("Hello Aurelia & Stone, I would like to enquire about your architectural interior design services.")}`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 bg-emerald-700 text-white text-xs uppercase font-medium hover:bg-emerald-600 flex items-center gap-2"
              >
                <span>WhatsApp Concierge</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: Studio Locations & Hours */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-stone-900 text-ivory p-5 border border-gold/30 space-y-6 shadow-luxury">
              <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold block border-b border-stone-800 pb-2">
                Studio Hours &bull; By Private Appointment
              </span>

              <div className="space-y-4 text-xs text-stone-300">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-ivory block">Monday – Saturday</span>
                    <span>10:00 AM – 7:30 PM (IST / GST)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-ivory block">General Inquiries</span>
                    <span>concierge@aureliastone.com</span>
                  </div>
                </div>
              </div>

              {/* Studios List */}
              <div className="space-y-4 pt-4 border-t border-stone-800">
                <span className="text-[11px] uppercase tracking-wider text-gold font-semibold block">
                  Studio Addresses
                </span>
                {STUDIO_INFO.studios.map((st, i) => (
                  <div key={i} className="space-y-1 text-xs border-l-2 border-gold/40 pl-3">
                    <h4 className="font-serif text-sm text-ivory font-medium">{st.city} Atelier</h4>
                    <p className="text-stone-400 text-[11px] leading-relaxed">{st.address}</p>
                    <p className="text-gold font-mono text-[11px]">{st.phone}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Map Visual Representation */}
            <div className="bg-white border border-stone-200 p-4 space-y-2">
              <span className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold block">
                Studio Monograph Map (Mumbai HQ)
              </span>
              <div className="aspect-[16/9] bg-stone-900 border border-stone-200 relative overflow-hidden flex items-center justify-center text-center p-4">
                <div className="space-y-1">
                  <MapPin className="w-8 h-8 text-gold mx-auto animate-bounce" />
                  <span className="font-serif text-ivory text-sm block">One BKC, Bandra Kurla Complex</span>
                  <span className="text-[10px] text-stone-400">Latitude 19.0657° N, 72.8687° E</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
