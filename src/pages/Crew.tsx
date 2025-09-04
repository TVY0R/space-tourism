import { useState } from "react";
import crewData from '../data/crewData';

export default function Crew() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCrew = crewData[activeIndex];

  return (
    <section className="min-h-screen w-full 
                 bg-crew-mobile sm:bg-crew-tablet lg:bg-crew-desktop
                 bg-cover bg-no-repeat bg-top
                 flex flex-col items-center justify-start
                 px-6 lg:px-24 pt-32 text-white">
      
      {/* Title */}
      <div className="w-full max-w-6xl text-center lg:text-left">
        <h2 className="font-condensed uppercase tracking-widest text-lg sm:text-xl text-white/70">
          <span className="font-bold text-white/50 mr-2">02</span>
          Meet your crew
        </h2>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl mt-12 lg:mt-20 gap-12 lg:gap-24">
        {/* Left: Text */}
        <div className="text-center lg:text-left space-y-6 max-w-xl">
          <h3 className="font-condensed uppercase text-xl sm:text-2xl text-white/60 tracking-widest">
            {activeCrew.role}
          </h3>
          <h1 className="font-serif uppercase text-4xl sm:text-6xl lg:text-7xl">
            {activeCrew.name}
          </h1>
          <p className="font-sans text-gray-300 leading-relaxed text-base sm:text-lg">
            {activeCrew.bio}
          </p>

          {/* Navigation Dots */}
          <div className="flex justify-center lg:justify-start gap-4 mt-8">
            {crewData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-4 h-4 rounded-full transition ${
                  activeIndex === index ? "bg-white" : "bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center lg:justify-end w-full">
          <img
            src={activeCrew.image}
            alt={activeCrew.name}
            className="h-[300px] sm:h-[450px] lg:h-[600px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
