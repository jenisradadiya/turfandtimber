import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import services from "./data.json";
import serviceProjects from "../Project/Project.json"; 

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = services.find(s => s.slug === slug);

  const [lightbox, setLightbox] = useState({ open: false, images: [], currentIndex: 0 });

  // Scroll to top on page load / slug change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  
  // Get projects from serviceProjects JSON using slug
  const projects = serviceProjects[service.slug] ?? [];
  
  // Lightbox handlers
  const openLightboxHandler = (images, index) => setLightbox({ open: true, images, currentIndex: index });
  const closeLightbox = () => setLightbox({ open: false, images: [], currentIndex: 0 });
  const nextImage = () =>
    setLightbox(prev => ({ ...prev, currentIndex: (prev.currentIndex + 1) % prev.images.length }));
  const prevImage = () =>
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
    }));

    // Keyboard navigation for lightbox
    useEffect(() => {
    const handleKey = e => {
      if (!lightbox.open) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox.open, lightbox.images]);
  
  if (!service) return <p className="p-6">Service not found</p>;
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
          <h2 className="text-3xl font-bold mb-4">{service.contentSection.heading}</h2>
          {service.contentSection.paragraphs.map((p, i) => (
            <p key={i} className="text-gray-600 mb-4">{p}</p>
          ))}
        </div>
        <img src={service.contentSection.image} alt="" className="rounded-lg w-full" />
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
        <img src={service.ProcessSection.image} alt="" className="rounded-lg w-full" />
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
        <img src={service.BenefitsSection.image} alt="" className="rounded-lg w-full" />
      </section>

      {/* Projects Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Projects</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const images = project.images ?? [];
            return (
              <div
                key={i}
                className="border rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer"
                onClick={() => images.length && openLightboxHandler(images, 0)}
              >
                <img
                  src={images[0] ?? "/placeholder.jpg"}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => navigate("/project", { state: { service: service.slug } })}
            className="bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            View More Projects
          </button>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox.open && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 z-50"
          >
            &times;
          </button>

          {lightbox.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 text-white text-5xl font-bold hover:text-gray-300 z-50"
              >
                &#10094;
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 text-white text-5xl font-bold hover:text-gray-300 z-50"
              >
                &#10095;
              </button>
            </>
          )}

          <img
            src={lightbox.images[lightbox.currentIndex]}
            alt="Project"
            className="rounded-lg shadow-lg max-h-[95vh] max-w-[95vw] object-contain"
          />
        </div>
      )}

    </div>
  );
};

export default ServiceDetail;
