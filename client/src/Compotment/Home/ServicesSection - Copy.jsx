import React from "react";
import { useNavigate } from "react-router-dom";
import servicesData from "../Services/data.json"; // your JSON

export default function ServicesSection() {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gray-50 px-9">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
        <p className="text-gray-600 mb-12">
          Discover the range of services we offer to enhance your property.
        </p>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer max-w-sm w-full"
              onClick={() => navigate(`/services/${service.slug}`)}
            >
              {/* Image */}
              <div className="h-40 w-full overflow-hidden">
                <img
                  src={service.card.image}
                  alt={service.card.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Card Content */}
              <div className="p-5 text-left">
                <h3 className="text-xl font-bold mb-1 text-gray-900">
                  {service.card.title}
                </h3>
                <p className="text-sm font-semibold text-indigo-600 mb-2">
                  {service.card.subtitle}
                </p>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  {service.card.description}
                </p>

                <button
                  className="text-indigo-600 font-semibold hover:underline"
                  onClick={(e) => {
                    e.stopPropagation(); // prevent double navigation
                    navigate(`/services/${service.slug}`);
                  }}
                >
                  More in Services →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
