import React from 'react'

function KeepInTouch() {
  return (
    <section className="bg-green-700 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold">
          Keep In Touch
        </h2>

        <p className="mt-4 text-lg max-w-3xl mx-auto text-green-100">
          If you’re looking to transform your property with decking, fencing,
          privacy screens or retaining walls, call us on{" "}
          <a
            href="tel:0475771855"
            className="font-semibold underline hover:text-white"
          >
            0475 771 855
          </a>{" "}
          to request a free quote and expert advice.
        </p>

        <div className="mt-8">
          <button className="bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition">
            Free Online Estimate
          </button>
        </div>
      </div>
    </section>
  );
}

export default KeepInTouch
