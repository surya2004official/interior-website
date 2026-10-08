import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Trash2, ArrowRight, ExternalLink, Calculator, Layers, MessageCircle } from 'lucide-react';
import { useSaved } from '../context/SavedContext';
import { PROJECTS, STUDIO_INFO } from '../data/interiorData';

export const SavedPage = () => {
  const { 
    savedProjectIds, 
    toggleSaveProject, 
    savedImages, 
    toggleSaveImage, 
    savedMoodboard, 
    removeFromMoodboard,
    savedEstimate 
  } = useSaved();

  const savedProjects = PROJECTS.filter(p => savedProjectIds.includes(p.id));

  const generateWhatsAppConsultation = () => {
    const projectNames = savedProjects.map(p => p.title).join(', ') || 'None';
    const msg = `Hello Aurelia & Stone, I have compiled a list of saved inspirations from your website:
Saved Projects: ${projectNames}
Saved Moodboard Items: ${savedMoodboard.length} elements
${savedEstimate ? `Saved Estimate: ${savedEstimate.propertyType} (₹${savedEstimate.totalFormatted})` : ''}
I would like to discuss a consultation based on these references.`;
    const phone = STUDIO_INFO.whatsapp.replace('+', '');
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-ivory text-charcoal pt-20 pb-10">
      <div className="w-full px-4 sm:px-6 mb-6">
        <div className="border-b border-stone-300 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block">
              Patron Private Curation
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl text-charcoal tracking-tight">
              Your Saved Atelier Inspirations
            </h1>
            <p className="text-stone-600 text-sm max-w-2xl leading-relaxed">
              All architectural projects, gallery inspirations, custom moodboard components, and cost estimations saved to your local session.
            </p>
          </div>

          <button
            onClick={generateWhatsAppConsultation}
            className="px-6 py-3.5 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shadow-md self-start md:self-auto"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consult Atelier with Saved List</span>
          </button>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 space-y-8">
        {/* SAVED PROJECTS SECTION */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-stone-200 pb-3">
            <h2 className="font-serif text-2xl text-charcoal flex items-center gap-2">
              <Heart className="w-5 h-5 text-gold fill-gold" />
              <span>Saved Architectural Works ({savedProjects.length})</span>
            </h2>
            <Link to="/projects" className="text-xs uppercase text-gold hover:underline">
              Browse More Projects
            </Link>
          </div>

          {savedProjects.length === 0 ? (
            <div className="bg-white border border-stone-200 p-5 text-center text-xs text-stone-500 italic">
              No projects saved yet. Click the heart icon on any project card in the portfolio.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedProjects.map(proj => (
                <div key={proj.id} className="bg-white border border-stone-200 overflow-hidden shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <img src={proj.heroImage} alt={proj.title} className="w-full h-full object-cover" />
                      <button
                        onClick={() => toggleSaveProject(proj.id)}
                        className="absolute top-3 right-3 p-2 rounded-full bg-charcoal-950/80 text-rose-400 hover:text-white"
                        title="Remove from saved"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="p-5 space-y-2">
                      <span className="text-[10px] text-gold uppercase">{proj.category}</span>
                      <h3 className="font-serif text-xl text-charcoal">
                        <Link to={`/projects/${proj.id}`}>{proj.title}</Link>
                      </h3>
                      <p className="text-xs text-stone-500">{proj.location} &bull; {proj.area}</p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-stone-100 flex items-center justify-between mt-3">
                    <Link to={`/projects/${proj.id}`} className="text-xs text-walnut hover:text-gold uppercase font-semibold flex items-center gap-1">
                      <span>View Monograph</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* SAVED GALLERY IMAGES */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-stone-200 pb-3">
            <h2 className="font-serif text-2xl text-charcoal">
              Gallery Inspirations ({savedImages.length})
            </h2>
            <Link to="/gallery" className="text-xs uppercase text-gold hover:underline">
              Open Gallery
            </Link>
          </div>

          {savedImages.length === 0 ? (
            <div className="bg-white border border-stone-200 p-5 text-center text-xs text-stone-500 italic">
              No gallery images saved. Visit the inspiration gallery to bookmark favorite interior details.
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {savedImages.map(img => (
                <div key={img.id} className="relative aspect-square bg-stone-900 overflow-hidden group">
                  <img src={img.image} alt={img.title} className="w-full h-full object-cover" />
                  <button
                    onClick={() => toggleSaveImage(img)}
                    className="absolute top-1 right-1 p-1.5 bg-black/80 text-rose-400 hover:text-white"
                    title="Remove"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                  <span className="absolute bottom-1 left-1 bg-black/80 text-[9px] text-white px-1 truncate max-w-[90%]">
                    {img.title}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* SAVED MOOD BOARD CANVAS PREVIEW */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-stone-200 pb-3">
            <h2 className="font-serif text-2xl text-charcoal flex items-center gap-2">
              <Layers className="w-5 h-5 text-gold" />
              <span>Mood Board Elements ({savedMoodboard.length})</span>
            </h2>
            <Link to="/moodboard" className="text-xs uppercase text-gold hover:underline flex items-center gap-1">
              <span>Open Mood Board Studio</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>

          {savedMoodboard.length === 0 ? (
            <div className="bg-white border border-stone-200 p-5 text-center text-xs text-stone-500 italic">
              No mood board items currently pinned.
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {savedMoodboard.map(item => (
                <div key={item.id} className="bg-white border border-stone-200 p-3 flex flex-col justify-between">
                  {item.type === 'swatch' && (
                    <div className="aspect-[4/3] mb-2 rounded border border-stone-200" style={{ backgroundColor: item.hex }} />
                  )}
                  {item.type === 'image' && (
                    <div className="aspect-[4/3] mb-2 overflow-hidden bg-stone-900">
                      <img src={item.url} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                  {item.type === 'material' && (
                    <div className="aspect-[4/3] mb-2 bg-stone-100 flex items-center justify-center p-2 text-center text-[10px] text-stone-600 font-serif">
                      {item.title}
                    </div>
                  )}
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[10px] font-medium text-charcoal truncate">{item.title}</span>
                    <button onClick={() => removeFromMoodboard(item.id)} className="text-stone-400 hover:text-rose-500">
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* SAVED COST ESTIMATE */}
        {savedEstimate && (
          <div className="bg-white border border-stone-200 p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <span className="text-xs uppercase tracking-wider text-gold font-semibold flex items-center gap-2">
                <Calculator className="w-4 h-4" />
                <span>Saved Cost Calculator Estimate</span>
              </span>
              <Link to="/calculator" className="text-xs text-walnut hover:text-gold uppercase font-medium">
                Recalculate
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div>
                <span className="text-stone-400 block">Property &bull; Area:</span>
                <span className="font-serif text-base text-charcoal">{savedEstimate.propertyType} ({savedEstimate.area} sq.ft)</span>
              </div>
              <div>
                <span className="text-stone-400 block">Execution Tier:</span>
                <span className="font-serif text-base text-charcoal capitalize">{savedEstimate.quality}</span>
              </div>
              <div>
                <span className="text-stone-400 block">Est. Investment:</span>
                <span className="font-serif text-lg text-gold font-semibold">₹{savedEstimate.totalFormatted}</span>
              </div>
              <div>
                <span className="text-stone-400 block">Timeline:</span>
                <span className="font-serif text-base text-charcoal">{savedEstimate.timelineMonths} Months</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
