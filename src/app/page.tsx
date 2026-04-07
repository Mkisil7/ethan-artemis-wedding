import Link from "next/link";
import Countdown from "@/components/Countdown";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* -------------------- Hero Section -------------------- */}
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
        <div className="relative z-10 flex flex-col items-center text-sand text-center px-4 w-full mt-20">
          <h1 className="font-cursive text-7xl md:text-9xl mb-2 drop-shadow-2xl opacity-95">
            Ethan & Artemis
          </h1>
          <p className="text-lg md:text-2xl font-light tracking-[0.25em] mb-4 uppercase drop-shadow-md text-sand/90">
            July 3, 2027 &bull; Vouliagmeni, Greece
          </p>

          <Countdown />

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

      {/* -------------------- Our Story Section -------------------- */}
      <div className="bg-sand text-med py-24 md:py-32 px-4 relative z-20">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <h2 className="font-cursive text-5xl md:text-7xl mb-6 text-aegean">Our Story</h2>
          
          <div className="w-full h-px bg-med/10 mb-12 relative">
            <div className="absolute left-1/2 -top-2 -translate-x-1/2 bg-sand px-4">
              <span className="text-xl font-cursive text-aegean/60">&</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-8 text-lg md:text-xl leading-relaxed font-light text-med/80">
            <p>
              We first met during our sophomore year of high school, where a close friendship quickly blossomed. We spent nearly every weekend together, building a bond that would only grow stronger over time.
            </p>
            <p>
              After graduation, we both headed to college in Florida, where fate brought us back into each other&apos;s lives. What began as friendship soon turned into something more, and we decided to start dating.
            </p>
            <p>
              Since then, our journey has been filled with unforgettable memories. Inseparable and deeply connected, we can&apos;t imagine life any other way. In 2025, Ethan proposed under the pink skies of Mykonos&mdash;an unforgettable moment marking the start of our next chapter.
            </p>
            <p className="font-medium text-med/90 mt-4">
              We are so excited for everything the future holds and are grateful to have you here to celebrate and support our love story.
            </p>
          </div>
          
        </div>
      </div>

    </div>
  );
}
