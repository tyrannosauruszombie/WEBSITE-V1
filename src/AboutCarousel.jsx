import { motion } from "framer-motion";

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
  const loopedPhotos = [...photos, ...photos]; // seamless loop

  return (
    <div className="relative flex justify-center items-center overflow-hidden w-full h-80 bg-branddark">
      <motion.div
        className="flex items-center gap-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 28,
            ease: "linear",
          },
        }}
      >
        {loopedPhotos.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt={`About ${i + 1}`}
            loading="lazy"
            className="rounded-xl object-cover aspect-square shadow-lg"
            style={{
              width: "340px", // larger image width
              height: "340px",
            }}
          />
        ))}
      </motion.div>

      {/* Fade edges to blend into background */}
      <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-branddark to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-branddark to-transparent pointer-events-none" />
    </div>
  );
}
