import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MessageCircle, X } from 'lucide-react';
import { STUDIO_INFO } from '../../data/interiorData';

export const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Create intelligent contextual prefilled message based on current page
  const getContextualMessage = () => {
    const path = location.pathname;
    if (path.includes('altamount-sky-penthouse')) {
      return "Hello Aurelia & Stone, I am admiring your Altamount Sky Penthouse project and would like to discuss a similar luxury penthouse interior consultation.";
    }
    if (path.includes('alibaug-villa-solarium')) {
      return "Hello Aurelia & Stone, I am interested in coastal villa architecture and interior planning similar to Villa Solarium.";
    }
    if (path.includes('modular-kitchen')) {
      return "Hello Aurelia & Stone, I would like to enquire regarding your gourmet modular kitchen suites and precision German cabinetry.";
    }
    if (path.includes('calculator')) {
      return "Hello Aurelia & Stone, I just explored your interior cost calculator and would like to request an exact site quotation for my property.";
    }
    if (path.includes('ai-designer')) {
      return "Hello Aurelia & Stone, I generated an AI design concept on your website and would like to review it with a senior project architect.";
    }
    if (path.includes('commercial')) {
      return "Hello Aurelia & Stone, I would like to schedule an architectural consultation for a corporate office/commercial space.";
    }
    return "Hello Aurelia & Stone, I would like to schedule a private architectural and interior design consultation for my residence.";
  };

  const handleOpenWhatsApp = () => {
    const message = encodeURIComponent(getContextualMessage());
    const phone = STUDIO_INFO.whatsapp.replace('+', '');
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {isOpen && (
        <div className="mb-3 w-80 bg-charcoal-900 border border-gold/40 text-ivory p-4 shadow-2xl rounded-none animate-fadeIn">
          <div className="flex items-center justify-between border-b border-gold/20 pb-2 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="font-serif text-sm font-semibold tracking-wide text-ivory">Atelier Private Concierge</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-stone-400 hover:text-gold focus:outline-none"
              aria-label="Close concierge preview"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-stone-300 leading-relaxed mb-3">
            Connect directly with an Aurelia &amp; Stone senior design director on WhatsApp for rapid consultation scheduling.
          </p>
          <div className="p-2.5 bg-stone-950/80 border border-white/5 rounded text-[11px] text-stone-400 italic mb-3">
            "{getContextualMessage()}"
          </div>
          <button
            onClick={handleOpenWhatsApp}
            className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-charcoal-900 border border-gold/50 text-gold hover:text-charcoal hover:bg-gold shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 group focus:outline-none"
        title="Direct WhatsApp Consultation"
        aria-label="Direct WhatsApp Consultation"
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform text-emerald-500 group-hover:text-charcoal" />
        <span className="sr-only">Open WhatsApp Concierge</span>
      </button>
    </div>
  );
};
