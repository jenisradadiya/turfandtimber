import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import blogPosts from "./Blog.json"; // Import blog data from JSON file

export default function BlogSection() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900"
          >
            Our Blog
          </motion.h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Insights, tips, and ideas to help you grow your business and stay
            ahead in the digital world.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <p className="text-sm text-gray-500">
                  {post.date} • {post.author}
                </p>

                <h2 className="text-xl font-semibold mt-2 text-gray-900">
                  {post.title}
                </h2>

                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                  {post.description}
                </p>

                <Link
                  to={`/blog/${post.id}`}
                  className="mt-4 inline-block text-blue-600 font-medium hover:underline"
                >
                  Read More →
                </Link>

                
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-white border-t">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Subscribe to our newsletter
          </h2>
          <p className="text-gray-600 mt-3">
            Get the latest articles and business tips delivered to your inbox.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-xl border w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
