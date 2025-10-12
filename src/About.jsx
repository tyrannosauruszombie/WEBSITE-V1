import React from "react";
import AboutCarousel from "./AboutCarousel";

export default function About() {
  return (
    <div className="bg-branddark text-white min-h-screen font-rubik pt-24 px-6">
      {/* Carousel */}
      <AboutCarousel />

      {/* Centered text container */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16 mt-10 text-lg leading-relaxed text-center">

        <h1 className="text-3xl md:text-4xl font-bold mt-6">
          Hello! I’m <span className="text-highlight">Ben Dixon</span> — a{" "}
          <strong>content creator</strong> with a soft spot for{" "}
          <strong>augmented reality</strong>, <strong>storytelling</strong>, and
          the kind of videos that make you stop scrolling and start smiling.
        </h1>

        <p className="mt-6">
          After years of wrangling classrooms as a teacher, I swapped lesson
          plans for the big (and small) screen — creating{" "}
          <strong>immersive AR experiences, tutorials, and marketing content</strong>{" "}
          that bring digital worlds to life.
        </p>

        <p className="mt-6">
          At <strong>VeVe Digital Collectibles</strong>, I’ve produced{" "}
          <strong>educational tutorials, AR showcases, and high-energy promos</strong>{" "}
          for some seriously iconic brands — including{" "}
          <strong>
            Disney, Marvel, Lucasfilm, Maserati, MGM, Ubisoft, Sesame Street
          </strong>
          , and <strong>YG Entertainment</strong>. (Yes, I’ve danced with{" "}
          <strong>BLACKPINK</strong> collectibles — and I have no regrets.)
        </p>

        <p className="mt-6">
          Whether it’s showing collectors how to use AR, helping them explore{" "}
          <strong>VeVe’s collectors’ metaverse</strong>, or creating{" "}
          <strong>fun, story-driven videos</strong> that turn Web3 features into
          something anyone can enjoy, I aim to make tech feel exciting,
          accessible, and a little bit ridiculous — in the best way possible.
        </p>

        <p className="mt-6">
          I’m all about <strong>visual storytelling</strong> — blending humor,
          education, and cinematic flair to turn complex ideas into moments of
          connection. From <strong>ideation and scripting</strong> to editing in{" "}
          <strong>Premiere Pro</strong> and <strong>Photoshop</strong>, I’m
          always chasing new ways to push AR and digital creativity further.
        </p>

        <p className="mt-8 font-semibold pb-10 text-xl">
          If you’re looking for someone who’s part educator, part entertainer,
          and 100% committed to making your brand’s story pop (possibly while
          dancing with digital pop stars) — I’m your man.
        </p>
      </div>
    </div>
  );
}
