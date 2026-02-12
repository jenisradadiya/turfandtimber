import React from 'react'

function Project() {
  return (
    <div>
      {/* ================= HERO SECTION ================= */}
        <section
        className="relative text-white py-12 bg-cover bg-center"
        style={{
            backgroundImage: "url('/images/about-hero.jpg')" // your image path
        }}
        >
        {/* Optional overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Projects
            </h1>

            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Agastya International is committed to delivering eco-friendly,
          plant-based disposable products that support sustainable living
          and a greener future.
            </p>
        </div>
        </section>
    <div className="min-h-screen bg-gray-100 px-4 py-12 ">
      <div className="max-w-6xl mx-auto">

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
            <p className="mt-3 text-gray-600">
              To replace harmful plastic disposables with sustainable,
              biodegradable alternatives that are safe for people and
              the planet.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
            <p className="mt-3 text-gray-600">
              To become a global leader in eco-conscious disposable products
              by promoting environmental responsibility worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Project
