import React from "react";

const photos = [
  "/about/ABOUT 1.png",
  "/about/ABOUT 2.png",
  "/about/ABOUT 3.png",
  "/about/ABOUT 4.png",
  "/about/ABOUT 5.png",
  "/about/ABOUT 6.png",
  "/about/ABOUT 7.png",
  "/about/ABOUT 8.png",
];

export default function AboutCarousel() {
  // Duplicate the array to create an endless loop effect
  const looped = [...photos, ...photos];

  return (
    <div className="relative w-full overflow-hidden bg-branddark py-8">
      {/* Continuous sliding track */}
      <div className="flex flex-nowrap gap-6 animate-scroll will-change-transform">
        {looped.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`About ${i + 1}`}
            loading="lazy"
            className="rounded-2xl object-cover aspect-square shadow-lg
                       w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72"
          />
        ))}
      </div>

      {/* Subtle gradient fades on edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-branddark to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-branddark to-transparent" />

      {/* Smooth infinite animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 35s linear infinite; /* speed adjustable */
        }
      `}</style>
    </div>
  );
}
