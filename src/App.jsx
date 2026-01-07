import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import "./index.css";
import Navbar from "./Navbar";
import About from "./About";

// ✅ Add this helper
const getThumbnailPath = (file) =>
  `${import.meta.env.BASE_URL}thumbnails/${file}`;

export default function App() {
  return (
    <Router>
      <div className="bg-branddark text-white min-h-screen font-rubik">
        <Navbar />

        <Routes>
          {/* --- Work Page (Your Main Content) --- */}
          <Route
            path="/"
            element={
              <>
                <IntroText />
                <main className="w-full px-0 pt-0 pb-20">
                  <VideoGrid
                    videos={[
                      {
                        src: "https://www.youtube.com/embed/DiXbJRhean0",
                        title: "AT-AT (Lucasfilm)",
                        thumbnail: getThumbnailPath("AT-AT.png"),
                      },
                      {
                        src: "https://www.youtube.com/embed/yNlSswKTSXI",
                        title: "Bad Kitten Club (Cosmic Debris)",
                        thumbnail: getThumbnailPath("BAD KITTEN.png"),
                      },
                      {
                        src: "https://www.youtube.com/embed/VBBt7UDGQY0",
                        title: "Fantastic Four - Mightys - Season 2 (Marvel)",
                        thumbnail: getThumbnailPath("FF MIGHTYS.png"),
                      },
                      {
                        src: "https://www.youtube.com/embed/0escAMEUJ5I",
                        title: "Darth Vader - Samurai (Lucasfilm)",
                        thumbnail: getThumbnailPath("DARTH SAMURAI.png"),
                      },
                      {
                        src: "https://www.youtube.com/embed/H7UJp-sJC8Y",
                        title: "Buzz Lightyear (Disney/Pixar)",
                        thumbnail: getThumbnailPath("BUZZ LIGHTYEAR.png"),
                      },
                      {
                        src: "https://www.youtube.com/embed/_gkJQd7A2oQ",
                        title: "Edward Kenway (Ubisoft)",
                        thumbnail: getThumbnailPath("EDWARD KENWAY.png"),
                      },
                      {
                        src: "https://www.youtube.com/embed/SkQvXUyHltY",
                        title: "Human Torch (Marvel)",
                        thumbnail: getThumbnailPath("HUMAN TORCH.png"),
                      },
                      {
                        src: "https://www.youtube.com/embed/REh1in188Dg",
                        title: "Emily the Strange (Cosmic Debris)",
                        thumbnail: getThumbnailPath("EMILY STRANGE.png"),
                      },
                      {
                        src: "https://www.youtube.com/embed/O5tNo-Btel4",
                        title: "EMI (Tsuburaya Productions)",
                        thumbnail: getThumbnailPath("KAIJU EMI.png"),
                      },
                      {
                        src: "https://www.youtube.com/embed/5XB9Fc1AH7c",
                        title: "Maserati Alfieri (Maserati)",
                        thumbnail: getThumbnailPath("MASERATI ALFIERI.png"),
                      },
                      {
                        src: "https://www.youtube.com/embed/z36gu46aE0g",
                        title: "The Count (Sesame Street)",
                        thumbnail: getThumbnailPath("THE COUNT.png"),
                      },
                      {
                        src: "https://www.youtube.com/embed/CeRx-Wf0AMo",
                        title: "Ultraman (Tsuburaya Productions)",
                        thumbnail: getThumbnailPath("ULTRAMAN.png"),
                      },
                      {
                        src: "https://www.youtube.com/embed/xAISsdQDE5k",
                        title: "Winter Soldier (Marvel)",
                        thumbnail: getThumbnailPath("WINTER SOLDIER.png"),
                      },
                      {
                        src: "https://www.youtube.com/embed/VSUEDsCkmBA",
                        title: "Kawaii Princess Warriors (Tokidoki)",
                        thumbnail: getThumbnailPath("KAWAII PRINCESS.png"),
                      },
                      {
                        src: "https://www.youtube.com/embed/MLWe2OgtGf4",
                        title: "The P Series (TOBEY)",
                        thumbnail: getThumbnailPath("TOBEY.png"),
                      },
                      {
                        src: "https://www.youtube.com/embed/UFhxAUJnUJ8",
                        title: "Gambit (Marvel)",
                        thumbnail: getThumbnailPath("GAMBIT.png"),
                      },
                      {
                        src: "https://www.youtube.com/embed/6xLust8bNlA",
                        title: "Daredevil (Marvel)",
                        thumbnail: getThumbnailPath("DAREDEVIL.png"),
                      },
                      {
                        src: "https://www.youtube.com/embed/EYjHqqRwLOc",
                        title: "Podracers (Lucasfilm)",
                        thumbnail: getThumbnailPath("PODRACER.png"),
                      },
                      {
                        src: "https://www.youtube.com/embed/9e5JqWNFJoM",
                        title: "Potball (COOLRAIN)",
                        thumbnail: getThumbnailPath("POTBALL.png"),
                      },
                      {
                        src: "https://www.youtube.com/embed/u9WhHFJqg6Y",
                        title: "Stormtrooper Helmets (Lucasfilm)",
                        thumbnail: getThumbnailPath("STORMTROOPER HELMET.png"),
                      },
                      {
                        src: "https://www.youtube.com/embed/lH59K3FeWsQ",
                        title: "Cookie Monster (Sesame Street)",
                        thumbnail: getThumbnailPath("COOKIE.png"),
                      },
                      {
                        src: "https://www.youtube.com/embed/SeIk0LgwZsQ",
                        title: "RUNNING MON (Hands in Factory)",
                        thumbnail: getThumbnailPath("RUNNING MON.png"),
                      },
                      {
                        src: "https://www.youtube.com/embed/e6r0bFvP8wE",
                        title: "How to Read AR Comics (Marvel)",
                        thumbnail: getThumbnailPath("HOW TO AR COMICS.png"),
                      },
                      {
                        src: "https://www.youtube.com/embed/cnMkGWLxnS8",
                        title: "Introduction to the VeVeVerse (VeVe)",
                        thumbnail: getThumbnailPath("VEVEVERSE.png"),
                      },
                    ]}
                  />
                </main>
              </>
            }
          />

          {/* --- About Page --- */}
          <Route path="/about" element={<About />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-branddark text-center text-gray-400 text-sm py-6">
          © Ben Dixon {new Date().getFullYear()}
        </footer>
      </div>
    </Router>
  );
}

/* ✅ Intro text with fade-in (no rise) + scroll fade-out */
/* ✅ Intro text with fade-in (no rise) + scroll fade-out */
function IntroText() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const fadeStart = 1;
      const fadeEnd = 530;

      let newOpacity = 1;
      if (scrollTop > fadeStart) {
        newOpacity = Math.max(
          0,
          1 - (scrollTop - fadeStart) / (fadeEnd - fadeStart)
        );
      }
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 return (
  <section
    className="h-[58vh] sm:h-[65vh] flex items-center justify-center text-center sticky top-0 z-0 bg-branddark"

    style={{ opacity, transition: "opacity 0.2s linear" }}
  >
    <motion.div
      className="px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Wrapper becomes the exact width of the H1 */}
     <div className="inline-block scale-[1.1] sm:scale-[1.15] md:scale-[1.2]">
        <h1 className="font-bold font-rubik leading-none text-6xl sm:text-7xl sm:text-8xl md:text-9xl lg:text-[10rem]">
          BEN DIXON
        </h1>

        {/* CREATIVE stretched to match the exact width */}
        <div className="mt-4 flex w-full justify-between uppercase font-rubik font-light text-xl sm:text-2xl md:text-3xl opacity-80 scale-x-[0.97]">



          {"CREATIVE".split("").map((ch, i) => (
            <span key={i}>{ch}</span>
          ))}
        </div>
      </div>
    </motion.div>
  </section>
);

}


/* ✅ Unified video grid (3 per row, fullscreen playback) */
function VideoGrid({ videos }) {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="-mt-10 sm:mt-0 pt-2 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {videos.map((vid, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-xl hover:scale-[1.02] transition-transform duration-300 shadow-2xl cursor-pointer"
            onClick={() => setActiveVideo(`${vid.src}?autoplay=1`)}
          >
            <div className="relative group">
              <img
                src={vid.thumbnail}
                alt={vid.title}
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-start justify-start">
                <span className="opacity-0 group-hover:opacity-100 text-white text-xs sm:text-sm font-rubik font-light m-3 transition-opacity duration-300">
                  {vid.title}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9998]"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-[90vw] max-w-4xl aspect-video flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full rounded-xl shadow-2xl"
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
