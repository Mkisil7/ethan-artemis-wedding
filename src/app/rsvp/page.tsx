"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function RSVP() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "found" | "not_found" | "success" | "error">("idle");
  const [guestId, setGuestId] = useState<string | null>(null);
  const [isAttending, setIsAttending] = useState<string | null>(null);
  const [dietary, setDietary] = useState("");

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName) return;

    setStatus("loading");
    try {
      // Query guests table exactly matching first and last name (case-insensitive in typical setup)
      const { data, error } = await supabase
        .from("guests")
        .select("*")
        .ilike("first_name", firstName.trim())
        .ilike("last_name", lastName.trim())
        .maybeSingle();

      if (error || !data) {
        setStatus("not_found");
      } else {
        setGuestId(data.id);
        setStatus("found");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const handleSubmitRSVP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestId || !isAttending) return;

    setStatus("loading");
    try {
      const { error } = await supabase
        .from("guests")
        .update({
          is_attending: isAttending === "yes",
          dietary_restrictions: dietary
        })
        .eq("id", guestId);

      if (error) {
        setStatus("error");
      } else {
        setStatus("success");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-sand text-med flex flex-col pt-32 pb-24 items-center">
      <div className="text-center px-4 mb-12">
        <h1 className="font-cursive text-5xl md:text-7xl mb-4 text-aegean">RSVP</h1>
        <p className="text-med/70 font-medium tracking-widest uppercase text-sm">We can&apos;t wait to celebrate with you</p>
      </div>

      <div className="w-full max-w-lg bg-white p-8 md:p-12 shadow-sm border border-med/5">
        
        {status === "idle" || status === "not_found" || status === "error" ? (
          <form onSubmit={handleSearch} className="flex flex-col gap-6">
            <div className="text-center mb-4">
              <p className="text-med/80 leading-relaxed mb-2">Please enter your first and last name to unlock your RSVP.</p>
              {status === "not_found" && (
                <p className="text-red-500 text-sm mt-4 p-4 bg-red-50 border border-red-100">
                  We couldn&apos;t find your name on the guest list. Please try checking your spelling or contact us if there&apos;s an issue!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-sm mt-4 p-4 bg-red-50 border border-red-100">
                  Something went wrong connecting to the registry. Please ensure your database table is set up.
                </p>
              )}
            </div>

            <div className="flex flex-col space-y-1">
              <label htmlFor="firstName" className="text-xs font-semibold tracking-wider uppercase text-med/60">First Name</label>
              <input 
                type="text" 
                id="firstName" 
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)}
                className="border-b border-med/30 bg-transparent py-3 px-2 outline-none focus:border-aegean transition-colors"
                placeholder="Ethan"
                required
              />
            </div>
            
            <div className="flex flex-col space-y-1 mb-4">
              <label htmlFor="lastName" className="text-xs font-semibold tracking-wider uppercase text-med/60">Last Name</label>
              <input 
                type="text" 
                id="lastName" 
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)}
                className="border-b border-med/30 bg-transparent py-3 px-2 outline-none focus:border-aegean transition-colors"
                placeholder="Smith"
                required
              />
            </div>

            <button 
              type="submit" 
              className="mt-4 bg-med text-sand py-4 uppercase tracking-widest font-semibold hover:bg-aegean transition-colors shadow-md"
            >
              Find My Invitation
            </button>
          </form>
        ) : status === "loading" ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="animate-spin w-8 h-8 border-4 border-med border-t-transparent rounded-full mb-4"></div>
            <p className="text-sm font-medium tracking-widest uppercase text-med/60">Processing...</p>
          </div>
        ) : status === "found" ? (
          <form onSubmit={handleSubmitRSVP} className="flex flex-col gap-6 animate-fade-in text-center">
            <p className="font-cursive text-4xl text-aegean mb-1">Hello, {firstName}!</p>
            <p className="text-med/80 mb-6 font-semibold uppercase tracking-widest text-xs border-b border-med/10 pb-6">
              July 3, 2027 &bull; Athens, Greece
            </p>

            <div className="flex flex-col gap-4">
              <label className="flex items-center justify-between p-4 border border-med/20 cursor-pointer hover:bg-sand/30 transition-colors">
                <span className="font-semibold tracking-wider uppercase text-sm">Joyfully Accepts</span>
                <input 
                  type="radio" 
                  name="attending" 
                  value="yes" 
                  className="w-5 h-5 accent-aegean"
                  onChange={(e) => setIsAttending(e.target.value)} 
                />
              </label>
              <label className="flex items-center justify-between p-4 border border-med/20 cursor-pointer hover:bg-sand/30 transition-colors">
                <span className="font-semibold tracking-wider uppercase text-sm">Regretfully Declines</span>
                <input 
                  type="radio" 
                  name="attending" 
                  value="no" 
                  className="w-5 h-5 accent-aegean"
                  onChange={(e) => setIsAttending(e.target.value)} 
                />
              </label>
            </div>

            {isAttending === "yes" && (
              <div className="flex flex-col space-y-2 text-left mt-4 animate-fade-in">
                <label className="text-xs font-semibold tracking-wider uppercase text-med/60">Dietary Restrictions or Notes</label>
                <textarea 
                  value={dietary} 
                  onChange={(e) => setDietary(e.target.value)}
                  className="border border-med/20 bg-transparent p-4 outline-none focus:border-aegean min-h-[100px] text-sm resize-none"
                  placeholder="e.g. Vegetarian, Gluten-free..."
                />
              </div>
            )}

            <button 
              type="submit" 
              disabled={!isAttending}
              className="mt-6 bg-med text-sand py-4 uppercase tracking-widest font-semibold hover:bg-aegean transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit RSVP
            </button>
          </form>
        ) : status === "success" ? (
          <div className="text-center py-8 flex flex-col items-center">
            <div className="w-16 h-16 bg-med text-sand rounded-full flex items-center justify-center mb-6 shadow-lg">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h2 className="font-cursive text-4xl mb-4 text-aegean">Thank You!</h2>
            <p className="text-med/80 leading-relaxed text-lg">
              Your response has been received. 
              {isAttending === "yes" ? " We can't wait to celebrate with you in incredibly beautiful Greece!" : " We will miss you dearly. Thank you for letting us know."}
            </p>
          </div>
        ) : null}

      </div>
    </div>
  );
}
