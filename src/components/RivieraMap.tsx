"use client";

import { useState } from "react";
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from "@vis.gl/react-google-maps";

interface LocationInfo {
  id: string;
  name: string;
  position: { lat: number; lng: number };
  category: "venue" | "hotel";
  url?: string;
  image?: string;
}

const LOCATIONS: LocationInfo[] = [
  // Venues
  { id: "v1", name: "Island Art & Taste (Wedding)", category: "venue", position: { lat: 37.8185, lng: 23.7955 }, url: "https://www.islandartandtaste.gr" },
  { id: "v2", name: "Lake Vouliagmeni (Welcome)", category: "venue", position: { lat: 37.8078, lng: 23.7845 }, url: "https://www.limnivouliagmenis.gr" },
  // Hotels
  { id: "h1", name: "The Margi", category: "hotel", position: { lat: 37.8137, lng: 23.7738 }, url: "https://www.themargi.gr" },
  { id: "h2", name: "Four Seasons Astir Palace", category: "hotel", position: { lat: 37.8016, lng: 23.7719 }, url: "https://www.fourseasons.com/athens/" },
  { id: "h3", name: "Grand Resort Lagonissi", category: "hotel", position: { lat: 37.7779, lng: 23.8890 }, url: "https://www.lagonissiresort.gr" },
  { id: "h4", name: "The Roc Club", category: "hotel", position: { lat: 37.8080, lng: 23.7725 }, url: "https://www.therocclub.com" },
  { id: "h5", name: "Azur Hotel", category: "hotel", position: { lat: 37.8153, lng: 23.7765 }, url: "https://www.azurhotel.gr" },
  { id: "h6", name: "Somewhere Boutique", category: "hotel", position: { lat: 37.8106, lng: 23.7785 }, url: "https://somewhere-hotels.com/vouliagmeni/" },
  { id: "h7", name: "Divani Escape", category: "hotel", position: { lat: 37.8277, lng: 23.7723 }, url: "https://divaniescape.com" },
  { id: "h8", name: "One&Only Aesthesis", category: "hotel", position: { lat: 37.8558, lng: 23.7500 }, url: "https://www.oneandonlyresorts.com/aesthesis" }
];

export default function RivieraMap() {
  const [selectedLocation, setSelectedLocation] = useState<LocationInfo | null>(null);

  // Read key directly in client - this requires NEXT_PUBLIC prefix
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
        <Map
          defaultCenter={{ lat: 37.808, lng: 23.784 }} // Centered on Vouliagmeni
          defaultZoom={13}
          mapId="DEMO_MAP_ID" // Enables AdvancedMarkers while retaining standard Google Maps styling (POIs, restaurants)
          gestureHandling="cooperative" // Prevents map from stealing page scrolls
          disableDefaultUI={false}
          className="w-full h-full"
        >
          {LOCATIONS.map((loc) => (
            <AdvancedMarker 
              key={loc.id} 
              position={loc.position} 
              onClick={() => setSelectedLocation(loc)}
            >
              <Pin 
                background={loc.category === "venue" ? "#c8a57e" : "#5d8aa8"} // Sand for Venue, Aegean for Hotel
                borderColor={loc.category === "venue" ? "#b5906c" : "#4c738e"}
                glyphColor="#ffffff"
                scale={1.2}
              />
            </AdvancedMarker>
          ))}

          {selectedLocation && (
            <InfoWindow
              position={selectedLocation.position}
              onCloseClick={() => setSelectedLocation(null)}
              headerContent={
                <span className="font-semibold tracking-wide uppercase text-xs text-med/60">
                  {selectedLocation.category === "venue" ? "Wedding Venue" : "Recommended Hotel"}
                </span>
              }
            >
              <div className="bg-white p-2 min-w-[200px]">
                <h3 className="font-cursive text-2xl text-aegean mb-3">{selectedLocation.name}</h3>
                {selectedLocation.url && (
                  <a 
                    href={selectedLocation.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-block w-full py-2 bg-sand text-med hover:bg-aegean hover:text-white transition-colors text-center text-xs font-semibold tracking-widest uppercase border border-med/10"
                  >
                    View Details
                  </a>
                )}
              </div>
            </InfoWindow>
          )}
        </Map>
      </APIProvider>
    </div>
  );
}
