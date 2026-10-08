import React, { useState } from 'react';
import { 
  Sun, Moon, Maximize2, Minimize2, Eye, Box, Info, X, 
  ArrowRight, Sparkles, Check, Layers 
} from 'lucide-react';
import { VIRTUAL_STUDIO_SCENES } from '../../data/interiorData';
import { RoomCanvas3D } from './RoomCanvas3D';

export const VirtualStudioViewer = () => {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [lightingMode, setLightingMode] = useState('day'); // 'day' | 'night'
  const [viewMode, setViewMode] = useState('hotspots'); // 'hotspots' | '3d'
  const [materialTheme, setMaterialTheme] = useState('marble'); // 'marble' | 'noir'
  const [selectedHotspot, setSelectedHotspot] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const currentScene = VIRTUAL_STUDIO_SCENES[activeSceneIndex];
  const activeImage = lightingMode === 'day' ? currentScene.dayImage : currentScene.nightImage;

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className={`bg-stone-900 border border-gold/30 text-ivory shadow-2xl transition-all ${
      isFullscreen ? 'fixed inset-0 z-50 p-6 bg-charcoal-950 overflow-y-auto' : 'p-4 sm:p-6'
    }`}>
      {/* Top Controls Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-stone-800 gap-4 mb-6">
        <div>
          <span className="text-[10px] tracking-[0.25em] uppercase text-gold font-semibold block">
            Digital Showroom Experience
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-ivory">
            {currentScene.title}
          </h3>
          <span className="text-xs text-stone-400">
            {currentScene.roomType} &bull; {currentScene.theme}
          </span>
        </div>

        {/* Scene Selection Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {VIRTUAL_STUDIO_SCENES.map((scene, idx) => (
            <button
              key={scene.id}
              onClick={() => { setActiveSceneIndex(idx); setSelectedHotspot(null); }}
              className={`px-3 py-1.5 text-xs tracking-wider uppercase border transition-all ${
                activeSceneIndex === idx 
                  ? 'border-gold bg-gold text-charcoal-950 font-semibold' 
                  : 'border-stone-800 text-stone-300 hover:border-stone-600'
              }`}
            >
              {scene.roomType}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Viewer Frame */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-charcoal-950 overflow-hidden border border-stone-800">
        {viewMode === 'hotspots' ? (
          /* HIGH RES PHOTOGRAPHIC SHOWROOM WITH HOTSPOTS */
          <div className="relative w-full h-full">
            <img 
              src={activeImage} 
              alt={currentScene.title} 
              className="w-full h-full object-cover transition-all duration-700" 
            />

            {/* Subtle Vignette */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/40 pointer-events-none" />

            {/* Clickable Hotspots */}
            {currentScene.hotspots.map((spot) => (
              <button
                key={spot.id}
                onClick={() => setSelectedHotspot(spot)}
                style={{ top: `${spot.y}%`, left: `${spot.x}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 group z-20 focus:outline-none"
                title={spot.title}
              >
                {/* Pulsing ring */}
                <span className="absolute -inset-2 rounded-full bg-gold/40 animate-ping group-hover:bg-gold/60" />
                <span className="relative flex items-center justify-center w-7 h-7 rounded-full bg-charcoal-950/90 border border-gold text-gold text-xs shadow-2xl group-hover:bg-gold group-hover:text-charcoal transition-all">
                  <Info className="w-3.5 h-3.5" />
                </span>
                
                {/* Floating tooltip label */}
                <span className="hidden group-hover:block absolute left-8 top-1/2 -translate-y-1/2 whitespace-nowrap bg-charcoal-900/95 border border-gold/40 text-ivory text-[11px] px-2.5 py-1 shadow-xl pointer-events-none z-30">
                  {spot.title}
                </span>
              </button>
            ))}
          </div>
        ) : (
          /* 3D INTERACTIVE THREE.JS SCENE */
          <RoomCanvas3D theme={materialTheme} />
        )}

        {/* View Controls Toolbar (Floating bottom right) */}
        <div className="absolute top-4 right-4 z-30 flex items-center gap-2 bg-charcoal-950/80 backdrop-blur-md border border-gold/30 p-1.5 shadow-xl">
          {/* View Mode Toggle */}
          <button
            onClick={() => setViewMode(viewMode === 'hotspots' ? '3d' : 'hotspots')}
            className={`p-2 text-xs flex items-center gap-1.5 transition-colors ${
              viewMode === '3d' ? 'bg-gold text-charcoal-950 font-semibold' : 'text-stone-300 hover:text-white'
            }`}
            title="Switch between Photo Hotspots & 3D Model"
          >
            {viewMode === '3d' ? <Eye className="w-3.5 h-3.5" /> : <Box className="w-3.5 h-3.5" />}
            <span className="text-[11px] uppercase tracking-wider">{viewMode === '3d' ? '3D Active' : '3D Orbit'}</span>
          </button>

          {/* Day / Night Lighting Toggle (for photographic view) */}
          {viewMode === 'hotspots' && (
            <button
              onClick={() => setLightingMode(lightingMode === 'day' ? 'night' : 'day')}
              className="p-2 text-stone-300 hover:text-gold flex items-center gap-1"
              title="Toggle Day / Night Lighting Ambiance"
            >
              {lightingMode === 'day' ? <Moon className="w-4 h-4 text-amber-300" /> : <Sun className="w-4 h-4 text-amber-400" />}
              <span className="text-[10px] uppercase">{lightingMode}</span>
            </button>
          )}

          {/* Theme Switcher for 3D */}
          {viewMode === '3d' && (
            <button
              onClick={() => setMaterialTheme(materialTheme === 'marble' ? 'noir' : 'marble')}
              className="p-2 text-stone-300 hover:text-gold flex items-center gap-1 text-[10px] uppercase"
              title="Switch Stone Theme"
            >
              <Layers className="w-3.5 h-3.5 text-gold" />
              <span>{materialTheme === 'marble' ? 'Calacatta' : 'Noir'}</span>
            </button>
          )}

          {/* Fullscreen Button */}
          <button
            onClick={toggleFullscreen}
            className="p-2 text-stone-400 hover:text-gold"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>

        {/* Hotspot Detailed Information Drawer / Overlay */}
        {selectedHotspot && (
          <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md bg-charcoal-950/95 backdrop-blur-xl border border-gold/50 p-5 z-40 text-ivory shadow-2xl animate-fadeIn">
            <div className="flex items-start justify-between border-b border-stone-800 pb-2 mb-3">
              <div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-gold font-semibold block">
                  {selectedHotspot.category}
                </span>
                <h4 className="font-serif text-lg text-ivory">{selectedHotspot.title}</h4>
              </div>
              <button 
                onClick={() => setSelectedHotspot(null)}
                className="text-stone-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed mb-3">
              {selectedHotspot.desc}
            </p>
            <div className="p-2.5 bg-stone-900 border border-stone-800 text-[11px] font-mono text-stone-400">
              <span className="text-gold font-medium block mb-0.5">TECHNICAL SPECIFICATIONS:</span>
              {selectedHotspot.specs}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Scene Feature Highlights */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-stone-400 border-t border-stone-800 pt-6">
        <div className="border-l border-gold/30 pl-3 space-y-1">
          <span className="text-gold font-medium uppercase tracking-wider block">Interactive Touchpoints</span>
          <p>Click circular golden beacons on the scene to inspect material grades, stonework, and lighting optics.</p>
        </div>
        <div className="border-l border-gold/30 pl-3 space-y-1">
          <span className="text-gold font-medium uppercase tracking-wider block">Circadian Lighting Simulation</span>
          <p>Toggle between 5500K daylight and 2400K evening ambient illumination to evaluate space warmth.</p>
        </div>
        <div className="border-l border-gold/30 pl-3 space-y-1">
          <span className="text-gold font-medium uppercase tracking-wider block">Three-Dimensional Spatial View</span>
          <p>Activate 3D Orbit mode to inspect architectural volume, cantilever proportions, and shadow play.</p>
        </div>
      </div>
    </div>
  );
};
