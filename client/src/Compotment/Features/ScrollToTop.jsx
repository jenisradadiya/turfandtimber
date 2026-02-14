import React, { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="
        fixed bottom-20 right-6 z-50
         bg-green-500 hover:bg-green-600
        text-white p-4 rounded-full
        shadow-lg transition
      "
      aria-label="Scroll to top"
    >
      <MdKeyboardDoubleArrowUp />
    </button>
  );
};

export default ScrollToTop;
