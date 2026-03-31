export default function FinalCTA() {
  return (
    <section className="py-32 px-8">
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-primary-container to-primary rounded-xl p-16 text-center text-on-primary-container overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 space-y-8">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter">
            Join the movement for cleaner air.
          </h2>
          <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto opacity-90">
            Download the app today and start contributing to a healthier world, one breath at a time.
          </p>
          
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button className="bg-on-primary-container text-primary-container px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition-transform">
              Get Breathe Now
            </button>
            <button className="bg-transparent border-2 border-on-primary-container text-on-primary-container px-10 py-4 rounded-full font-black text-lg hover:bg-on-primary-container hover:text-primary transition-all">
              View API Docs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}