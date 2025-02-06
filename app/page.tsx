"use client"
import Head from "next/head";
import Image from "next/image";
import Header from "./components/header";  // Import the Header component
import ContactInfo from "./components/contact_info";
import NewsSection from "./components/news";
import MissionSection from "./components/mission";
import ProductsSection from "./components/products";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nile’s Gift - Premium Organic Exports</title>
        <meta
          name="description"
          content="Premium organic herbs, Aloe Vera, and sustainable agricultural products from Egypt."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="bg-[#F5F5F5] text-[#F9F5ED]">
        <Header /> 

        <div className="pt-16">
          {/* Hero Section */}
          <section className="relative h-screen text-white">
            <Image
              src="/hero-image.jpeg"
              layout="fill"
              objectFit="cover"
              alt="Hero Background"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-[#F9F5ED]">
                Nature’s Finest, Delivered Worldwide
              </h1>
              <p className="mt-4 text-lg text-[#F9F5ED]">
                Premium organic herbs, Aloe Vera, and sustainable agricultural products from Egypt.
              </p>
              <div className="mt-6 flex space-x-4">
                <button className="bg-[#D4A373] px-6 py-3 rounded-full text-white">
                  Explore Our Products
                </button>
                <button className="border border-white px-6 py-3 rounded-full text-white">
                  Get In Touch
                </button>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-16 px-6 md:px-20 bg-[#F5F5F5]">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
              {/* Text Content */}
              <div className="max-w-2xl text-center md:text-left">
                <h2 className="text-4xl font-bold text-[#1B4D3E] mb-6">
                  Who Is Nile’s Gift?
                </h2>
                <p className="text-lg text-[#333333] leading-relaxed">
                  Nile’s Gift is a leading exporter of high-quality, organic and natural products, catering to the growing global demand for healthy, sustainable, and premium agricultural goods. We source the finest herbs, spices, oils, and Aloe Vera, ensuring that our products meet international standards. We are more than just intermediaries—we actively engage in product selection, processing, quality control, and logistics to deliver exceptional value to our global partners.
                </p>
              </div>

              {/* Logo on the Right - 50% of section height */}
              <div className="mt-8 md:mt-0 md:ml-8 h-1/2">
                <Image
                  src="/Logo.png"
                  alt="Nile's Gift Logo"
                  width={500}
                  height={500}
                  className="h-1/2 w-auto max-h-[300px] md:max-h-[400px]"
                />
              </div>
            </div>
          </section>

          {/* Other Sections */}
          <MissionSection />
          <ProductsSection />
          <NewsSection />
          <ContactInfo />
        </div>
      </div>
    </>
  );
}
