import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Layers, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { STUDIO_INFO } from '../data/interiorData';

export const AboutPage = () => {
  const team = [
    {
      name: "Armaan V. Chhatwal",
      role: "Principal Architect & Founder",
      bio: "Trained at the Architectural Association (AA) London, Armaan orchestrates master planning and monumental proportions for private residential patrons.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Ar. Shreya Mehta",
      role: "Design Director & Stone Curator",
      bio: "Oversees marble selection expeditions to Carrara and Verona, specializing in book-matched dry hanging and Italian joinery details.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Devangini Sen",
      role: "Lead Biophilic & Landscape Architect",
      bio: "Specializes in indoor botanical courtyards, natural cross-ventilation corridors, and sensory water architectural features.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Tariq Al-Mansoor",
      role: "Director of Technical Engineering & MEP",
      bio: "Directs acoustic insulation, smart home automation matrices, and precision architectural cove lighting channels.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="bg-ivory text-charcoal pt-20 pb-10">
      {/* Editorial Header */}
      <div className="w-full px-4 sm:px-6 mb-8">
        <div className="border-b border-stone-300 pb-8 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block">
            The Studio Monograph
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal tracking-tight">
            Haute Architecture, Tactile Mastery, &amp; Timeless Proportion
          </h1>
          <p className="text-stone-600 text-sm max-w-2xl leading-relaxed">
            Established in 2014, Aurelia &amp; Stone has grown into an international architectural atelier dedicated to crafting residential sanctuaries and commanding commercial suites with quiet authority.
          </p>
        </div>
      </div>

      {/* Full-width Photography Banner */}
      <div className="w-full px-4 sm:px-6 mb-10">
        <div className="aspect-[21/9] min-h-[350px] overflow-hidden shadow-luxury border border-stone-200">
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80" 
            alt="Atelier Space" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>

      {/* Brand Story & Mission */}
      <div className="w-full px-4 sm:px-6 mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold block">
              Our Genesis
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal leading-snug">
              Rejecting Ephemeral Trends for Generational Permanence.
            </h2>
            <div className="w-12 h-0.5 bg-gold" />
            <p className="text-stone-600 text-sm leading-relaxed">
              We started with a foundational conviction: genuine luxury does not scream for attention through decorative excess. True luxury is found in the weight of a solid brass handle, the acoustic stillness of a master bed suite, and how afternoon sunlight grazes a textured lime plaster wall.
            </p>
            <p className="text-stone-600 text-sm leading-relaxed">
              Over the last decade, our teams across Mumbai, Delhi, Bengaluru, and Dubai have authored more than 165 residential and corporate spaces, uniting engineering rigor with poetic sensitivity.
            </p>
          </div>

          <div className="lg:col-span-6 bg-white p-5 sm:p-6 border border-stone-200 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider text-walnut font-semibold block">Mission</span>
              <p className="text-stone-700 text-sm leading-relaxed">
                To choreograph spatial sanctuaries where human wellbeing, material authenticity, and architectural purity elevate everyday life into an art form.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-stone-100">
              <span className="text-xs uppercase tracking-wider text-walnut font-semibold block">Vision</span>
              <p className="text-stone-700 text-sm leading-relaxed">
                To be internationally recognized as India's premier bespoke architectural atelier, celebrating indigenous stonework and craftsmanship within globally refined modernist frameworks.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-stone-100/70 py-10 border-y border-stone-200 mb-10">
        <div className="w-full px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block">
              Atelier Principles
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-charcoal">The Pillars of Our Practice</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Material Honesty",
                desc: "We celebrate stones, woods, and metals in their authentic state—no faux veneers or synthetic shortcuts. Each material is allowed to age with dignity."
              },
              {
                title: "Acoustic & Sensory Stillness",
                desc: "True luxury is quiet. We engineer acoustic drywall assemblies, soundproof glazing, and soft textile buffers that isolate urban commotion."
              },
              {
                title: "Circadian Lighting Physics",
                desc: "We design with shadow as deliberately as with light, calibrating indirect 2700K illumination channels that nurture cognitive calm and deep restorative sleep."
              }
            ].map((val, idx) => (
              <div key={idx} className="bg-white p-5 border border-stone-200 space-y-3 shadow-sm">
                <span className="font-serif text-3xl text-gold/60 font-light block">0{idx + 1}</span>
                <h4 className="font-serif text-xl text-charcoal">{val.title}</h4>
                <p className="text-stone-600 text-xs leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Principal Leadership Team */}
      <div className="w-full px-4 sm:px-6 mb-10">
        <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block">
            Atelier Direction
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-charcoal">The Architects Behind the Works</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div key={i} className="bg-white border border-stone-200 overflow-hidden group shadow-sm">
              <div className="aspect-[3/4] overflow-hidden bg-stone-900">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale contrast-125 group-hover:grayscale-0" 
                />
              </div>
              <div className="p-5 space-y-2">
                <h4 className="font-serif text-lg text-charcoal">{member.name}</h4>
                <span className="text-[10px] uppercase tracking-wider text-gold font-semibold block">{member.role}</span>
                <p className="text-stone-600 text-xs leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Consultation CTA */}
      <div className="w-full px-4 sm:px-6">
        <div className="bg-charcoal-950 text-ivory p-5 sm:p-8 border border-gold/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2">
            <h3 className="font-serif text-2xl sm:text-3xl text-ivory">Experience the Atelier in Person</h3>
            <p className="text-xs text-stone-400 max-w-xl">
              Arrange a private appointment at our BKC Mumbai or Claridges Delhi studio to examine material swatches and discuss your property blueprints.
            </p>
          </div>
          <Link
            to="/consultation"
            className="px-8 py-3.5 bg-gold text-charcoal-950 font-semibold text-xs tracking-[0.2em] uppercase hover:bg-gold-light whitespace-nowrap"
          >
            Schedule Atelier Visit
          </Link>
        </div>
      </div>
    </div>
  );
};
