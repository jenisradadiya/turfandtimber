import React, { useEffect, useState } from "react";

const Friendly = () => {
  const images = [
    "/images/Hero/hero-bg-1.jpg",
    "/images/Hero/hero-bg-2.jpg",
    "/images/Hero/hero-bg-3.jpg",
    "/images/grass4.jpg",
    "/images/grass5.jpg",
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  });

  return (
    <section className="py-16 bg-white px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE SLIDER */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-2xl shadow-lg">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Synthetic Grass"
              className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pet Friendly Synthetic Grass
          </h2>

          <h3 className="text-xl font-semibold text-green-600 mb-4">
            Beautiful Synthetic Lawns All Year Round
          </h3>

          <p className="text-gray-600 mb-4">
            Looking for the best artificial grass installers Brisbane has to offer?
          </p>

          <p className="text-gray-600 mb-4">
            At Astro Klean, we transform properties with Australian-made synthetic
            turf that’s safe for kids, pets, and the environment, while built to
            handle Australia’s harsh climate.
          </p>

          <p className="text-gray-600">
            Enjoy a low-maintenance lawn that saves you money on watering and mowing,
            boosts curb appeal, and adds value to your property.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Friendly;
