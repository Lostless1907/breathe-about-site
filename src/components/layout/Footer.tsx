import Link from "next/link";

export default function Footer() {
  const footerSections = [
    {
      title: "Product",
      links: ["Features", "API", "Open Data"],
    },
    {
      title: "Resources",
      links: ["Support", "Contact", "Privacy Policy"],
    },
    {
      title: "Company",
      links: ["Mission", "Team", "Terms"],
    },
  ];

  return (
    <footer className="bg-surface-container-lowest w-full py-20 px-8 border-t border-outline-variant/10">
      <div className="flex flex-col md:flex-row justify-between items-start max-w-7xl mx-auto gap-12">
        <div className="space-y-6">
          <div className="text-xl font-black text-primary-container uppercase tracking-widest">
            Breathe
          </div>
          <p className="text-on-surface-variant max-w-xs text-sm leading-relaxed tracking-wide">
            © {new Date().getFullYear()} Breathe. Atmospheric Depth in Every Breath.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-primary font-bold text-sm">{section.title}</h4>
              <ul className="space-y-2 text-on-surface-variant text-sm">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="hover:text-primary transition-all underline-offset-4 hover:underline">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}