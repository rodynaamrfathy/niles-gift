import Image from "next/image";
import Link from "next/link";
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
      className={`fixed top-0 left-0 w-full py-3 px-4 sm:px-8 flex justify-between items-center bg-[#1B4D3E] transition-all duration-300 ${
        scrolled ? "opacity-90 shadow-md py-2" : "opacity-100"
      } z-50`}
    >
      {/* Logo & Branding */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/Logo.png"
          alt="Nile’s Gift Logo"
          width={40}
          height={40}
          className="w-10 h-10 sm:w-12 sm:h-12"
        />
        <h1 className="text-lg sm:text-xl font-bold text-white">Nile’s Gift</h1>
      </Link>
    </header>
  );
};

export default Header;
