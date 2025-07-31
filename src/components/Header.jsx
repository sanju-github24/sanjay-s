/**
 * @copyright 2025 AnchorMovies
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import { useState } from "react"

/**
 * Components
 */
import Navbar from "./Navbar"

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
  
    return (
      <header className="fixed top-0 left-0 w-full h-20 z-40 bg-zinc-900">
        <div className="max-w-screen-2xl w-full mx-auto px-4 md:px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/images/logo.svg"
              width={40}
              height={40}
              alt="Sanjay S"
              className="block"
            />
          </a>
  
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6 items-center">
            <Navbar navOpen={true} />
          </div>
  
          {/* Contact Me button (Desktop only) */}
          <a
            href="#contact"
            className=" btn btn-secondary hidden md:inline-block ml-4"
          >
            Contact Me
          </a>
  
          {/* Mobile Menu Button (Only show on mobile) */}
          <button
            className="md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded text-white text-3xl">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
  
        {/* Mobile Nav Dropdown (Only when open) */}
        {navOpen && (
          <div className="md:hidden px-4 pb-4">
            <Navbar navOpen={navOpen} />
          </div>
        )}
      </header>
    );
  };
  
  export default Header;
  