/**
 * @copyright 2025 AnchorMovies
 * @license Apache-2.0
 */

const aboutItems = [
    { label: 'Projects Completed', number: 50 },
    { label: 'Years of Experience', number: 3 },
  ];
  
  const About = () => {
    return (
      <section id="about" className="section">
        <div className="container">
          <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
            <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
              Welcome! I&apos;m Henry, a professional web developer with a knack for crafting visually stunning and highly functional websites. Combining creativity and technical expertise, I transform your vision into a digital masterpiece that excels in both appearance and performance.
            </p>
  
            <div className="flex flex-wrap items-center gap-4 md:gap-7">
              {aboutItems.map(({ label, number }, key) => (
                <div key={key}>
                  <div className="flex items-baseline text-2xl font-semibold text-white md:text-4xl md:mb-1">
                    <span>{number}</span>
                    <span className="ml-1 text-sky-400 font-semibold md:text-3xl">+</span>
                  </div>
                  <p className="text-zinc-400 text-sm md:text-base">{label}</p>
                </div>
              ))}
  
              <img
                src="/images/logo.svg"
                alt="Logo"
                width={30}
                height={30}
                className="ml-auto md:w-[40px] md:h-[40px]"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  