import React from "react";
import AboutCarousel from "./AboutCarousel";

export default function About() {
  return (
    <div className="bg-branddark text-white min-h-screen font-rubik pt-24 px-6">
      {/* Carousel */}
      <AboutCarousel />

  {/* Centered text container */}
<div className="max-w-5xl mx-auto px-4 md:px-10 lg:px-12 mt-10 text-lg leading-relaxed">

  <h1 className="text-3xl md:text-4xl font-bold text-center mt-6">
    I make videos I'd want to watch.
  </h1>

  <p className="mt-8 text-xl md:text-2xl leading-relaxed text-center">
    Hi, I'm <span className="text-highlight font-semibold">Ben Dixon</span> — a
    video producer who loves telling stories, solving creative problems, and
    pretending I'm about to get crushed by a giant monster in a London park.
  </p>

  <p className="mt-5">
    I help brands bring ideas to life through engaging video content — from
    social campaigns and product videos to tutorials and augmented reality
    experiences. I love taking a project from the first spark of an idea all the
    way through to the finished video, whether that's developing the concept,
    writing the script, filming on location, editing or adding those final
    creative touches that tie everything together.
  </p>

  <p className="mt-5">
    Whatever the project, my goal is always the same: to create something that's
    clear, entertaining and genuinely enjoyable to watch.
  </p>

  <p className="mt-5">
    Over the past two years I've produced content for globally recognised brands
    including <strong>Disney, Marvel, Lucasfilm, Paramount, Ubisoft,
    Coca-Cola</strong> and <strong>YG Entertainment</strong> through my work
    with <strong>VeVe Digital Collectibles</strong>. Along the way I've filmed
    in parks, beaches, city streets and convention halls, travelled to Lisbon,
    Las Vegas and New York Comic Con, and spent more time than I'd like to admit
    trying to convince people that invisible digital characters really are
    standing right next to me.
  </p>

  <p className="mt-5">
    Before all of that, I spent 17 years as a primary school teacher. It might
    sound like an unusual career path, but it taught me something I still use
    every single day: how to make complicated things simple without making them
    boring. Whether I'm introducing a new product, explaining something new or
    creating a tutorial, that way of thinking is still at the heart of
    everything I create.
  </p>

  <p className="mt-5">
    I'm a firm believer that good content should do more than look great — it
    should make people feel something. Sometimes that's excitement. Sometimes
    it's curiosity. Sometimes it's simply making someone smile. Sometimes it's
    making someone stop scrolling for a few seconds and think,{" "}
    <em>"That's clever."</em> If I can do any combination of those things, I'm
    happy.
  </p>

  <p className="mt-5 mb-10">
    If you're looking for someone who can take a project from a rough idea to a
    polished final video — with creativity, enthusiasm and an unhealthy
    enthusiasm for movies and comic books thrown in — I'd love to hear from you.
  </p>

</div>
    </div>
  );
}
