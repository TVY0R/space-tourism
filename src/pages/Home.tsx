import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section
      className="relative min-h-screen w-full 
                 bg-home-mobile sm:bg-home-tablet lg:bg-home-desktop 
                 bg-cover bg-no-repeat bg-top 
                 flex flex-col lg:flex-row items-center justify-between
                 px-6 lg:px-24 pt-32 text-white"
    >
      {/* Left Section */}
      <div className="max-w-xl text-center lg:text-left space-y-6">
        <p className="font-condensed uppercase tracking-widest text-white/70 text-lg sm:text-xl">
          So, you want to travel to
        </p>
        <h1 className="text-7xl sm:text-8xl lg:text-9xl font-serif uppercase">
          Space
        </h1>
        <p className="font-sans text-gray-300 leading-relaxed text-base sm:text-lg">
          Let’s face it; if you want to go to space, you might as well genuinely go
          to outer space and not hover kind of on the edge of it. Well sit back, and
          relax because we’ll give you a truly out of this world experience!
        </p>
      </div>

      {/* Right Section */}
      <div className="mt-20 lg:mt-0 flex justify-center lg:justify-end w-full">
        <button
          onClick={() => navigate("/destination")}
          className="w-44 h-44 md:w-56 md:h-56 rounded-full bg-white flex items-center justify-center 
                     text-black text-xl uppercase tracking-wider cursor-pointer 
                     transition hover:scale-110 shadow-xl"
        >
          Explore
        </button>
      </div>
    </section>
  );
}
