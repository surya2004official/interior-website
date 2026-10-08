import React from 'react';
import { VirtualStudioViewer } from '../components/virtual/VirtualStudioViewer';
import { Eye } from 'lucide-react';

export const VirtualStudioPage = () => {
  return (
    <div className="bg-ivory text-charcoal pt-20 pb-10">
      <div className="w-full px-4 sm:px-6 mb-6">
        <div className="border-b border-stone-300 pb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/15 border border-gold/30 text-gold text-xs uppercase tracking-widest font-semibold">
            <Eye className="w-4 h-4" />
            <span>Digital Spatial Showroom</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal tracking-tight">
            Virtual Interior Design Studio
          </h1>
          <p className="text-stone-600 text-sm max-w-2xl leading-relaxed">
            Immerse yourself in our architectural spaces. Inspect interactive material beacons, switch between 5500K daylight and 2400K evening scenes, or toggle the 3D Orbit model.
          </p>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6">
        <VirtualStudioViewer />
      </div>
    </div>
  );
};
