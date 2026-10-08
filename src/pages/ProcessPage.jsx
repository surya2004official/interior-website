import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Clock, Calendar, ShieldCheck, Sparkles } from 'lucide-react';

export const ProcessPage = () => {
  const steps = [
    {
      num: "01",
      title: "Initial Strategic Consultation",
      duration: "Week 1",
      tagline: "Uncovering your lifestyle rhythm and spatial aspirations",
      desc: "An in-depth dialogue with our principal design directors to evaluate architectural floor plans, functional living patterns, spatial priorities, and budget targets.",
      deliverables: ["Lifestyle Assessment Matrix", "Preliminary Budget Scoping", "Atelier Engagement Agreement"]
    },
    {
      num: "02",
      title: "Space Analysis & Laser Survey",
      duration: "Weeks 1 – 2",
      tagline: "Precision millimeters on site to capture volume and daylight",
      desc: "Our technical architects execute 3D laser scans of the bare shell, mapping ceiling heights, structural columns, HVAC conduits, and diurnal solar angles.",
      deliverables: ["As-Built 3D CAD Architectural Shell", "Solar Exposure Lux Map", "Structural Feasibility Audit"]
    },
    {
      num: "03",
      title: "Concept Development & Zoning",
      duration: "Weeks 3 – 4",
      tagline: "Harmonizing circulation, symmetry, and architectural focal points",
      desc: "We formulate comprehensive spatial zoning options, choreographing flow from dramatic formal entertaining salons to intimate acoustic bedrooms.",
      deliverables: ["2D Master Circulation Floor Plans", "Tactile Material Moodboards", "Zoning Options Review"]
    },
    {
      num: "04",
      title: "Photorealistic 3D CGI Visualization",
      duration: "Weeks 5 – 7",
      tagline: "Experience your finished sanctuary before a single wall is raised",
      desc: "Every room is modeled in hyper-photorealistic 3D CGI, simulating exact Calacatta marble book-matching, custom millwork reveals, and 2700K ambient illumination.",
      deliverables: ["High-Resolution 4K Render Package", "Virtual 360° Panorama Previews", "Lighting Scene Renders"]
    },
    {
      num: "05",
      title: "Direct Material Selection & Sourcing",
      duration: "Weeks 7 – 9",
      tagline: "Curating authentic stone, smoked timbers, and European joinery",
      desc: "Clients join us at private stone galleries and material ateliers to personally approve marble slabs, textured lime plasters, bespoke fabrics, and hardware finishes.",
      deliverables: ["Approved Physical Material Sample Box", "Quarry Slab Reservation", "Hardware Specification Schedule"]
    },
    {
      num: "06",
      title: "Engineering BOQ & Approvals",
      duration: "Weeks 9 – 11",
      tagline: "Surgical CAD detailing, structural MEP, and authority sanctions",
      desc: "Detailed architectural construction drawings, electrical load schematics, plumbing lines, false ceiling details, and comprehensive itemized Bill of Quantities (BOQ).",
      deliverables: ["Full Construction CAD Drawing Set", "Itemized Fixed-Price Turnkey BOQ", "Authority Society NOC Coordination"]
    },
    {
      num: "07",
      title: "White-Glove Site Execution",
      duration: "Weeks 12 – 28",
      tagline: "Rigorous daily site supervision and milestone quality benchmarks",
      desc: "Our project managers and master artisans execute demolition, civil works, precision millwork installation, marble dry-hanging, and smart home automation.",
      deliverables: ["Weekly Photographic Progress Dossiers", "Milestone Quality Audit Certificates", "Dedicated Site Architect On-Duty"]
    },
    {
      num: "08",
      title: "Styling, Art Curation & Handover",
      duration: "Final 2 Weeks",
      tagline: "White-glove deep cleaning, art installation, and keys handover",
      desc: "Private art curation, bespoke linen dressing, indoor botanical staging, and thorough HVAC commissioning culminate in a celebratory keys presentation.",
      deliverables: ["Turnkey Keys & Smart Home Pad Handover", "Comprehensive Maintenance Manual", "3-Year Atelier Warranty Certificate"]
    }
  ];

  return (
    <div className="bg-ivory text-charcoal pt-20 pb-10">
      <div className="w-full px-4 sm:px-6 mb-8">
        <div className="border-b border-stone-300 pb-8 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block">
            The Atelier Journey
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal tracking-tight">
            Our 8-Stage Architectural Methodology
          </h1>
          <p className="text-stone-600 text-sm max-w-2xl leading-relaxed">
            Delivering monumental luxury requires uncompromised discipline. Our battle-tested 8-stage methodology guarantees predictable timelines, absolute financial fidelity, and flawless artistry.
          </p>
        </div>
      </div>

      {/* Timeline Steps */}
      <div className="w-full px-4 sm:px-6 space-y-6">
        {steps.map((st, idx) => (
          <div 
            key={st.num}
            className="bg-white border border-stone-200 p-5 sm:p-6 shadow-sm hover:shadow-luxury transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
          >
            {/* Number and Duration */}
            <div className="lg:col-span-3 space-y-2 border-b lg:border-b-0 lg:border-r border-stone-100 pb-4 lg:pb-0">
              <span className="font-serif text-5xl sm:text-6xl text-gold/50 font-light block">
                {st.num}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-stone-500 font-mono">
                <Clock className="w-3.5 h-3.5 text-gold" />
                <span>{st.duration}</span>
              </div>
            </div>

            {/* Description */}
            <div className="lg:col-span-6 space-y-3">
              <span className="text-[11px] uppercase tracking-wider text-gold font-semibold block">
                {st.tagline}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-charcoal">
                {st.title}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {st.desc}
              </p>
            </div>

            {/* Deliverables */}
            <div className="lg:col-span-3 bg-stone-50 p-5 border border-stone-200 space-y-2 text-xs">
              <span className="uppercase tracking-wider text-walnut font-semibold block text-[11px]">
                Stage Deliverables:
              </span>
              <ul className="space-y-1.5 text-stone-600">
                {st.deliverables.map((del, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <div className="w-full px-4 sm:px-6 mt-10">
        <div className="bg-charcoal-950 text-ivory p-5 sm:p-8 border border-gold/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2">
            <h3 className="font-serif text-2xl sm:text-3xl text-ivory">Ready to Commence Stage 01?</h3>
            <p className="text-xs text-stone-400 max-w-xl">
              Schedule your strategic spatial consultation with our senior project directors in Mumbai, Delhi, Bengaluru, or Dubai.
            </p>
          </div>
          <Link
            to="/consultation"
            className="px-8 py-3.5 bg-gold text-charcoal-950 font-semibold text-xs tracking-[0.2em] uppercase hover:bg-gold-light transition-colors whitespace-nowrap"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};
