import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* 1️⃣ Company Info */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Turf & Timber
          </h2>
          <p className="text-sm leading-relaxed">
            Turf & Timber is committed to delivering high-quality landscaping,
            turf installation, and outdoor solutions. We focus on reliability,
            craftsmanship, and customer satisfaction across every project.
          </p>
        </div>

        {/* 2️⃣ Contact & Working Hours */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Contact Us
          </h3>

          <p className="text-sm mb-2">
            <strong>Areas Serviced:</strong><br />
            Brisbane’s North & Southside Suburbs
          </p>

          <p className="text-sm mb-2">
            <strong>Phone:</strong> 0475 771 855
          </p>

          <p className="text-sm mb-4 text-green-400 cursor-pointer hover:underline">
            Request FREE Online Estimate
          </p>

          <p className="text-sm mb-4">
            <strong>ABN:</strong> 79 605 280 779
          </p>

          <p className="text-sm">
            <strong>Working Hours:</strong><br />
            Monday – Friday: 8:00 AM – 4:00 PM <br />
            Saturday: 9:00 AM – 3:00 PM <br />
            Closed on Public Holidays
          </p>
        </div>

        {/* 3️⃣ Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-400">Home</a></li>
            <li><a href="#" className="hover:text-green-400">About Us</a></li>
            <li><a href="#" className="hover:text-green-400">Services</a></li>
            <li><a href="#" className="hover:text-green-400">Blog</a></li>
            <li><a href="#" className="hover:text-green-400">Contact Us</a></li>
          </ul>
        </div>

        {/* 4️⃣ Location & Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Our Location
          </h3>

          {/* Google Map */}
          <div className="mb-4 w-full h-40 rounded-lg overflow-hidden">
            <iframe
              title="Google Map"
              className="w-full h-full border-0"
              src="https://www.google.com/maps?q=Brisbane&output=embed"
              loading="lazy"
            ></iframe>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-green-400">🌐</a>
            <a href="#" className="hover:text-green-400">📘</a>
            <a href="#" className="hover:text-green-400">📸</a>
            <a href="#" className="hover:text-green-400">🐦</a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Turf & Timber. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
