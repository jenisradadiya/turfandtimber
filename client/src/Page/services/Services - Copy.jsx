// src/pages/Services.js
import React from "react";
import { Link } from "react-router-dom";
import services from "../../Compotment/Services/data.json";

const Services = () => {
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
           Services
            </h1>

            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
             Agastya International is committed to delivering eco-friendly,
          plant-based disposable products that support sustainable living
          and a greener future.
            </p>
        </div>
        </section>

    <section className="min-h-screen bg-gray-100 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {services.map(service => (
          <div
          key={service.id}
          className="border rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={service.card.image}
              alt={service.card.title}
              className="h-48 w-full object-cover"
              />

            <div className="p-4">
              <h2 className="text-xl font-semibold">
                {service.card.subtitle}
              </h2>

              <p className="text-gray-600 text-sm mt-2">
                {service.card.description}
              </p>

              <Link
                to={`/services/${service.slug}`}
                className="inline-block mt-4 text-green-600 font-semibold"
                >
                Learn More →
              </Link>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
        </div>
  );
  // return (
  //   <div className="container mx-auto p-4 pb-6 pt-24">
  //     <div className="max-w-5xl mx-auto pb-4">
  //       <h1 className="text-4xl font-bold text-center text-green-700">
  //         Our Services
  //       </h1>
  //       <p className="mt-2 text-center text-gray-600">
  //         What we offer at turf & timber
  //       </p>
  //     </div>
  //     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  //       {services.map((service) => (
  //         <Link
  //           key={service.id}
  //           to={`/services/${service.id}`}
  //           className="border rounded-lg overflow-hidden hover:shadow-lg transition bg-white"
  //         >
  //           {/* Image */}
  //           <img
  //             src={service.image}
  //             alt={service.title}
  //             className="w-full h-48 object-cover"
  //           />

  //           {/* Content */}
  //           <div className="p-4">
  //             <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
  //             <p className="text-gray-600">
  //               {service.description.substring(0, 80)}...
  //             </p>
  //           </div>
  //         </Link>
  //       ))}
  //     </div>
  //   </div>
  // );

};

export default Services;
