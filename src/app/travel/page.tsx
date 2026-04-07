 
const HOTELS = [
  {
    name: "The Margi",
    location: "Vouliagmeni",
    url: "https://www.themargi.gr",
    image: "https://images.unsplash.com/photo-1542314831-c6a4d1409e1c?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Four Seasons Astir Palace",
    location: "Athens",
    url: "https://www.fourseasons.com/athens/",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Grand Resort Lagonissi",
    location: "Lagonissi",
    url: "https://www.lagonissiresort.gr",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "The Roc Club",
    location: "Vouliagmeni",
    url: "https://www.therocclub.com",
    image: "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Azur Hotel",
    location: "Vouliagmeni",
    url: "https://www.azurhotel.gr",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Somewhere Boutique Hotel",
    location: "Vouliagmeni",
    url: "https://somewhere-hotels.com/vouliagmeni/",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Divani Escape",
    location: "Vouliagmeni",
    url: "https://divaniescape.com",
    image: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "One&Only Aesthesis",
    location: "Vouliagmeni",
    url: "https://www.oneandonlyresorts.com/aesthesis",
    image: "https://images.unsplash.com/photo-1445991842772-097fea258e7b?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "The Leading Hotels of the World",
    location: "Athens Area",
    url: "https://www.lhw.com/destination/greece/athens",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Travel() {
  return (
    <div className="min-h-screen bg-sand text-med pb-24">
      {/* Hero Banner */}
      <div className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-med/40 mix-blend-overlay z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?q=80&w=2000&auto=format&fit=crop')" }}
        />
        <h1 className="relative z-20 font-cursive text-5xl md:text-7xl text-sand drop-shadow-md text-center px-4">
          Travel & Accommodations
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-16 md:mt-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-lg leading-relaxed text-med/80">
            We are thrilled to welcome you to the beautiful Athenian Riviera. Below is a curated selection of stunning hotels very close to our venues. We recommend booking early as July is peak season in Greece!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {HOTELS.map((hotel, index) => (
            <div key={index} className="flex flex-col bg-white shadow-sm border border-med/5 group hover:shadow-lg transition-all duration-300">
              <div 
                className="w-full h-64 bg-cover bg-center"
                style={{ backgroundImage: `url('${hotel.image}')` }}
              />
              <div className="p-8 flex flex-col flex-1 text-center">
                <h3 className="font-cursive text-3xl text-aegean mb-2">{hotel.name}</h3>
                <p className="text-sm font-medium tracking-widest uppercase text-med/60 mb-8">{hotel.location}</p>
                
                <div className="mt-auto">
                  <a 
                    href={hotel.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center text-sm border border-med py-4 font-semibold tracking-wider uppercase transition-colors hover:bg-med hover:text-sand"
                  >
                    View & Book
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
