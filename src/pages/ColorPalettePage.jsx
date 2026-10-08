import React from 'react';
import { ColorPaletteEngine } from '../components/palette/ColorPaletteEngine';
import { Palette } from 'lucide-react';

export const ColorPalettePage = () => {
  return (
    <div className="bg-ivory text-charcoal pt-20 pb-10">
      <div className="w-full px-4 sm:px-6 mb-6">
        <div className="border-b border-stone-300 pb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/15 border border-gold/30 text-gold text-xs uppercase tracking-widest font-semibold">
            <Palette className="w-4 h-4" />
            <span>Harmonic Color Physics</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal tracking-tight">
            Smart Architectural Color Palette Engine
          </h1>
          <p className="text-stone-600 text-sm max-w-2xl leading-relaxed">
            Select a dominant interior pigment to generate mathematically harmonious monochromatic, complementary, and analogous schemes for walls, millwork, and stone veining.
          </p>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6">
        <ColorPaletteEngine />
      </div>
    </div>
  );
};
