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
      className={`fixed top-0 left-0 w-full py-4 px-6 flex justify-between items-center bg-[#1B4D3E] transition-opacity duration-300 ${
        scrolled ? "opacity-80" : "opacity-100"
      } z-50`} 
    >
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        <Image src="/Logo.png" alt="Nile’s Gift Logo" width={50} height={50} />
        <h1 className="text-xl font-bold text-white">Nile’s Gift</h1>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link href="#about" className="hover:text-[#5E81AC]">
              About Us
            </Link>
          </li>
          <li>
            <Link href="#products" className="hover:text-[#5E81AC]">
              Products
            </Link>
          </li>
          <li>
            <Link href="#news" className="hover:text-[#5E81AC]">
              News
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-[#5E81AC]">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
