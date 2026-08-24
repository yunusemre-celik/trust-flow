import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden relative selection:bg-[#191919] selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Landing Viewport */}
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default App;
