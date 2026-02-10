import React from 'react'
// import Services from '../Services/Services';

const services = [
  {
    title: "Fencing",
    subtitle: "Fencing Brisbane",
    description:
      "Fencing experts you can rely on in Brisbane and surrounding areas. Get your fencing installed by a professional team without paying upfront.",
  },
  {
    title: "Patios",
    subtitle: "Patios Brisbane",
    description:
      "Looking to add more beauty and value to your property? Updating your outdoor living area with a patio is a great option.",
  },
  {
    title: "Decking",
    subtitle: "Decking Brisbane",
    description:
      "Decking experts you can rely on in Brisbane and surrounding areas. Get your decking installed by a professional team without paying upfront.",
  },
  {
    title: "Rubber Soft Fall",
    subtitle: "Rubber Soft Fall Brisbane",
    description:
      "Reliable, professional & affordable rubber soft fall installations and cleaning services in Brisbane and surrounding areas.",
  },
  {
    title: "Retaining Walls",
    subtitle: "Retaining Walls Brisbane",
    description:
      "Retaining wall experts you can rely on in Brisbane and surrounding areas. Installed by a professional team without paying upfront.",
  },
  {
    title: "Privacy Screens",
    subtitle: "Privacy Screens Brisbane",
    description:
      "Professional privacy screen installers you can rely on in Brisbane and surrounding areas without paying upfront.",
  },
];

function OtherServices() {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-center text-green-700">
          Other Services We Specialise In
        </h2>

        <p className="mt-4 text-center text-gray-600 max-w-3xl mx-auto">
          Looking to improve your property in Brisbane? We provide services that
          can quickly transform your property into a stunning place.
        </p>

        {/* Services Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 flex flex-col"
            >
              <span className="text-sm text-green-600 font-medium">
                {service.subtitle}
              </span>

              <h3 className="mt-2 text-2xl font-semibold text-gray-800">
                {service.title}
              </h3>

              <p className="mt-3 text-gray-600 flex-grow">
                {service.description}
              </p>

              <button className="mt-6 self-start text-green-700 font-semibold hover:underline">
                Learn More →
              </button>
            </div>
          ))}
        </div>
        {/* <Services/> */}
      </div>
    </section>
  );
}

export default OtherServices
