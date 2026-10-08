import React, { useState } from 'react';
import { Heart, Maximize2, X, Filter } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/interiorData';
import { useSaved } from '../context/SavedContext';

export const GalleryPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeImage, setActiveImage] = useState(null);
  const { toggleSaveImage, isImageSaved } = useSaved();

  const categories = ['All', 'Living Room', 'Bedroom', 'Kitchen', 'Villas', 'Dining', 'Office', 'Commercial'];

  const filteredItems = selectedFilter === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === selectedFilter);

  return (
    <div className="bg-ivory text-charcoal pt-20 pb-10">
      <div className="w-full px-4 sm:px-6 mb-6">
        <div className="border-b border-stone-300 pb-8 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block">
            Visual Inspiration Archives
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal tracking-tight">
            Atelier Inspiration Gallery
          </h1>
          <p className="text-stone-600 text-sm max-w-2xl leading-relaxed">
            Browse high-resolution photographs of our handcrafted ceilings, book-matched marble walls, custom modular kitchens, and ambient living suites. Click the heart icon to save favorites to your private inspiration deck.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-wider transition-all border rounded-xl ${
                selectedFilter === cat 
                  ? 'border-gold bg-gold text-charcoal-950 font-semibold shadow-sm' 
                  : 'border-stone-300 bg-white text-stone-600 hover:border-gold/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Masonry-Style Grid */}
      <div className="w-full px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map(item => {
            const saved = isImageSaved(item.id);
            return (
              <div 
                key={item.id} 
                className="group relative aspect-square bg-stone-900 overflow-hidden cursor-pointer shadow-sm hover:shadow-luxury transition-all rounded-2xl"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  onClick={() => setActiveImage(item)}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-between text-ivory">
                  <div className="flex justify-end">
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleSaveImage(item); }}
                      className="p-2 rounded-full bg-charcoal-950/80 text-white hover:text-gold backdrop-blur-md transition-colors"
                      title={saved ? "Remove from wishlist" : "Save to wishlist"}
                    >
                      <Heart className={`w-4 h-4 ${saved ? 'text-gold fill-gold' : ''}`} />
                    </button>
                  </div>

                  <div onClick={() => setActiveImage(item)}>
                    <span className="text-[10px] text-gold uppercase tracking-wider block font-semibold">
                      {item.category} &bull; {item.style}
                    </span>
                    <h4 className="font-serif text-base text-ivory">{item.title}</h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] bg-stone-900 border border-gold/40 text-ivory p-5 space-y-3 rounded-3xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-stone-800 pb-2">
              <div>
                <span className="text-[10px] text-gold uppercase">{activeImage.category} &bull; {activeImage.style}</span>
                <h4 className="font-serif text-xl text-ivory">{activeImage.title}</h4>
              </div>
              <button onClick={() => setActiveImage(null)} className="text-stone-400 hover:text-white p-1">
                <X className="w-5 h-5" />
              </button>
            </div>
            <img src={activeImage.image} alt={activeImage.title} className="w-full max-h-[70vh] object-contain rounded-2xl" />
          </div>
        </div>
      )}
    </div>
  );
};
