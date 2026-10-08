import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, Download, Send, CheckCircle2, Sliders, ShieldCheck, 
  Clock, IndianRupee, PieChart as PieIcon, Layers, Sparkles 
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { useSaved } from '../../context/SavedContext';

export const CostCalculator = () => {
  const { saveCalculation } = useSaved();

  // Inputs
  const [propertyType, setPropertyType] = useState('Apartment');
  const [area, setArea] = useState(2400);
  const [bedrooms, setBedrooms] = useState(3);
  const [bathrooms, setBathrooms] = useState(3);
  const [kitchenType, setKitchenType] = useState('Island');
  const [designQuality, setDesignQuality] = useState('premium'); // essential, premium, luxury
  const [includeCeiling, setIncludeCeiling] = useState(true);
  const [includeSmartLighting, setIncludeSmartLighting] = useState(true);
  const [includeCustomWardrobes, setIncludeCustomWardrobes] = useState(true);
  const [includeAutomation, setIncludeAutomation] = useState(false);
  
  // UI state
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [savedNotice, setSavedNotice] = useState(false);
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');

  // Rate multipliers based on tier
  const tierRateMap = {
    essential: 3800, // per sq.ft base rate
    premium: 5600,
    luxury: 9200
  };

  const calculatedCosts = useMemo(() => {
    const baseRate = tierRateMap[designQuality];
    
    // Base interior execution
    const totalBase = area * baseRate;

    // Sub-component weightages
    const designConsultation = Math.round(totalBase * 0.08);
    
    const kitchenCost = kitchenType === 'None' ? 0 : 
      kitchenType === 'Island' ? (designQuality === 'luxury' ? 1800000 : designQuality === 'premium' ? 1200000 : 750000) :
      kitchenType === 'Parallel' ? (designQuality === 'luxury' ? 1400000 : designQuality === 'premium' ? 950000 : 600000) :
      (designQuality === 'luxury' ? 1100000 : designQuality === 'premium' ? 750000 : 480000);

    const wardrobeCost = includeCustomWardrobes 
      ? bedrooms * (designQuality === 'luxury' ? 450000 : designQuality === 'premium' ? 320000 : 200000)
      : 0;

    const ceilingCost = includeCeiling 
      ? Math.round(area * (designQuality === 'luxury' ? 320 : designQuality === 'premium' ? 220 : 160))
      : 0;

    const lightingCost = includeSmartLighting 
      ? Math.round(area * (designQuality === 'luxury' ? 450 : designQuality === 'premium' ? 280 : 180))
      : Math.round(area * 120);

    const automationCost = includeAutomation 
      ? (designQuality === 'luxury' ? 950000 : 550000) 
      : 0;

    const livingRoomCost = Math.round(totalBase * 0.28);
    const bedroomCost = Math.round(totalBase * 0.24);
    const furnitureCost = Math.round(totalBase * 0.18);
    const finishesCost = Math.round(totalBase * 0.12);

    const grandTotal = designConsultation + kitchenCost + wardrobeCost + ceilingCost + lightingCost + automationCost + livingRoomCost + bedroomCost + furnitureCost + finishesCost;

    // Timeline estimate
    const timelineMonths = 
      designQuality === 'luxury' 
        ? Math.ceil(area / 650) + 3 
        : designQuality === 'premium' 
          ? Math.ceil(area / 800) + 2 
          : Math.ceil(area / 1000) + 1;

    return {
      designConsultation,
      kitchenCost,
      wardrobeCost,
      ceilingCost,
      lightingCost,
      automationCost,
      livingRoomCost,
      bedroomCost,
      furnitureCost,
      finishesCost,
      grandTotal,
      timelineMonths: Math.min(18, Math.max(3, timelineMonths))
    };
  }, [propertyType, area, bedrooms, bathrooms, kitchenType, designQuality, includeCeiling, includeSmartLighting, includeCustomWardrobes, includeAutomation]);

  // Chart Data
  const chartData = [
    { name: 'Living & Common', value: calculatedCosts.livingRoomCost, color: '#C5A47E' },
    { name: 'Bedrooms & Baths', value: calculatedCosts.bedroomCost, color: '#A88B6A' },
    { name: 'Modular Kitchen', value: calculatedCosts.kitchenCost, color: '#594536' },
    { name: 'Wardrobes & Millwork', value: calculatedCosts.wardrobeCost, color: '#8C7D70' },
    { name: 'Ceiling & Lighting', value: calculatedCosts.ceilingCost + calculatedCosts.lightingCost, color: '#E8E0D5' },
    { name: 'Design & Engineering', value: calculatedCosts.designConsultation, color: '#DFCAAF' },
  ].filter(item => item.value > 0);

  const formatINR = (val) => {
    return new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(val);
  };

  const handleSaveEstimate = () => {
    const data = {
      propertyType,
      area,
      quality: designQuality,
      totalFormatted: formatINR(calculatedCosts.grandTotal),
      timelineMonths: calculatedCosts.timelineMonths,
      date: new Date().toLocaleDateString()
    };
    saveCalculation(data);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 4000);
  };

  const handleRequestQuote = (e) => {
    e.preventDefault();
    setQuoteSubmitted(true);
    setTimeout(() => {
      setQuoteModalOpen(false);
      setQuoteSubmitted(false);
    }, 3000);
  };

  return (
    <div className="bg-stone-900 border border-gold/30 text-ivory p-6 sm:p-6 shadow-2xl relative">
      {/* Disclaimer Banner */}
      <div className="bg-charcoal-950/80 border-l-2 border-gold p-3 mb-8 flex items-center justify-between text-xs text-stone-300">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
          <span>
            <strong>Illustrative Estimation Model:</strong> Calculations reflect high-end architectural benchmark specifications in metropolitan Indian cities (Mumbai, Delhi-NCR, Bengaluru). Actual quotations require site bill-of-quantities (BOQ).
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* INPUT FORM CONTROLS */}
        <div className="lg:col-span-7 space-y-6">
          <div className="border-b border-stone-800 pb-4">
            <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold block mb-1">
              Interactive Specifications
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-ivory">Configure Your Property Parameters</h3>
          </div>

          {/* Property Typology */}
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider text-stone-300 block font-medium">
              Property Typology
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {['Apartment', 'Villa / Bungalow', 'Penthouse', 'Commercial HQ'].map(type => (
                <button
                  key={type}
                  onClick={() => setPropertyType(type)}
                  className={`py-2 px-3 text-xs border transition-colors ${
                    propertyType === type 
                      ? 'border-gold bg-gold text-charcoal-950 font-semibold' 
                      : 'border-stone-800 bg-stone-950 text-stone-300 hover:border-stone-600'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Carpet Area Slider */}
          <div className="space-y-2 bg-stone-950 p-4 border border-stone-800">
            <div className="flex justify-between items-baseline">
              <span className="text-xs uppercase tracking-wider text-stone-300 font-medium">Total Area</span>
              <span className="font-serif text-lg text-gold font-semibold">{formatINR(area)} sq.ft</span>
            </div>
            <input
              type="range"
              min="800"
              max="15000"
              step="100"
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="w-full accent-gold cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-stone-500">
              <span>800 sq.ft (Boutique)</span>
              <span>4,500 sq.ft (Duplex)</span>
              <span>15,000 sq.ft (Estate)</span>
            </div>
          </div>

          {/* Bedrooms & Bathrooms */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-stone-950 p-4 border border-stone-800 space-y-2">
              <div className="flex justify-between text-xs text-stone-300">
                <span className="uppercase tracking-wider">Bedrooms</span>
                <span className="text-gold font-semibold">{bedrooms} BHK</span>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <button
                    key={num}
                    onClick={() => setBedrooms(num)}
                    className={`flex-1 py-1.5 text-xs border transition-colors ${
                      bedrooms === num 
                        ? 'border-gold bg-gold text-charcoal-950 font-semibold' 
                        : 'border-stone-800 text-stone-400 hover:border-stone-600'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-stone-950 p-4 border border-stone-800 space-y-2">
              <div className="flex justify-between text-xs text-stone-300">
                <span className="uppercase tracking-wider">Bathrooms</span>
                <span className="text-gold font-semibold">{bathrooms} Baths</span>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <button
                    key={num}
                    onClick={() => setBathrooms(num)}
                    className={`flex-1 py-1.5 text-xs border transition-colors ${
                      bathrooms === num 
                        ? 'border-gold bg-gold text-charcoal-950 font-semibold' 
                        : 'border-stone-800 text-stone-400 hover:border-stone-600'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Design Quality Tier */}
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider text-stone-300 block font-medium">
              Architectural Execution Tier
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'essential', title: 'Atelier Essential', rate: '₹3,800/sq.ft', desc: 'Premium veneers & engineered stone' },
                { id: 'premium', title: 'Haute Signature', rate: '₹5,600/sq.ft', desc: 'Imported marble, custom joinery, 3D CGI' },
                { id: 'luxury', title: 'Sovereign Bespoke', rate: '₹9,200/sq.ft', desc: 'Italian book-match, Gaggenau, white-glove' }
              ].map(tier => (
                <div
                  key={tier.id}
                  onClick={() => setDesignQuality(tier.id)}
                  className={`p-3.5 border cursor-pointer transition-all ${
                    designQuality === tier.id 
                      ? 'border-gold bg-gold/15 ring-1 ring-gold shadow-gold-glow' 
                      : 'border-stone-800 bg-stone-950 hover:border-stone-600'
                  }`}
                >
                  <span className="text-xs font-serif font-medium text-ivory block">{tier.title}</span>
                  <span className="text-[11px] text-gold font-semibold block">{tier.rate}</span>
                  <span className="text-[10px] text-stone-400 block mt-1 leading-tight">{tier.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Gourmet Kitchen Typology */}
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider text-stone-300 block font-medium">
              Modular Kitchen Configuration
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {['Island', 'Parallel', 'L-Shaped', 'None'].map(k => (
                <button
                  key={k}
                  onClick={() => setKitchenType(k)}
                  className={`py-2 px-2 text-xs border transition-colors ${
                    kitchenType === k 
                      ? 'border-gold bg-gold text-charcoal-950 font-semibold' 
                      : 'border-stone-800 bg-stone-950 text-stone-300 hover:border-stone-600'
                  }`}
                >
                  {k}
                </button>
              ))}
            </div>
          </div>

          {/* Add-on Architectural Options */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <label className="flex items-center gap-2 p-3 bg-stone-950 border border-stone-800 cursor-pointer">
              <input 
                type="checkbox" 
                checked={includeCeiling} 
                onChange={(e) => setIncludeCeiling(e.target.checked)} 
                className="accent-gold w-4 h-4" 
              />
              <span className="text-xs text-stone-300">Designer False Ceiling &amp; Coves</span>
            </label>

            <label className="flex items-center gap-2 p-3 bg-stone-950 border border-stone-800 cursor-pointer">
              <input 
                type="checkbox" 
                checked={includeSmartLighting} 
                onChange={(e) => setIncludeSmartLighting(e.target.checked)} 
                className="accent-gold w-4 h-4" 
              />
              <span className="text-xs text-stone-300">Circadian Architectural Lighting</span>
            </label>

            <label className="flex items-center gap-2 p-3 bg-stone-950 border border-stone-800 cursor-pointer">
              <input 
                type="checkbox" 
                checked={includeCustomWardrobes} 
                onChange={(e) => setIncludeCustomWardrobes(e.target.checked)} 
                className="accent-gold w-4 h-4" 
              />
              <span className="text-xs text-stone-300">Bespoke Glass/Wood Wardrobes</span>
            </label>

            <label className="flex items-center gap-2 p-3 bg-stone-950 border border-stone-800 cursor-pointer">
              <input 
                type="checkbox" 
                checked={includeAutomation} 
                onChange={(e) => setIncludeAutomation(e.target.checked)} 
                className="accent-gold w-4 h-4" 
              />
              <span className="text-xs text-stone-300">Crestron/Lutron Smart Automation</span>
            </label>
          </div>
        </div>

        {/* OUTPUT LIVE ESTIMATE BREAKDOWN */}
        <div className="lg:col-span-5 bg-charcoal-950 border border-gold/40 p-6 flex flex-col justify-between shadow-2xl">
          <div className="space-y-6">
            <div className="border-b border-stone-800 pb-4 flex items-center justify-between">
              <div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-gold font-semibold block">
                  Turnkey Valuation
                </span>
                <h4 className="font-serif text-2xl text-ivory">Estimated Project Value</h4>
              </div>
              <div className="text-right">
                <span className="text-xs text-stone-400 block flex items-center gap-1 justify-end">
                  <Clock className="w-3.5 h-3.5 text-gold" /> {calculatedCosts.timelineMonths} Months
                </span>
                <span className="text-[10px] text-stone-500 uppercase">Estimated Timeline</span>
              </div>
            </div>

            {/* Grand Total Value */}
            <div className="bg-stone-900/80 p-5 border border-gold/30 text-center space-y-1">
              <div className="flex items-center justify-center gap-1 text-gold font-serif text-3xl sm:text-4xl font-semibold">
                <IndianRupee className="w-7 h-7" />
                <span>{formatINR(calculatedCosts.grandTotal)}</span>
              </div>
              <span className="text-[11px] text-stone-400 tracking-wider uppercase block">
                Approx. ₹{formatINR(Math.round(calculatedCosts.grandTotal / area))} per sq.ft
              </span>
            </div>

            {/* Recharts Pie Chart Distribution */}
            <div className="h-44 w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={48}
                    outerRadius={68}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(val) => [`₹${formatINR(val)}`, 'Cost']}
                    contentStyle={{ backgroundColor: '#1A1A1A', borderColor: '#C5A47E', fontSize: '11px', color: '#fff' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-[10px] uppercase tracking-widest text-gold font-medium">Allocation</span>
              </div>
            </div>

            {/* Detailed Line Items */}
            <div className="space-y-2 text-xs border-t border-stone-800 pt-4">
              <div className="flex justify-between text-stone-300">
                <span>Living &amp; Common Salons</span>
                <span className="font-mono text-ivory">₹{formatINR(calculatedCosts.livingRoomCost)}</span>
              </div>
              <div className="flex justify-between text-stone-300">
                <span>Bedrooms &amp; Bath Suites</span>
                <span className="font-mono text-ivory">₹{formatINR(calculatedCosts.bedroomCost)}</span>
              </div>
              {calculatedCosts.kitchenCost > 0 && (
                <div className="flex justify-between text-stone-300">
                  <span>Gourmet Modular Kitchen</span>
                  <span className="font-mono text-ivory">₹{formatINR(calculatedCosts.kitchenCost)}</span>
                </div>
              )}
              {calculatedCosts.wardrobeCost > 0 && (
                <div className="flex justify-between text-stone-300">
                  <span>Custom Walk-in Wardrobes</span>
                  <span className="font-mono text-ivory">₹{formatINR(calculatedCosts.wardrobeCost)}</span>
                </div>
              )}
              <div className="flex justify-between text-stone-300">
                <span>Ceiling &amp; Architectural Illumination</span>
                <span className="font-mono text-ivory">₹{formatINR(calculatedCosts.ceilingCost + calculatedCosts.lightingCost)}</span>
              </div>
              <div className="flex justify-between text-stone-300">
                <span>Space Architecture &amp; 3D CGI</span>
                <span className="font-mono text-ivory">₹{formatINR(calculatedCosts.designConsultation)}</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 space-y-3">
            {savedNotice && (
              <div className="p-2 bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Estimate saved to your atelier wishlist.</span>
              </div>
            )}

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleSaveEstimate}
                className="py-2.5 px-3 bg-stone-900 border border-stone-700 text-stone-300 hover:text-white text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Save to Wishlist</span>
              </button>
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="py-2.5 px-3 bg-gold text-charcoal-950 font-semibold text-xs uppercase tracking-wider hover:bg-gold-light transition-colors flex items-center justify-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Request Quotation</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* REQUEST EXACT QUOTATION MODAL */}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-stone-900 border border-gold max-w-lg w-full p-6 text-ivory space-y-4">
            <h4 className="font-serif text-2xl text-ivory">Request Formal Atelier Bill-of-Quantities</h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              Our principal project directors will review your parameters ({propertyType}, {area} sq.ft, {designQuality} tier) and schedule an on-site survey.
            </p>

            {quoteSubmitted ? (
              <div className="p-4 bg-emerald-950 border border-emerald-500 text-center space-y-2 text-emerald-200">
                <CheckCircle2 className="w-8 h-8 mx-auto text-emerald-400" />
                <h5 className="font-serif text-lg">Quotation Request Received</h5>
                <p className="text-xs text-stone-300">
                  A project partner will contact you within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleRequestQuote} className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-700 p-2.5 text-xs text-ivory focus:border-gold focus:outline-none"
                />
                <input
                  type="tel"
                  required
                  placeholder="Mobile Phone (+91 ...)"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-700 p-2.5 text-xs text-ivory focus:border-gold focus:outline-none"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-700 p-2.5 text-xs text-ivory focus:border-gold focus:outline-none"
                />
                <div className="flex justify-end gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setQuoteModalOpen(false)}
                    className="px-4 py-2 text-xs uppercase text-stone-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-gold text-charcoal-950 font-semibold text-xs uppercase tracking-wider hover:bg-gold-light"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
