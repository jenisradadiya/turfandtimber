import React from 'react'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12 pt-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-700">
          Contact Us
        </h1>

        <p className="mt-2 text-center text-gray-600">
          We’d love to hear from you
        </p>

        <form className="mt-10 bg-white p-8 rounded-xl shadow space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>

          <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
