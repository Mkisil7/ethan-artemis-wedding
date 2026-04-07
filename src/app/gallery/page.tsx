 
// TODO: Replace these Unsplash URLs with your own photo paths once you add them to the /public folder.
// Example: "/photos/couple-1.jpg"
const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517465355745-667cb561be9d?q=80&w=800&auto=format&fit=crop",
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-sand text-med pb-24">
      <div className="pt-32 pb-16 text-center px-4">
        <h1 className="font-cursive text-5xl md:text-7xl mb-4 text-aegean">Our Gallery</h1>
        <p className="text-med/70 font-medium tracking-widest uppercase text-sm">Moments we cherish</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {GALLERY_IMAGES.map((src, index) => (
            <div key={index} className="break-inside-avoid shadow-sm hover:shadow-md transition-shadow relative group">
              {/* Using a standard img tag here because these are external URLs of unknown dimension. 
                  When you use local paths like "/my-photo.jpg", you can leave it exactly like this. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={src} 
                alt={`Ethan and Artemis ${index + 1}`} 
                className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
