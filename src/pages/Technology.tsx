import { useState } from "react";
import technologyData, { Technology as TechnologyType } from "../data/technologyData";

export default function Technology() {
  const [current, setCurrent] = useState<TechnologyType>(technologyData[0]);

  return (
    <section
      className="min-h-screen w-full 
                 bg-technology-mobile sm:bg-technology-tablet lg:bg-technology-desktop
                 bg-cover bg-no-repeat bg-top
                 flex flex-col items-center lg:items-start
                 px-6 lg:px-24 pt-32 text-white"
    >
      {/* Page Title */}
      <div className="w-full max-w-6xl text-center lg:text-left">
        <h2 className="font-condensed uppercase tracking-widest text-lg sm:text-xl text-white/70">
          <span className="font-bold text-white/50 mr-2">03</span>
          Space launch 101
        </h2>
      </div>

      {/* Content */}
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center lg:items-start justify-between w-full max-w-6xl mt-12 lg:mt-20 gap-12 lg:gap-24">
        {/* Left: Navigation + Text */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 w-full">
          {/* Navigation Numbers */}
          <div className="flex lg:flex-col gap-4">
            {technologyData.map((tech, idx) => (
              <button
                key={tech.name}
                onClick={() => setCurrent(tech)}
                className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 font-serif text-lg sm:text-2xl flex items-center justify-center transition 
                  ${
                    current.name === tech.name
                      ? "bg-white text-black border-white"
                      : "border-white/50 text-white hover:border-white"
                  }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          {/* Text */}
          <div className="text-center lg:text-left space-y-6 max-w-xl">
            <p className="uppercase font-condensed text-white/70 tracking-widest text-sm sm:text-base">
              The Terminology...
            </p>
            <h1 className="font-serif uppercase text-3xl sm:text-5xl lg:text-6xl">
              {current.name}
            </h1>
            <p className="font-sans text-gray-300 leading-relaxed text-base sm:text-lg">
              {current.description}
            </p>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full flex justify-center lg:justify-end">
          <picture>
            {/* Desktop → Portrait */}
            <source
              media="(min-width:1024px)"
              srcSet={current.images.portrait}
            />
            {/* Tablet & Mobile → Landscape */}
            <img
              src={current.images.landscape}
              alt={current.name}
              className="w-full max-w-[500px] object-cover"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
