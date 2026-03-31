interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureProps) => (
  <article className="p-10 rounded-lg bg-surface-container-highest border border-outline-variant/10 hover:bg-primary-container group transition-all duration-500">
    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-on-primary-container/20 transition-colors">
      <span className="material-symbols-outlined text-primary group-hover:text-on-primary-container text-3xl">
        {icon}
      </span>
    </div>
    <h3 className="text-2xl font-bold mb-4 group-hover:text-on-primary-container transition-colors">
      {title}
    </h3>
    <p className="text-on-surface-variant group-hover:text-on-primary-container/80 transition-colors leading-relaxed">
      {description}
    </p>
  </article>
);

export default function Features() {
  const features = [
    {
      icon: "public",
      title: "Global Coverage",
      description: "Access data from over 4&K every 15 minutes.",
    },
    {
      icon: "location_on",
      title: "Hyper-local Data",
      description: "Breathe uses AI-driven interpolation to provide accurate air quality estimates for your specific street corner.",
    },
    {
      icon: "groups",
      title: "Community Driven",
      description: "Open data for an open world. Contribute your own sensor data or help audit the global network.",
    },
  ];

  return (
    <section id="features" className="py-32 bg-surface px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <h2 className="text-5xl font-bold tracking-tighter text-on-surface">Essential Clarity.</h2>
          <p className="text-on-surface-variant mt-4 text-xl">
            The tools you need to navigate a changing atmosphere.
          </p>
        </header>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}