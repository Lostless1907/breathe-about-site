import Image from "next/image";

export default function DataImpact() {
  const metrics = [
    { label: "Real-time heatmaps", active: true },
    { label: "Historical archives", active: false },
    { label: "Health recommendations", active: false },
  ];

  return (
    <section className="py-32 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-5xl font-bold tracking-tighter mb-8 leading-tight">
            Data that drives change.
          </h2>
          <p className="text-xl text-on-surface-variant leading-relaxed mb-10">
            Our platform visualizes complex atmospheric metrics like PM2.5, NO2, and Ozone through 
            intuitive heatmaps and historical trend analysis. Knowledge is the first step toward collective action.
          </p>
          
          <div className="space-y-6">
            {metrics.map((metric) => (
              <div key={metric.label} className="flex items-center gap-4">
                <div className={`h-1 w-12 ${metric.active ? 'bg-primary' : 'bg-outline-variant'}`} />
                <span className={`font-bold uppercase tracking-widest text-xs ${metric.active ? 'text-primary' : 'text-on-surface-variant'}`}>
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="bg-surface-container-highest rounded-lg p-4 border border-outline-variant/20 shadow-2xl">
            <img 
              className="rounded-lg w-full h-[400px] object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk2WHdswcJSmbAJZQykAJj2siqza2NSxJa8XggBwqZkr0tvcy0cOEQ3DwE3XNFjitpnhc2OE-s4yfvcWq6STR-ESZmVjPCNrQHnVZJanho6PO2dspgPDcqR2p6kGG_4sGPsmLNl-eF7WjGkinlsSctX5Zw0W6NC2pQNyD1Y9HGtmSI0yvCCYXFynIDpNKSZmonTTqSA0zVmx39vpH1-wmTsriRhhHR0at53vPTD0EZv7EteThAR45lEx9O0ejlFUgd3yobxmRGH8o"
              alt="Data visualization patterns"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-on-primary p-6 rounded-lg shadow-xl max-w-[240px]">
              <p className="text-3xl font-black">98.2%</p>
              <p className="text-sm font-bold uppercase tracking-tighter">Sensor Accuracy Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}