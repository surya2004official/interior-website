import React from 'react';
import { StyleFinderQuiz } from '../components/ai/StyleFinderQuiz';
import { Compass } from 'lucide-react';

export const StyleFinderPage = () => {
  return (
    <div className="bg-ivory text-charcoal pt-20 pb-10">
      <div className="w-full px-4 sm:px-6 mb-6">
        <div className="border-b border-stone-300 pb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/15 border border-gold/30 text-gold text-xs uppercase tracking-widest font-semibold">
            <Compass className="w-4 h-4" />
            <span>Interactive Personality Discovery</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal tracking-tight">
            AI Architectural Style Finder
          </h1>
          <p className="text-stone-600 text-sm max-w-2xl leading-relaxed">
            Answer 7 visual questions to unlock your architectural design personality, signature materials palette, and matching curated portfolio monographs.
          </p>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6">
        <StyleFinderQuiz />
      </div>
    </div>
  );
};
