import { useState } from "react";
import destinationData, { Destination as DestinationType } from "../data/destinationData";

export default function Destination() {
  const [current, setCurrent] = useState<DestinationType>(destinationData[0]);

  return (
    <section
      className="min-h-screen w-full 
                 bg-destination-mobile sm:bg-destination-tablet lg:bg-destination-desktop
                 bg-cover bg-no-repeat bg-top
                 flex flex-col items-center lg:items-start
                 px-6 lg:px-24 pt-32 text-white"
    >
      {/* Page Title */}
      <div className="w-full max-w-6xl text-center lg:text-left">
        <h2 className="font-condensed uppercase tracking-widest text-lg sm:text-xl text-white/70">
          <span className="font-bold text-white/50 mr-2">01</span>
          Pick your destination
        </h2>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl mt-12 lg:mt-20 gap-12 lg:gap-24">
        {/* Left: Image */}
        <div className="flex justify-center lg:justify-start w-full">
          <img
            src={current.images.png}
            alt={current.name}
            className="h-[200px] sm:h-[300px] lg:h-[400px] object-contain"
          />
        </div>

        {/* Right: Text */}
        <div className="text-center lg:text-left space-y-6 max-w-xl">
          {/* Tabs */}
          <div className="flex justify-center lg:justify-start gap-6 uppercase font-condensed text-white/70 tracking-widest">
            {destinationData.map((dest) => (
              <button
                key={dest.name}
                onClick={() => setCurrent(dest)}
                className={`pb-2 border-b-2 transition ${
                  current.name === dest.name
                    ? "border-white text-white"
                    : "border-transparent hover:border-white/50"
                }`}
              >
                {dest.name}
              </button>
            ))}
          </div>

          {/* Details */}
          <h1 className="font-serif uppercase text-5xl sm:text-7xl lg:text-8xl">
            {current.name}
          </h1>
          <p className="font-sans text-gray-300 leading-relaxed text-base sm:text-lg">
            {current.description}
          </p>

          {/* Distance & Travel */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-12 pt-6 border-t border-gray-600 mt-6">
            <div>
              <p className="uppercase text-sm font-condensed text-white/70">
                Avg. Distance
              </p>
              <p className="font-serif text-2xl">{current.distance}</p>
            </div>
            <div>
              <p className="uppercase text-sm font-condensed text-white/70">
                Est. Travel Time
              </p>
              <p className="font-serif text-2xl">{current.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
