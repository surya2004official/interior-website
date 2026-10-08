import React from 'react';
import { AIDesignerWizard } from '../components/ai/AIDesignerWizard';
import { Sparkles, ShieldCheck } from 'lucide-react';

export const AIDesignerPage = () => {
  return (
    <div className="bg-ivory text-charcoal pt-20 pb-10">
      <div className="w-full px-4 sm:px-6 mb-6">
        <div className="border-b border-stone-300 pb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/15 border border-gold/30 text-gold text-xs uppercase tracking-widest font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>Interactive Spatial Engine</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal tracking-tight">
            AI Interior Designer Atelier
          </h1>
          <p className="text-stone-600 text-sm max-w-2xl leading-relaxed">
            Synthesize high-fidelity architectural concepts in moments. Upload your existing room photograph or select a sample shell, designate your preferred design vernacular, and generate a bespoke conceptual dossier.
          </p>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6">
        <AIDesignerWizard />
      </div>
    </div>
  );
};
