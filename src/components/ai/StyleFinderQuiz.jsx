import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, Compass, Check, ArrowRight, ArrowLeft, RefreshCw, 
  Calendar, Layers, Palette, ShieldCheck 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { DESIGN_STYLES, COLOR_PALETTES } from '../../data/interiorData';

export const StyleFinderQuiz = () => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = [
    {
      id: 1,
      title: "What type of space are you planning to transform?",
      subtitle: "Select the architectural typology of your property",
      options: [
        { label: "Grand Duplex or Penthouse", styleTag: "modern-luxury", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=500&q=80" },
        { label: "Private Estate or Coastal Villa", styleTag: "mediterranean", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=500&q=80" },
        { label: "Urban High-Rise Apartment", styleTag: "japandi-organic", img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=500&q=80" },
        { label: "Corporate Suite or Private Office", styleTag: "contemporary-minimalist", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=80" }
      ]
    },
    {
      id: 2,
      title: "Which architectural atmosphere resonates most with you?",
      subtitle: "Your personal emotional connection to volume and mood",
      options: [
        { label: "Understated Opulence & Book-matched Marble", styleTag: "modern-luxury", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=500&q=80" },
        { label: "Mindful Wabi-Sabi Stillness & Raw Wood", styleTag: "japandi-organic", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=500&q=80" },
        { label: "Sculptural Geometry & Monolithic Planes", styleTag: "contemporary-minimalist", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=500&q=80" },
        { label: "Sunlit Terracotta Arches & Coastal Calm", styleTag: "mediterranean", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80" }
      ]
    },
    {
      id: 3,
      title: "What color palette evokes comfort and prestige for you?",
      subtitle: "The core chromatic foundation for surfaces and millwork",
      options: [
        { label: "Warm Ivory, Champagne Gold & Smoked Walnut", styleTag: "modern-luxury", colors: ["#F8F6F2", "#C5A47E", "#594536"] },
        { label: "Organic Sage Greens, Bleached Ash & Muted Linen", styleTag: "japandi-organic", colors: ["#F9F9F7", "#9EA895", "#8C7D70"] },
        { label: "Architectural White, Concrete Grey & Matte Gunmetal", styleTag: "contemporary-minimalist", colors: ["#FFFFFF", "#9E9E9E", "#111111"] },
        { label: "Earthy Terracotta, Raw Travertine & Aged Brass", styleTag: "mediterranean", colors: ["#FAF7F2", "#C57B57", "#6E472D"] }
      ]
    },
    {
      id: 4,
      title: "Which tactile material elements do you value most?",
      subtitle: "Surfaces that greet your touch throughout daily life",
      options: [
        { label: "Italian Calacatta Marble & Brushed Bronze", styleTag: "modern-luxury" },
        { label: "Textured Venetian Lime Plaster & Solid Oak", styleTag: "japandi-organic" },
        { label: "Seamless Micro-Cement & Fluted Glass", styleTag: "contemporary-minimalist" },
        { label: "Rough-Hewn Sandstone & Reclaimed Teak", styleTag: "mediterranean" }
      ]
    },
    {
      id: 5,
      title: "What is your target timeline and investment scope?",
      subtitle: "Engineered for turnkey precision execution",
      options: [
        { label: "₹35 – ₹60 Lakhs (Refined Atelier Focus)", styleTag: "japandi-organic" },
        { label: "₹60 Lakhs – ₹1.5 Crores (Haute Bespoke Architecture)", styleTag: "contemporary-minimalist" },
        { label: "₹1.5 Crores – ₹3.5 Crores (Signature Sovereign Luxury)", styleTag: "modern-luxury" },
        { label: "₹3.5 Crores+ (Comprehensive Monolithic Estate)", styleTag: "modern-luxury" }
      ]
    },
    {
      id: 6,
      title: "What atmosphere do you desire to create for visiting guests?",
      subtitle: "The lasting impression left on friends, colleagues, and family",
      options: [
        { label: "Awe-inspiring architectural grandeur and refined hosting", styleTag: "modern-luxury" },
        { label: "Sensory decompression, quiet contemplation and serenity", styleTag: "japandi-organic" },
        { label: "Intellectual clarity, progressive minimalism and light", styleTag: "contemporary-minimalist" },
        { label: "Warm, convivial warmth reminiscent of European coastal villas", styleTag: "mediterranean" }
      ]
    },
    {
      id: 7,
      title: "What is the approximate square footage of your space?",
      subtitle: "To calibrate architectural circulation and scale",
      options: [
        { label: "Under 2,000 sq.ft (Boutique Urban Sanctuary)", styleTag: "japandi-organic" },
        { label: "2,000 – 4,500 sq.ft (Sprawling Penthouse or Apartment)", styleTag: "contemporary-minimalist" },
        { label: "4,500 – 8,000 sq.ft (Grand Duplex or Villa)", styleTag: "modern-luxury" },
        { label: "8,000+ sq.ft (Monolithic Architectural Estate)", styleTag: "modern-luxury" }
      ]
    }
  ];

  const handleSelectOption = (qId, option) => {
    setAnswers(prev => ({ ...prev, [qId]: option }));
    if (currentQIndex < questions.length - 1) {
      setCurrentQIndex(prev => prev + 1);
    } else {
      setIsCompleted(true);
      try {
        confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
      } catch (e) {
        console.error(e);
      }
    }
  };

  // Determine dominant style personality based on quiz answers
  const calculateResult = () => {
    const scores = {};
    Object.values(answers).forEach(ans => {
      const tag = ans?.styleTag || 'modern-luxury';
      scores[tag] = (scores[tag] || 0) + 1;
    });

    let topStyle = 'modern-luxury';
    let highestCount = 0;
    Object.entries(scores).forEach(([style, count]) => {
      if (count > highestCount) {
        highestCount = count;
        topStyle = style;
      }
    });

    const styleObj = DESIGN_STYLES.find(s => s.id === topStyle) || DESIGN_STYLES[0];
    return styleObj;
  };

  const personalityResult = calculateResult();

  return (
    <div className="bg-stone-900 border border-gold/30 text-ivory p-6 sm:p-6 shadow-2xl relative">
      {!isCompleted ? (
        <div className="max-w-3xl mx-auto space-y-8 animate-fadeIn">
          {/* Progress Header */}
          <div className="flex items-center justify-between text-xs border-b border-stone-800 pb-4">
            <span className="uppercase tracking-[0.2em] text-gold font-semibold flex items-center gap-2">
              <Compass className="w-4 h-4 text-gold" />
              <span>Architectural Style Finder Quiz</span>
            </span>
            <span className="text-stone-400">
              Question {currentQIndex + 1} of {questions.length}
            </span>
          </div>

          <div className="w-full bg-stone-800 h-1">
            <div 
              className="bg-gold h-1 transition-all duration-300"
              style={{ width: `${((currentQIndex + 1) / questions.length) * 100}%` }}
            />
          </div>

          {/* Question Text */}
          <div className="text-center space-y-2 py-4">
            <h3 className="font-serif text-2xl sm:text-3xl text-ivory tracking-wide">
              {questions[currentQIndex].title}
            </h3>
            <p className="text-xs text-stone-400">
              {questions[currentQIndex].subtitle}
            </p>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {questions[currentQIndex].options.map((opt, idx) => {
              const isSelected = answers[questions[currentQIndex].id]?.label === opt.label;
              return (
                <div
                  key={idx}
                  onClick={() => handleSelectOption(questions[currentQIndex].id, opt)}
                  className={`group cursor-pointer border p-4 transition-all duration-300 ${
                    isSelected 
                      ? 'border-gold bg-gold/15 ring-1 ring-gold shadow-gold-glow' 
                      : 'border-stone-800 bg-stone-950 hover:border-gold/50'
                  }`}
                >
                  {opt.img && (
                    <div className="aspect-[16/9] mb-3 overflow-hidden">
                      <img 
                        src={opt.img} 
                        alt={opt.label} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                  )}

                  {opt.colors && (
                    <div className="flex h-5 gap-1 mb-3">
                      {opt.colors.map((c, i) => (
                        <div key={i} className="flex-1" style={{ backgroundColor: c }} />
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-serif text-stone-200 group-hover:text-gold transition-colors">
                      {opt.label}
                    </span>
                    <span className="w-5 h-5 rounded-full border border-gold/40 flex items-center justify-center text-gold group-hover:border-gold">
                      {isSelected ? <Check className="w-3.5 h-3.5" /> : <span className="w-1.5 h-1.5 rounded-full bg-gold/30" />}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          {currentQIndex > 0 && (
            <div className="pt-4 flex justify-start">
              <button
                onClick={() => setCurrentQIndex(prev => prev - 1)}
                className="text-xs uppercase tracking-wider text-stone-400 hover:text-white flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Previous Question
              </button>
            </div>
          )}
        </div>
      ) : (
        /* QUIZ RESULTS SCREEN */
        <div className="space-y-6 animate-fadeIn">
          <div className="border-b border-stone-800 pb-6 text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-gold" />
              <span>Your Architectural Design Personality Profile</span>
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-ivory tracking-wide">
              {personalityResult.name}
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 italic">
              "{personalityResult.tagline}"
            </p>
          </div>

          {/* Hero Image & Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 aspect-[16/10] overflow-hidden border border-gold/40 shadow-2xl">
              <img 
                src={personalityResult.image} 
                alt={personalityResult.name} 
                className="w-full h-full object-cover" 
              />
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold block">
                  Aesthetic Philosophy
                </span>
                <p className="text-sm text-stone-300 leading-relaxed">
                  {personalityResult.description}
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold block">
                  Signature Materials
                </span>
                <div className="flex flex-wrap gap-2">
                  {personalityResult.keyMaterials.map((mat, i) => (
                    <span key={i} className="text-xs bg-stone-950 border border-stone-700 px-3 py-1 text-stone-200">
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-1 text-xs text-stone-400">
                <span className="text-gold font-medium uppercase tracking-wider block">Ideal Typologies:</span>
                <p>{personalityResult.idealFor}</p>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="bg-charcoal-950 p-6 border border-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => { setIsCompleted(false); setCurrentQIndex(0); setAnswers({}); }}
              className="text-xs uppercase tracking-wider text-stone-400 hover:text-white flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Retake Style Quiz
            </button>

            <div className="flex items-center gap-3">
              <Link
                to="/projects"
                className="px-5 py-2.5 border border-stone-700 text-stone-300 hover:text-white text-xs uppercase tracking-wider"
              >
                View Matching Projects
              </Link>
              <Link
                to="/consultation"
                className="px-6 py-2.5 bg-gold text-charcoal-950 font-semibold text-xs uppercase tracking-wider hover:bg-gold-light"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
