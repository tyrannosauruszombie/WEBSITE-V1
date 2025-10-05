import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  return (
    <nav className="bg-branddark text-white px-6 py-4 flex items-center justify-between font-rubik fixed w-full top-0 z-50 shadow-md">
      {/* Left side links */}
      <div className="flex space-x-8 text-lg">
        <a href="/" className="transition-transform duration-200 hover:scale-110 font-bold">
          Work
        </a>
        <a href="/about.html" className="transition-transform duration-200 hover:scale-110">
          About
        </a>
       <a
  href="mailto:ben.dixon.3000@gmail.com"
  className="hover:font-bold transition-all duration-200"
>
  Contact
</a>

      </div>

      {/* Right side icons */}
      <div className="flex space-x-4 text-xl">
        <a
          href="https://www.linkedin.com/in/bendixon3000/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://www.instagram.com/mrf4lcon/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://x.com/MrF4lcon"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
      </div>
    </nav>
  );
}
