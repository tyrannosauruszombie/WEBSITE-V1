import React, { useState } from "react";
import "./index.css";

export default function Portfolio() {
  return (
    <div className="bg-black text-white min-h-screen font-raleway">
      <Hero />

      <main className="max-w-6xl mx-auto px-4 pt-0 pb-20 space-y-12">
        <Section
          title="AR PROMOS"
          description="Bringing VeVe’s incredible digital collectibles to life in augmented reality has been a truly unique adventure! Check out my promos for Marvel, Lucasfilm, Sesame Street and more!"
          videos={[
            {
              src: "https://www.youtube.com/embed/VSUEDsCkmBA",
              title: "Kawaii Princess Warriors (Tokidoki)",
              thumbnail: "/thumbnails/KAWAII PRINCESS.png",
            },
            {
              src: "https://www.youtube.com/embed/MLWe2OgtGf4",
              title: "The P Series (TOBEY)",
              thumbnail: "/thumbnails/TOBEY.png",
            },
            {
              src: "https://www.youtube.com/embed/UFhxAUJnUJ8",
              title: "Gambit (Marvel)",
              thumbnail: "/thumbnails/GAMBIT.png",
            },
            {
              src: "https://www.youtube.com/embed/6xLust8bNlA",
              title: "Daredevil (Marvel)",
              thumbnail: "/thumbnails/DAREDEVIL.png",
            },
            {
              src: "https://www.youtube.com/embed/EYjHqqRwLOc",
              title: "Podracers (Lucasfilm)",
              thumbnail: "/thumbnails/PODRACER.png",
            },
            {
              src: "https://www.youtube.com/embed/9e5JqWNFJoM",
              title: "Potball (COOLRAIN)",
              thumbnail: "/thumbnails/POTBALL.png",
            },
            {
              src: "https://www.youtube.com/embed/u9WhHFJqg6Y",
              title: "Stormtrooper Helmets (Lucasfilm)",
              thumbnail: "/thumbnails/STORMTROOPER HELMET.png",
            },
            {
              src: "https://www.youtube.com/embed/lH59K3FeWsQ",
              title: "Cookie Monster (Sesame Street)",
              thumbnail: "/thumbnails/COOKIE.png",
            },
            {
              src: "https://www.youtube.com/embed/pk3LVd6WFi0",
              title: "Kingpin (Marvel)",
              thumbnail: "/thumbnails/KINGPIN.png",
            },
          ]}
        />

        <Section
          title="Tutorials"
          description="Leaning on my background in teaching, I’ve created simple walkthroughs for VeVe's augmented reality features and a suite of tutorials for the VeVeVerse - VeVe’s collectors metaverse!."
          videos={[
            {
              src: "https://www.youtube.com/embed/SeIk0LgwZsQ",
              title: "RUNNING MON (Hands in Factory)",
              thumbnail: "/thumbnails/RUNNING MON.png",
            },
            {
              src: "https://www.youtube.com/embed/e6r0bFvP8wE",
              title: "How to Read AR Comics (Marvel)",
              thumbnail: "/thumbnails/HOW TO AR COMICS.png",
            },
            {
              src: "https://www.youtube.com/embed/cnMkGWLxnS8",
              title: "Introduction to the VeVeVerse (VeVe)",
              thumbnail: "/thumbnails/VEVEVERSE.png",
            },
          ]}
        />

        <Section
          title="Shorts & Skits"
          description="AR, animation, comedy — and a bunch of effects — all mashed into skits, spoofs, and weird little videos featuring… me! Packed with energy, built on story."
          videos={[
            {
              src: "https://www.youtube.com/embed/Lm3LMbLB-mg",
              title: "Sam Wilson AR skit",
              thumbnail: "/thumbnails/SAM WILSON.png",
            },
            {
              src: "https://www.youtube.com/embed/WuXzKxKHoJE",
              title: "Aliens Vs Avengers AR promo",
              thumbnail: "/thumbnails/ALIENS VS AVENGERS.png",
            },
            {
              src: "https://www.youtube.com/embed/4RXkBeTRsL4",
              title: "VeVe News",
              thumbnail: "/thumbnails/VEVE NEWS.png",
            },
            {
              src: "https://www.youtube.com/embed/ZbD8mL2XaPs",
              title: "Comedy animation",
              thumbnail: "/thumbnails/WAYNE.png",
            },
            {
              src: "https://www.youtube.com/embed/SXGcb3uR1TI",
              title: "Grogu AR skit",
              thumbnail: "/thumbnails/GROGU SKIT.png",
            },
            {
              src: "https://www.youtube.com/embed/bEx2qNuWh28",
              title: "Absolute Batman #1 skit",
              thumbnail: "/thumbnails/ABSOLUTE BATMAN.png",
            },
          ]}
        />
      </main>

      <footer className="bg-black py-10 text-center text-gray-300">
        <h3 className="font-staatliches text-6xl mb-4 text-white">CONTACT</h3>
        <div className="space-y-3">
          <p className="font-special text-lg">ben.dixon.3000@gmail.com</p>
          <p className="font-special text-lg">07739843516</p>
          <p className="font-special text-lg">London</p>
        </div>
      </footer>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="relative z-0">
        <img
          src="/trex-hero.png"
          alt="Hero Background"
          className="w-full object-top object-contain sm:object-cover"
        />
        {/* Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-b from-transparent to-black z-10 pointer-events-none" />
      </div>

      {/* Text Content */}
      <div className="absolute top-10 sm:top-24 left-4 sm:left-20 z-20 max-w-5xl px-4 group text-left">
        <div className="relative">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-staatliches text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.4)] text-left">
            BEN DIXON
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-lacquer text-white mt-0 drop-shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-transform duration-300 group-hover:scale-105">
            CREATIVE CONTENT
          </h2>

          {/* Floating Description */}
         <div className="absolute top-full left-0 mt-4 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-xl shadow-xl font-special opacity-0 transition-opacity duration-300 hidden lg:block group-hover:opacity-100 max-w-md">
  Ben Dixon is a London-based content creator with a background in
  education. He specialises in AR content and dynamic short-form
  storytelling.
</div>

        </div>
      </div>
    </section>
  );
}

function Section({ title, videos, description }) {
  const [activeVideo, setActiveVideo] = useState(null);
  const sectionId = title.toLowerCase().split(" ")[0];
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id={sectionId} className="px-4 pt-10">
      <div
        className="mb-10 md:flex md:items-start md:gap-6 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-staatliches text-white whitespace-nowrap md:-ml-0 transition-transform duration-300 group-hover:scale-105 glitch">
          {title}
        </h2>

        {/* Only show description on desktop */}
        {description && (
  <div className="hidden lg:block flex-1 max-w-5xl relative">
    <div className="absolute top-0 left-0 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-xl shadow-xl w-fit text-sm font-special transition-opacity duration-500 opacity-0 group-hover:opacity-100">
      {description}
    </div>
  </div>
)}

      </div>

      <div className="columns-1 sm:columns-2 md:columns-3 gap-6 [column-fill:_balance]">
        <div className="gap-6 space-y-6">
          {videos.map((vid, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-xl hover:scale-[1.02] transition-transform duration-300 shadow-2xl cursor-pointer break-inside-avoid"
              onClick={() => setActiveVideo(`${vid.src}?autoplay=1`)}
            >
             <div className="relative group">
  <img
    src={vid.thumbnail}
    alt={vid.title}
    className="w-full aspect-square object-cover"
  />

  {/* Hover caption for desktop only */}
{/* Hover caption for desktop only */}
<div className="absolute inset-0 hidden lg:flex items-center justify-center group-hover:opacity-100 opacity-0 transition-opacity duration-300 pointer-events-none">
  <div className="bg-black bg-opacity-60 text-white text-center font-special text-sm px-2 py-1 rounded-lg max-w-[90%] whitespace-nowrap overflow-hidden text-ellipsis">
    {vid.title}
  </div>
</div>
</div>
            </div>
          ))}
        </div>
      </div>

      {activeVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setActiveVideo(null)}
        >
          <div className="w-full max-w-4xl aspect-video">
            <iframe
              className="w-full h-full"
              src={activeVideo}
              title="Expanded Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
