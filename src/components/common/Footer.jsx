import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Phone, Mail, MapPin, Sparkles, CheckCircle2, 
  Compass, ShieldCheck 
} from 'lucide-react';
import { STUDIO_INFO } from '../../data/interiorData';

export const Footer = () => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-charcoal-950 text-stone-300 pt-10 pb-8 border-t border-gold/20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="w-full px-4 sm:px-6 relative z-10">
        {/* Top Newsletter & Atelier Monogram Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-8 border-b border-stone-800">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-serif text-3xl sm:text-4xl tracking-[0.2em] text-ivory uppercase block">
              Aurelia <span className="text-gold">&amp;</span> Stone
            </span>
            <p className="text-xs tracking-[0.3em] uppercase text-gold font-sans font-medium">
              Haute Architecture &amp; Interior Design Atelier
            </p>
            <p className="text-stone-400 text-sm leading-relaxed max-w-md pt-2">
              We compose timeless, sensory spatial narratives for high-profile private residences, penthouses, and visionary commercial headquarters worldwide.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="bg-stone-900/60 border border-gold/25 p-6 rounded-none">
              <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold block mb-2">
                The Atelier Journal Dispatch
              </span>
              <p className="text-stone-300 text-xs mb-4">
                Receive private invitations to newly completed architectural monographs, material intelligence reports, and design previews.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 text-gold text-xs py-2 bg-gold/10 px-3 border border-gold/30">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Thank you. You have been enrolled in our private monograph gazette.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your private email address"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="flex-1 bg-stone-950 border border-stone-700 px-4 py-2.5 text-xs text-ivory placeholder-stone-500 focus:outline-none focus:border-gold transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-gold text-charcoal-950 font-semibold text-xs tracking-[0.16em] uppercase hover:bg-gold-light transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Studio Locations Grid */}
        <div className="py-8 border-b border-stone-800">
          <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-semibold block mb-6">
            Our Studio Locations &amp; Private Ateliers
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STUDIO_INFO.studios.map((studio, idx) => (
              <div key={idx} className="space-y-2 border-l border-gold/30 pl-4">
                <h4 className="font-serif text-lg text-ivory tracking-wide">{studio.city}</h4>
                <p className="text-stone-400 text-xs leading-relaxed">{studio.address}</p>
                <div className="pt-1 text-[11px] text-stone-300 space-y-1">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3 h-3 text-gold" />
                    <span>{studio.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3 h-3 text-gold" />
                    <span>{studio.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 text-xs">
          <div>
            <h5 className="uppercase tracking-[0.2em] text-ivory font-semibold mb-4 text-[11px] border-b border-stone-800 pb-2">
              Portfolio
            </h5>
            <ul className="space-y-2.5 text-stone-400">
              <li><Link to="/projects" className="hover:text-gold transition-colors">All Projects</Link></li>
              <li><Link to="/projects/altamount-sky-penthouse" className="hover:text-gold transition-colors">Altamount Penthouse</Link></li>
              <li><Link to="/projects/alibaug-villa-solarium" className="hover:text-gold transition-colors">Villa Solarium</Link></li>
              <li><Link to="/projects/worli-duplex-kitchen" className="hover:text-gold transition-colors">Cullinan Culinary Suite</Link></li>
              <li><Link to="/projects/bkc-family-office" className="hover:text-gold transition-colors">Apex Corporate HQ</Link></li>
              <li><Link to="/gallery" className="hover:text-gold transition-colors">Inspiration Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="uppercase tracking-[0.2em] text-ivory font-semibold mb-4 text-[11px] border-b border-stone-800 pb-2">
              Practices
            </h5>
            <ul className="space-y-2.5 text-stone-400">
              <li><Link to="/services/residential" className="hover:text-gold transition-colors">Residential Interiors</Link></li>
              <li><Link to="/services/luxury-villa" className="hover:text-gold transition-colors">Luxury Villa Interiors</Link></li>
              <li><Link to="/services/modular-kitchen" className="hover:text-gold transition-colors">Modular Kitchen Suites</Link></li>
              <li><Link to="/services/living-room" className="hover:text-gold transition-colors">Living Room Salons</Link></li>
              <li><Link to="/services/bedroom" className="hover:text-gold transition-colors">Master Bed Sanctums</Link></li>
              <li><Link to="/services/commercial" className="hover:text-gold transition-colors">Commercial &amp; Hospitality</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="uppercase tracking-[0.2em] text-ivory font-semibold mb-4 text-[11px] border-b border-stone-800 pb-2">
              Interactive Tools
            </h5>
            <ul className="space-y-2.5 text-stone-400">
              <li>
                <Link to="/ai-designer" className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-gold" /> AI Room Designer
                </Link>
              </li>
              <li><Link to="/style-finder" className="hover:text-gold transition-colors">Design Style Quiz</Link></li>
              <li><Link to="/calculator" className="hover:text-gold transition-colors">Cost Calculator</Link></li>
              <li><Link to="/virtual-studio" className="hover:text-gold transition-colors">Virtual 3D Showroom</Link></li>
              <li><Link to="/moodboard" className="hover:text-gold transition-colors">Mood Board Creator</Link></li>
              <li><Link to="/floor-plan" className="hover:text-gold transition-colors">2D Floor Plan Viewer</Link></li>
              <li><Link to="/color-palette" className="hover:text-gold transition-colors">Color Harmony Engine</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="uppercase tracking-[0.2em] text-ivory font-semibold mb-4 text-[11px] border-b border-stone-800 pb-2">
              The Studio
            </h5>
            <ul className="space-y-2.5 text-stone-400">
              <li><Link to="/about" className="hover:text-gold transition-colors">About Aurelia &amp; Stone</Link></li>
              <li><Link to="/process" className="hover:text-gold transition-colors">Our 8-Step Methodology</Link></li>
              <li><Link to="/packages" className="hover:text-gold transition-colors">Design Packages</Link></li>
              <li><Link to="/testimonials" className="hover:text-gold transition-colors">Client Testimonials</Link></li>
              <li><Link to="/blog" className="hover:text-gold transition-colors">Design Journal</Link></li>
              <li><Link to="/consultation" className="hover:text-gold transition-colors text-gold font-medium">Book Consultation</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Disclaimer */}
        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-stone-400">
          <p>
            &copy; {new Date().getFullYear()} AURELIA &amp; STONE Atelier. All rights reserved. Registered architectural practice.
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-stone-400">
              <ShieldCheck className="w-3.5 h-3.5 text-gold" />
              <span>Simulated AI previews represent conceptual architectural studies</span>
            </span>
            <div className="flex items-center gap-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-gold" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gold" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
