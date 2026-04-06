import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] overflow-hidden">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-med/30 mix-blend-overlay z-10" />
        
        {/* Placeholder background image until video is provided */}
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498623116890-37e912163d5d?q=80&w=2000&auto=format&fit=crop')" }}
        />

        {/* TODO: Add real wave video here in public folder and uncomment */}
        {/* <video autoPlay loop muted playsInline className="w-full h-full object-cover filter brightness-[0.8] absolute inset-0">
          <source src="/waves.mp4" type="video/mp4" />
        </video> */}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-sand text-center px-4 w-full">
        <h1 className="font-cursive text-7xl md:text-9xl mb-2 drop-shadow-2xl opacity-95">
          Ethan & Artemis
        </h1>
        <p className="text-xl md:text-2xl font-light tracking-[0.25em] mb-12 uppercase drop-shadow-md text-sand/90">
          July 3, 2027 &bull; Vouliagmeni, Greece
        </p>

        {/* Quick Links */}
        <div className="flex flex-col sm:flex-row gap-6 mt-8 w-full max-w-lg mx-auto">
          <Link 
            href="/rsvp" 
            className="flex-1 bg-sand text-med py-4 px-8 text-center uppercase tracking-widest font-semibold transition-all duration-300 shadow-xl hover:bg-white hover:scale-105"
          >
            RSVP
          </Link>
          <Link 
            href="/schedule" 
            className="flex-1 border border-sand/50 hover:bg-sand/20 hover:border-sand text-sand py-4 px-8 text-center uppercase tracking-widest font-medium transition-all duration-300 backdrop-blur-sm"
          >
            Events
          </Link>
        </div>
      </div>
    </div>
  );
}
