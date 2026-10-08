import { useRef, useState } from 'react';
import { Maximize2, MoveHorizontal } from 'lucide-react';

export const TransformationReveal = ({ item, active = true, onExpand }) => {
  const [reveal, setReveal] = useState(0);
  const [animateReveal, setAnimateReveal] = useState(false);
  const frameRef = useRef(null);
  const dragging = useRef(null);
  const updateReveal = clientX => {
    const rect = frameRef.current.getBoundingClientRect();
    setAnimateReveal(false);
    setReveal(Math.round(Math.max(0, Math.min(100, (clientX - rect.left) / rect.width * 100))));
  };
  const showStage = value => { setAnimateReveal(true); setReveal(value); };
  const image = stage => (
    <img
      src={`/images/transformations/${item.id}-v2.png`}
      alt={`${item.room} ${stage ? 'after' : 'before'} renovation`}
      draggable={false}
      className="pointer-events-none absolute top-1/2 h-auto w-[200%] max-w-none -translate-y-1/2"
      style={{ left: stage ? '-100%' : 0 }}
    />
  );

  return (
    <div>
      <div ref={frameRef} className="relative aspect-[16/9] overflow-hidden bg-stone-800">
        {image(0)}
        <div className={`absolute inset-0 overflow-hidden ${animateReveal ? 'transition-[clip-path] duration-500 ease-in-out motion-reduce:transition-none' : ''}`} style={{ clipPath: `inset(0 ${100 - reveal}% 0 0)` }}>
          {image(1)}
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/50 to-transparent" />
        <span className="pointer-events-none absolute left-4 top-4 rounded bg-black/60 px-3 py-1 text-[10px] uppercase tracking-widest text-ivory">{reveal === 0 ? 'Before renovation' : reveal === 100 ? 'After renovation' : 'After / Before'}</span>
        <div className={`pointer-events-none absolute inset-y-0 w-0.5 bg-gold ${animateReveal ? 'transition-[left] duration-500 ease-in-out motion-reduce:transition-none' : ''}`} style={{ left: `${reveal}%` }}>
          <span className="absolute top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-2 border-gold bg-charcoal-950/90 text-gold shadow-lg" style={{ transform: `translate(${reveal === 0 ? '0' : reveal === 100 ? '-100%' : '-50%'}, -50%)` }}><MoveHorizontal className="h-5 w-5" /></span>
        </div>
        <div role="slider" aria-valuemin={0} aria-valuemax={100} aria-valuenow={reveal} aria-orientation="horizontal" tabIndex={active ? 0 : -1}
          aria-label={`Reveal ${item.room.toLowerCase()} renovation`} aria-valuetext={`${reveal}% after renovation`}
          onPointerDown={event => {
            event.stopPropagation();
            if (!active || !event.isPrimary || event.button !== 0) return;
            event.preventDefault();
            event.currentTarget.focus();
            dragging.current = event.pointerId;
            event.currentTarget.setPointerCapture(event.pointerId);
          }}
          onPointerMove={event => {
            event.stopPropagation();
            if (dragging.current === event.pointerId) updateReveal(event.clientX);
          }}
          onPointerUp={event => {
            event.stopPropagation();
            if (dragging.current !== event.pointerId) return;
            updateReveal(event.clientX);
            dragging.current = null;
            event.currentTarget.releasePointerCapture(event.pointerId);
          }}
          onPointerCancel={event => { event.stopPropagation(); dragging.current = null; }}
          onLostPointerCapture={() => { dragging.current = null; }}
          onKeyDown={event => {
            event.stopPropagation();
            const changes = { ArrowLeft: -5, ArrowDown: -5, ArrowRight: 5, ArrowUp: 5, PageDown: -10, PageUp: 10 };
            if (event.key in changes || event.key === 'Home' || event.key === 'End') {
              event.preventDefault();
              setAnimateReveal(false);
              setReveal(value => event.key === 'Home' ? 0 : event.key === 'End' ? 100 : Math.max(0, Math.min(100, value + changes[event.key])));
            }
          }}
          className={`absolute inset-y-0 w-11 cursor-ew-resize focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-gold ${animateReveal ? 'transition-[left] duration-500 ease-in-out motion-reduce:transition-none' : ''}`}
          style={{ touchAction: 'none', left: `clamp(0px, calc(${reveal}% - 22px), calc(100% - 44px))` }} />
        {onExpand && <button type="button" tabIndex={active ? 0 : -1} onClick={onExpand} aria-label={`Open ${item.room.toLowerCase()} image preview`} className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded bg-black/60 text-white hover:bg-black/80"><Maximize2 className="h-5 w-5" /></button>}
      </div>
      <div className="flex items-center justify-between gap-2 border-t border-gold/20 bg-stone-900 px-3 py-2 sm:px-5">
        <button type="button" tabIndex={active ? 0 : -1} onClick={() => showStage(0)} aria-pressed={reveal === 0} className={`rounded px-3 py-2 text-xs ${reveal === 0 ? 'bg-gold text-charcoal-950' : 'text-stone-300 hover:bg-white/10'}`}>Before</button>
        <span className="text-center text-[10px] text-stone-400 sm:text-xs">Drag the line to reveal</span>
        <button type="button" tabIndex={active ? 0 : -1} onClick={() => showStage(100)} aria-pressed={reveal === 100} className={`rounded px-3 py-2 text-xs ${reveal === 100 ? 'bg-gold text-charcoal-950' : 'text-stone-300 hover:bg-white/10'}`}>After</button>
      </div>
    </div>
  );
};
