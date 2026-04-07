"use client";

import { useEffect, useState } from "react";

const WEDDING_DATE = new Date("2027-07-03T18:30:00+03:00").getTime(); // July 3, 2027 6:30 PM EEST

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Initial evaluation to avoid 1-second delay
    const calculateTime = () => {
      const now = new Date().getTime();
      const distance = WEDDING_DATE - now;

      if (distance < 0) return false;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
      return true;
    };
    
    calculateTime();
    setTimeout(() => setMounted(true), 0);
    
    const interval = setInterval(() => {
      if (!calculateTime()) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return <div className="h-[120px] md:h-[136px]"></div>; // Skeleton to avoid layout jump

  return (
    <div className="flex gap-4 md:gap-10 justify-center text-center mt-12 mb-6 p-6 backdrop-blur-md bg-med/10 shadow-2xl border border-sand/10">
      <div className="flex flex-col items-center">
        <span className="text-3xl sm:text-4xl md:text-6xl font-cursive drop-shadow-xl">{timeLeft.days}</span>
        <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-semibold text-sand/90 mt-3 drop-shadow-sm">Days</span>
      </div>
      <span className="text-2xl sm:text-3xl md:text-5xl text-sand/50 font-light drop-shadow-sm mt-1">:</span>
      
      <div className="flex flex-col items-center">
        <span className="text-3xl sm:text-4xl md:text-6xl font-cursive drop-shadow-xl">{timeLeft.hours.toString().padStart(2, '0')}</span>
        <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-semibold text-sand/90 mt-3 drop-shadow-sm">Hours</span>
      </div>
      <span className="text-2xl sm:text-3xl md:text-5xl text-sand/50 font-light drop-shadow-sm mt-1">:</span>
      
      <div className="flex flex-col items-center">
        <span className="text-3xl sm:text-4xl md:text-6xl font-cursive drop-shadow-xl">{timeLeft.minutes.toString().padStart(2, '0')}</span>
        <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-semibold text-sand/90 mt-3 drop-shadow-sm">Mins</span>
      </div>
      <span className="text-2xl sm:text-3xl md:text-5xl text-sand/50 font-light drop-shadow-sm mt-1">:</span>
      
      <div className="flex flex-col items-center w-[50px] sm:w-[60px] md:w-[80px]"> 
        {/* Fixed width to prevent jumping as numbers change size */}
        <span className="text-3xl sm:text-4xl md:text-6xl font-cursive drop-shadow-xl">{timeLeft.seconds.toString().padStart(2, '0')}</span>
        <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-semibold text-sand/90 mt-3 drop-shadow-sm">Secs</span>
      </div>
    </div>
  );
}
