"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const FAQS = [
    {
      question: "When and where is the wedding taking place?",
      answer: "We are tying the knot on the beautiful Athenian Riviera in Vouliagmeni, Greece! The main wedding ceremony and reception will be on Saturday, July 3, 2027, from 6:30 PM until 5:00 AM at Island Art and Taste."
    },
    {
      question: "Is there a welcome event?",
      answer: "Yes! We are hosting a Welcome Event for all guests on Friday, July 2, 2027, starting at 7:00 PM until 1:00 AM at Lake Vouliagmeni. There will be cocktails and light bites to kick off the weekend."
    },
    {
      question: "What is the dress code?",
      answer: "The dress code for the wedding day is Black Tie. We can't wait to see everyone dressed to the nines! For the Welcome Event, elegant resort wear is perfect."
    },
    {
      question: "Do you have any recommendations for where to stay?",
      answer: "We highly recommend staying near Vouliagmeni. Some of our favorites are The Margi, Four Seasons Astir Palace Hotel, Grand Resort Lagonissi, The Roc Club, Azur Hotel, Somewhere Boutique, Divani Escape, and One&Only Aesthesis."
    },
    {
      question: "What should we do while we're in Greece?",
      answer: "There's so much to explore! We recommend taking a dip in the thermal spa at Lake Vouliagmeni, relaxing at Astir Beach (an exclusive club), exploring the Plaka Neighborhood for shopping and food, and of course, visiting The Acropolis in Athens (pro-tip: go early in the morning to beat the heat!)."
    },
    {
      question: "Where are you registered?",
      answer: "Your presence is the greatest gift! However, if you'd like to contribute, we will be launching a House Fund closer to our wedding date. Check back on the Registry page!"
    }
  ];

  return (
    <div className="min-h-screen bg-sand text-med pb-24">
      <div className="pt-32 pb-16 text-center px-4">
        <h1 className="font-cursive text-5xl md:text-7xl mb-4 text-aegean">Guest FAQ</h1>
        <p className="text-med/70 font-medium tracking-widest uppercase text-sm">Everything you need to know</p>
      </div>

      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="bg-white border border-med/10 shadow-sm p-4 md:p-8 flex flex-col gap-4">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className="border-b border-med/10 last:border-0 pb-2"
            >
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full flex justify-between items-center py-4 text-left group"
              >
                <span className="font-semibold tracking-wider text-med/90 uppercase text-sm md:text-base group-hover:text-aegean transition-colors">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-med/50 transition-transform duration-300 ml-4 shrink-0 ${openIndex === idx ? 'rotate-180 text-aegean' : ''}`}
                />
              </button>
              
              <div 
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-med/80 leading-relaxed md:text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
