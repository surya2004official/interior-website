import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, ArrowRight, Heart, Share2, MapPin, 
  Layers, Calendar, Maximize2, ShieldCheck, Check 
} from 'lucide-react';
import { PROJECTS } from '../data/interiorData';
import { BeforeAfterSlider } from '../components/common/BeforeAfterSlider';
import { useSaved } from '../context/SavedContext';

export const ProjectDetailPage = () => {
  const { id } = useParams();
  const { toggleSaveProject, isProjectSaved } = useSaved();
  const [selectedImage, setSelectedImage] = useState(null);

  const project = PROJECTS.find(p => p.id === id) || PROJECTS[0];
  const saved = isProjectSaved(project.id);

  // Related projects in similar category or style
  const relatedProjects = PROJECTS.filter(p => p.id !== project.id && (p.category === project.category || p.style === project.style)).slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: project.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Monograph link copied to clipboard!");
    }
  };

  return (
    <div className="bg-ivory text-charcoal pt-20 pb-10">
      {/* Back Link & Navigation */}
      <div className="w-full px-4 sm:px-6 py-4">
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-stone-500 hover:text-gold transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* FULL-WIDTH CINEMATIC HERO */}
      <div className="relative h-[65vh] min-h-[480px] w-full overflow-hidden bg-charcoal-950">
        <img 
          src={project.heroImage} 
          alt={project.title} 
          className="w-full h-full object-cover brightness-[0.75]" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent" />
        
        <div className="absolute bottom-8 left-0 right-0 w-full px-4 sm:px-6 text-ivory">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold block">
                {project.category} &bull; {project.style}
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory">
                {project.title}
              </h1>
              <div className="flex items-center gap-4 text-xs text-stone-300 font-mono">
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-gold" /> {project.location}</span>
                <span>Area: {project.area}</span>
                <span>Year: {project.year}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => toggleSaveProject(project.id)}
                className="px-4 py-2.5 bg-charcoal-900/80 border border-gold/40 text-ivory hover:text-gold flex items-center gap-2 text-xs uppercase tracking-wider backdrop-blur-md rounded-xl transition-all"
              >
                <Heart className={`w-4 h-4 ${saved ? 'text-gold fill-gold' : ''}`} />
                <span>{saved ? 'Saved' : 'Save'}</span>
              </button>
              <button
                onClick={handleShare}
                className="p-2.5 bg-charcoal-900/80 border border-white/20 text-ivory hover:text-gold backdrop-blur-md rounded-xl transition-all"
                title="Share Monograph"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* METADATA BAR */}
      <div className="bg-stone-900 text-ivory border-y border-gold/20 py-6">
        <div className="w-full px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs divide-x divide-stone-800">
          <div className="space-y-1">
            <span className="text-[10px] uppercase text-gold tracking-widest block">Client Profile</span>
            <span className="font-serif text-sm text-stone-200">{project.client}</span>
          </div>
          <div className="pl-6 space-y-1">
            <span className="text-[10px] uppercase text-gold tracking-widest block">Spatial Footprint</span>
            <span className="font-serif text-sm text-stone-200">{project.area}</span>
          </div>
          <div className="pl-6 space-y-1">
            <span className="text-[10px] uppercase text-gold tracking-widest block">Architectural Vernacular</span>
            <span className="font-serif text-sm text-stone-200">{project.style}</span>
          </div>
          <div className="pl-6 space-y-1">
            <span className="text-[10px] uppercase text-gold tracking-widest block">Handover Year</span>
            <span className="font-serif text-sm text-stone-200">{project.year}</span>
          </div>
        </div>
      </div>

      {/* PROJECT NARRATIVE & CHALLENGES */}
      <div className="w-full px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Story */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block">
                The Architectural Narrative
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal leading-snug">
                Conceiving an Enduring Sensory Haven
              </h2>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Challenges & Solutions Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <div className="bg-white p-6 border border-stone-200 space-y-3 shadow-sm rounded-2xl">
                <span className="text-xs uppercase tracking-wider text-rose-800 font-semibold block">
                  Design &amp; Structural Challenge
                </span>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="bg-white p-6 border border-gold/40 space-y-3 shadow-sm bg-gradient-to-br from-white to-gold/5 rounded-2xl">
                <span className="text-xs uppercase tracking-wider text-gold font-semibold block">
                  The Implemented Atelier Solution
                </span>
                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Full Photo Gallery Grid */}
            <div className="pt-8 space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block">
                Photographic Monograph Gallery
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.gallery.map((imgUrl, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setSelectedImage(imgUrl)}
                    className="aspect-[4/3] bg-stone-900 overflow-hidden cursor-pointer group border border-stone-200 rounded-2xl shadow-sm"
                  >
                    <img 
                      src={imgUrl} 
                      alt={`${project.title} perspective ${idx + 1}`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Before & After Slider */}
            {project.beforeImage && project.afterImage && (
              <div className="pt-8 space-y-4">
                <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block">
                  Before &amp; After Transformation
                </span>
                <BeforeAfterSlider
                  beforeImage={project.beforeImage}
                  afterImage={project.afterImage}
                  title="Site Evolution"
                  category="Structural Transformation"
                  description="Interactive reveal comparing the initial structural site shell against the completed turnkey handover."
                />
              </div>
            )}
          </div>

          {/* Sidebar: Materials, Consultation & Specs */}
          <div className="lg:col-span-4 space-y-8">
            {/* Materials Palette Card */}
            <div className="bg-white border border-stone-200 p-6 space-y-4 shadow-sm rounded-2xl">
              <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold block border-b border-stone-100 pb-2">
                Materials &amp; Finishes
              </span>
              <ul className="space-y-2.5 text-xs text-stone-700">
                {project.materials.map((mat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architectural Consultation Card */}
            <div className="bg-charcoal-950 text-ivory p-6 border border-gold/40 space-y-4 shadow-luxury rounded-2xl">
              <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold block">
                Private Commission
              </span>
              <h3 className="font-serif text-2xl text-ivory">
                Enquire for a Similar Space
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                Commission a bespoke architectural study tailored to your penthouse, villa, or commercial floor plan.
              </p>
              <Link
                to="/consultation"
                className="block text-center w-full py-3 bg-gold text-charcoal-950 font-semibold text-xs tracking-[0.2em] uppercase hover:bg-gold-light transition-colors rounded-xl"
              >
                Schedule Consultation
              </Link>
            </div>

            {/* Quick Tools */}
            <div className="bg-stone-100 p-6 border border-stone-200 space-y-3 text-xs rounded-2xl">
              <span className="uppercase tracking-wider text-walnut font-semibold block">Interactive Tools</span>
              <Link to="/calculator" className="block text-stone-600 hover:text-gold transition-colors">
                &bull; Calculate estimated cost for this project size
              </Link>
              <Link to="/ai-designer" className="block text-stone-600 hover:text-gold transition-colors">
                &bull; Generate similar concept with AI Room Designer
              </Link>
              <Link to="/virtual-studio" className="block text-stone-600 hover:text-gold transition-colors">
                &bull; View interactive showroom with hotspots
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* RELATED PROJECTS */}
      {relatedProjects.length > 0 && (
        <div className="bg-stone-100/70 py-10 border-t border-stone-200">
          <div className="w-full px-4 sm:px-6">
            <h3 className="font-serif text-3xl text-charcoal mb-8">Related Architectural Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map(rel => (
                <div key={rel.id} className="relative isolate bg-white border border-stone-200 group overflow-hidden rounded-2xl shadow-sm hover:shadow-luxury transition-all">
                  <Link to={`/projects/${rel.id}`} aria-label={`View ${rel.title}`} className="absolute inset-0 z-10 rounded-[inherit] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold" />
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={rel.heroImage} alt={rel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="p-4 space-y-2">
                    <span className="text-[10px] text-gold uppercase">{rel.category}</span>
                    <h4 className="font-serif text-lg text-charcoal group-hover:text-gold transition-colors">
                      <span>{rel.title}</span>
                    </h4>
                    <p className="text-[11px] text-stone-500">{rel.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="Enlarged view" className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl" />
        </div>
      )}
    </div>
  );
};
