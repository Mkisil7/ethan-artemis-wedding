import Link from "next/link";

export default function Schedule() {
  return (
    <div className="min-h-screen bg-sand text-med pb-24">
      {/* Hero Banner */}
      <div className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-med/40 mix-blend-overlay z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1510414842592-a61a04423fea?q=80&w=2000&auto=format&fit=crop')" }}
        />
        <h1 className="relative z-20 font-cursive text-5xl md:text-7xl text-sand drop-shadow-md">
          The Schedule
        </h1>
      </div>

      {/* Events Container */}
      <div className="max-w-4xl mx-auto px-6 mt-16 md:mt-24 space-y-24">
        
        {/* Welcome Event */}
        <div className="flex flex-col md:flex-row gap-8 items-center bg-white p-8 md:p-12 shadow-sm border border-med/5">
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-cursive text-4xl mb-2 text-aegean">Welcome Event</h2>
            <p className="font-medium tracking-widest uppercase text-sm mb-4 text-med/60">Cocktails & Light Bites</p>
            <div className="space-y-2 text-med/80 mb-8">
              <p>Friday, July 2, 2027 &bull; 7:00 PM</p>
              <p>to Saturday, July 3, 2027 &bull; 1:00 AM</p>
              <p className="font-semibold text-med mt-3">Lake Vouliagmeni</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="https://maps.google.com/?q=Lake+Vouliagmeni+Greece" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm border border-med py-3 px-8 hover:bg-med hover:text-sand transition-colors font-medium tracking-wider uppercase inline-block"
              >
                View Map
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 min-h-[300px] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533668822002-9cedfbf5e7af?q=80&w=1000&auto=format&fit=crop')" }} />
        </div>

        {/* The Wedding */}
        <div className="flex flex-col md:flex-row-reverse gap-8 items-center bg-white p-8 md:p-12 shadow-sm border border-med/5">
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-cursive text-4xl mb-2 text-aegean">The Wedding</h2>
            <p className="font-medium tracking-widest uppercase text-sm mb-4 text-med/60">Black Tie Attire</p>
            <div className="space-y-2 text-med/80 mb-8">
              <p>Saturday, July 3, 2027 &bull; 6:30 PM</p>
              <p>to Sunday, July 4, 2027 &bull; 5:00 AM</p>
              <p className="font-semibold text-med mt-3">Island Art and Taste</p>
              <p className="text-sm">Vouliagmeni, Greece</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="https://maps.google.com/?q=Island+Art+and+Taste+Vouliagmeni+Greece" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm border border-med py-3 px-8 hover:bg-med hover:text-sand transition-colors font-medium tracking-wider uppercase inline-block text-center"
              >
                View Map
              </a>
              <Link 
                href="/rsvp" 
                className="text-sm bg-med text-sand py-3 px-8 hover:bg-aegean transition-colors font-medium tracking-wider uppercase inline-block text-center shadow-md"
              >
                RSVP Now
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 min-h-[300px] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1000&auto=format&fit=crop')" }} />
        </div>

      </div>
    </div>
  );
}
