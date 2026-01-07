import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import "./index.css";
import Navbar from "./Navbar";
import About from "./About";

// ✅ Thumbnail helper (public/thumbnails/*)
const getThumbnailPath = (file) =>
  `${import.meta.env.BASE_URL}thumbnails/${file}`;

// ✅ Convert any YouTube URL (youtu.be / watch / shorts) into an embeddable URL
const toYouTubeEmbedUrl = (url) => {
  if (!url) return null;

  // Already an embed link
  if (url.includes("youtube.com/embed/")) return url;

  try {
    const u = new URL(url);

    // youtu.be/VIDEO_ID
    if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.replace("/", "");
      return `https://www.youtube.com/embed/${id}`;
    }

    // youtube.com/watch?v=VIDEO_ID
    if (u.pathname === "/watch") {
      const id = u.searchParams.get("v");
      if (id) return `https://www.youtube.com/embed/${id}`;
    }

    // youtube.com/shorts/VIDEO_ID
    if (u.pathname.startsWith("/shorts/")) {
      const id = u.pathname.split("/shorts/")[1].split("/")[0];
      return `https://www.youtube.com/embed/${id}`;
    }
  } catch (e) {
    // ignore and fall back
  }

  return url;
};

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
                      // --- New thumbnails ---
                      {
                        src: "https://youtu.be/XNyzzivphA0?si=VkcTfFepL48gyq7U",
                        title: "Avatar – Jake Sully (20th Century Studios)",
                        thumbnail: getThumbnailPath("AVATAR JAKE.png"),
                      },
                      {
                        src: "https://youtu.be/9ZeA7w5UeEw?si=l6R4iz8qBFG7E4br",
                        title: "Coca-Cola Neon Signs (Coca-Cola)",
                        thumbnail: getThumbnailPath("COCA COLA NEON.png"),
                      },
                      {
                        src: "https://youtu.be/xHwW5erIGc0?si=wgpwiQQOSeQr7kbE",
                        title: "TMNT Michelangelo (Paramount)",
                        thumbnail: getThumbnailPath("MICHELANGELO.png"),
                      },
                      {
                        src: "https://youtu.be/Vy82H3ZZ--w?si=Qj3av0PGxDxNJbc_",
                        title: "Death Troopers (Lucasfilm)",
                        thumbnail: getThumbnailPath("DEATH TROOPER.png"),
                      },
                      
                        {
                        src: "https://www.youtube.com/embed/SkQvXUyHltY",
                        title: "Human Torch (Marvel)",
                        thumbnail: getThumbnailPath("HUMAN TORCH.png"),
                      },
                      
                      {
                        src: "https://youtu.be/AP2hpEiVMeA?si=5Dh7px4c3JarhKHq",
                        title: "Tiger (Ducobi)",
                        thumbnail: getThumbnailPath("DUCOBI.png"),
                      },
                      {
                        src: "https://youtube.com/shorts/PtZG4vxK3w8?si=xl7NOWIMX15jNtRh",
                        title: "Nozzle Eye (Nick Walker)",
                        thumbnail: getThumbnailPath("NOZZLE EYE.png"),
                      },
                      {
                        src: "https://youtube.com/shorts/CKsqxxbc8Z4?si=9CHaF4SkzzVMeaaH",
                        title: "NOUNish Friends S2 (Bigshot Toyworks)",
                        thumbnail: getThumbnailPath("NOUNS S2.png"),
                      },
                      {
                        src: null,
                        title: "TMNT Leonardo (Paramount)",
                        thumbnail: getThumbnailPath("LEONARDO.png"),
                      },
                      {
                        src: "https://youtube.com/shorts/CqVbc3M2HCY?si=8eH4LryET-f4ocwX",
                        title: "Reverspective S3 (Patrick Hughes)",
                        thumbnail: getThumbnailPath("REVERSPECTIVE S3.png"),
                      },
                      {
                        src: "https://www.youtube.com/watch?v=YGncfA-rTwE",
                        title: "Spider-Man 2099 S2 (Marvel)",
                        thumbnail: getThumbnailPath("SPIDERMAN 2099 S2.png"),
                      },
                      {
                        src: "https://www.youtube.com/watch?v=AhjKfwsKTSA",
                        title: "Bone Appetite (Matt Gondek)",
                        thumbnail: getThumbnailPath("BONE APPETITE.png"),
                      },
                      {
                        src: "https://youtu.be/uemb8T98388?si=j9cdqY8Fd_vOOrLV",
                        title: "Kaiju Monsters (Tsuburaya Productions)",
                        thumbnail: getThumbnailPath("KAIJU MONSTERS.png"),
                      },

                      // --- Existing thumbnails ---
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
                        title: "Fantastic Four S2 - Marvel Mightys (Marvel)",
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
        <div className="inline-block scale-[1.1] sm:scale-[1.15] md:scale-[1.2]">
          <h1 className="font-bold font-rubik leading-none text-6xl sm:text-8xl md:text-9xl lg:text-[10rem]">
            BEN DIXON
          </h1>

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
            className={`overflow-hidden rounded-xl transition-transform duration-300 shadow-2xl ${
              vid.src ? "cursor-pointer hover:scale-[1.02]" : "cursor-default"
            }`}
            onClick={() => {
              const embed = toYouTubeEmbedUrl(vid.src);
              if (embed) setActiveVideo(`${embed}?autoplay=1`);
            }}
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

              {!vid.src && (
                <span className="absolute bottom-3 right-3 text-xs bg-black/70 px-2 py-1 rounded">
                  Coming soon
                </span>
              )}
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
            />
          </div>
        </div>
      )}
    </section>
  );
}
