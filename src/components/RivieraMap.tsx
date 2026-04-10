"use client";

import { useState, useEffect } from "react";
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow, useMapsLibrary } from "@vis.gl/react-google-maps";

interface LocationData {
  id: string;
  name: string;
  searchQuery: string;
  category: "venue" | "hotel";
  url?: string;
}

const PLACES_TO_SEARCH: LocationData[] = [
  // Venues
  { id: "v1", name: "Island Art & Taste", searchQuery: "Island Art & Taste, Varkiza, Greece", category: "venue", url: "https://www.islandartandtaste.gr" },
  { id: "v2", name: "Lake Vouliagmeni", searchQuery: "Lake Vouliagmeni, Greece", category: "venue", url: "https://www.limnivouliagmenis.gr" },
  // Hotels
  { id: "h1", name: "The Margi", searchQuery: "The Margi Hotel, Vouliagmeni, Greece", category: "hotel", url: "https://www.themargi.gr" },
  { id: "h2", name: "Four Seasons Astir Palace", searchQuery: "Four Seasons Astir Palace, Vouliagmeni", category: "hotel", url: "https://www.fourseasons.com/athens/" },
  { id: "h3", name: "Grand Resort Lagonissi", searchQuery: "Grand Resort Lagonissi, Greece", category: "hotel", url: "https://www.lagonissiresort.gr" },
  { id: "h4", name: "The Roc Club", searchQuery: "The Roc Club, Vouliagmeni, Greece", category: "hotel", url: "https://www.therocclub.com" },
  { id: "h5", name: "Azur Hotel", searchQuery: "Azur Hotel, Vouliagmeni, Greece", category: "hotel", url: "https://www.azurhotel.gr" },
  { id: "h6", name: "Somewhere Boutique", searchQuery: "Somewhere Boutique Hotel Vouliagmeni", category: "hotel", url: "https://somewhere-hotels.com/vouliagmeni/" },
  { id: "h7", name: "Divani Escape", searchQuery: "Divani Escape Vouliagmeni", category: "hotel", url: "https://divaniescape.com" },
  { id: "h8", name: "One&Only Aesthesis", searchQuery: "One&Only Aesthesis, Glyfada, Greece", category: "hotel", url: "https://www.oneandonlyresorts.com/aesthesis" }
];

export interface GeocodedLocation extends LocationData {
  position: { lat: number; lng: number };
}

// Inner Component handles Map-specific hooks logically avoiding context limits
function MapInner() {
  const [geocodedLocations, setGeocodedLocations] = useState<GeocodedLocation[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<GeocodedLocation | null>(null);
  const [distances, setDistances] = useState<{ [key: string]: string } | null>(null);

  const placesLib = useMapsLibrary("places");
  const routesLib = useMapsLibrary("routes");

  useEffect(() => {
    if (!placesLib) return;

    const fetchPlaces = async () => {
      // Create an offline dummy div for PlacesService since we just need data, not rendering a physical bounds search 
      const dummyDiv = document.createElement("div");
      const service = new placesLib.PlacesService(dummyDiv);
      const results: GeocodedLocation[] = [];

      // Promise wrapper for the callback-based PlacesService
      const searchPlace = (query: string): Promise<google.maps.places.PlaceResult | null> => {
        return new Promise((resolve) => {
          service.textSearch({ query }, (searchRes, status) => {
            if (status === placesLib.PlacesServiceStatus.OK && searchRes && searchRes[0]) {
              resolve(searchRes[0]);
            } else {
              resolve(null);
            }
          });
        });
      };

      for (const place of PLACES_TO_SEARCH) {
        try {
          const result = await searchPlace(place.searchQuery);
          if (result && result.geometry && result.geometry.location) {
            results.push({
              ...place,
              position: {
                lat: result.geometry.location.lat(),
                lng: result.geometry.location.lng(),
              }
            });
          }
        } catch (error) {
          console.warn(`Failed to search place ${place.searchQuery}`, error);
        }
      }
      setGeocodedLocations(results);
    };

    fetchPlaces();
  }, [placesLib]);

  useEffect(() => {
    if (!routesLib || !selectedLocation || selectedLocation.category === "venue") {
      setTimeout(() => setDistances(null), 0); // safe reset out of sync
      return;
    }

    const fetchDistances = async () => {
      const directionsService = new routesLib.DirectionsService();
      const venues = geocodedLocations.filter(loc => loc.category === "venue");
      
      const newDistances: { [key: string]: string } = {};

      // We explicitly query standard Routes API using DirectionsService to prevent RouteMatrix deprecation warnings.
      await Promise.all(
        venues.map(async (venue) => {
          try {
            const response = await directionsService.route({
              origin: selectedLocation.position,
              destination: venue.position,
              travelMode: google.maps.TravelMode.DRIVING,
            });

            if (response.routes[0] && response.routes[0].legs[0]) {
              const leg = response.routes[0].legs[0];
              newDistances[venue.id] = `${leg.distance?.text} (${leg.duration?.text} drive)`;
            }
          } catch (err) {
            console.error(`Directions failed for ${venue.name}`, err);
          }
        })
      );

      setDistances(newDistances);
    };

    fetchDistances();
  }, [selectedLocation, routesLib, geocodedLocations]);

  return (
    <Map
      defaultCenter={{ lat: 37.808, lng: 23.784 }}
      defaultZoom={12}
      mapId="DEMO_MAP_ID"
      gestureHandling="cooperative"
      disableDefaultUI={false}
      className="w-full h-full"
    >
      {geocodedLocations.map((loc) => (
        <AdvancedMarker 
          key={loc.id} 
          position={loc.position} 
          onClick={() => setSelectedLocation(loc)}
        >
          <Pin 
            background={loc.category === "venue" ? "#c8a57e" : "#5d8aa8"} 
            borderColor={loc.category === "venue" ? "#b5906c" : "#4c738e"}
            glyphColor="#ffffff"
            scale={loc.category === "venue" ? 1.4 : 1.1} // Venues are slightly bigger
          />
        </AdvancedMarker>
      ))}

      {selectedLocation && (
        <InfoWindow
          position={selectedLocation.position}
          onCloseClick={() => setSelectedLocation(null)}
          headerContent={
            <span className="font-semibold tracking-wide uppercase text-[10px] text-med/60">
              {selectedLocation.category === "venue" ? "Wedding Venue" : "Recommended Hotel"}
            </span>
          }
        >
          <div className="bg-white p-2 min-w-[240px]">
            <h3 className="font-cursive text-2xl text-aegean mb-1">{selectedLocation.name}</h3>
            
            {/* Distance Section */}
            {selectedLocation.category === "hotel" && (
              <div className="my-4 pt-4 border-t border-med/5">
                <p className="text-[10px] font-bold tracking-widest uppercase text-med/50 mb-2">Distance to Venues</p>
                {distances ? (
                  <div className="flex flex-col gap-2">
                    {geocodedLocations.filter(loc => loc.category === "venue").map(venue => (
                      <div key={venue.id} className="text-xs flex justify-between gap-4">
                        <span className="text-med/80 font-medium">{venue.name}:</span>
                        <span className="text-aegean font-semibold">{distances[venue.id] || "Loading..."}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-med/50 animate-pulse italic">Calculating route...</p>
                )}
              </div>
            )}

            {selectedLocation.url && (
              <a 
                href={selectedLocation.url} 
                target="_blank" 
                rel="noreferrer"
                className="mt-4 block w-full py-2 bg-sand text-med hover:bg-aegean hover:text-white transition-colors text-center text-[11px] font-semibold tracking-widest uppercase border border-med/10"
              >
                View Details
              </a>
            )}
          </div>
        </InfoWindow>
      )}
    </Map>
  );
}

export default function RivieraMap() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

  if (!apiKey) {
    return (
      <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center bg-sand-dark border border-med/10 shadow-inner">
        <div className="text-center p-8">
          <h3 className="font-cursive text-3xl text-aegean mb-2">Map Offline</h3>
          <p className="text-med/70 font-semibold tracking-wider text-sm uppercase">Waiting for Google Maps API Key</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[500px] md:h-[600px] shadow-sm border border-med/5 relative overflow-hidden">
      <APIProvider apiKey={apiKey}>
        <MapInner />
      </APIProvider>
    </div>
  );
}
