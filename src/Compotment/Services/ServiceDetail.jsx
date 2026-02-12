import { useParams } from "react-router-dom";
import services from "./data.json";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) return <p>Service not found</p>;

  return (
    <div className="space-y-16">

      {/* Hero Section */}
      <section className="bg-gray-100 py-16 pl-5 text-left ">
        <h1 className="text-4xl font-bold">{service.hero.title}</h1>

        <ul className="mt-6 space-y-2">
          {service.hero.highlights.map((item, i) => (
            <li key={i} className="text-lg">{item}</li>
          ))}
        </ul>

        <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg">
          {service.hero.ctaText}
        </button>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className={service.contentSection.imagePosition === "right" ? "" : "order-2"}>
          <h2 className="text-3xl font-bold mb-4">
            {service.contentSection.heading}
          </h2>

          {service.contentSection.paragraphs.map((p, i) => (
            <p key={i} className="text-gray-600 mb-4">{p}</p>
          ))}
        </div>

        <img
          src={service.contentSection.image}
          alt=""
          className="rounded-lg w-full"
        />
      </section>

      {/* Process Section */}
  <section className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center bg-gray-50 rounded-lg py-16">
    <div className={service.ProcessSection.imagePosition === "right" ? "" : "md:order-2"}>
      <h2 className="text-3xl font-bold mb-4">Our Process</h2>
      {service.ProcessSection.process.map((step, i) => (
        <div key={i} className="mb-4">
          <h3 className="text-xl font-semibold">{step.title}</h3>
          <p className="text-gray-600">{step.description}</p>
        </div>
      ))}
    </div>

    <img
      src={service.ProcessSection.image}
      alt=""
      className="rounded-lg w-full"
    />
  </section>

  {/* Benefits Section */}
  <section className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center py-16">
    <div className={service.BenefitsSection.imagePosition === "right" ? "" : "md:order-2"}>
      <h2 className="text-3xl font-bold mb-4">Benefits of Choosing Us</h2>
      <ul className="list-decimal list-inside text-gray-600 space-y-2">
        {service.BenefitsSection.benefits.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>

    <img
      src={service.BenefitsSection.image}
      alt=""
      className="rounded-lg w-full"
    />
  </section>
  {/* Projects Section */}
<section className="max-w-7xl mx-auto px-4 py-16">
  <h2 className="text-3xl font-bold mb-8 text-center">Our Projects</h2>

  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
    {service.projects.map((project, i) => (
      <div key={i} className="border rounded-lg overflow-hidden hover:shadow-lg transition">
        <img
          src={project.image}
          alt={project.title}
          className="h-48 w-full object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold">{project.title}</h3>
        </div>
      </div>
    ))}
  </div>

  <div className="text-center mt-8">
    <button className="bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition">
      View More Projects
    </button>
  </div>
</section>


    </div>
  );
};

export default ServiceDetail;
