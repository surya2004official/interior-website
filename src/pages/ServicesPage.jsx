import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight, Layers, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/interiorData';

export const ServicesPage = () => {
  return (
    <div className="bg-ivory text-charcoal pt-20 pb-10">
      <div className="w-full px-4 sm:px-6 mb-8">
        <div className="border-b border-stone-300 pb-8 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block">
            Our Architectural Practices
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal tracking-tight">
            Comprehensive Interior &amp; Spatial Disciplines
          </h1>
          <p className="text-stone-600 text-sm max-w-2xl leading-relaxed">
            From monumental coastal villas to private penthouses and high-impact corporate boardrooms, we orchestrate full-lifecycle design, engineering, and turnkey execution.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="w-full px-4 sm:px-6 space-y-8">
        {SERVICES.map((srv, index) => {
          const isEven = index % 2 === 0;
          return (
            <div 
              key={srv.id}
              className={`bg-white border border-stone-200 shadow-luxury overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center rounded-3xl hover:shadow-2xl transition-all duration-300`}
            >
              <div className={`lg:col-span-6 aspect-[16/11] overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <img 
                  src={srv.image} 
                  alt={srv.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                />
              </div>

              <div className={`lg:col-span-6 p-5 sm:p-8 space-y-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block">
                  Practice {String(index + 1).padStart(2, '0')}
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
                  {srv.title}
                </h2>

                <p className="text-stone-600 text-sm leading-relaxed">
                  {srv.fullDesc}
                </p>

                {/* Scope items */}
                <div className="space-y-2 pt-2 border-t border-stone-100">
                  <span className="text-xs uppercase tracking-wider text-walnut font-semibold block">
                    Core Architectural Scope:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600">
                    {srv.scope.map((item, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <Link
                    to={`/services/${srv.slug}`}
                    className="px-6 py-2.5 bg-walnut text-ivory text-xs uppercase tracking-wider font-semibold hover:bg-charcoal transition-colors flex items-center gap-2 rounded-xl"
                  >
                    <span>Explore Practice Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    to="/consultation"
                    className="text-xs uppercase tracking-wider text-gold hover:underline font-medium"
                  >
                    Book Practice Consultation
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Specialized Services Grid */}
      <div className="w-full px-4 sm:px-6 mt-10">
        <div className="text-center max-w-xl mx-auto mb-6 space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block">
            Specialized Disciplines
          </span>
          <h3 className="font-serif text-3xl text-charcoal">Ancillary Architectural Capabilities</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: "3D Hyper-CGI Visualization", desc: "Photorealistic ray-traced lighting renders before ground-breaking." },
            { title: "Direct Quarry Curation", desc: "Hand-selection of Italian Calacatta and Statuario slabs in Carrara." },
            { title: "Circadian Lighting", desc: "Smart 1800K–3000K circadian LED architectural channel engineering." },
            { title: "Acoustic Architecture", desc: "Concealed micro-perforated wood and suede acoustic isolation." }
          ].map((sp, idx) => (
            <div key={idx} className="bg-white border border-stone-200 p-5 space-y-2 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-serif text-base text-charcoal font-medium">{sp.title}</h4>
              <p className="text-xs text-stone-500 leading-relaxed">{sp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
