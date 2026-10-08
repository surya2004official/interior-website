import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MoveHorizontal } from 'lucide-react';

export const BeforeAfterSlider = ({ 
  beforeImage, 
  afterImage, 
  title, 
  category, 
  description, 
  projectId,
  initialPosition = 50 
}) => {
  const [sliderPos, setSliderPos] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDragging]);

  return (
    <div className="bg-stone-900 border border-gold/30 p-4 sm:p-6 text-ivory rounded-2xl overflow-hidden shadow-2xl">
      {/* Top Header if title provided */}
      {title && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-800 mb-4 gap-2">
          <div>
            <span className="text-[10px] tracking-[0.25em] uppercase text-gold font-semibold block">
              {category || "Spatial Transformation"}
            </span>
            <h4 className="font-serif text-xl sm:text-2xl text-ivory tracking-wide">{title}</h4>
          </div>
          {projectId && (
            <Link 
              to={`/projects/${projectId}`}
              className="text-xs uppercase tracking-wider text-gold hover:underline flex items-center gap-1 self-start sm:self-center"
            >
              <span>View Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      )}

      {/* Interactive Slider Frame */}
      <div 
        ref={containerRef}
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] select-none overflow-hidden cursor-ew-resize group shadow-2xl rounded-xl"
        onMouseDown={() => setIsDragging(true)}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER Image (Full width background) */}
        <img 
          src={afterImage} 
          alt="Completed Architectural Renovation" 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* BEFORE Image (Clipped layer) */}
        <div 
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPos}%` }}
        >
          <img 
            src={beforeImage} 
            alt="Original Bare Shell Site State" 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none"
            style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
          />
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 bg-charcoal-950/80 backdrop-blur-md px-3 py-1 text-[10px] tracking-[0.2em] uppercase font-semibold text-stone-300 border border-white/10 pointer-events-none rounded-lg">
          Before / Bare Shell
        </div>
        <div className="absolute top-4 right-4 bg-gold/90 backdrop-blur-md px-3 py-1 text-[10px] tracking-[0.2em] uppercase font-semibold text-charcoal-950 shadow-md pointer-events-none rounded-lg">
          After / Atelier Handover
        </div>

        {/* Divider Handle Line */}
        <div 
          className="absolute top-0 bottom-0 w-0.5 bg-gold z-20 pointer-events-none shadow-[0_0_12px_rgba(197,164,126,0.8)]"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-charcoal-900 border-2 border-gold text-gold flex items-center justify-center shadow-2xl">
            <MoveHorizontal className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Transformation Narrative Note */}
      {description && (
        <p className="mt-4 text-xs sm:text-sm text-stone-300 leading-relaxed italic border-l-2 border-gold/40 pl-3">
          "{description}"
        </p>
      )}

      {/* Helper instruction */}
      <div className="mt-3 flex items-center justify-between text-[11px] text-stone-500">
        <span>&larr; Drag slider to inspect transformation &rarr;</span>
        <span className="text-gold">{Math.round(sliderPos)}% Reveal</span>
      </div>
    </div>
  );
};
