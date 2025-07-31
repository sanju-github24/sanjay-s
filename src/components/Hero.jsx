/**
 * @copyright 2025 AnchorMovies
 * @license Apache-2.0
 */

/**
 * Components
 */
import { ButtonPrimary,ButtonOutline } from "./Button";

const Hero = () => {
    return (
      <section id="home" className="pt-28 lg:pt-36">
        <div className="container mx-auto px-4 grid items-center lg:grid-cols-2 gap-10">
  
          {/* Text Content */}
          <div>
            {/* Availability */}
            <div className="flex items-center gap-3 mb-4">
              <figure className="w-9 h-9 rounded-lg overflow-hidden">
                <img
                  src="/images/IMG_0130.jpg"
                  width={40}
                  height={40}
                  alt="Sanjay S Portrait"
                  className="object-cover w-full h-full"
                />
              </figure>
  
              <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                  <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                </span>
                Available for work
              </div>
            </div>
  
            {/* Headline */}
            <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
              Building Scalable Modern Websites for the Future
            </h2>
  
            {/* Buttons */}
            <div className="flex items-center gap-3">
              <ButtonPrimary 
              label="Download CV"
              icon="download"
              />
             <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
             />
            </div>
          </div>
  
          {/* Image */}
<div className="hidden lg:block">
  <figure className="max-w-[480px] ml-auto bg-gradient-to-t from-red-400 via-25% via-red-400/40 to-65% rounded-[60px] overflow-hidden w-full">
    <img
      src="/images/Subject 3.png"
      width={556}
      height={800}
      alt="Sanjay S"
      className="w-full h-auto object-contain"
    />
            </figure>
          </div>
  
        </div>
      </section>
    );
  };
  
  export default Hero;
  