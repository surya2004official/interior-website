import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, 
  Sparkles, Layers, Phone, Calendar 
} from 'lucide-react';
import { SERVICES, PROJECTS } from '../data/interiorData';

export const ServiceDetailPage = () => {
  const { slug } = useParams();
  
  const service = SERVICES.find(s => s.slug === slug) || SERVICES[0];

  // Matching projects for this service
  const matchingProjects = PROJECTS.filter(p => 
    p.category.toLowerCase().includes(service.slug.replace('-', ' ')) ||
    p.subCategory.toLowerCase().includes(service.slug.replace('-', ' '))
  ).slice(0, 3);

  return (
    <div className="bg-ivory text-charcoal pt-20 pb-10">
      {/* Back Link */}
      <div className="w-full px-4 sm:px-6 py-4">
        <Link 
          to="/services" 
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-stone-500 hover:text-gold transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Practices</span>
        </Link>
      </div>

      {/* Hero */}
      <div className="relative h-[55vh] min-h-[420px] w-full overflow-hidden bg-charcoal-950">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover brightness-[0.70]" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent" />

        <div className="absolute bottom-8 left-0 right-0 w-full px-4 sm:px-6 text-ivory space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold block">
            Specialized Atelier Practice
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory">
            {service.title}
          </h1>
          <p className="text-stone-300 text-sm max-w-2xl leading-relaxed">
            {service.shortDesc}
          </p>
        </div>
      </div>

      {/* Content Layout */}
      <div className="w-full px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Scope & Narrative */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block">
                Practice Overview
              </span>
              <h2 className="font-serif text-3xl text-charcoal">
                Refining Every Proportion and Material Surface
              </h2>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                {service.fullDesc}
              </p>
            </div>

            {/* Scope of Deliverables */}
            <div className="bg-white p-5 sm:p-6 border border-stone-200 shadow-sm space-y-6 rounded-2xl">
              <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold block border-b border-stone-100 pb-2">
                Detailed Scope of Architecture &amp; Delivery
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.scope.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-stone-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sub-typologies */}
            {service.subCategories && (
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold block">
                  Focused Typologies
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {service.subCategories.map((sub, i) => (
                    <div key={i} className="bg-white border border-stone-200 p-3 text-center text-xs text-stone-700 font-serif rounded-xl shadow-xs">
                      {sub}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Featured Projects in This Category */}
            {matchingProjects.length > 0 && (
              <div className="space-y-6 pt-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl text-charcoal">Selected Practice Projects</h3>
                  <Link to="/projects" className="text-xs text-gold uppercase hover:underline">View All</Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {matchingProjects.map(proj => (
                    <div key={proj.id} className="relative isolate bg-white border border-stone-200 overflow-hidden group rounded-2xl shadow-sm hover:shadow-luxury transition-all">
                      <Link to={`/projects/${proj.id}`} aria-label={`View ${proj.title}`} className="absolute inset-0 z-10 rounded-[inherit] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold" />
                      <div className="aspect-[4/3] overflow-hidden">
                        <img src={proj.heroImage} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                      </div>
                      <div className="p-3">
                        <h4 className="font-serif text-sm text-charcoal group-hover:text-gold truncate">
                          <span>{proj.title}</span>
                        </h4>
                        <span className="text-[10px] text-stone-500">{proj.location}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar CTA & Direct Booking */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-charcoal-950 text-ivory p-6 border border-gold/40 space-y-4 shadow-luxury rounded-2xl">
              <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold block">
                Practice Consultation
              </span>
              <h3 className="font-serif text-2xl text-ivory">
                Commission {service.title}
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                Schedule a dedicated spatial strategy session with our senior practice leads.
              </p>
              <Link
                to="/consultation"
                className="block text-center w-full py-3 bg-gold text-charcoal-950 font-semibold text-xs tracking-[0.2em] uppercase hover:bg-gold-light transition-colors rounded-xl"
              >
                Book Practice Consultation
              </Link>
            </div>

            <div className="bg-white border border-stone-200 p-6 space-y-3 text-xs rounded-2xl shadow-sm">
              <span className="uppercase tracking-wider text-walnut font-semibold block">Interactive Tools</span>
              <Link to="/calculator" className="block text-stone-600 hover:text-gold transition-colors">
                &bull; Run Turnkey Cost Calculator
              </Link>
              <Link to="/ai-designer" className="block text-stone-600 hover:text-gold transition-colors">
                &bull; Generate Concept with AI Designer
              </Link>
              <Link to="/virtual-studio" className="block text-stone-600 hover:text-gold transition-colors">
                &bull; Explore Virtual Showroom with Hotspots
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
