import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import "./index.css";
import Navbar from "./Navbar";
import About from "./About";
import Services from "./Services";

// Thumbnail helper
const getThumbnailPath = (file) =>
  `${import.meta.env.BASE_URL}thumbnails/${file}`;

// Convert YouTube URLs into embeddable URLs
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
    // Ignore and fall back
  }

  return url;
};

export default function App() {
  return (
    <Router>
      <div className="bg-branddark text-white min-h-screen font-rubik">
        <Navbar />

        <Routes>
          {/* --- Work Page --- */}
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
                        src: "https://www.youtube.com/shorts/yQen0g3Th7c",
                        title:
                          "Sung Jin-woo (Solo Leveling Animation Partners)",
                        thumbnail: getThumbnailPath("SUNG JINWOO.png"),
                      },

                      {
                        src: "https://www.youtube.com/shorts/fqEf9u4GqBs",
                        title: "Mickey Mouse and Friends (Disney)",
                        thumbnail: getThumbnailPath("MICKEY.png"),
                      },

                      {
                        src: "https://www.youtube.com/shorts/7u1w2hNAxS0",
                        title: "Yoda (Lucasfilm)",
                        thumbnail: getThumbnailPath("YODA.png"),
                      },

                      {
                        src: "https://www.youtube.com/shorts/AOvovWvBK98",
                        title: "Sushi Cars (Tokidoki)",
                        thumbnail: getThumbnailPath("SUSHI CARS.png"),
                      },

                      {
                        src: "https://www.youtube.com/shorts/0f7Mzbk4xEA",
                        title: "Aang (Paramount)",
                        thumbnail: getThumbnailPath("AANG.png"),
                      },

                      {
                        src: "https://www.youtube.com/watch?v=saoC2gPbAu8",
                        title: "Predator (20th Century Studios)",
                        thumbnail: getThumbnailPath("PREDATOR.png"),
                      },

                      {
                        src: "https://www.youtube.com/watch?v=9ZeA7w5UeEw",
                        title: "Coca-Cola Neon Signs (Coca-Cola)",
                        thumbnail: getThumbnailPath("COCA COLA NEON.png"),
                      },

                      {
                        src: "https://www.youtube.com/shorts/RUUrrFMzSr4",
                        title: "Emma Frost (Marvel)",
                        thumbnail: getThumbnailPath("EMMA FROST.png"),
                      },

                      {
                        src: "https://www.youtube.com/shorts/CMiggvoF_to",
                        title: "Schoony Interview (Schoony Art Studios)",
                        thumbnail: getThumbnailPath("SCHOONY.png"),
                      },

                      {
                        src: "https://www.youtube.com/watch?v=pdnoHieezgQ",
                        title: "Boba Fett (Lucasfilm)",
                        thumbnail: getThumbnailPath("BOBA FETT.png"),
                      },

                    

                      {
                        src: "https://www.youtube.com/shorts/BKkTcgF-UOE",
                        title: "Spider-Man Villains (Marvel)",
                        thumbnail: getThumbnailPath("SM VILLAINS.png"),
                      },

                     

                      {
                        src: "https://www.youtube.com/shorts/vqbcBov0pPk",
                        title: "AR Update (VeVe)",
                        thumbnail: getThumbnailPath("AR UPDATE.png"),
                      },

                      {
                        src: "https://www.youtube.com/shorts/2tm0Gph4_k4",
                        title: "Millennium Falcon (Lucasfilm)",
                        thumbnail: getThumbnailPath("MILLENNIUM FALCON.png"),
                      },

                      {
                        src: "https://www.youtube.com/shorts/Gm_OMAf2Z00",
                        title: "Splinter (Paramount)",
                        thumbnail: getThumbnailPath("SPLINTER.png"),
                      },

                      {
                        src: "https://youtu.be/XNyzzivphA0",
                        title: "Avatar – Jake Sully (20th Century Studios)",
                        thumbnail: getThumbnailPath("AVATAR JAKE.png"),
                      },

                      

                      {
                        src: "https://youtu.be/gPX9vVmyckQ",
                        title: "TMNT Leonardo (Paramount)",
                        thumbnail: getThumbnailPath("LEONARDO.png"),
                      },

                      {
                        src: "https://youtube.com/shorts/CqVbc3M2HCY",
                        title: "Reverspective S3 (Patrick Hughes)",
                        thumbnail: getThumbnailPath("REVERSPECTIVE S3.png"),
                      },

                  

                      {
                        src: "https://www.youtube.com/watch?v=AhjKfwsKTSA",
                        title: "Bone Appetite (Matt Gondek)",
                        thumbnail: getThumbnailPath("BONE APPETITE.png"),
                      },

                      {
                        src: "https://youtu.be/uemb8T98388",
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
                        title:
                          "Fantastic Four S2 - Marvel Mightys (Marvel)",
                        thumbnail: getThumbnailPath("FF MIGHTYS.png"),
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
                        src: "https://www.youtube.com/embed/5XB9Fc1AH7c",
                        title: "Maserati Alfieri (Maserati)",
                        thumbnail: getThumbnailPath("MASERATI ALFIERI.png"),
                      },

          

                      {
                        src: "https://www.youtube.com/embed/MLWe2OgtGf4",
                        title: "The P Series (TOBEY)",
                        thumbnail: getThumbnailPath("TOBEY.png"),
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

                  {/* --- Testimonial --- */}
                  <Testimonial />
                </main>
              </>
            }
          />

        {/* --- About Page --- */}
<Route path="/about" element={<About />} />

{/* --- Services Page --- */}
<Route path="/services" element={<Services />} />
</Routes>

        {/* Footer */}
        <footer className="bg-branddark text-center text-gray-400 text-sm py-6">
          © Ben Dixon {new Date().getFullYear()}
        </footer>
      </div>
    </Router>
  );
}

/* Hero text with fade-in and scroll fade-out */
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

/* Video grid with fullscreen playback */
function VideoGrid({ videos }) {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="-mt-10 sm:mt-0 pt-2 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {videos.map((vid, idx) => (
          <div
            key={idx}
            className={`overflow-hidden rounded-xl transition-transform duration-300 shadow-2xl ${
              vid.src
                ? "cursor-pointer hover:scale-[1.02]"
                : "cursor-default"
            }`}
            onClick={() => {
              const embed = toYouTubeEmbedUrl(vid.src);

              if (embed) {
                setActiveVideo(`${embed}?autoplay=1`);
              }
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

/* Testimonial */
function Testimonial() {
  return (
    <section className="max-w-4xl mx-auto px-6 md:px-10 py-24 text-center">
      <p className="text-lg md:text-xl leading-relaxed italic text-gray-300">
        “Ben is friendly, solutions focused, pragmatic, creative and delivers
        to brief with speed and finesse. He has a great sense of humour and is
        able to take complex concepts, many requirements and make them easy to
        digest for the audience.”
      </p>

      <p className="mt-6 text-sm text-gray-400">
        <span className="font-medium text-white">Renee Tan</span>
        <br />
        Digital Marketing
      </p>
    </section>
  );
}