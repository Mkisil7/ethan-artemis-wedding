// TODO: Replace these Unsplash URLs with your own photo paths once you add them to the /public folder.
// Example: image: "/photos/acropolis.jpg"
const THINGS_TO_DO = [
  {
    category: "Near Vouliagmeni",
    items: [
      {
        name: "Lake Vouliagmeni",
        description: "A breathtaking natural thermal spa with brackish water. Perfect for a relaxing morning swim to shake off jet lag.",
        image: "https://images.unsplash.com/photo-1533668822002-9cedfbf5e7af?q=80&w=800&auto=format&fit=crop"
      },
      {
        name: "Astir Beach",
        description: "The most exclusive beach club on the Athenian Riviera. Golden sands and crystal clear waters offering incredible service.",
        image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?q=80&w=800&auto=format&fit=crop"
      }
    ]
  },
  {
    category: "In Athens",
    items: [
      {
        name: "The Acropolis & Parthenon",
        description: "No trip to Athens is complete without visiting this ancient marvel. We highly recommend booking a ticket early in the morning to beat the heat!",
        image: "https://images.unsplash.com/photo-1555993539-1732bb4db06b?q=80&w=800&auto=format&fit=crop"
      },
      {
        name: "Plaka Neighborhood",
        description: "Wander through the 'Neighborhood of the Gods'. Great for buying souvenirs, sitting for a coffee, and discovering traditional tavernas.",
        image: "https://images.unsplash.com/photo-1597810743069-b5fe2ebfbf09?q=80&w=800&auto=format&fit=crop"
      }
    ]
  }
];

export default function ThingsToDo() {
  return (
    <div className="min-h-screen bg-sand text-med pb-24">
      {/* Hero Banner */}
      <div className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-med/40 mix-blend-overlay z-10" />
        {/* TODO: Add your custom hero header image path here too */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503152394-c571994fd383?q=80&w=2000&auto=format&fit=crop')" }}
        />
        <h1 className="relative z-20 font-cursive text-5xl md:text-7xl text-sand drop-shadow-md text-center px-4">
          Things To Do
        </h1>
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-16 md:mt-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-lg leading-relaxed text-med/80">
            Whether you want to relax by the sea, dive into ancient history, or explore the local culinary scene, there is so much to love about Greece. Here are a few of our favorites!
          </p>
        </div>

        <div className="space-y-20">
          {THINGS_TO_DO.map((section, idx) => (
            <div key={idx}>
              <h2 className="font-cursive text-4xl text-aegean border-b border-med/10 pb-4 mb-10 text-center md:text-left">
                {section.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {section.items.map((item, i) => (
                  <div key={i} className="group">
                    <div className="overflow-hidden mb-6 shadow-sm">
                      <div 
                        className="w-full h-72 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url('${item.image}')` }}
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{item.name}</h3>
                    <p className="text-med/80 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
