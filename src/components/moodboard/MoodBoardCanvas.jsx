import React, { useState } from 'react';
import { 
  Layers, Plus, Trash2, Download, Save, RefreshCw, 
  Sparkles, CheckCircle2, Image as ImageIcon, Palette, ShieldCheck 
} from 'lucide-react';
import { MOODBOARD_ASSETS } from '../../data/interiorData';
import { useSaved } from '../../context/SavedContext';

export const MoodBoardCanvas = () => {
  const { savedMoodboard, addToMoodboard, removeFromMoodboard, clearMoodboard } = useSaved();
  const [activeTab, setActiveTab] = useState('images'); // 'images' | 'swatches' | 'materials' | 'fixtures'
  const [saveToast, setSaveToast] = useState(false);

  const handleAddAsset = (asset, type) => {
    addToMoodboard({
      id: `${type}-${asset.id}-${Date.now()}`,
      type,
      title: asset.name,
      url: asset.url,
      hex: asset.hex,
      texture: asset.texture,
      fixtureType: asset.type
    });
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 3000);
  };

  const handleExportSummary = () => {
    alert("Mood board arrangement compiled! Ready for architectural consultation.");
  };

  return (
    <div className="bg-stone-900 border border-gold/30 text-ivory p-6 sm:p-6 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-stone-800 gap-4 mb-8">
        <div>
          <span className="text-[10px] tracking-[0.25em] uppercase text-gold font-semibold block">
            Custom Atelier Curator
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-ivory">Interactive Mood Board Creator</h3>
          <p className="text-xs text-stone-400 mt-1">
            Compose bespoke textures, stone slabs, textiles, and lighting palettes into an architectural moodboard.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={clearMoodboard}
            className="px-3 py-2 text-xs uppercase tracking-wider text-stone-400 hover:text-rose-400 border border-stone-800 flex items-center gap-1.5"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Clear Canvas
          </button>
          <button
            onClick={handleExportSummary}
            className="px-5 py-2 bg-gold text-charcoal-950 font-semibold text-xs uppercase tracking-wider hover:bg-gold-light flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" /> Export Board
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* ASSET PICKER LIBRARY */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex border-b border-stone-800">
            {[
              { id: 'images', label: 'Interiors' },
              { id: 'swatches', label: 'Colors' },
              { id: 'materials', label: 'Materials' },
              { id: 'fixtures', label: 'Fixtures' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-2 text-xs uppercase tracking-wider transition-colors border-b-2 ${
                  activeTab === tab.id 
                    ? 'border-gold text-gold font-semibold' 
                    : 'border-transparent text-stone-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-3 bg-stone-950 border border-stone-800 max-h-[460px] overflow-y-auto space-y-3">
            {activeTab === 'images' && (
              <div className="grid grid-cols-2 gap-2">
                {MOODBOARD_ASSETS.images.map(img => (
                  <div 
                    key={img.id}
                    onClick={() => handleAddAsset(img, 'image')}
                    className="relative group aspect-square cursor-pointer overflow-hidden border border-stone-800 hover:border-gold"
                  >
                    <img src={img.url} alt={img.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="p-1.5 rounded-full bg-gold text-charcoal-950">
                        <Plus className="w-4 h-4" />
                      </span>
                    </div>
                    <span className="absolute bottom-1 left-1 bg-black/80 text-[10px] px-1 text-stone-300">
                      {img.name}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'swatches' && (
              <div className="grid grid-cols-2 gap-2">
                {MOODBOARD_ASSETS.swatches.map(sw => (
                  <div
                    key={sw.id}
                    onClick={() => handleAddAsset(sw, 'swatch')}
                    className="p-3 bg-stone-900 border border-stone-800 hover:border-gold cursor-pointer flex items-center gap-3 group"
                  >
                    <span className="w-8 h-8 rounded border border-white/20 flex-shrink-0" style={{ backgroundColor: sw.hex }} />
                    <div className="min-w-0">
                      <span className="text-xs text-ivory block truncate group-hover:text-gold">{sw.name}</span>
                      <span className="text-[10px] text-stone-400 font-mono">{sw.hex}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'materials' && (
              <div className="space-y-2">
                {MOODBOARD_ASSETS.materials.map(mat => (
                  <div
                    key={mat.id}
                    onClick={() => handleAddAsset(mat, 'material')}
                    className="p-3 bg-stone-900 border border-stone-800 hover:border-gold cursor-pointer flex items-center justify-between group"
                  >
                    <div>
                      <span className="text-xs text-ivory block group-hover:text-gold">{mat.name}</span>
                      <span className="text-[10px] text-stone-400 italic">{mat.texture}</span>
                    </div>
                    <span className="p-1 text-gold">
                      <Plus className="w-4 h-4" />
                    </span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'fixtures' && (
              <div className="space-y-2">
                {MOODBOARD_ASSETS.fixtures.map(fx => (
                  <div
                    key={fx.id}
                    onClick={() => handleAddAsset(fx, 'fixture')}
                    className="p-3 bg-stone-900 border border-stone-800 hover:border-gold cursor-pointer flex items-center justify-between group"
                  >
                    <div>
                      <span className="text-xs text-ivory block group-hover:text-gold">{fx.name}</span>
                      <span className="text-[10px] text-stone-400 uppercase tracking-wider">{fx.type}</span>
                    </div>
                    <span className="p-1 text-gold">
                      <Plus className="w-4 h-4" />
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ACTIVE MOOD BOARD CANVAS */}
        <div className="lg:col-span-7 bg-charcoal-950 border border-gold/40 p-6 min-h-[460px] flex flex-col justify-between shadow-inner">
          <div>
            <div className="flex items-center justify-between border-b border-stone-800 pb-3 mb-4">
              <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>Atelier Canvas Layout ({savedMoodboard.length} Elements)</span>
              </span>
              <span className="text-[10px] text-stone-500">Auto-saved to LocalStorage</span>
            </div>

            {saveToast && (
              <div className="mb-4 p-2 bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Element added to your moodboard canvas.</span>
              </div>
            )}

            {savedMoodboard.length === 0 ? (
              <div className="py-10 text-center space-y-3">
                <Layers className="w-10 h-10 text-stone-600 mx-auto" />
                <h4 className="font-serif text-lg text-stone-400">Your Canvas is Empty</h4>
                <p className="text-xs text-stone-500 max-w-sm mx-auto">
                  Click on images, chromatic swatches, or architectural materials from the library on the left to pin them to this composition.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {savedMoodboard.map(item => (
                  <div key={item.id} className="relative group bg-stone-900 border border-stone-800 p-2 overflow-hidden">
                    {item.type === 'image' && (
                      <div className="aspect-[4/3] mb-2 overflow-hidden bg-black">
                        <img src={item.url} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                    )}

                    {item.type === 'swatch' && (
                      <div className="aspect-[4/3] mb-2 flex items-center justify-center border border-white/10" style={{ backgroundColor: item.hex }}>
                        <span className="text-[11px] font-mono bg-black/60 px-2 py-0.5 text-white">{item.hex}</span>
                      </div>
                    )}

                    {item.type === 'material' && (
                      <div className="aspect-[4/3] mb-2 bg-stone-950 border border-stone-800 p-3 flex flex-col justify-center">
                        <span className="text-[10px] text-gold uppercase tracking-wider block mb-1">Material</span>
                        <span className="text-xs text-stone-200 font-serif leading-tight">{item.title}</span>
                      </div>
                    )}

                    {item.type === 'fixture' && (
                      <div className="aspect-[4/3] mb-2 bg-stone-950 border border-stone-800 p-3 flex flex-col justify-center">
                        <span className="text-[10px] text-gold uppercase tracking-wider block mb-1">Specification</span>
                        <span className="text-xs text-stone-200 font-serif leading-tight">{item.title}</span>
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[11px] text-stone-300 truncate pr-2">{item.title}</span>
                      <button
                        onClick={() => removeFromMoodboard(item.id)}
                        className="text-stone-500 hover:text-rose-400 p-1"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="pt-6 border-t border-stone-800 mt-6 flex justify-between items-center text-xs text-stone-400">
            <span>Harmonized for Aurelia &amp; Stone Atelier specifications.</span>
            <span className="text-gold font-medium">Bespoke Curation</span>
          </div>
        </div>
      </div>
    </div>
  );
};
