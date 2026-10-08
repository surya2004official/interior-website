import React from 'react';
import { InteractiveFloorPlan } from '../components/floorplan/InteractiveFloorPlan';
import { Grid } from 'lucide-react';

export const FloorPlanPage = () => {
  return (
    <div className="bg-ivory text-charcoal pt-20 pb-10">
      <div className="w-full px-4 sm:px-6 mb-6">
        <div className="border-b border-stone-300 pb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/15 border border-gold/30 text-gold text-xs uppercase tracking-widest font-semibold">
            <Grid className="w-4 h-4" />
            <span>2D Circulation Diagrams</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal tracking-tight">
            Interactive Floor Plan Blueprint
          </h1>
          <p className="text-stone-600 text-sm max-w-2xl leading-relaxed">
            Click into specific zones on the architectural floor plan to review square footage, dimensions, and staged spatial photography.
          </p>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6">
        <InteractiveFloorPlan />
      </div>
    </div>
  );
};
