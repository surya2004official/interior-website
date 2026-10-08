import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Eye, ArrowRight, Maximize2, Compass, Layers } from 'lucide-react';
import { FLOOR_PLAN_DATA } from '../../data/interiorData';

export const InteractiveFloorPlan = () => {
  const [activeZoneId, setActiveZoneId] = useState('living');

  const activeZone = FLOOR_PLAN_DATA.zones.find(z => z.id === activeZoneId) || FLOOR_PLAN_DATA.zones[1];

  return (
    <div className="bg-stone-900 border border-gold/30 text-ivory p-6 sm:p-6 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-stone-800 gap-4 mb-8">
        <div>
          <span className="text-[10px] tracking-[0.25em] uppercase text-gold font-semibold block">
            Architectural Circulation Blueprint
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-ivory">Interactive 2D Floor Plan Viewer</h3>
          <p className="text-xs text-stone-400 mt-1">
            {FLOOR_PLAN_DATA.property} &bull; Click any zone on the plan to inspect spatial staging and finishes.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* INTERACTIVE 2D BLUEPRINT SVG CANVAS */}
        <div className="lg:col-span-7 bg-charcoal-950 border border-gold/40 p-6 relative shadow-inner">
          <div className="flex items-center justify-between mb-4 border-b border-stone-800 pb-2">
            <span className="text-[10px] uppercase tracking-widest text-gold font-medium flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" /> North Facing Master Suite
            </span>
            <span className="text-[10px] text-stone-500 font-mono">CAD SCALE 1:100</span>
          </div>

          <svg 
            viewBox="0 0 600 420" 
            className="w-full h-auto select-none stroke-gold/50 fill-none"
          >
            {/* Outer Wall Boundary */}
            <rect x="20" y="20" width="560" height="380" stroke="#C5A47E" strokeWidth="3" fill="#141414" />
            
            {/* FOYER (Top Left) */}
            <g 
              onClick={() => setActiveZoneId('foyer')} 
              className="cursor-pointer transition-colors group"
            >
              <rect 
                x="30" y="30" width="160" height="110" 
                fill={activeZoneId === 'foyer' ? 'rgba(197, 164, 126, 0.35)' : '#1A1A1A'} 
                stroke="#C5A47E" strokeWidth="1.5" 
              />
              <text x="110" y="80" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontFamily="serif" fontWeight="bold">
                Grand Foyer
              </text>
              <text x="110" y="100" textAnchor="middle" fill="#C5A47E" fontSize="9" fontFamily="sans-serif">
                380 sq.ft
              </text>
            </g>

            {/* GRAND LIVING SALON (Center) */}
            <g 
              onClick={() => setActiveZoneId('living')} 
              className="cursor-pointer transition-colors group"
            >
              <rect 
                x="200" y="30" width="230" height="230" 
                fill={activeZoneId === 'living' ? 'rgba(197, 164, 126, 0.35)' : '#1f1e1c'} 
                stroke="#C5A47E" strokeWidth="2" 
              />
              <text x="315" y="140" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontFamily="serif" fontWeight="bold">
                Grand Living Salon
              </text>
              <text x="315" y="165" textAnchor="middle" fill="#C5A47E" fontSize="10" fontFamily="sans-serif">
                1,200 sq.ft (Double Height)
              </text>
            </g>

            {/* GOURMET KITCHEN (Top Right) */}
            <g 
              onClick={() => setActiveZoneId('kitchen')} 
              className="cursor-pointer transition-colors group"
            >
              <rect 
                x="440" y="30" width="130" height="170" 
                fill={activeZoneId === 'kitchen' ? 'rgba(197, 164, 126, 0.35)' : '#1A1A1A'} 
                stroke="#C5A47E" strokeWidth="1.5" 
              />
              <text x="505" y="110" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontFamily="serif" fontWeight="bold">
                Kitchen
              </text>
              <text x="505" y="130" textAnchor="middle" fill="#C5A47E" fontSize="9" fontFamily="sans-serif">
                620 sq.ft
              </text>
            </g>

            {/* DINING PAVILION (Middle Right) */}
            <g 
              onClick={() => setActiveZoneId('dining')} 
              className="cursor-pointer transition-colors group"
            >
              <rect 
                x="440" y="210" width="130" height="180" 
                fill={activeZoneId === 'dining' ? 'rgba(197, 164, 126, 0.35)' : '#1d1b18'} 
                stroke="#C5A47E" strokeWidth="1.5" 
              />
              <text x="505" y="295" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontFamily="serif" fontWeight="bold">
                Dining
              </text>
              <text x="505" y="315" textAnchor="middle" fill="#C5A47E" fontSize="9" fontFamily="sans-serif">
                540 sq.ft
              </text>
            </g>

            {/* MASTER SUITE (Bottom Left) */}
            <g 
              onClick={() => setActiveZoneId('master')} 
              className="cursor-pointer transition-colors group"
            >
              <rect 
                x="30" y="150" width="160" height="240" 
                fill={activeZoneId === 'master' ? 'rgba(197, 164, 126, 0.35)' : '#1f1d1a'} 
                stroke="#C5A47E" strokeWidth="1.5" 
              />
              <text x="110" y="260" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontFamily="serif" fontWeight="bold">
                Master Sanctum
              </text>
              <text x="110" y="280" textAnchor="middle" fill="#C5A47E" fontSize="9" fontFamily="sans-serif">
                1,150 sq.ft
              </text>
            </g>

            {/* SKY DECK & TERRACE (Bottom Center) */}
            <g 
              onClick={() => setActiveZoneId('terrace')} 
              className="cursor-pointer transition-colors group"
            >
              <rect 
                x="200" y="270" width="230" height="120" 
                fill={activeZoneId === 'terrace' ? 'rgba(197, 164, 126, 0.35)' : '#161919'} 
                stroke="#C5A47E" strokeWidth="1.5" strokeDasharray="4 4"
              />
              <text x="315" y="325" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontFamily="serif" fontWeight="bold">
                Sky Deck &amp; Plunge Pool
              </text>
              <text x="315" y="345" textAnchor="middle" fill="#C5A47E" fontSize="9" fontFamily="sans-serif">
                850 sq.ft Outdoor
              </text>
            </g>
          </svg>

          <div className="mt-4 flex flex-wrap gap-2 text-[10px] text-stone-400">
            <span className="text-stone-300 font-medium">Quick Selection:</span>
            {FLOOR_PLAN_DATA.zones.map(z => (
              <button
                key={z.id}
                onClick={() => setActiveZoneId(z.id)}
                className={`px-2 py-0.5 border ${
                  activeZoneId === z.id 
                    ? 'border-gold text-gold font-semibold bg-gold/10' 
                    : 'border-stone-800 text-stone-400 hover:text-white'
                }`}
              >
                {z.name}
              </button>
            ))}
          </div>
        </div>

        {/* ZONE DETAILS & STAGED PHOTOGRAPHY */}
        <div className="lg:col-span-5 bg-charcoal-950 border border-gold/40 p-6 space-y-5 shadow-2xl">
          <div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-gold font-semibold block">
              Zone Staging Inspection
            </span>
            <h4 className="font-serif text-2xl text-ivory">{activeZone.name}</h4>
            <div className="flex gap-4 text-xs text-stone-400 mt-1 font-mono">
              <span>Area: <strong className="text-gold">{activeZone.area}</strong></span>
              <span>Dimensions: <strong className="text-gold">{activeZone.dimensions}</strong></span>
            </div>
          </div>

          <div className="aspect-[16/10] overflow-hidden border border-stone-800 relative group">
            <img 
              src={activeZone.image} 
              alt={activeZone.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase tracking-wider text-stone-300 block font-medium">
              Architectural Specifications:
            </span>
            <ul className="text-xs text-stone-400 space-y-1.5">
              {activeZone.keyFeatures.map((feat, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <Link
            to="/consultation"
            className="w-full py-2.5 bg-gold text-charcoal-950 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-gold-light transition-colors"
          >
            <span>Commission Custom Floor Plan</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
