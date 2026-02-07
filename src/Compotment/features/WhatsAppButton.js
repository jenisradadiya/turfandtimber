import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "916353351141"; // Australia
  const message = "Hello, I am interested in your services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-50
        bg-green-500 hover:bg-green-600
        text-white p-4 rounded-full
        shadow-lg transition
        flex items-center justify-center
      "
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp/>
    </a>
  );
};

export default WhatsAppButton;
