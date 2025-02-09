import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={`fixed top-0 left-0 w-full py-4 px-6 bg-[#1B4D3E] transition-all duration-300 ${
        scrolled ? "opacity-90 shadow-md" : "opacity-100"
      } z-50`}
    >
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Image src="/Logo.png" alt="Nile’s Gift Logo" width={50} height={50} />
          <h1 className="text-xl font-bold text-white">Nile’s Gift</h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Navigation */}
        <nav
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-[#1B4D3E] md:bg-transparent md:flex transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 text-center md:text-left">
            <li className="py-2 md:py-0">
              <Link href="#about" className="text-white hover:text-[#5E81AC] block px-6 md:px-0">
                About Us
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <Link href="#products" className="text-white hover:text-[#5E81AC] block px-6 md:px-0">
                Products
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <Link href="#news" className="text-white hover:text-[#5E81AC] block px-6 md:px-0">
                News
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <Link href="#contact" className="text-white hover:text-[#5E81AC] block px-6 md:px-0">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
