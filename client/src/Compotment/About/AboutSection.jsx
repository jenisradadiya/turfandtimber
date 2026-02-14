import React from "react";

const AboutSection = () => {
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
            About Turf & Timber
            </h1>

            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Transforming outdoor spaces with premium artificial grass,
            expert installation, and trusted service backed by years of experience.
            </p>
        </div>
        </section>


      {/* ================= COMPANY STORY ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <img
            src="/images/about/about-1.jpg"
            alt="Artificial grass installation"
            className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
          />

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Brisbane’s Trusted Artificial Grass Experts
            </h2>

            <p className="text-gray-600 mb-4">
              We are a family-owned business proudly serving Brisbane’s
              Northside and Southside communities with premium synthetic
              grass supply, installation, and maintenance services.
            </p>

            <p className="text-gray-600 mb-4">
              With decades of hands-on industry experience, we help homeowners,
              businesses, childcare centres, sporting facilities and councils
              create beautiful, durable outdoor spaces that stay green all year.
            </p>

            <p className="text-gray-600">
              Our commitment is simple — deliver exceptional workmanship,
              premium materials, and customer satisfaction on every project.
            </p>
          </div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          {[
            { number: "20+", label: "Years Experience" },
            { number: "1000+", label: "Projects Completed" },
            { number: "7+ Years", label: "Manufacturer Warranty" },
            { number: "100%", label: "Customer Satisfaction" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md py-8 hover:shadow-xl transition"
            >
              <h3 className="text-3xl font-bold text-green-700">
                {item.number}
              </h3>
              <p className="text-gray-600 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why Choose Turf & Timber?
            </h2>

            <ul className="space-y-4 text-gray-600">
              <li>✔ Premium Australian-made synthetic grass</li>
              <li>✔ Safe for kids and pets</li>
              <li>✔ Eco-friendly and non-allergic materials</li>
              <li>✔ Fast professional installation</li>
              <li>✔ Low-maintenance, long-lasting lawns</li>
              <li>✔ Trusted by homeowners and businesses</li>
            </ul>
          </div>

          <img
            src="/images/about/about-2.jpg"
            alt="Beautiful lawn"
            className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
          />
        </div>
      </section>

      {/* ================= MISSION SECTION ================= */}
      <section className="py-16 bg-green-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">
            Our Mission
          </h2>
          <p className="text-lg opacity-90">
            To create beautiful, sustainable outdoor environments that enhance
            lifestyle, reduce maintenance, and deliver long-term value for
            every customer we serve.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="text-gray-600 mb-6">
            Get your dream lawn installed quickly and professionally.
            Request your free quote today.
          </p>

          <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition">
            Get Free Quote
          </button>
        </div>
      </section>

    </div>
  );
};

export default AboutSection;
