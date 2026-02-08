import React from 'react'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12 pt-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-700">
          About Us
        </h1>

        <p className="mt-6 text-gray-700 text-lg text-center">
          Agastya International is committed to delivering eco-friendly,
          plant-based disposable products that support sustainable living
          and a greener future.
        </p>

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
  );
}

