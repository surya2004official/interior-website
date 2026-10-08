import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote, ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/interiorData';

export const TestimonialsPage = () => {
  const [filterCategory, setFilterCategory] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const categories = ['All', 'Residential Penthouse', 'Luxury Villa', 'Commercial Office', 'Modern Duplex'];

  const filtered = filterCategory === 'All' 
    ? TESTIMONIALS 
    : TESTIMONIALS.filter(t => t.category === filterCategory);

  return (
    <div className="bg-ivory text-charcoal pt-20 pb-10">
      <div className="w-full px-4 sm:px-6 mb-8">
        <div className="border-b border-stone-300 pb-8 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block">
            Patron Testimonials
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal tracking-tight">
            Client Stories &amp; Commission Experiences
          </h1>
          <p className="text-stone-600 text-sm max-w-2xl leading-relaxed">
            Reflections from industrialist families, technology founders, and art collectors who have entrusted their private residences and corporate suites to our atelier.
          </p>
        </div>

        {/* Filter */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-wider transition-all border rounded-xl ${
                filterCategory === cat 
                  ? 'border-gold bg-gold text-charcoal-950 font-semibold shadow-sm' 
                  : 'border-stone-300 bg-white text-stone-600 hover:border-gold/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Testimonials */}
      <div className="w-full px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((item) => (
            <div 
              key={item.id} 
              className="bg-white border border-stone-200 p-5 sm:p-6 shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col justify-between space-y-6 rounded-2xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500 gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-gold font-semibold bg-stone-100 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>

                <p className="font-serif text-lg sm:text-xl text-stone-800 italic leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-stone-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img 
                    src={item.avatar} 
                    alt={item.client} 
                    className="w-12 h-12 rounded-full object-cover border border-gold/40" 
                  />
                  <div>
                    <h4 className="font-serif text-base text-charcoal font-medium">{item.client}</h4>
                    <p className="text-xs text-stone-500">{item.designation}</p>
                    <p className="text-[11px] text-gold font-mono">{item.project}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* VIDEO TESTIMONIAL PREVIEW */}
      <div className="w-full px-4 sm:px-6 mt-10">
        <div className="bg-charcoal-950 text-ivory p-5 sm:p-8 border border-gold/30 rounded-3xl overflow-hidden shadow-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block">
                Video Monograph Spotlight
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-ivory">
                The Altamount Penthouse Handover Story
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                Watch Mr. &amp; Mrs. Singhania reflect on the 14-month architectural journey of designing their 7,800 sq.ft duplex overlooking the Arabian Sea.
              </p>
              <button
                onClick={() => setSelectedVideo(true)}
                className="px-6 py-3 bg-gold text-charcoal-950 font-semibold text-xs uppercase tracking-wider hover:bg-gold-light transition-colors flex items-center gap-2 rounded-xl"
              >
                <Play className="w-4 h-4 fill-charcoal-950" />
                <span>Play Handover Story</span>
              </button>
            </div>

            <div className="lg:col-span-5 aspect-video bg-stone-900 border border-stone-800 relative group overflow-hidden cursor-pointer rounded-2xl" onClick={() => setSelectedVideo(true)}>
              <img 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80" 
                alt="Penthouse Video Preview" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="w-12 h-12 rounded-full bg-gold/90 text-charcoal-950 flex items-center justify-center shadow-lg">
                  <Play className="w-5 h-5 fill-charcoal-950 ml-0.5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setSelectedVideo(null)}>
          <div className="bg-stone-900 border border-gold p-6 max-w-xl text-center space-y-3 rounded-2xl shadow-2xl" onClick={e => e.stopPropagation()}>
            <h4 className="font-serif text-xl text-ivory">Patron Handover Film</h4>
            <p className="text-xs text-stone-300">Streaming documentary monograph &bull; 4K Stereo Sound</p>
            <button onClick={() => setSelectedVideo(null)} className="px-5 py-2 bg-gold text-charcoal text-xs uppercase font-semibold rounded-xl">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};
