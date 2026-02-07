import React, { useEffect, useState } from "react";

const bgImages = [
  "/images/Hero/hero-bg-1.jpg",
  "/images/Hero/hero-bg-2.jpg",
  "/images/Hero/hero-bg-3.jpg",
];


const Hero = () => {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-[90vh] md:h-screen flex items-center"
      style={{
        backgroundImage: `url(${bgImages[currentBg]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center md:items-start">
        
        {/* IMAGE instead of text
        <img
          src="/images/Hero/hero-content.png"
          alt="Artificial Grass Info"
          className="
            w-[90%]
            sm:w-[70%]
            md:w-[55%]
            lg:w-[45%]
            mb-8
          "
        /> */}
         <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          The Best Australian Made <br />
          Artificial Grass for Brisbane Properties
        </h1>

        <ul className="space-y-3 mb-8 text-lg">
          <li>✔ 7+ Year Manufacturer Warranty</li>
          <li>✔ 1 Year Installation Warranty</li>
          <li>✔ We Never Subcontract Work Out</li>
          <li>✔ Award Winning Artificial Grass Installers</li>
        </ul>

        {/* Buttons (Always Same) */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition">
            Onsite Quote
          </button>

          <button className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition">
            Interest Free Finance
          </button>
        </div>
      </div>

      {/* Optional Badge */}
      <div className="hidden lg:block absolute right-10 bottom-10">
        <img
          src="/images/Hero/australian-made.png"
          alt="Australian Made"
          className="w-36"
        />
      </div>
    </section>
  );
};

export default Hero;
