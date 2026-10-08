import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, CheckCircle2, X, ArrowRight, ShieldCheck, Sparkles, HelpCircle } from 'lucide-react';
import { DESIGN_PACKAGES } from '../data/interiorData';

export const PackagesPage = () => {
  const [selectedPackage, setSelectedPackage] = useState('premium');

  const comparisonFeatures = [
    { feature: "Comprehensive Space Planning & Circulation Layouts", essential: true, premium: true, luxury: true },
    { feature: "Detailed 2D CAD Drawings (Civil, Electrical, Plumbing)", essential: true, premium: true, luxury: true },
    { feature: "Curated Moodboards & Material Swatch Palettes", essential: true, premium: true, luxury: true },
    { feature: "Hyper-Realistic 3D Photorealistic CGI Renders (All Rooms)", essential: false, premium: true, luxury: true },
    { feature: "Custom Architectural Joinery & Millwork Drawings", essential: false, premium: true, luxury: true },
    { feature: "Direct Quarry Stone Curation & Italian Book-Matching", essential: false, premium: true, luxury: true },
    { feature: "Itemized Bill of Quantities (BOQ) with Fixed Pricing", essential: false, premium: true, luxury: true },
    { feature: "End-to-End White-Glove Turnkey Construction Execution", essential: false, premium: false, luxury: true },
    { feature: "European Furniture Direct Import & Custom Lighting", essential: false, premium: false, luxury: true },
    { feature: "Smart Home Automation Architecture (Crestron / Lutron)", essential: false, premium: false, luxury: true },
    { feature: "Private Art Curation & Gallery Procurement Assistance", essential: false, premium: false, luxury: true },
    { feature: "Post-Handover Maintenance Warranty Coverage", essential: "1 Year", premium: "2 Years", luxury: "3 Years" },
  ];

  return (
    <div className="bg-ivory text-charcoal pt-20 pb-10">
      <div className="w-full px-4 sm:px-6 mb-8">
        <div className="border-b border-stone-300 pb-8 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block">
            Atelier Investment Tiers
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal tracking-tight">
            Curated Design &amp; Turnkey Packages
          </h1>
          <p className="text-stone-600 text-sm max-w-2xl leading-relaxed">
            Transparent, predictable architectural engagement models structured around your property scale, visualization depth, and turnkey coordination needs.
          </p>
        </div>
      </div>

      {/* THREE TIER CARDS */}
      <div className="w-full px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {DESIGN_PACKAGES.map((pkg) => (
            <div 
              key={pkg.id}
              className={`bg-white border flex flex-col justify-between p-5 sm:p-6 transition-all duration-300 rounded-3xl ${
                pkg.recommended 
                  ? 'border-gold shadow-luxury ring-1 ring-gold relative md:-translate-y-2' 
                  : 'border-stone-200 shadow-sm hover:border-stone-400 hover:shadow-md'
              }`}
            >
              {pkg.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-charcoal-950 px-4 py-0.5 text-[10px] tracking-[0.2em] uppercase font-bold shadow-md rounded-full">
                  Most Requested Tier
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-gold font-semibold block mb-1">
                    {pkg.tier}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-charcoal">{pkg.name}</h3>
                  <div className="font-serif text-xl sm:text-2xl text-walnut font-medium mt-3">
                    {pkg.priceRange}
                  </div>
                  <p className="text-stone-600 text-xs mt-2 leading-relaxed">
                    {pkg.tagline}
                  </p>
                </div>

                <div className="space-y-2 border-t border-stone-100 pt-4">
                  <span className="text-[11px] uppercase tracking-wider text-charcoal font-semibold block">
                    Core Deliverables:
                  </span>
                  <ul className="space-y-2 text-xs text-stone-600">
                    {pkg.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 border-t border-stone-100 mt-6 space-y-3">
                <Link
                  to="/consultation"
                  className={`block text-center w-full py-3 text-xs uppercase tracking-[0.2em] font-semibold transition-colors rounded-xl ${
                    pkg.recommended 
                      ? 'bg-gold text-charcoal-950 hover:bg-gold-light' 
                      : 'bg-walnut text-ivory hover:bg-charcoal'
                  }`}
                >
                  Commission This Tier
                </Link>
                <div className="text-[10px] text-stone-400 text-center font-mono">
                  {pkg.highlights[0]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DETAILED FEATURE COMPARISON TABLE */}
      <div className="w-full px-4 sm:px-6 mt-10">
        <div className="text-center max-w-xl mx-auto mb-6 space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block">
            Side-by-Side Analysis
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
            Detailed Package Feature Comparison
          </h2>
        </div>

        <div className="bg-white border border-stone-200 overflow-x-auto shadow-sm rounded-2xl">
          <table className="w-full text-left text-xs min-w-[650px]">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50 font-serif text-sm text-charcoal">
                <th className="p-4 sm:p-5 w-2/5">Deliverable / Scope</th>
                <th className="p-4 sm:p-5 text-center w-1/5">Essential Design</th>
                <th className="p-4 sm:p-5 text-center w-1/5 bg-gold/10 font-bold text-walnut">Haute Signature</th>
                <th className="p-4 sm:p-5 text-center w-1/5">Sovereign Turnkey</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-700">
              {comparisonFeatures.map((row, i) => (
                <tr key={i} className="hover:bg-stone-50/60 transition-colors">
                  <td className="p-4 sm:p-5 font-medium text-stone-800">{row.feature}</td>
                  <td className="p-4 sm:p-5 text-center">
                    {typeof row.essential === 'boolean' ? (
                      row.essential ? <Check className="w-4 h-4 text-emerald-700 mx-auto" /> : <X className="w-4 h-4 text-stone-300 mx-auto" />
                    ) : (
                      <span className="font-mono text-stone-600">{row.essential}</span>
                    )}
                  </td>
                  <td className="p-4 sm:p-5 text-center bg-gold/5 font-semibold">
                    {typeof row.premium === 'boolean' ? (
                      row.premium ? <Check className="w-4 h-4 text-gold mx-auto" /> : <X className="w-4 h-4 text-stone-300 mx-auto" />
                    ) : (
                      <span className="font-mono text-walnut">{row.premium}</span>
                    )}
                  </td>
                  <td className="p-4 sm:p-5 text-center">
                    {typeof row.luxury === 'boolean' ? (
                      row.luxury ? <Check className="w-4 h-4 text-emerald-700 mx-auto" /> : <X className="w-4 h-4 text-stone-300 mx-auto" />
                    ) : (
                      <span className="font-mono text-stone-600">{row.luxury}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
