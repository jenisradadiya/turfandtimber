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
    <div className="min-h-screen bg-gray-100 px-4 py-12 pt-24">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-green-700">
          Our Blog
        </h1>
        <p className="mt-2 text-center text-gray-600">
          Insights, news, and updates from Agastya International
        </p>

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
  );
}
