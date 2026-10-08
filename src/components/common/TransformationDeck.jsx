import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, MoveHorizontal, X } from 'lucide-react';

import { TransformationReveal } from './TransformationReveal';

const transformations = [
  { id: 'living', title: 'A warmer welcome', room: 'Living room', description: 'A tired lounge reimagined with soft ivory, natural oak and sculptural furniture.' },
  { id: 'kitchen', title: 'Made for everyday rituals', room: 'Kitchen', description: 'The same kitchen, renewed with tailored cabinetry, warm stone and brass details.' },
  { id: 'bedroom', title: 'Room to unwind', room: 'Bedroom', description: 'A dated bedroom becomes a quiet retreat in linen, walnut and warm neutrals.' },
];

export const TransformationDeck = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [preview, setPreview] = useState(null);
  const dialogRef = useRef(null);
  const previewOpen = preview !== null;
  useEffect(() => {
    if (!previewOpen) return;
    const dialog = dialogRef.current;
    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [previewOpen]);
  const reduceMotion = useReducedMotion();
  const swipeStart = useRef(null);
  const changeCard = (step) => {
    setActiveIndex(index => (index + step + transformations.length) % transformations.length);
  };
  const transition = reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 170, damping: 25, mass: 1.1 };

  return (
    <>
    <div className="mx-auto max-w-6xl outline-none focus-visible:ring-1 focus-visible:ring-gold" role="region" aria-roledescription="carousel" aria-label="Before and after design concepts" tabIndex={0}
      onKeyDown={event => {
        if (event.target === event.currentTarget && (event.key === 'ArrowRight' || event.key === 'ArrowLeft')) {
          event.preventDefault();
          changeCard(event.key === 'ArrowRight' ? 1 : -1);
        }
      }}>
      <div className="relative overflow-hidden" style={{ touchAction: 'pan-y', height: 'calc(min(46.125vw, 427.5px) + 260px)' }}>
        <div className="absolute inset-0">
          {transformations.map((item, index) => {
            let position = (index - activeIndex + transformations.length) % transformations.length;
            if (position > transformations.length / 2) position -= transformations.length;
            const active = position === 0;
            return (
              <motion.article key={item.id} initial={false}
                onPointerDown={event => {
                  if (!active || !event.isPrimary || event.button !== 0 || event.target.closest('button, input, [role="slider"]')) return;
                  swipeStart.current = { pointerId: event.pointerId, x: event.clientX, y: event.clientY };
                  event.currentTarget.setPointerCapture(event.pointerId);
                }}
                onPointerUp={event => {
                  const start = swipeStart.current;
                  if (!start || start.pointerId !== event.pointerId) return;
                  swipeStart.current = null;
                  const dx = event.clientX - start.x;
                  const dy = event.clientY - start.y;
                  if (Math.abs(dx) >= 50 && Math.abs(dx) > Math.abs(dy) * 1.4) changeCard(dx < 0 ? 1 : -1);
                }}
                onPointerCancel={() => { swipeStart.current = null; }}
                onLostPointerCapture={() => { swipeStart.current = null; }}
                animate={{ x: `${position * 82}%`, scale: active ? 1 : 0.79, opacity: active ? 1 : 0.45, y: active ? 0 : 18 }}
                transition={transition}
                style={{ zIndex: active ? 3 : 1, left: '50%', marginLeft: 'calc(var(--card-width) / -2)', width: 'var(--card-width)', '--card-width': 'min(82vw, 760px)' }}
                className="absolute top-5 select-none overflow-hidden rounded-xl border border-gold/30 bg-stone-900 shadow-[0_24px_70px_rgba(0,0,0,0.4)]"
                aria-hidden={!active} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${transformations.length}: ${item.room}`}>
                <div className="flex items-center justify-between bg-walnut px-4 py-3 text-[10px] uppercase tracking-[0.2em] text-ivory sm:px-5">
                  <span>{item.room}</span><span>0{index + 1} / 03</span>
                </div>
                <TransformationReveal key={`${item.id}-${active}`} item={item} active={active} onExpand={() => setPreview({ item })} />
                <div className="min-h-[140px] px-4 py-4 sm:px-5">
                  <h3 className="font-serif text-xl text-ivory sm:text-2xl">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-stone-400">{item.description}</p>
                  <p className="mt-3 text-[9px] uppercase tracking-[0.15em] text-gold/70">AI design concept</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-center gap-6">
        <button type="button" onClick={() => changeCard(-1)} aria-label="Previous transformation" className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-charcoal-950"><ArrowLeft className="h-4 w-4" /></button>
        <div className="text-center">
          <span className="flex items-center justify-center gap-2 text-xs text-stone-400"><MoveHorizontal className="h-4 w-4" /> Swipe image to change cards</span>
          <p aria-live="polite" aria-atomic="true" className="sr-only">{transformations[activeIndex].room}, {activeIndex + 1} of {transformations.length}</p>
          <div className="mt-3 flex justify-center gap-2">
            {transformations.map((item, index) => <button key={item.id} type="button" aria-label={`Show ${item.room.toLowerCase()} transformation`} aria-current={activeIndex === index ? 'true' : undefined} onClick={() => setActiveIndex(index)} className="flex h-5 w-5 items-center justify-center"><span className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === index ? 'w-5 bg-gold' : 'w-1.5 bg-stone-600'}`} /></button>)}
          </div>
        </div>
        <button type="button" onClick={() => changeCard(1)} aria-label="Next transformation" className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-charcoal-950"><ArrowRight className="h-4 w-4" /></button>
      </div>
    </div>
    <dialog ref={dialogRef} aria-labelledby="transformation-preview-title" onCancel={() => setPreview(null)} onClick={event => { if (event.target === event.currentTarget) setPreview(null); }} className="m-auto max-h-[95dvh] max-w-[95vw] overflow-y-auto rounded-xl border border-gold/40 bg-stone-900 p-4 text-ivory shadow-2xl backdrop:bg-black/85 backdrop:backdrop-blur-sm sm:p-5">
      {preview && <>
        <div className="mb-3 flex items-center justify-between gap-4">
          <h3 id="transformation-preview-title" className="font-serif text-xl">{preview.item.room} transformation</h3>
          <button type="button" autoFocus onClick={() => setPreview(null)} aria-label="Close image preview" className="flex h-11 w-11 items-center justify-center rounded-full hover:bg-white/10"><X className="h-5 w-5" /></button>
        </div>
        <div style={{ width: 'min(85vw, 105dvh, 1100px)' }}>
          <TransformationReveal key={preview.item.id} item={preview.item} />
        </div>
      </>}
    </dialog>
    </>
  );
};
