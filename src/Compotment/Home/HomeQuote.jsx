import React from 'react'

function HomeQuote() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Brisbane’s #1 Choice for Artificial Grass Supply, Installation & Maintenance
          </h2>

          <p className="text-gray-600 mb-4">
            Are you looking for premium-quality synthetic grass to enhance the beauty and value
            of your Brisbane home or business? We supply & install the best Australian-made
            artificial grass for home and business owners in Brisbane’s Northside & Southside suburbs.
          </p>

          <p className="text-gray-600 mb-4">
            We’re a family-owned business with over 20 years of experience in the industry.
            Homes & businesses have greatly benefited from our professional & high-quality
            artificial grass cleaning & maintenance, and artificial grass installation for
            residential, commercial, sporting surfaces, shires, childcare centres and
            government councils.
          </p>

          <p className="text-gray-600 mb-4">
            We supply Australian made, eco-friendly, soft, pet & child-friendly, durable,
            non-allergic astro turf that comes with a 1-year installation warranty,
            7+ years’ manufacturer warranty, and can last up to 25 years.
          </p>

          <p className="text-gray-600 mb-4">
            We’re proud to be an accredited silver status agent of APT Asia Pacific,
            authorised to offer APT products — the only manufacturer of Australian made
            recreational and synthetic sports grass.
          </p>

          <p className="text-gray-600 mb-6">
            Enjoy the many benefits of artificial grass, transform your backyard, and
            install your dream lawn in as fast as 1 day without paying upfront.
            Request your Free Quote today.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Why Brisbane Homeowners Are Switching to Synthetic Grass
          </h3>

          <ul className="space-y-3 text-gray-600">
            <li>✔ Low maintenance — no mowing, watering or fertilising</li>
            <li>✔ Durable in all weather conditions</li>
            <li>✔ Safe for kids and pets</li>
            <li>✔ Pest resistant — no fleas or ticks</li>
            <li>✔ Eco-friendly and water saving</li>
            <li>✔ Cost-effective long term</li>
            <li>✔ Always green and beautiful year-round</li>
          </ul>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white shadow-xl rounded-2xl p-6 md:p-8">
          <h3 className="text-2xl font-bold mb-2">Free Online Estimate</h3>
          <p className="text-sm text-gray-500 mb-6">
            Fill out the form below and one of our staff will contact you shortly.
          </p>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Name *"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
            />

            <input
              type="text"
              placeholder="Address *"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
            />

            <input
              type="text"
              placeholder="Suburb *"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
            />

            <input
              type="tel"
              placeholder="Phone *"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
            />

            <input
              type="email"
              placeholder="Email *"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
            />

            <textarea
              placeholder="Area Description"
              rows="3"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
            />

            <select className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none">
              <option>Access</option>
              <option>Easy</option>
              <option>Limited</option>
              <option>Difficult</option>
            </select>

            <select className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none">
              <option>Type of Install</option>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Sporting Surface</option>
            </select>

            <select className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none">
              <option>Looking For Finance?</option>
              <option>Yes</option>
              <option>No</option>
            </select>

            <textarea
              placeholder="Message"
              rows="3"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
            />

            <input
              type="file"
              className="w-full text-sm"
            />

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Request Free Quote
            </button>

            <p className="text-xs text-gray-500 text-center">
              Your details are 100% safe and secure with us.
            </p>
          </form>
        </div>

      </div>
    </section>
  );
}

export default HomeQuote
