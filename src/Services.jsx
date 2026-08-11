import React from "react";

export default function Services() {
  return (
    <main className="bg-branddark text-white min-h-screen font-rubik">

      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 pt-32 pb-20 text-center">
        <h1 className="font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none">
          SERVICES
        </h1>

        <h2 className="mt-8 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          Video content for brands, products and ideas worth talking about.
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed opacity-90">
          I create engaging video content from concept to final edit, helping
          brands explain products, tell stories and connect with their
          audiences.
        </p>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 pb-24">

        <Service
          title="VIDEO PRODUCTION"
          process="Concept → Script → Shoot → Edit"
        >
          From the first idea to the finished video. Concept development,
          scripting, filming, editing and final delivery.
        </Service>

        <Service
          title="SOCIAL CONTENT"
          process="Short-form → Stories → Scroll-stopping ideas"
        >
          Short-form videos designed to grab attention, tell a story and give
          people a reason to stop scrolling.
        </Service>

        <Service
          title="PRODUCT & TUTORIAL VIDEOS"
          process="Explain → Demonstrate → Engage"
        >
          Clear, engaging videos that make products, features and ideas easy
          to understand without making them boring.
        </Service>

        <Service
          title="AUGMENTED REALITY"
          process="Concept → Staging → Capture → Post-production"
        >
          Creative AR content that brings digital experiences into the real
          world, from concept and staging through to filming and
          post-production.
        </Service>

        <Service
          title="VIDEO EDITING"
          process="Footage → Story → Polish"
        >
          Turning footage into polished, engaging content through editing,
          sound, graphics, masking and light visual effects.
        </Service>

      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 pb-32 text-center">
        <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl leading-tight">
          HAVE A PROJECT IN MIND?
        </h2>

        <p className="mt-6 text-xl sm:text-2xl">
          I'd love to hear about it.
        </p>

        <a
          href="mailto:ben.dixon.3000@gmail.com"
          className="inline-block mt-8 text-lg font-bold border-b-2 border-white pb-1 hover:opacity-60 transition-opacity"
        >
          CONTACT →
        </a>
      </section>

    </main>
  );
}


/* Individual service section */
function Service({ title, process, children }) {
  return (
    <div className="border-t border-white/20 py-14 sm:py-16">

      <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl leading-none">
        {title}
      </h2>

      <p className="mt-5 text-base sm:text-lg md:text-xl opacity-60">
        {process}
      </p>

      <p className="mt-6 max-w-3xl text-lg sm:text-xl leading-relaxed opacity-90">
        {children}
      </p>

    </div>
  );
}