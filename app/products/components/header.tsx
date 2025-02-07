import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={`fixed top-0 left-0 w-full py-4 px-6 flex justify-center items-center bg-[#1B4D3E] transition-opacity duration-300 ${
        scrolled ? "opacity-80" : "opacity-100"
      } z-50`}
    >
      {/* Centered Logo and Text */}
      <div className="flex items-center gap-2">
        <Image src="/Logo.png" alt="Nile’s Gift Logo" width={50} height={50} />
        <h1 className="text-xl font-bold text-white">Nile’s Gift</h1>
      </div>
    </header>
  );
};

export default Header;
