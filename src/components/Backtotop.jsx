import React from "react";

const Backtotop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center shadow-[0_0_0_3px_rgba(0,255,255,0.25)] overflow-hidden transition-all duration-300 hover:h-20 hover:bg-gray-600"
    >
      <svg
        className="w-3 transition-transform duration-300"
        viewBox="0 0 384 512"
      >
        <path
          d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
          fill="white"
        />
      </svg>
    </button>
  );
};

export default Backtotop;