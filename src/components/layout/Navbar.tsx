import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { name: "Mission", href: "#mission" },
    { name: "Features", href: "#features" },
    { name: "Team", href: "#team" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-xl border-b border-outline-variant/10">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-primary">
          Breathe
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 font-medium tracking-tight">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-primary/60 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-semibold hover:scale-95 duration-200 transition-transform">
            App Dashboard
          </button>
        </div>
      </div>
    </nav>
  );
}