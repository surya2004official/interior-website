import React from 'react';
import { MoodBoardCanvas } from '../components/moodboard/MoodBoardCanvas';
import { Layers } from 'lucide-react';

export const MoodBoardPage = () => {
  return (
    <div className="bg-ivory text-charcoal pt-20 pb-10">
      <div className="w-full px-4 sm:px-6 mb-6">
        <div className="border-b border-stone-300 pb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/15 border border-gold/30 text-gold text-xs uppercase tracking-widest font-semibold">
            <Layers className="w-4 h-4" />
            <span>Tactile Material Synthesis</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal tracking-tight">
            Interactive Mood Board Creator
          </h1>
          <p className="text-stone-600 text-sm max-w-2xl leading-relaxed">
            Curate Italian stones, timber veneers, architectural hardware, and lighting concepts onto your personalized digital canvas. Saved directly to your device via LocalStorage.
          </p>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6">
        <MoodBoardCanvas />
      </div>
    </div>
  );
};
