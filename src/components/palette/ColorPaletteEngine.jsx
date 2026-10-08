import React, { useState, useMemo } from 'react';
import { Palette, Copy, Check, Sparkles, RefreshCw, Layers } from 'lucide-react';
import { useSaved } from '../../context/SavedContext';

// Helper color utilities
function hexToHsl(hex) {
  let c = hex.replace('#', '');
  if (c.length === 3) c = c.split('').map(x => x + x).join('');
  const num = parseInt(c, 16);
  let r = (num >> 16) / 255;
  let g = ((num >> 8) & 255) / 255;
  let b = (num & 255) / 255;

  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
      default: break;
    }
    h /= 6;
  }
  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

function hslToHex(h, s, l) {
  s /= 100;
  l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`.toUpperCase();
}

export const ColorPaletteEngine = () => {
  const [baseHex, setBaseHex] = useState('#C5A47E'); // Champagne gold default
  const [copiedHex, setCopiedHex] = useState(null);
  const { addToMoodboard } = useSaved();

  const curatedHues = [
    { name: 'Champagne Gold', hex: '#C5A47E' },
    { name: 'Imperial Walnut', hex: '#594536' },
    { name: 'Warm Ivory', hex: '#F8F6F2' },
    { name: 'Statuario White', hex: '#FAFAFA' },
    { name: 'Terracotta Raw', hex: '#C27D56' },
    { name: 'Sage Plaster', hex: '#8C9A86' },
    { name: 'Smoked Basalt', hex: '#2A2927' },
    { name: 'Deep Indigo Noir', hex: '#1C2430' }
  ];

  const palettes = useMemo(() => {
    const [h, s, l] = hexToHsl(baseHex);

    // Monochromatic
    const mono = [
      hslToHex(h, Math.max(10, s - 20), Math.min(95, l + 30)),
      hslToHex(h, s, Math.min(85, l + 15)),
      baseHex,
      hslToHex(h, s, Math.max(20, l - 18)),
      hslToHex(h, Math.min(90, s + 10), Math.max(10, l - 35))
    ];

    // Complementary & Earthy
    const compH = (h + 180) % 360;
    const complementary = [
      hslToHex(h, Math.max(15, s - 10), 92),
      baseHex,
      hslToHex(compH, Math.max(20, s - 20), 40),
      hslToHex(compH, Math.max(15, s - 30), 20),
      '#1A1A1A'
    ];

    // Analogous Architectural
    const ana1 = (h + 30) % 360;
    const ana2 = (h + 330) % 360;
    const analogous = [
      hslToHex(ana2, s, Math.min(90, l + 20)),
      hslToHex(ana2, s, l),
      baseHex,
      hslToHex(ana1, s, l),
      hslToHex(ana1, s, Math.max(15, l - 25))
    ];

    return { mono, complementary, analogous };
  }, [baseHex]);

  const handleCopy = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const handleSaveToBoard = (hex, name) => {
    addToMoodboard({
      id: `swatch-${hex}-${Date.now()}`,
      type: 'swatch',
      title: name || `Architectural ${hex}`,
      hex
    });
    alert(`Color ${hex} pinned to your atelier moodboard!`);
  };

  return (
    <div className="bg-stone-900 border border-gold/30 text-ivory p-6 sm:p-6 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-stone-800 gap-4 mb-8">
        <div>
          <span className="text-[10px] tracking-[0.25em] uppercase text-gold font-semibold block">
            Chromatic Intelligence
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-ivory">Smart Color Palette Engine</h3>
          <p className="text-xs text-stone-400 mt-1">
            Harmonize base wall pigments, stone veins, and millwork finishes using architectural color harmony laws.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* DOMINANT COLOR PICKER */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-stone-950 p-5 border border-stone-800 space-y-4">
            <span className="text-xs uppercase tracking-wider text-gold font-semibold block">
              Select Dominant Base Tone
            </span>

            {/* Curated Hues Grid */}
            <div className="grid grid-cols-4 gap-2">
              {curatedHues.map(hue => (
                <button
                  key={hue.hex}
                  onClick={() => setBaseHex(hue.hex)}
                  className={`aspect-square p-1 border transition-all flex flex-col items-center justify-center group ${
                    baseHex.toUpperCase() === hue.hex.toUpperCase() 
                      ? 'border-gold ring-1 ring-gold scale-105' 
                      : 'border-stone-800 hover:border-stone-600'
                  }`}
                  style={{ backgroundColor: hue.hex }}
                  title={hue.name}
                >
                  {baseHex.toUpperCase() === hue.hex.toUpperCase() && (
                    <span className="w-2.5 h-2.5 rounded-full bg-gold shadow-md" />
                  )}
                </button>
              ))}
            </div>

            {/* Custom Hex Input */}
            <div className="pt-2 flex items-center gap-3">
              <input
                type="color"
                value={baseHex}
                onChange={(e) => setBaseHex(e.target.value)}
                className="w-10 h-10 border border-gold cursor-pointer bg-transparent"
              />
              <div className="flex-1">
                <span className="text-[10px] uppercase text-stone-400 block">Active Hex Code</span>
                <input
                  type="text"
                  value={baseHex}
                  onChange={(e) => setBaseHex(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-700 px-3 py-1 text-xs text-ivory font-mono focus:border-gold focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Architectural Simulated Room Preview */}
          <div className="bg-charcoal-950 p-5 border border-gold/30 space-y-3">
            <span className="text-xs uppercase tracking-wider text-stone-300 font-medium block">
              Simulated Architectural Volume
            </span>
            <div className="aspect-[16/10] border border-stone-800 relative overflow-hidden flex flex-col justify-end p-4" style={{ backgroundColor: palettes.mono[0] }}>
              {/* Back Wall Accent */}
              <div className="absolute inset-x-8 top-4 h-24 border-b border-black/10" style={{ backgroundColor: baseHex }} />
              {/* Furniture Silhouette */}
              <div className="relative z-10 p-3 flex justify-between items-end border-t border-black/20" style={{ backgroundColor: palettes.mono[3] }}>
                <span className="text-[10px] font-serif uppercase tracking-wider text-white">Accent Joinery</span>
                <span className="text-[9px] font-mono text-stone-300">{palettes.mono[3]}</span>
              </div>
            </div>
          </div>
        </div>

        {/* HARMONY COLOR BARS & EXPORT */}
        <div className="lg:col-span-7 space-y-6">
          {/* Monochromatic Scheme */}
          <div className="bg-stone-950 p-5 border border-stone-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-gold font-semibold">
                Monochromatic Spatial Tonalities
              </span>
              <span className="text-[10px] text-stone-400">Light to Deep Shade</span>
            </div>
            <div className="flex h-14 w-full gap-1.5">
              {palettes.mono.map((color, i) => (
                <div 
                  key={i} 
                  onClick={() => handleCopy(color)}
                  className="flex-1 h-full cursor-pointer group relative flex flex-col justify-end p-1 transition-transform hover:-translate-y-1"
                  style={{ backgroundColor: color }}
                >
                  <span className="text-[9px] font-mono bg-black/70 px-1 text-white opacity-0 group-hover:opacity-100 transition-opacity truncate">
                    {color}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Complementary & Earthy */}
          <div className="bg-stone-950 p-5 border border-stone-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-gold font-semibold">
                Complementary Contrast Spectrum
              </span>
              <span className="text-[10px] text-stone-400">Opposite Optical Axis</span>
            </div>
            <div className="flex h-14 w-full gap-1.5">
              {palettes.complementary.map((color, i) => (
                <div 
                  key={i} 
                  onClick={() => handleCopy(color)}
                  className="flex-1 h-full cursor-pointer group relative flex flex-col justify-end p-1 transition-transform hover:-translate-y-1"
                  style={{ backgroundColor: color }}
                >
                  <span className="text-[9px] font-mono bg-black/70 px-1 text-white opacity-0 group-hover:opacity-100 transition-opacity truncate">
                    {color}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Analogous Harmony */}
          <div className="bg-stone-950 p-5 border border-stone-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-gold font-semibold">
                Analogous Adjacent Harmony
              </span>
              <span className="text-[10px] text-stone-400">Adjacent Chromatic Angles</span>
            </div>
            <div className="flex h-14 w-full gap-1.5">
              {palettes.analogous.map((color, i) => (
                <div 
                  key={i} 
                  onClick={() => handleCopy(color)}
                  className="flex-1 h-full cursor-pointer group relative flex flex-col justify-end p-1 transition-transform hover:-translate-y-1"
                  style={{ backgroundColor: color }}
                >
                  <span className="text-[9px] font-mono bg-black/70 px-1 text-white opacity-0 group-hover:opacity-100 transition-opacity truncate">
                    {color}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-stone-400">
              {copiedHex ? (
                <span className="text-emerald-400 font-mono flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Copied {copiedHex} to clipboard!
                </span>
              ) : (
                'Click any swatch above to copy HEX code'
              )}
            </span>
            <button
              onClick={() => handleSaveToBoard(baseHex, 'Custom Dominant')}
              className="px-4 py-2 bg-gold text-charcoal-950 font-semibold text-xs uppercase tracking-wider hover:bg-gold-light transition-colors"
            >
              Pin Base Hue to Moodboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
