import React from "react";

export default function Services() {
  return (
    <main className="bg-branddark text-white min-h-screen font-rubik">
      {/* Intro */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 pt-28 pb-20 text-center">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          Video content for brands, products and ideas worth talking about.
        </h1>

        <p className="mt-6 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          I create engaging video content from concept to final edit, helping
          brands explain products, tell stories and connect with their
          audiences.
        </p>
      </section>

      {/* Services */}
      <section className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="border-t border-white/20 py-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            VIDEO PRODUCTION
          </h2>

          <p className="mt-4 text-lg text-gray-400">
            Concept → Script → Shoot → Edit
          </p>

          <p className="mt-6 text-lg leading-relaxed max-w-3xl">
            From the first idea to the finished video. Concept development,
            scripting, filming, editing and final delivery.
          </p>
        </div>

        <div className="border-t border-white/20 py-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            SOCIAL CONTENT
          </h2>

          <p className="mt-4 text-lg text-gray-400">
            Short-form → Stories → Scroll-stopping ideas
          </p>

          <p className="mt-6 text-lg leading-relaxed max-w-3xl">
            Short-form videos designed to grab attention, tell a story and
            give people a reason to stop scrolling.
          </p>
        </div>

        <div className="border-t border-white/20 py-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            PRODUCT &amp; TUTORIAL VIDEOS
          </h2>

          <p className="mt-4 text-lg text-gray-400">
            Explain → Demonstrate → Engage
          </p>

          <p className="mt-6 text-lg leading-relaxed max-w-3xl">
            Clear, engaging videos that make products, features and ideas easy
            to understand without making them boring.
          </p>
        </div>

        <div className="border-t border-white/20 py-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            AUGMENTED REALITY
          </h2>

          <p className="mt-4 text-lg text-gray-400">
            Concept → Stage → Shoot → Post
          </p>

          <p className="mt-6 text-lg leading-relaxed max-w-3xl">
            Creative AR content that brings digital experiences into the real
            world, from concept and staging through to filming and
            post-production.
          </p>
        </div>

        <div className="border-t border-white/20 py-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            VIDEO EDITING
          </h2>

          <p className="mt-4 text-lg text-gray-400">
            Footage → Edit → Polish → Deliver
          </p>

          <p className="mt-6 text-lg leading-relaxed max-w-3xl">
            Turning footage into polished, engaging content through editing,
            sound, graphics, masking and light visual effects.
          </p>
        </div>

        {/* Contact */}
        <div className="border-t border-white/20 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            HAVE A PROJECT IN MIND?
          </h2>

          <p className="mt-4 text-xl text-gray-300">
            I&apos;d love to hear about it.
          </p>

          <a
            href="mailto:ben.dixon.3000@gmail.com"
            className="inline-block mt-8 text-lg font-bold hover:opacity-70 transition-opacity"
          >
            CONTACT →
          </a>
        </div>
      </section>
    </main>
  );
}