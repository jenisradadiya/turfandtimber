import React from "react";
import {
  ShieldCheck,
  Leaf,
  Star,
  Award,
  ThumbsUp,
  BadgeCheck,
} from "lucide-react";

const CredibilitySection = () => {
  const items = [
    {
      icon: <Leaf size={32} />,
      title: "Australian Made Synthetic Grass",
    },
    {
      icon: <Award size={32} />,
      title: "20+ Years Experience",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Years Manufacturers Warranty",
    },
    {
      icon: <BadgeCheck size={32} />,
      title: "Year Installation Warranty",
    },
    {
      icon: <Star size={32} />,
      title: "100% Non Allergic",
    },
    {
      icon: <ThumbsUp size={32} />,
      title: "100% Customer Satisfaction",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          Our Credibility
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="text-green-600 mb-3 flex justify-center">
                {item.icon}
              </div>

              <p className="font-semibold text-gray-800">
                {item.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CredibilitySection;
