export default function Team() {
  const members = [
    {
      name: "Siddharth Sharma",
      role: "Software and App Dev",
      link: "https://sidharthify.me/",
      img: "/images/Screenshot_2026-03-31_23-28-36.png",
    },
    {
      name: "Aaditya Gupta",
      role: "Hardware Engineer",
      link: "https://flashwreck.tech/",
      img: "/images/Screenshot_2026-04-01_00-01-19.png",
    },
    {
      name: "Veer Pratap Singh",
      role: "ML Scientist and Web Dev",
      link: "https://github.com/Lostless1907",
      img: "public/images/Screenshot_2026-02-09_15-15-10.png",
    },
    {
      name: "Altair Sheikh",
      role: "Community ",
      link: "https://www.linkedin.com/in/altairirfan/",
      img: ""
    },
  ];

  return (
    <section id="team" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-8 text-center space-y-16">
        <header className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-bold tracking-tighter mb-6">
            Built by the global community.
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Breathe is an open-source initiative supported by developers, scientists, 
            and environmental advocates from around the world.
          </p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {members.map((member) => (
            <article key={member.name} className="space-y-4 group">
              <div className="w-24 h-24 rounded-full bg-surface-container-high mx-auto overflow-hidden ring-2 ring-transparent group-hover:ring-primary transition-all duration-300">
                <img 
                  src={member.img} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                />
              </div>
              <p className="font-bold">{member.name}</p>
              <p className="text-xs uppercase tracking-widest text-primary-container">
                {member.role}
              </p>
            </article>
          ))}
        </div>

        <div className="pt-10">
          <button className="px-8 py-4 bg-surface-container-high border border-outline-variant/30 rounded-full font-bold hover:bg-surface-variant transition-colors flex items-center gap-3 mx-auto group active:scale-95">
            <span className="material-symbols-outlined text-primary">code</span>
            Contribute on GitHub
          </button>
        </div>
      </div>
    </section>
  );
}