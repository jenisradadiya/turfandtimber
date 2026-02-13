import React, { useCallback, useEffect, useState } from "react";
import projectsData from "./Project.json";

export default function ProjectSection() {
 const [lightbox, setLightbox] = useState({
    open: false,
    projectImages: [],
    currentIndex: 0
  });

  const openLightbox = (images, index = 0) => {
    setLightbox({ open: true, projectImages: images, currentIndex: index });
  };

 const closeLightbox = useCallback(() => setLightbox({ open: false, index: 0 }), []);

  const prevImage = () => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex:
        (prev.currentIndex - 1 + prev.projectImages.length) %
        prev.projectImages.length
    }));
  };

  const nextImage = () => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.projectImages.length
    }));
  };

  // Keyboard navigation
  useEffect(() => {
  const handleKey = (e) => {
    if (!lightbox.open) return;
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "Escape") closeLightbox();
  };

  window.addEventListener("keydown", handleKey);
  return () => window.removeEventListener("keydown", handleKey);
}, [lightbox, closeLightbox]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Our Completed Projects
        </h1>

        {/* Loop through services */}
        {Object.entries(projectsData).map(([service, projects]) => (
          <section key={service} className="mb-16">
            {/* Service Title */}
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              {service}
            </h2>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {projects.map((project) =>
                project.images.map((img, idx) => (
                  <div
                    key={`${project.id}-${idx}`}
                    className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer hover:shadow-xl hover:scale-105 transition-transform duration-300"
                    onClick={() => openLightbox(project.images, idx)}
                  >
                    <img
                      src={img}
                      alt={project.title}
                      className="w-full h-48 object-cover aspect-[4/3]"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2 text-sm text-center">
                      {project.title} {project.images.length > 1 ? `(${idx + 1})` : ""}
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>
        ))}
      </div>

    {/* Lightbox Modal */}
        {lightbox.open && (
        <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
        >
            {/* Close Button */}
            <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 z-50"
            >
            &times;
            </button>

            {/* Previous Arrow */}
        {lightbox.projectImages.length > 1 && (
        <button
            onClick={prevImage}
            className="hidden md:block absolute left-4 text-white text-5xl font-bold hover:text-gray-300 z-50"
        >
            &#10094;
        </button>
        )}

        {/* Next Arrow */}
        {lightbox.projectImages.length > 1 && (
        <button
            onClick={nextImage}
            className="hidden md:block absolute right-4 text-white text-5xl font-bold hover:text-gray-300 z-50"
        >
            &#10095;
        </button>
        )}


    {/* Bigger Image */}
    <img
      src={lightbox.projectImages[lightbox.currentIndex]}
      alt="Project"
      className="max-h-[95vh] max-w-[95vw] object-contain rounded-lg shadow-lg"
    />
  </div>
)}


    </div>
  );
}
