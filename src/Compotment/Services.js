import React from 'react'

const services = [
  {
    title: "Plant-Based Disposable Products",
    description:
      "Eco-friendly plates, bowls, and cutlery made from sustainable materials.",
  },
  {
    title: "Bulk Supply for Businesses",
    description:
      "Affordable bulk solutions for restaurants, events, and catering companies.",
  },
  {
    title: "Custom Branding",
    description:
      "Customized disposable products with your brand identity.",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12 pt-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-700">
          Our Services
        </h1>

        <p className="mt-2 text-center text-gray-600">
          What we offer at Agastya International
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h2>
              <p className="mt-3 text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
