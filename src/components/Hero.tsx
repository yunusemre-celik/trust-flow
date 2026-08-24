import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BoomerangVideoBg } from './BoomerangVideoBg';

export const Hero: React.FC = () => {
  const featureItems = [
    { number: '01', label: 'Conversational' },
    { number: '02', label: 'Connected' },
    { number: '03', label: 'Compliant' },
  ];

  return (
    <section className="relative flex flex-col items-center overflow-hidden h-screen min-h-[700px] w-full">
      {/* Background Video Layer */}
      <BoomerangVideoBg />

      {/* Main Content Layer (Z-10) */}
      <div className="relative z-10 flex flex-col items-center w-full h-full justify-between">
        {/* Hero Copy Block */}
        <div className="pt-20 sm:pt-24 md:pt-28 px-4 sm:px-6 flex flex-col items-center text-center max-w-4xl">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tighter text-[#191919] font-normal">
            Build lasting
            <br />
            relationships.
          </h1>

          <p className="max-w-sm sm:max-w-md mt-4 sm:mt-6 md:mt-7 text-sm md:text-base text-[#191919]/70 leading-relaxed font-sans">
            Conversational AI platform for modern financial institutions — agents that handle the full borrower lifecycle across email, SMS, and voice.
          </p>

          <a
            href="#book-a-demo"
            className="mt-5 sm:mt-7 md:mt-8 px-6 sm:px-8 py-3 sm:py-3.5 bg-[#191919] text-white text-sm font-medium rounded-lg hover:bg-[#191919]/90 transition-colors duration-200 shadow-sm"
          >
            Book A Demo
          </a>
        </div>

        {/* Bottom Info Panel (flush to bottom of viewport) */}
        <div className="mt-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="bg-white/90 backdrop-blur-sm border border-gray-200 border-b-0 pt-6 sm:pt-8 md:pt-10 px-5 sm:px-8 md:px-12 pb-0 shadow-sm">
            {/* Row 1 — 2 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-12 items-end">
              <div>
                <span className="block text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium font-sans">
                  WHAT DO WE DO?
                </span>
                <h2 className="mt-2.5 text-2xl sm:text-3xl md:text-4xl font-serif font-normal leading-tight tracking-tight text-[#191919]">
                  Conversations that
                  <br className="hidden sm:inline" /> build momentum
                </h2>
              </div>

              <div className="md:pb-1">
                <p className="text-sm md:text-[15px] text-[#191919]/70 leading-relaxed font-sans">
                  Conversational AI built for regulated financial institutions. Agents that hold a real conversation, plug into the systems you run, and show their work.
                </p>
              </div>
            </div>

            {/* Hairline Divider */}
            <div className="mt-5 sm:mt-6 md:mt-8 h-px bg-gray-200 w-full" />

            {/* Row 2 — 3 Interactive Rows */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 py-4 sm:py-6">
              {featureItems.map((item) => (
                <div
                  key={item.number}
                  className="group bg-[#F4F3F3] hover:bg-[#eaeaea] transition-all duration-200 cursor-pointer px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between rounded-none select-none"
                >
                  <div className="flex items-center text-sm sm:text-[15px] text-[#191919]">
                    <span className="text-[#191919]/40 font-mono text-xs sm:text-sm">
                      {item.number}
                    </span>
                    <span className="mx-2 text-[#191919]/30">/</span>
                    <span className="font-medium">{item.label}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-700 group-hover:translate-x-0.5 transition-all duration-200" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
