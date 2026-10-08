import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, Upload, Check, ArrowRight, ArrowLeft, RefreshCw, 
  Download, Calendar, ShieldCheck, Layers, Palette, Sliders, Eye 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { AI_CURATED_CONCEPTS, COLOR_PALETTES } from '../../data/interiorData';
import { BeforeAfterSlider } from '../common/BeforeAfterSlider';

export const AIDesignerWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [roomType, setRoomType] = useState('Living Room');
  const [selectedStyle, setSelectedStyle] = useState('modern-luxury');
  const [selectedPalette, setSelectedPalette] = useState('ivory-champagne');
  const [selectedMaterials, setSelectedMaterials] = useState(['Italian Calacatta', 'Smoked Walnut']);
  const [budgetRange, setBudgetRange] = useState('50');
  const [roomArea, setRoomArea] = useState('650');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStepIndex, setAnalysisStepIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  const analysisSteps = [
    "Analyzing spatial proportions and architectural ceiling heights...",
    "Assessing ambient daylight lux values and directional exposure...",
    "Synthesizing material reflectivity and acoustic balance...",
    "Harmonizing bespoke color spectrum and European millwork details...",
    "Finalizing conceptual architectural visualization..."
  ];

  const roomTypes = [
    { id: 'Living Room', label: 'Grand Living Salon', icon: '🛋️' },
    { id: 'Master Bedroom', label: 'Master Suite Sanctum', icon: '🛏️' },
    { id: 'Gourmet Kitchen', label: 'Gourmet Modular Kitchen', icon: '🍳' },
    { id: 'Executive Office', label: 'Executive Study & Library', icon: '💼' },
    { id: 'Dining Suite', label: 'Formal Dining Pavilion', icon: '🍷' },
    { id: 'Luxury Foyer', label: 'Double-Height Foyer & Atrium', icon: '🏛️' }
  ];

  const styles = [
    { id: 'modern-luxury', label: 'Modern Luxury', desc: 'Book-matched stone, smoked walnut & champagne bronze', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=400&q=80' },
    { id: 'japandi', label: 'Japandi & Wabi-Sabi', desc: 'Raw ash wood, lime plaster & organic serenity', image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=400&q=80' },
    { id: 'contemporary-minimalist', label: 'Contemporary Minimalist', desc: 'Micro-cement, clean silhouettes & natural illumination', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400&q=80' },
    { id: 'mediterranean', label: 'Mediterranean Villa', desc: 'Travertine, rustic timber arches & sun-baked warmth', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80' }
  ];

  const materialOptions = [
    "Italian Calacatta", "Smoked Walnut", "Brushed Champagne Brass", 
    "Venetian Lime Plaster", "Italian Wool Bouclé", "Micro-Cement", 
    "French White Oak", "Nero Marquina Quartz", "Raw Travertine"
  ];

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPhotoPreview(url);
    }
  };

  const handleSelectSamplePhoto = (url) => {
    setPhotoPreview(url);
  };

  const toggleMaterial = (mat) => {
    setSelectedMaterials(prev => 
      prev.includes(mat) ? prev.filter(m => m !== mat) : [...prev, mat]
    );
  };

  const startAnalysis = () => {
    setIsAnalyzing(true);
    setAnalysisStepIndex(0);

    const interval = setInterval(() => {
      setAnalysisStepIndex(prev => {
        if (prev < analysisSteps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setIsAnalyzing(false);
            setShowResults(true);
            try {
              confetti({ particleCount: 75, spread: 60, origin: { y: 0.6 } });
            } catch (err) {
              console.log(err);
            }
          }, 800);
          return prev;
        }
      });
    }, 900);
  };

  const currentConcept = AI_CURATED_CONCEPTS[selectedStyle] || AI_CURATED_CONCEPTS['modern-luxury'];

  return (
    <div className="bg-stone-900 border border-gold/30 text-ivory p-6 sm:p-6 shadow-2xl relative">
      {/* Disclaimer Notice */}
      <div className="bg-charcoal-950/80 border-l-2 border-gold p-3 mb-8 flex items-center justify-between text-xs text-stone-300">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
          <span>
            <strong>Architectural Concept Preview:</strong> AI simulations provide curated aesthetic directions and mood frameworks. Final architectural execution is tailored via on-site surveys.
          </span>
        </div>
      </div>

      {!showResults && !isAnalyzing && (
        <div>
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex justify-between text-[11px] uppercase tracking-[0.2em] text-gold font-semibold mb-2">
              <span>Step {currentStep} of 5</span>
              <span>{
                currentStep === 1 ? 'Room Photo' :
                currentStep === 2 ? 'Space Typology' :
                currentStep === 3 ? 'Aesthetic Style' :
                currentStep === 4 ? 'Palettes & Materials' : 'Investment & Scale'
              }</span>
            </div>
            <div className="w-full bg-stone-800 h-1">
              <div 
                className="bg-gold h-1 transition-all duration-500" 
                style={{ width: `${(currentStep / 5) * 100}%` }} 
              />
            </div>
          </div>

          {/* STEP 1: Upload Room Photo */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center max-w-xl mx-auto mb-6">
                <h3 className="font-serif text-2xl sm:text-3xl text-ivory tracking-wide mb-2">
                  Upload Your Space or Select a Sample
                </h3>
                <p className="text-xs text-stone-400">
                  Provide a photograph of your existing bare shell or living room for spatial orientation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <label className="border-2 border-dashed border-gold/30 hover:border-gold p-5 flex flex-col items-center justify-center text-center cursor-pointer bg-charcoal-950/60 transition-colors group aspect-video">
                  <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
                  <Upload className="w-8 h-8 text-gold mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-semibold tracking-wider uppercase text-ivory mb-1">
                    Upload Your Room Photo
                  </span>
                  <span className="text-[11px] text-stone-400">PNG, JPG or WebP up to 15MB</span>
                </label>

                <div className="space-y-3">
                  <span className="text-[11px] uppercase tracking-wider text-stone-400 block">
                    Or select an illustrative bare-shell site:
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { name: 'Duplex Shell', url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80' },
                      { name: 'Apartment Shell', url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=400&q=80' },
                      { name: 'Villa Shell', url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=400&q=80' },
                      { name: 'Master Room Shell', url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=400&q=80' }
                    ].map((sample, idx) => (
                      <div 
                        key={idx} 
                        onClick={() => handleSelectSamplePhoto(sample.url)}
                        className={`relative aspect-video cursor-pointer overflow-hidden border ${
                          photoPreview === sample.url ? 'border-gold ring-1 ring-gold' : 'border-stone-800 hover:border-stone-600'
                        }`}
                      >
                        <img src={sample.url} alt={sample.name} className="w-full h-full object-cover" />
                        <span className="absolute bottom-1 left-1 bg-black/70 px-1.5 py-0.5 text-[9px] text-white">
                          {sample.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {photoPreview && (
                <div className="mt-4 p-3 bg-charcoal-950 border border-gold/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={photoPreview} alt="Selected Room" className="w-12 h-12 object-cover border border-gold/30" />
                    <div>
                      <span className="text-xs font-medium text-ivory block">Source Space Attached</span>
                      <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                        <Check className="w-3 h-3" /> Ready for AI spatial evaluation
                      </span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setPhotoPreview(null)}
                    className="text-xs text-stone-500 hover:text-rose-400"
                  >
                    Change Photo
                  </button>
                </div>
              )}
            </div>
          )}

          {/* STEP 2: Select Room Type */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center max-w-xl mx-auto mb-6">
                <h3 className="font-serif text-2xl sm:text-3xl text-ivory tracking-wide mb-2">
                  Select Room Typology
                </h3>
                <p className="text-xs text-stone-400">
                  Each architectural zone demands distinct functional choreography and lux ratings.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {roomTypes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setRoomType(t.id)}
                    className={`p-5 text-left border transition-all ${
                      roomType === t.id 
                        ? 'border-gold bg-gold/10 ring-1 ring-gold text-ivory' 
                        : 'border-stone-800 bg-stone-950/60 text-stone-300 hover:border-stone-600'
                    }`}
                  >
                    <span className="text-2xl mb-2 block">{t.icon}</span>
                    <h4 className="font-serif text-base font-medium">{t.label}</h4>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Choose Interior Style */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center max-w-xl mx-auto mb-6">
                <h3 className="font-serif text-2xl sm:text-3xl text-ivory tracking-wide mb-2">
                  Choose Preferred Aesthetic Style
                </h3>
                <p className="text-xs text-stone-400">
                  Select the architectural design language that matches your personal sensibility.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {styles.map((s) => (
                  <div
                    key={s.id}
                    onClick={() => setSelectedStyle(s.id)}
                    className={`group cursor-pointer border overflow-hidden transition-all ${
                      selectedStyle === s.id 
                        ? 'border-gold ring-1 ring-gold shadow-gold-glow' 
                        : 'border-stone-800 hover:border-stone-600 bg-stone-950'
                    }`}
                  >
                    <div className="h-40 overflow-hidden relative">
                      <img 
                        src={s.image} 
                        alt={s.label} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                        <span className="font-serif text-lg text-ivory">{s.label}</span>
                        {selectedStyle === s.id && (
                          <span className="bg-gold text-charcoal-950 p-1 rounded-full">
                            <Check className="w-3 h-3" />
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="p-3 bg-stone-950">
                      <p className="text-xs text-stone-400">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: Colors and Materials */}
          {currentStep === 4 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center max-w-xl mx-auto mb-6">
                <h3 className="font-serif text-2xl sm:text-3xl text-ivory tracking-wide mb-2">
                  Harmonize Colors &amp; Material Elements
                </h3>
                <p className="text-xs text-stone-400">
                  Select signature finishes and stone selections to integrate into the concept.
                </p>
              </div>

              {/* Color Palettes */}
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.18em] text-gold font-semibold block">
                  Select Architectural Palette
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {COLOR_PALETTES.map(p => (
                    <div
                      key={p.id}
                      onClick={() => setSelectedPalette(p.id)}
                      className={`p-3 border cursor-pointer transition-all ${
                        selectedPalette === p.id 
                          ? 'border-gold bg-gold/10' 
                          : 'border-stone-800 bg-stone-950 hover:border-stone-600'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-ivory">{p.name}</span>
                        {selectedPalette === p.id && <Check className="w-3.5 h-3.5 text-gold" />}
                      </div>
                      <div className="flex h-5 w-full gap-1">
                        {p.colors.map((c, i) => (
                          <div key={i} className="flex-1 h-full" style={{ backgroundColor: c }} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Materials */}
              <div className="space-y-3 pt-3">
                <span className="text-xs uppercase tracking-[0.18em] text-gold font-semibold block">
                  Select Preferred Architectural Materials (Multiple)
                </span>
                <div className="flex flex-wrap gap-2">
                  {materialOptions.map(mat => {
                    const isSelected = selectedMaterials.includes(mat);
                    return (
                      <button
                        key={mat}
                        onClick={() => toggleMaterial(mat)}
                        className={`px-3 py-1.5 text-xs transition-colors border ${
                          isSelected 
                            ? 'bg-gold text-charcoal-950 border-gold font-semibold' 
                            : 'bg-stone-950 text-stone-300 border-stone-800 hover:border-stone-600'
                        }`}
                      >
                        {mat}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: Enter Budget & Scale */}
          {currentStep === 5 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center max-w-xl mx-auto mb-6">
                <h3 className="font-serif text-2xl sm:text-3xl text-ivory tracking-wide mb-2">
                  Space Dimensions &amp; Anticipated Budget
                </h3>
                <p className="text-xs text-stone-400">
                  Allows our design engine to generate feasible material specifications.
                </p>
              </div>

              <div className="space-y-6 max-w-lg mx-auto">
                <div className="space-y-2 bg-stone-950 p-5 border border-stone-800">
                  <div className="flex justify-between text-xs">
                    <span className="text-stone-300 uppercase tracking-wider">Approximate Area</span>
                    <span className="text-gold font-semibold">{roomArea} sq.ft</span>
                  </div>
                  <input
                    type="range"
                    min="300"
                    max="3500"
                    step="50"
                    value={roomArea}
                    onChange={(e) => setRoomArea(e.target.value)}
                    className="w-full accent-gold cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-500">
                    <span>300 sq.ft (Studio/Bed)</span>
                    <span>1,800 sq.ft (Duplex Salon)</span>
                    <span>3,500 sq.ft (Grand Atrium)</span>
                  </div>
                </div>

                <div className="space-y-2 bg-stone-950 p-5 border border-stone-800">
                  <div className="flex justify-between text-xs">
                    <span className="text-stone-300 uppercase tracking-wider">Target Interior Budget</span>
                    <span className="text-gold font-semibold">
                      ₹{budgetRange === '20' ? '20 – 35 Lakhs' : budgetRange === '50' ? '40 – 75 Lakhs' : budgetRange === '100' ? '80 Lakhs – 1.5 Crores' : '1.5 Crores+'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="150"
                    step="30"
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full accent-gold cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-500">
                    <span>Essential Atelier</span>
                    <span>Haute Architecture</span>
                    <span>Sovereign Bespoke</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Wizard Controls */}
          <div className="mt-10 pt-6 border-t border-stone-800 flex items-center justify-between">
            {currentStep > 1 ? (
              <button
                onClick={() => setCurrentStep(prev => prev - 1)}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-stone-300 hover:text-ivory border border-stone-800 hover:border-stone-600 transition-colors flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back
              </button>
            ) : <div />}

            {currentStep < 5 ? (
              <button
                onClick={() => setCurrentStep(prev => prev + 1)}
                className="px-6 py-2.5 bg-gold text-charcoal-950 text-xs font-semibold uppercase tracking-[0.18em] hover:bg-gold-light transition-colors flex items-center gap-2"
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={startAnalysis}
                className="px-8 py-3 bg-gold text-charcoal-950 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-gold-light transition-all shadow-gold-glow flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Synthesize AI Concept</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* AI Analysis Simulation Sequence */}
      {isAnalyzing && (
        <div className="py-8 text-center space-y-6 max-w-md mx-auto animate-fadeIn">
          <div className="w-20 h-20 mx-auto rounded-full border-2 border-gold border-t-transparent animate-spin flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-gold" />
          </div>

          <h3 className="font-serif text-2xl text-ivory tracking-wide">
            Synthesizing Architectural Intelligence
          </h3>

          <div className="bg-charcoal-950 p-4 border border-gold/30 min-h-[70px] flex items-center justify-center">
            <p className="text-xs text-gold font-medium animate-pulse">
              {analysisSteps[analysisStepIndex]}
            </p>
          </div>

          <div className="w-full bg-stone-800 h-1">
            <div 
              className="bg-gold h-1 transition-all duration-300"
              style={{ width: `${((analysisStepIndex + 1) / analysisSteps.length) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* RESULTS DISPLAY */}
      {showResults && (
        <div className="space-y-6 animate-fadeIn">
          {/* Header */}
          <div className="border-b border-stone-800 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-semibold block mb-1">
                Conceptual Architecture Dossier
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-ivory tracking-wide">
                {currentConcept.styleName}
              </h3>
              <p className="text-xs text-stone-400 mt-1 italic">
                "{currentConcept.tagline}"
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => { setShowResults(false); setCurrentStep(1); }}
                className="px-4 py-2 border border-stone-700 text-stone-300 hover:text-white text-xs uppercase tracking-wider flex items-center gap-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Start New
              </button>
              <button
                onClick={() => setDownloadModalOpen(true)}
                className="px-4 py-2 bg-stone-800 border border-gold/40 text-gold hover:bg-gold hover:text-charcoal-950 text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5" /> Concept PDF Summary
              </button>
            </div>
          </div>

          {/* Interactive Before & After Transformation */}
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold block mb-3">
              Curated Transformation Comparison
            </span>
            <BeforeAfterSlider
              beforeImage={photoPreview || currentConcept.beforeImage}
              afterImage={currentConcept.conceptImage}
              title={`${roomType} Architectural Transformation`}
              category={currentConcept.styleName}
              description={currentConcept.narrative}
            />
          </div>

          {/* Concept Specifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Color Palette */}
            <div className="bg-stone-950 p-5 border border-stone-800 space-y-3">
              <span className="text-xs uppercase tracking-[0.18em] text-gold font-semibold flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5" /> Curated Palette
              </span>
              <div className="flex h-8 gap-1.5">
                {currentConcept.palette.map((c, i) => (
                  <div key={i} className="flex-1 rounded-none border border-white/10 group relative" style={{ backgroundColor: c }}>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-5 left-0 text-[9px] bg-black px-1 text-white">
                      {c}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-stone-400">Warm ivory base with metallic bronze accents.</p>
            </div>

            {/* Materials */}
            <div className="bg-stone-950 p-5 border border-stone-800 space-y-2">
              <span className="text-xs uppercase tracking-[0.18em] text-gold font-semibold flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" /> Recommended Materials
              </span>
              <ul className="text-xs text-stone-300 space-y-1">
                {currentConcept.materials.map((m, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lighting */}
            <div className="bg-stone-950 p-5 border border-stone-800 space-y-2">
              <span className="text-xs uppercase tracking-[0.18em] text-gold font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Lighting Philosophy
              </span>
              <p className="text-xs text-stone-300 leading-relaxed">
                {currentConcept.lighting}
              </p>
            </div>

            {/* Estimated Investment */}
            <div className="bg-stone-950 p-5 border border-stone-800 space-y-2">
              <span className="text-xs uppercase tracking-[0.18em] text-gold font-semibold flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5" /> Estimated Investment
              </span>
              <div className="text-lg font-serif text-ivory">
                {currentConcept.estimatedRange}
              </div>
              <p className="text-[10px] text-stone-400">
                Calculated for ~{roomArea} sq.ft room footprint.
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="bg-charcoal-950 p-6 border border-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-serif text-xl text-ivory">Bring This Architectural Concept to Reality</h4>
              <p className="text-xs text-stone-400">
                Book a consultation with our senior project directors to tailor this concept to your site drawings.
              </p>
            </div>
            <Link
              to="/consultation"
              className="px-8 py-3 bg-gold text-charcoal-950 font-semibold text-xs tracking-[0.2em] uppercase hover:bg-gold-light transition-colors whitespace-nowrap"
            >
              Book Atelier Consultation
            </Link>
          </div>
        </div>
      )}

      {/* Download Summary Modal */}
      {downloadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-stone-900 border border-gold max-w-lg w-full p-6 text-ivory space-y-4">
            <h4 className="font-serif text-2xl text-gold">Architectural Dossier Generated</h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              Your concept summary for <strong>{currentConcept.styleName}</strong> ({roomType}, {roomArea} sq.ft) has been formatted into a client dossier.
            </p>
            <div className="p-3 bg-black border border-stone-800 text-[11px] font-mono text-stone-400 space-y-1">
              <div>PROJECT: Aurelia &amp; Stone Concept Dossier</div>
              <div>TYPOLOGY: {roomType}</div>
              <div>STYLE: {currentConcept.styleName}</div>
              <div>MATERIALS: {currentConcept.materials.join(', ')}</div>
              <div>ESTIMATE: {currentConcept.estimatedRange}</div>
            </div>
            <div className="flex justify-end gap-3 pt-3 border-t border-stone-800">
              <button
                onClick={() => setDownloadModalOpen(false)}
                className="px-4 py-2 text-xs uppercase tracking-wider text-stone-400 hover:text-white"
              >
                Close
              </button>
              <button
                onClick={() => {
                  alert("Concept Summary PDF downloaded to your device.");
                  setDownloadModalOpen(false);
                }}
                className="px-6 py-2 bg-gold text-charcoal-950 font-semibold text-xs uppercase tracking-wider hover:bg-gold-light"
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
