import React from 'react';
import { Link } from 'react-router-dom';
import { X, Trash2, Heart, ArrowRight, ExternalLink, Calculator, Layers } from 'lucide-react';
import { useSaved } from '../../context/SavedContext';
import { PROJECTS } from '../../data/interiorData';

export const SavedDrawer = ({ isOpen, onClose }) => {
  const { 
    savedProjectIds, 
    toggleSaveProject, 
    savedImages, 
    toggleSaveImage, 
    savedMoodboard, 
    removeFromMoodboard,
    savedEstimate 
  } = useSaved();

  if (!isOpen) return null;

  const savedProjects = PROJECTS.filter(p => savedProjectIds.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-charcoal-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-stone-900 border-l border-gold/30 text-ivory flex flex-col shadow-2xl">
          {/* Header */}
          <div className="p-6 border-b border-stone-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-gold fill-gold" />
              <h3 className="font-serif text-xl tracking-wider text-ivory">Your Saved Atelier Curations</h3>
            </div>
            <button 
              onClick={onClose}
              className="p-1 rounded text-stone-400 hover:text-gold focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-8 divide-y divide-stone-800">
            {/* Saved Projects */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">
                  Saved Projects ({savedProjects.length})
                </span>
                <Link to="/projects" onClick={onClose} className="text-[11px] text-stone-400 hover:text-gold">
                  Explore More
                </Link>
              </div>

              {savedProjects.length === 0 ? (
                <p className="text-xs text-stone-500 italic">No architectural projects saved yet.</p>
              ) : (
                <div className="space-y-3">
                  {savedProjects.map(proj => (
                    <div key={proj.id} className="relative isolate flex gap-3 bg-stone-950 p-2.5 border border-stone-800 group hover:border-gold/40 transition-colors">
                      <Link to={`/projects/${proj.id}`} aria-label={`View ${proj.title}`} onClick={onClose} className="absolute inset-0 z-10 rounded-[inherit] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold" />
                      <img 
                        src={proj.heroImage} 
                        alt={proj.title} 
                        className="w-16 h-16 object-cover rounded-none flex-shrink-0" 
                      />
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <h4 className="text-xs font-serif font-medium text-ivory truncate">{proj.title}</h4>
                          <p className="text-[10px] text-stone-400">{proj.location}</p>
                        </div>
                        <div className="flex items-center justify-between pt-1">
                          <span
                            className="text-[10px] text-gold hover:underline flex items-center gap-1"
                          >
                            <span>View Monograph</span>
                            <ArrowRight className="w-2.5 h-2.5" />
                          </span>
                          <button 
                            onClick={() => toggleSaveProject(proj.id)}
                            className="relative z-20 text-stone-500 hover:text-rose-400 transition-colors"
                            title="Remove project"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Saved Inspiration Images */}
            <div className="pt-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">
                  Gallery Inspirations ({savedImages.length})
                </span>
                <Link to="/gallery" onClick={onClose} className="text-[11px] text-stone-400 hover:text-gold">
                  Open Gallery
                </Link>
              </div>

              {savedImages.length === 0 ? (
                <p className="text-xs text-stone-500 italic">Save photography from the gallery to build your inspiration deck.</p>
              ) : (
                <div className="grid grid-cols-3 gap-2">
                  {savedImages.map(img => (
                    <div key={img.id} className="relative group aspect-square bg-stone-950 overflow-hidden">
                      <img src={img.image} alt={img.title} className="w-full h-full object-cover" />
                      <button 
                        onClick={() => toggleSaveImage(img)}
                        className="absolute top-1 right-1 bg-charcoal-900/80 p-1 text-rose-400 hover:text-white"
                        title="Remove"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mood Board Items */}
            <div className="pt-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Mood Board ({savedMoodboard.length})</span>
                </span>
                <Link to="/moodboard" onClick={onClose} className="text-[11px] text-gold hover:underline flex items-center gap-1">
                  <span>Open Canvas</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>

              {savedMoodboard.length === 0 ? (
                <p className="text-xs text-stone-500 italic">No mood board elements collected yet.</p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {savedMoodboard.map(item => (
                    <div key={item.id} className="flex items-center gap-2 bg-stone-950 px-2.5 py-1.5 border border-stone-800 text-[11px]">
                      {item.type === 'swatch' && (
                        <span className="w-3 h-3 rounded-full border border-white/20" style={{ backgroundColor: item.hex }} />
                      )}
                      <span className="text-stone-300 max-w-[150px] truncate">{item.title || item.name}</span>
                      <button 
                        onClick={() => removeFromMoodboard(item.id)}
                        className="text-stone-500 hover:text-rose-400"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Saved Cost Calculator Estimate */}
            {savedEstimate && (
              <div className="pt-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold flex items-center gap-1.5">
                    <Calculator className="w-3.5 h-3.5" />
                    <span>Saved Estimate</span>
                  </span>
                  <Link to="/calculator" onClick={onClose} className="text-[11px] text-gold hover:underline">
                    Edit Calculator
                  </Link>
                </div>
                <div className="bg-stone-950 p-4 border border-gold/30 space-y-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs text-stone-400">{savedEstimate.propertyType} ({savedEstimate.area} sq.ft)</span>
                    <span className="text-sm font-semibold text-gold">₹{savedEstimate.totalFormatted}</span>
                  </div>
                  <div className="text-[11px] text-stone-400">
                    Tier: <span className="text-ivory font-medium capitalize">{savedEstimate.quality}</span> | Est. Timeline: {savedEstimate.timelineMonths} Months
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer CTAs */}
          <div className="p-6 border-t border-stone-800 bg-stone-950 space-y-3">
            <Link
              to="/consultation"
              onClick={onClose}
              className="w-full py-3 bg-gold text-charcoal-950 font-semibold text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-2 hover:bg-gold-light transition-colors"
            >
              <span>Consult Atelier With Saved List</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
