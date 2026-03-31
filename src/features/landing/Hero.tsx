export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-surface">
      {/* Background Aesthetic Blur */}
      <div className="absolute top-0 right-0 w-2/3 h-full opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-l from-primary/30 to-transparent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-8 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-block px-4 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/20 text-primary-container text-xs font-bold tracking-widest uppercase">
            Introducing Breathe 1.0
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] text-on-surface">
            Every Breath <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">Matters.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-xl leading-relaxed">
            Real-time air quality data for a healthier world. Open source. Essential. 
            Discover the atmosphere around you with hyper-local precision.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold text-lg hover:brightness-110 transition-all active:scale-95">
              Explore the App
            </button>
            <button className="border border-outline-variant/30 text-on-surface px-8 py-4 rounded-full font-bold text-lg hover:bg-surface-container-high transition-all active:scale-95">
              Our Mission
            </button>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="rounded-xl overflow-hidden shadow-2xl shadow-primary/10 border border-outline-variant/10">
            <img 
              className="w-full h-[600px] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" 
              src="/images/Screenshot_2026-04-01_00-01-46.png"
              alt="Atmospheric mountain view"
            />
          </div>
        </div>
      </div>
    </header>
  );
}