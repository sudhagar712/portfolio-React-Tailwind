import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppUp = () => {
  const phoneNumber = "9943863916"; 
  const message = "Hello! I'm interested in your services.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-7 z-50"
    >
      <div className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out">
        <FaWhatsapp className="text-2xl" />
      </div>
    </a>
  );
};

export default WhatsAppUp;
