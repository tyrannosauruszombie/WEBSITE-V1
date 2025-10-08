import React, { useState, useEffect } from "react";
import "./index.css";
import Navbar from "./Navbar";

export default function Portfolio() {
  return (
    <div className="bg-branddark text-white min-h-screen font-rubik">
      {/* ✅ Fixed Navbar */}
      <Navbar />

      {/* ✅ Intro text replaces Hero */}
      <IntroText />

      {/* ✅ Unified video grid */}
      <main className="w-full px-0 pt-0 pb-20">
        <VideoGrid
          videos={[
            // --- AR PROMOS ---
            {
              src: "https://www.youtube.com/embed/0escAMEUJ5I",
              title: "Darth Vader - Samurai (Lucasfilm)",
              thumbnail: "./thumbnails/DARTH SAMURAI.png",
            },
            {
              src: "https://www.youtube.com/embed/H7UJp-sJC8Y",
              title: "Buzz Lightyear (Disney/Pixar)",
              thumbnail: "./thumbnails/BUZZ LIGHTYEAR.png",
            },
            {
              src: "https://www.youtube.com/embed/_gkJQd7A2oQ",
              title: "Edward Kenway (Ubisoft)",
              thumbnail: "./thumbnails/EDWARD KENWAY.png",
            },
            {
              src: "https://www.youtube.com/embed/SkQvXUyHltY",
              title: "Human Torch (Marvel)",
              thumbnail: "./thumbnails/HUMAN TORCH.png",
            },
            {
              src: "https://www.youtube.com/embed/REh1in188Dg",
              title: "Emily the Strange (Cosmic Debris)",
              thumbnail: "./thumbnails/EMILY STRANGE.png",
            },
            {
              src: "https://www.youtube.com/embed/O5tNo-Btel4",
              title: "EMI (Tsuburaya Productions)",
              thumbnail: "./thumbnails/KAIJU EMI.png",
            },
            {
              src: "https://www.youtube.com/embed/5XB9Fc1AH7c",
              title: "Maserati Alfieri (Maserati)",
              thumbnail: "./thumbnails/MASERATI ALFIERI.png",
            },
            {
              src: "https://www.youtube.com/embed/z36gu46aE0g",
              title: "The Count (Sesame Street)",
              thumbnail: "./thumbnails/THE COUNT.png",
            },
            {
              src: "https://www.youtube.com/embed/CeRx-Wf0AMo",
              title: "Ultraman (Tsuburaya Productions)",
              thumbnail: "./thumbnails/ULTRAMAN.png",
            },
            {
              src: "https://www.youtube.com/embed/xAISsdQDE5k",
              title: "Winter Soldier (Marvel)",
              thumbnail: "./thumbnails/WINTER SOLDIER.png",
            },
            {
              src: "https://www.youtube.com/embed/VSUEDsCkmBA",
              title: "Kawaii Princess Warriors (Tokidoki)",
              thumbnail: "./thumbnails/KAWAII PRINCESS.png",
            },
            {
              src: "https://www.youtube.com/embed/MLWe2OgtGf4",
              title: "The P Series (TOBEY)",
              thumbnail: "./thumbnails/TOBEY.png",
            },
            {
              src: "https://www.youtube.com/embed/UFhxAUJnUJ8",
              title: "Gambit (Marvel)",
              thumbnail: "./thumbnails/GAMBIT.png",
            },
            {
              src: "https://www.youtube.com/embed/6xLust8bNlA",
              title: "Daredevil (Marvel)",
              thumbnail: "./thumbnails/DAREDEVIL.png",
            },
            {
              src: "https://www.youtube.com/embed/EYjHqqRwLOc",
              title: "Podracers (Lucasfilm)",
              thumbnail: "./thumbnails/PODRACER.png",
            },
            {
              src: "https://www.youtube.com/embed/9e5JqWNFJoM",
              title: "Potball (COOLRAIN)",
              thumbnail: "./thumbnails/POTBALL.png",
            },
            {
              src: "https://www.youtube.com/embed/u9WhHFJqg6Y",
              title: "Stormtrooper Helmets (Lucasfilm)",
              thumbnail: "./thumbnails/STORMTROOPER HELMET.png",
            },
            {
              src: "https://www.youtube.com/embed/lH59K3FeWsQ",
              title: "Cookie Monster (Sesame Street)",
              thumbnail: "./thumbnails/COOKIE.png",
            },
            // --- TUTORIALS MERGED IN ---
            {
              src: "https://www.youtube.com/embed/SeIk0LgwZsQ",
              title: "RUNNING MON (Hands in Factory)",
              thumbnail: "./thumbnails/RUNNING MON.png",
            },
            {
              src: "https://www.youtube.com/embed/e6r0bFvP8wE",
              title: "How to Read AR Comics (Marvel)",
              thumbnail: "./thumbnails/HOW TO AR COMICS.png",
            },
            {
              src: "https://www.youtube.com/embed/cnMkGWLxnS8",
              title: "Introduction to the VeVeVerse (VeVe)",
              thumbnail: "./thumbnails/VEVEVERSE.png",
            },
          ]}
        />
      </main>

      {/* ✅ Simple footer */}
      <footer className="bg-branddark text-center text-gray-400 text-sm py-6">
        © Ben Dixon {new Date().getFullYear()}
      </footer>
    </div>
  );
}

/* ✅ Intro text that fades behind scrolling thumbnails */
function IntroText() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const fadeStart = 1;
      const fadeEnd = 530;
      let newOpacity = 1;
      if (scrollTop > fadeStart) {
        newOpacity = Math.max(0, 1 - (scrollTop - fadeStart) / (fadeEnd - fadeStart));
      }
      setOpacity(newOpacity);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="h-[80vh] flex items-center justify-center text-center sticky top-0 z-0 bg-branddark"
      style={{
        opacity,
        transition: "opacity 0.2s linear",
      }}
    >
      <p className="text-4xl sm:text-5xl md:text-6xl font-bold max-w-5xl mx-auto leading-tight">
        Hi, I’m Ben — a content creator specialising in augmented reality, brand
        storytelling, and creative tutorials. With a background in education, I
        transform complex ideas into visual experiences that are dynamic,
        entertaining, and easy to get.
      </p>
    </section>
  );
}

/* ✅ Unified video grid (3 per row, fullscreen playback) */
function VideoGrid({ videos }) {
  const [activeVideo, setActiveVideo] = useState(null);

  // ✅ Correct base path for GitHub Pages or local dev
  const base = import.meta.env.BASE_URL;

  return (
    <section className="pt-10 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {videos.map((vid, idx) => {
          const thumb = `${base}${vid.thumbnail.replace(/^\.\//, "")}`;
          return (
            <div
              key={idx}
              className="overflow-hidden rounded-xl hover:scale-[1.02] transition-transform duration-300 shadow-2xl cursor-pointer"
              onClick={() => setActiveVideo(`${vid.src}?autoplay=1`)}
            >
              <div className="relative group">
                <img
                  src={thumb}
                  alt={vid.title}
                  className="w-full aspect-square object-cover"
                />
                {/* Dark overlay + title */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-start justify-start">
                  <span className="opacity-0 group-hover:opacity-100 text-white text-xs sm:text-sm font-rubik font-light m-3 transition-opacity duration-300">
                    {vid.title}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {activeVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9998]">
          {/* Close button */}
          <button
            onClick={() => setActiveVideo(null)}
            className="fixed top-14 right-10 text-white text-5xl font-bold bg-black/70 rounded-full w-16 h-16 flex items-center justify-center shadow-2xl border border-white/40 hover:bg-white/20 transition-all duration-300 z-[10000]"
            aria-label="Close video"
          >
            ×
          </button>
          <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
            <iframe
              className="w-full h-full z-[9997] pointer-events-auto"
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
