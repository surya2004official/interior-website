import React from 'react';
import { CostCalculator } from '../components/calculator/CostCalculator';
import { Calculator, ShieldCheck } from 'lucide-react';

export const CalculatorPage = () => {
  return (
    <div className="bg-ivory text-charcoal pt-20 pb-10">
      <div className="w-full px-4 sm:px-6 mb-6">
        <div className="border-b border-stone-300 pb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/15 border border-gold/30 text-gold text-xs uppercase tracking-widest font-semibold">
            <Calculator className="w-4 h-4" />
            <span>Financial Engineering Model</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal tracking-tight">
            Advanced Interior Cost Calculator
          </h1>
          <p className="text-stone-600 text-sm max-w-2xl leading-relaxed">
            Configure your carpet area, room parameters, culinary kitchen layout, and execution tier to receive a real-time INR investment valuation and delivery timeline.
          </p>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6">
        <CostCalculator />
      </div>
    </div>
  );
};
