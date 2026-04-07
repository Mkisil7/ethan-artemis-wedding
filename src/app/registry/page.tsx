// TODO: Replace this Unsplash URL with a path to your own photo in the /public folder.
// Example: const HERO_IMAGE = "/photos/our-future-home.jpg"
const HERO_IMAGE = "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop";

export default function Registry() {
  return (
    <div className="min-h-screen bg-sand text-med pb-24">
      <div className="pt-32 pb-16 text-center px-4">
        <h1 className="font-cursive text-5xl md:text-7xl mb-4 text-aegean">The Registry</h1>
        <p className="text-med/70 font-medium tracking-widest uppercase text-sm">Our Future Together</p>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white p-8 md:p-12 shadow-sm border border-med/5 flex flex-col md:flex-row gap-12 items-center">
          
          {/* Image Side */}
          <div className="w-full md:w-1/2">
            <div 
              className="w-full aspect-[4/5] bg-cover bg-center shadow-inner"
              style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
            />
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
            <h2 className="font-cursive text-4xl mb-4 text-aegean">House Fund</h2>
            
            <p className="text-lg leading-relaxed text-med/80 mb-8 italic">
              &quot;We&apos;ll post our registry here when we&apos;re finished building it. Thank you in advance!&quot;
            </p>

            {/* Structure for GoFundMe Style Fund (Disabled until ready) */}
            <div className="bg-sand-dark p-6 border border-med/10">
              <p className="text-sm font-semibold tracking-wider uppercase mb-3">Contribute to our Home</p>
              
              <div className="w-full bg-sand h-3 rounded-full overflow-hidden mb-4 border border-med/10">
                 {/* Progress bar placeholder - adjust width later */}
                <div className="bg-sky h-full" style={{ width: "0%" }}></div>
              </div>
              
              <div className="flex justify-between text-xs text-med/60 font-medium uppercase tracking-widest mb-8">
                <span>$0 Raised</span>
                <span>Goal: TBD</span>
              </div>
              
              <button 
                disabled
                className="w-full py-4 text-sm font-semibold tracking-widest uppercase transition-colors bg-med/40 text-sand cursor-not-allowed"
              >
                Coming Soon
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
