
const features = [
  {
    title: "7+ Year Manufacturer Warranty",
    description:
      "All supplied and installed synthetic grass is backed with up to 7+ year manufacturer warranty.",
  },
  {
    title: "20+ Years Experience",
    description:
      "We’ve been transforming dull and faded yards into beautiful lawns for homes and businesses for more than 20 years.",
  },
  {
    title: "1 Year Installation Warranty",
    description:
      "Our professionally installed synthetic grass is backed with a 1-year warranty on installation.",
  },
  {
    title: "One-Stop Shop",
    description:
      "From choosing the right artificial grass to design, installation, and maintenance — we’ve got you covered.",
  },
  {
    title: "Interest-Free Finance",
    description:
      "Fast approval interest-free finance, obligation-free quotes, flexible hours, and installation in as fast as 1 day.",
  },
  {
    title: "100% Non-Allergic",
    description:
      "Our artificial grass is non-allergic and safe for kids, pets, and allergy sufferers.",
  },
];

export default function ChooseUs() {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center text-green-700">
          Why Clients Choose Us
        </h2>
        <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">
          Trusted expertise, quality materials, and customer-focused service
        </p>

        {/* Feature Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
