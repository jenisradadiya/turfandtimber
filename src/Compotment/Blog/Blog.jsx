
const blogs = [
  {
    id: 1,
    title: "Why Plant-Based Disposable Products Are the Future",
    description:
      "Discover how eco-friendly disposable products help reduce waste and protect the environment.",
    date: "Feb 5, 2026",
    author: "Agastya International",
  },
  {
    id: 2,
    title: "How Our Products Support Sustainable Living",
    description:
      "Learn how our plant-based products are designed to support a greener lifestyle.",
    date: "Jan 28, 2026",
    author: "Agastya International",
  },
  {
    id: 3,
    title: "Benefits of Switching to Eco-Friendly Disposables",
    description:
      "Switching to biodegradable products is not just good for nature, but also for your brand.",
    date: "Jan 15, 2026",
    author: "Agastya International",
  },
];

export default function Blog() {
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
            Our Blog
            </h1>

            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Insights, news, and updates from Agastya International
            </p>
        </div>
        </section>
        
    <div className="min-h-screen bg-gray-100 px-4 py-12">
        <div className="max-w-6xl mx-auto">
        {/* Blog Cards */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
            key={blog.id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {blog.title}
              </h2>

              <p className="mt-3 text-gray-600 text-sm">
                {blog.description}
              </p>

              <div className="mt-4 text-sm text-gray-500">
                <span>{blog.date}</span> · <span>{blog.author}</span>
              </div>

              <button className="mt-5 inline-block text-green-600 font-medium hover:underline">
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
          </div>
  );
}
