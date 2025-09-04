export default function TestBackground() {
  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center 
                 bg-home-mobile sm:bg-home-tablet lg:bg-home-desktop"
    >
      <div className="text-white text-4xl md:text-6xl font-bold text-center">
        <span className="block sm:hidden">MOBILE</span>
        <span className="hidden sm:block lg:hidden">TABLET</span>
        <span className="hidden lg:block">DESKTOP</span>
      </div>
    </section>
  )
}
