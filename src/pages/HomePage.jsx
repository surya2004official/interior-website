import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Sparkles, Compass, Calculator, Eye, ShieldCheck, 
  ChevronRight, Award, Layers, Clock, CheckCircle2, Play, Heart 
} from 'lucide-react';
import { 
  STUDIO_INFO, PROJECTS, SERVICES, DESIGN_STYLES, 
  TESTIMONIALS, BLOG_POSTS, GALLERY_ITEMS 
} from '../data/interiorData';
import { TransformationDeck } from '../components/common/TransformationDeck';
import { useSaved } from '../context/SavedContext';

export const HomePage = () => {
  const [heroIndex, setHeroIndex] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const { toggleSaveProject, isProjectSaved } = useSaved();

  // Unique cinematic hero slides
  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=85",
      caption: "The Sovereign Hall &bull; Architectural Calacatta Sanctuary"
    },
    {
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1920&q=85",
      caption: "Villa Solarium &bull; Awas Coastline, Alibaug"
    },
    {
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1920&q=85",
      caption: "The Horizon Pavilion &bull; Private Infinity Estate"
    }
  ];

  // Hero carousel auto transition
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex(prev => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const featuredProjects = PROJECTS.slice(0, 4);

  return (
    <div className="bg-ivory text-charcoal">
      {/* 1. CINEMATIC LUXURY HERO SECTION */}
      <section className="relative min-h-[560px] py-24 sm:min-h-[600px] w-full overflow-hidden flex items-center justify-center bg-charcoal-950">
        {/* Background Images with Cross-Fade */}
        {heroSlides.map((slide, idx) => (
          <div 
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              heroIndex === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            } transition-transform duration-10000`}
          >
            <img 
              src={slide.image} 
              alt={slide.caption} 
              className="w-full h-full object-cover object-center brightness-[0.70]" 
            />
          </div>
        ))}

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/30 to-charcoal-950/60" />
        <div className="absolute inset-0 editorial-overlay opacity-30" />

        {/* Hero Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center text-ivory space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/15 border border-gold/40 backdrop-blur-md rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-semibold">
              Haute Architecture &bull; Monographic Interiors
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-ivory leading-[1.08] max-w-4xl mx-auto">
            We Don't Just Design Spaces.<br />
            <span className="italic font-light gold-gradient-text">We Create Experiences.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-stone-300 max-w-2xl mx-auto font-light leading-relaxed">
            Thoughtfully crafted architectural interiors that unite timeless proportion, tactile materiality, and quiet understated grandeur.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/projects"
              className="w-full sm:w-auto px-8 py-3.5 bg-gold text-charcoal-950 font-semibold text-xs tracking-[0.2em] uppercase hover:bg-gold-light transition-all shadow-gold-glow flex items-center justify-center gap-2 rounded-xl"
            >
              <span>Explore Our Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              to="/consultation"
              className="w-full sm:w-auto px-8 py-3.5 border border-gold/60 text-ivory hover:bg-white/10 text-xs tracking-[0.2em] uppercase transition-all backdrop-blur-sm rounded-xl"
            >
              Book a Consultation
            </Link>
          </div>

          {/* Slide Indicator Dots */}
          <div className="pt-8 flex items-center justify-center gap-3">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setHeroIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  heroIndex === i ? 'w-8 bg-gold' : 'w-2 bg-white/40'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          <div className="text-[10px] uppercase tracking-widest text-stone-400 font-mono">
            {heroSlides[heroIndex].caption}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-stone-400 pointer-events-none">
          <span className="text-[9px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-4 h-8 border border-white/20 rounded-full flex justify-center pt-1">
            <div className="w-1 h-2 bg-gold rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* 2. STUDIO INTRODUCTION & MANIFESTO */}
      <section className="py-12 w-full px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block">
              The Atelier Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal leading-tight">
              Architecture as an Emotive Sanctuary.
            </h2>
            <div className="w-12 h-0.5 bg-gold" />
            <p className="text-stone-600 text-sm leading-relaxed">
              Founded in 2014, Aurelia &amp; Stone operates at the intersection of haute architecture, precision engineering, and sensory material mastery. We reject transient design fads in favor of proportions that endure for generations.
            </p>
            <p className="text-stone-600 text-sm leading-relaxed">
              Every residence we author is treated as a bespoke portrait of its patron—curating private quarries in Carrara, hand-woven Belgian bouclés, and invisible architectural lighting that calibrates to the human circadian rhythm.
            </p>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-walnut hover:text-gold transition-colors"
              >
                <span>Read The Studio Monograph</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Unique Intro Imagery with Rounded Edges */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="aspect-[3/4] overflow-hidden shadow-luxury rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80" 
                alt="Architectural Materiality & Warm Travertine" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden shadow-luxury sm:translate-y-8 rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80" 
                alt="Living Sanctuary & Bespoke Joinery" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS PORTFOLIO */}
      <section className="py-10 bg-stone-100/70 border-y border-stone-200">
        <div className="w-full px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block mb-2">
                Selected Portfolio
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-charcoal">
                Curated Architectural Works
              </h2>
            </div>
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-walnut hover:text-gold"
            >
              <span>Explore All Projects (12)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((proj) => {
              const saved = isProjectSaved(proj.id);
              return (
                <div key={proj.id} className="relative isolate group bg-white border border-stone-200 shadow-luxury overflow-hidden rounded-2xl">
                  <Link to={`/projects/${proj.id}`} aria-label={`View ${proj.title}`} className="absolute inset-0 z-10 rounded-[inherit] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold" />
                  <div className="relative aspect-[16/10] overflow-hidden bg-charcoal-900">
                    <img 
                      src={proj.heroImage} 
                      alt={proj.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-charcoal-950/80 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-wider text-ivory border border-white/10 rounded-lg">
                      {proj.category}
                    </div>

                    {/* Wishlist toggle */}
                    <button
                      onClick={(e) => { e.preventDefault(); toggleSaveProject(proj.id); }}
                      className="z-20 absolute top-4 right-4 p-2 rounded-full bg-charcoal-950/80 text-white hover:text-gold backdrop-blur-md transition-colors"
                      title="Save Project"
                    >
                      <Heart className={`w-4 h-4 ${saved ? 'text-gold fill-gold' : ''}`} />
                    </button>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-baseline justify-between text-xs text-stone-500 font-mono">
                      <span>{proj.location}</span>
                      <span>{proj.area}</span>
                    </div>

                    <h3 className="font-serif text-2xl text-charcoal group-hover:text-walnut transition-colors">
                      <span>
                        {proj.title}
                      </span>
                    </h3>

                    <p className="text-stone-600 text-xs line-clamp-2 leading-relaxed">
                      {proj.description}
                    </p>

                    <div className="pt-2 flex items-center justify-between border-t border-stone-100">
                      <span className="text-[11px] uppercase tracking-wider text-gold font-medium">
                        Style: {proj.style}
                      </span>
                      <span
                        className="text-xs uppercase tracking-wider text-walnut group-hover:text-gold font-semibold flex items-center gap-1"
                      >
                        <span>View Project</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. DESIGN PRACTICES & SERVICES OVERVIEW */}
      <section className="py-10 w-full px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block">
            Comprehensive Disciplines
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-charcoal">
            Residential &amp; Commercial Practices
          </h2>
          <p className="text-stone-500 text-xs sm:text-sm">
            From structural bare-shell reimagination to custom Italian joinery and acoustic tuning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.slice(0, 6).map((service) => (
            <div 
              key={service.id} 
              className="bg-white border border-stone-200 p-6 flex flex-col justify-between hover:border-gold/50 shadow-sm hover:shadow-luxury transition-all duration-300 group rounded-2xl"
            >
              <div className="space-y-4">
                <div className="aspect-[16/10] overflow-hidden rounded-xl">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <h3 className="font-serif text-xl text-charcoal group-hover:text-walnut transition-colors">
                  {service.title}
                </h3>
                <p className="text-stone-600 text-xs leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-stone-100 flex items-center justify-between">
                <Link 
                  to={`/services/${service.slug}`} 
                  className="text-xs uppercase tracking-wider text-gold font-semibold flex items-center gap-1 group-hover:underline"
                >
                  <span>Explore Practice</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. INTERACTIVE BEFORE & AFTER TRANSFORMATION SHOWCASE */}
      <section className="overflow-hidden py-10 bg-charcoal-950 text-ivory">
        <div className="w-full px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block">
              Spatial Evolution
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-ivory">
              Before &amp; After Transformations
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm">
              The same room. A fresh perspective. Swipe through our before-and-after design concepts.
            </p>
          </div>

          <TransformationDeck />
        </div>
      </section>

      {/* 6. AI ROOM DESIGNER PROMOTIONAL CALLOUT (Unique Image & Rounded Card) */}
      <section className="py-10 w-full px-4 sm:px-6">
        <div className="bg-stone-900 border border-gold/40 text-ivory p-5 sm:p-8 relative overflow-hidden shadow-2xl rounded-3xl">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-gold/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/20 text-gold text-xs uppercase tracking-widest font-semibold border border-gold/30 rounded-full">
                <Sparkles className="w-4 h-4" />
                <span>Next-Generation Studio Suite</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl text-ivory leading-tight">
                Experience Our AI-Inspired Room Designer
              </h2>

              <p className="text-stone-300 text-sm leading-relaxed max-w-xl">
                Upload a photograph of your existing space or select a sample layout. Choose your preferred architectural style, materials, and investment tier to synthesize an instant curated conceptual dossier.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/ai-designer"
                  className="px-8 py-3.5 bg-gold text-charcoal-950 font-semibold text-xs tracking-[0.2em] uppercase hover:bg-gold-light transition-all shadow-gold-glow flex items-center gap-2 rounded-xl"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Launch AI Designer</span>
                </Link>

                <Link
                  to="/style-finder"
                  className="px-8 py-3.5 border border-gold/50 text-ivory text-xs tracking-[0.2em] uppercase hover:bg-white/10 transition-colors flex items-center gap-2 rounded-xl"
                >
                  <Compass className="w-4 h-4 text-gold" />
                  <span>Take Style Quiz</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 aspect-[4/3] border border-gold/30 overflow-hidden shadow-2xl group rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80" 
                alt="AI Generated Room Concept & Architectural Illumination" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. ARCHITECTURAL STYLE COLLECTIONS */}
      <section className="py-10 bg-stone-100/70 border-t border-stone-200">
        <div className="w-full px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block">
              Curated Vernaculars
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-charcoal">
              Signature Design Languages
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm">
              Distinct design paradigms tailored to harmonize with global architectural contexts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DESIGN_STYLES.map((style) => (
              <div key={style.id} className="bg-white border border-stone-200 overflow-hidden group shadow-sm hover:shadow-luxury transition-all rounded-2xl">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={style.image} 
                    alt={style.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="font-serif text-2xl text-white">{style.name}</h3>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <p className="text-stone-600 text-xs leading-relaxed">
                    {style.description}
                  </p>
                  
                  <div className="space-y-1 pt-2 border-t border-stone-100">
                    <span className="text-[10px] uppercase tracking-wider text-gold font-semibold block">Key Materials:</span>
                    <p className="text-[11px] text-stone-500">{style.keyMaterials.join(' &bull; ')}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. OUR 8-STEP CREATIVE DESIGN METHODOLOGY PREVIEW */}
      <section className="py-10 w-full px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block mb-2">
              White-Glove Delivery
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-charcoal">
              The 8-Stage Architecture Journey
            </h2>
          </div>
          <Link to="/process" className="text-xs uppercase tracking-wider font-semibold text-walnut hover:text-gold flex items-center gap-1">
            <span>Explore Full Timeline</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { step: "01", title: "Space Analysis", desc: "Laser 3D scanning, daylight studies & spatial orientation." },
            { step: "02", title: "Concept Synthesis", desc: "Zoning plans, tactile mood boards & architectural flow." },
            { step: "03", title: "3D Hyper-CGI", desc: "Photorealistic render review with exact material veining." },
            { step: "04", title: "Global Procurement", desc: "Direct quarry stone selection and Italian millwork imports." },
            { step: "05", title: "Engineering BOQ", desc: "Detailed drawings, MEP coordinates & structural approvals." },
            { step: "06", title: "Site Execution", desc: "White-glove supervised construction with milestone audits." },
            { step: "07", title: "Styling & Art", desc: "Private gallery art curation, fine linens & custom cutlery." },
            { step: "08", title: "Atelier Handover", desc: "Flawless turnkey delivery with 3-year post-handover care." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-stone-200 p-6 space-y-2 hover:border-gold/50 shadow-sm transition-colors rounded-2xl">
              <span className="font-serif text-3xl text-gold/60 font-light block">{item.step}</span>
              <h4 className="font-serif text-lg text-charcoal font-medium">{item.title}</h4>
              <p className="text-stone-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. STUDIO ACCREDITATIONS & ANIMATED STATS */}
      <section className="py-10 bg-charcoal-900 text-ivory border-y border-gold/20">
        <div className="w-full px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-stone-800">
            {STUDIO_INFO.stats.map((st, i) => (
              <div key={i} className="space-y-2 px-4">
                <div className="font-serif text-4xl sm:text-5xl text-gold font-light">
                  {st.value}{st.suffix}
                </div>
                <span className="text-xs uppercase tracking-widest text-stone-300 font-sans block">
                  {st.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. INTERACTIVE COST CALCULATOR TEASER */}
      <section className="py-10 w-full px-4 sm:px-6">
        <div className="bg-white border border-stone-200 p-5 sm:p-8 shadow-luxury grid grid-cols-1 lg:grid-cols-12 gap-6 items-center rounded-3xl">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block">
              Financial Transparency
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-charcoal">
              Estimate Your Interior Investment Online
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Calculate realistic Indian Rupee turnkey estimations for your apartment, villa, or penthouse. Choose between Atelier Essential, Haute Signature, or Sovereign Bespoke tiers.
            </p>
            <div className="pt-2 flex items-center gap-4">
              <Link
                to="/calculator"
                className="px-6 py-3 bg-walnut text-ivory hover:bg-charcoal text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2 rounded-xl"
              >
                <Calculator className="w-4 h-4 text-gold" />
                <span>Launch Cost Calculator</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 bg-stone-900 p-6 text-ivory space-y-3 border border-gold/30 rounded-2xl">
            <div className="flex justify-between items-baseline border-b border-stone-800 pb-2">
              <span className="text-xs text-stone-400">Sample Estimate (3 BHK Penthouse)</span>
              <span className="text-gold font-serif text-lg font-semibold">₹1.35 Crores</span>
            </div>
            <div className="text-xs text-stone-300 space-y-1.5 font-mono">
              <div className="flex justify-between"><span>Living &amp; Foyer:</span> <span>₹48,00,000</span></div>
              <div className="flex justify-between"><span>Gourmet Island Kitchen:</span> <span>₹18,00,000</span></div>
              <div className="flex justify-between"><span>3 Bedroom Sanctums:</span> <span>₹42,00,000</span></div>
              <div className="flex justify-between"><span>Ceiling &amp; Smart Lights:</span> <span>₹16,00,000</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. CLIENT TESTIMONIALS SLIDER */}
      <section className="py-10 bg-stone-950 text-ivory border-t border-gold/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block">
            Patron Reflections
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-ivory">
            Words from Our Discerning Clientele
          </h2>

          <div className="min-h-[100px] flex items-center justify-center">
            <blockquote className="font-serif text-lg sm:text-2xl text-stone-200 italic leading-relaxed">
              "{TESTIMONIALS[activeTestimonial].quote}"
            </blockquote>
          </div>

          <div className="space-y-1">
            <h4 className="font-serif text-lg text-gold">{TESTIMONIALS[activeTestimonial].client}</h4>
            <p className="text-xs text-stone-400 font-sans">{TESTIMONIALS[activeTestimonial].designation}</p>
            <p className="text-[11px] text-stone-500 font-mono">{TESTIMONIALS[activeTestimonial].project}</p>
          </div>

          {/* Testimonial Nav Dots */}
          <div className="flex justify-center gap-2 pt-4">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`h-1.5 rounded-full transition-all ${
                  activeTestimonial === i ? 'w-8 bg-gold' : 'w-2 bg-stone-700'
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 12. CINEMATIC VIDEO SHOWCASE SECTION (Unique Night Architecture Image) */}
      <section className="relative min-h-[320px] py-12 w-full overflow-hidden flex items-center justify-center bg-charcoal-950 rounded-3xl mx-auto max-w-7xl my-6">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80" 
          alt="Cinematic Architecture Showcase & Reflective Water" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 brightness-75 rounded-3xl" 
        />
        <div className="relative z-10 text-center text-ivory space-y-4 max-w-xl mx-auto px-4">
          <button
            onClick={() => setIsVideoModalOpen(true)}
            className="w-16 h-16 rounded-full bg-gold/90 text-charcoal-950 flex items-center justify-center mx-auto hover:scale-110 transition-transform shadow-gold-glow"
            aria-label="Play cinematic film"
          >
            <Play className="w-6 h-6 fill-charcoal-950 ml-1" />
          </button>
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block">
            Watch the 2024 Atelier Monograph Film
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-ivory">
            The Craft of Pure Proportion
          </h3>
          <p className="text-xs text-stone-300">
            A 3-minute architectural film detailing our stone selection journeys through Italy and artisanal millwork joinery.
          </p>
        </div>
      </section>

      {/* 13. INSPIRATION GALLERY HIGHLIGHTS */}
      <section className="py-10 w-full px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block mb-2">
              Visual Archives
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-charcoal">
              Atelier Inspiration Gallery
            </h2>
          </div>
          <Link to="/gallery" className="text-xs uppercase tracking-wider font-semibold text-walnut hover:text-gold flex items-center gap-1">
            <span>View Full Gallery (24+)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {GALLERY_ITEMS.slice(0, 8).map(item => (
            <div key={item.id} className="aspect-square bg-stone-900 overflow-hidden group relative shadow-md rounded-2xl">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-charcoal-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-ivory">
                <span className="text-[10px] text-gold uppercase tracking-wider">{item.category}</span>
                <span className="font-serif text-sm">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 14. DESIGN JOURNAL HIGHLIGHTS */}
      <section className="py-10 bg-stone-100/70 border-t border-stone-200">
        <div className="w-full px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block mb-2">
                Editorial Reflections
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-charcoal">
                From The Design Journal
              </h2>
            </div>
            <Link to="/blog" className="text-xs uppercase tracking-wider font-semibold text-walnut hover:text-gold flex items-center gap-1">
              <span>Read All Articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.map(post => (
              <div key={post.id} className="bg-white border border-stone-200 overflow-hidden group shadow-sm hover:shadow-luxury transition-all rounded-2xl">
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-gold uppercase tracking-wider font-semibold">
                    <span>{post.category}</span>
                    <span className="text-stone-400 font-normal">{post.readTime}</span>
                  </div>
                  <h3 className="font-serif text-xl text-charcoal group-hover:text-walnut transition-colors">
                    <Link to="/blog">{post.title}</Link>
                  </h3>
                  <p className="text-stone-600 text-xs line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. PRIVATE CONSULTATION BANNER CTA */}
      <section className="py-10 bg-charcoal-950 text-ivory border-t border-gold/30 relative overflow-hidden rounded-3xl mx-auto max-w-7xl my-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold block">
            Begin Your Spatial Commission
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl text-ivory">
            Let Us Craft Your Architectural Sanctuary
          </h2>
          <p className="text-stone-300 text-sm max-w-2xl mx-auto leading-relaxed">
            Schedule a private one-on-one session with our senior project directors in Mumbai, Delhi, Bengaluru, or Dubai.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/consultation"
              className="px-10 py-4 bg-gold text-charcoal-950 font-semibold text-xs tracking-[0.2em] uppercase hover:bg-gold-light transition-all shadow-gold-glow rounded-xl"
            >
              Book Private Consultation
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border border-stone-700 text-stone-300 hover:text-white text-xs tracking-[0.2em] uppercase transition-colors rounded-xl"
            >
              Locate Our Studios
            </Link>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="bg-stone-900 border border-gold max-w-3xl w-full p-6 text-ivory space-y-4 rounded-2xl">
            <div className="flex justify-between items-center border-b border-stone-800 pb-3">
              <h4 className="font-serif text-xl text-ivory">Aurelia &amp; Stone &bull; Atelier Monograph Film</h4>
              <button onClick={() => setIsVideoModalOpen(false)} className="text-stone-400 hover:text-white">✕</button>
            </div>
            <div className="aspect-video bg-black flex items-center justify-center border border-stone-800 rounded-xl overflow-hidden">
              <div className="text-center space-y-2 p-6">
                <Play className="w-12 h-12 text-gold mx-auto animate-pulse" />
                <p className="text-xs text-stone-300">
                  Cinematic showcase streaming in 4K resolution. Curated architectural footage from Carrara quarries and South Mumbai penthouse handovers.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
