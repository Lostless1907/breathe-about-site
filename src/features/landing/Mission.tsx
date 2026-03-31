export default function Mission() {
  return (
    <section id="mission" className="py-32 bg-surface-container-lowest">
      <div className="max-w-4xl mx-auto px-8 text-center space-y-12">
        <span className="text-primary-container tracking-[0.2em] font-bold uppercase text-sm">
          Our Purpose
        </span>
        
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface">
          Why we built Breathe.
        </h2>
        
        <div className="space-y-8 text-xl md:text-2xl text-on-surface-variant font-light leading-relaxed">
          <p>
            Air pollution is the <span className="text-primary font-medium">invisible crisis</span> of our generation. 
            While we track our steps, our sleep, and our heart rates, we often remain blind 
            to the very substance that sustains us.
          </p>
          <p>
            We built Breathe to bring the invisible into focus. By democratizing air quality data 
            through open-source technology, we empower communities to advocate for cleaner 
            environments and make informed decisions about their health.
          </p>
        </div>
      </div>
    </section>
  );
}
