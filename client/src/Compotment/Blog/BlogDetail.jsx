import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import blogPosts from "./Blog.json";

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // find current blog by id
  const postIndex = blogPosts.findIndex((blog) => blog.id === Number(id));
  const post = blogPosts[postIndex];

  // previous & next blogs
  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;

  // scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]); // scroll when blog changes

  // if blog not found
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Blog Not Found</h1>
        <Link
          to="/blog"
          className="text-blue-600 font-medium hover:underline"
        >
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* Back button */}
        <Link
          to="/blog"
          className="text-blue-600 hover:underline mb-6 inline-block"
        >
          ← Back to Blog
        </Link>

        {/* Blog Image */}
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-80 object-cover rounded-2xl"
        />

        {/* Meta info */}
        <p className="mt-6 text-sm text-gray-500">
          {post.date} • {post.author} • {post.category}
        </p>

        {/* Title */}
        <h1 className="text-4xl font-bold mt-2 text-gray-900">
          {post.title}
        </h1>

        {/* Description */}
        <p className="mt-4 text-lg text-gray-700">
          {post.description}
        </p>

        {/* Blog Sections */}
        <div className="mt-10 space-y-8">
          {post.sections.map((section, index) => (
            <div key={index}>
              {/* Section Heading */}
              <h2 className="text-2xl font-bold mb-3 text-gray-900">
                {section.heading}
              </h2>

              {/* Paragraph content */}
              {section.content &&
                section.content.map((paragraph, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed mb-3">
                    {paragraph}
                  </p>
                ))}

              {/* Bullet list */}
              {section.list && (
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

       {/* Previous & Next Navigation */}
<div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4">

  {/* Previous Blog */}
  {prevPost ? (
    <div
      onClick={() => navigate(`/blog/${prevPost.id}`)}
      className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-3 rounded-lg transition"
    >
      <img
        src={prevPost.image}
        alt={prevPost.title}
        className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
      />
      <div>
        <p className="text-sm text-gray-500">Previous</p>
        <h4 className="font-semibold">{prevPost.title}</h4>
      </div>
    </div>
  ) : (
    // Loop to last blog if no previous
    <div
      onClick={() => navigate(`/blog/${blogPosts[blogPosts.length - 1].id}`)}
      className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-3 rounded-lg transition"
    >
      <img
        src={blogPosts[blogPosts.length - 1].image}
        alt={blogPosts[blogPosts.length - 1].title}
        className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
      />
      <div>
        <p className="text-sm text-gray-500">Previous</p>
        <h4 className="font-semibold">{blogPosts[blogPosts.length - 1].title}</h4>
      </div>
    </div>
  )}

  {/* Next Blog */}
  {nextPost ? (
    <div
      onClick={() => navigate(`/blog/${nextPost.id}`)}
      className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-3 rounded-lg transition sm:justify-end"
    >
      <div className="text-right">
        <p className="text-sm text-gray-500">Next</p>
        <h4 className="font-semibold">{nextPost.title}</h4>
      </div>
      <img
        src={nextPost.image}
        alt={nextPost.title}
        className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
      />
    </div>
  ) : (
    // Loop to first blog if no next
    <div
      onClick={() => navigate(`/blog/${blogPosts[0].id}`)}
      className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-3 rounded-lg transition sm:justify-end"
    >
      <div className="text-right">
        <p className="text-sm text-gray-500">Next</p>
        <h4 className="font-semibold">{blogPosts[0].title}</h4>
      </div>
      <img
        src={blogPosts[0].image}
        alt={blogPosts[0].title}
        className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
      />
    </div>
  )}

</div>



      </div>
    </div>
  );
}
