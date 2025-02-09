"use client"
import Link from 'next/link';
import Head from "next/head";
import Image from "next/image";
import Header from "./components/header";
import ContactInfo from "./components/contact_info";
import NewsSection from "./components/news";
import MissionSection from "./components/mission";
import ProductsSection from "./components/products";
import Footer from "./components/footer";


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
                  priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-6 sm:px-10">
                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#F9F5ED] leading-tight">
                    Nature’s Finest, Delivered Worldwide
                  </h1>
                  <p className="mt-4 text-base sm:text-lg md:text-xl text-[#F9F5ED] max-w-2xl">
                    Premium organic herbs, Aloe Vera, and sustainable agricultural products from Egypt.
                  </p>
                  <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link href="/products">
                      <button className="bg-[#D4A373] px-6 py-3 rounded-full text-white text-lg font-semibold hover:bg-[#C08A5E] transition">
                        Explore Our Products
                      </button>
                    </Link>

                    <Link href="#contact">
                      <button className="border border-white px-6 py-3 rounded-full text-white text-lg font-semibold hover:bg-white hover:text-black transition">
                        Get In Touch
                      </button>
                    </Link>
                  </div>
                </div>
              </section>

              {/* About Section */}
              <section id="about" className="py-16 px-6 md:px-20 bg-[#F5F5F5]">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
                  {/* Text Content */}
                  <div className="max-w-2xl text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#1B4D3E] mb-6">
                      Who Is Nile’s Gift?
                    </h2>
                    <p className="text-base sm:text-lg text-[#333333] leading-relaxed">
                      Nile’s Gift is a leading exporter of high-quality, organic, and natural products,
                      catering to the growing global demand for healthy, sustainable, and premium agricultural goods.
                      We source the finest herbs, spices, oils, and Aloe Vera, ensuring our products meet
                      international standards. We actively engage in product selection, processing, quality
                      control, and logistics to deliver exceptional value to our global partners.
                    </p>
                  </div>

                  {/* Logo Image */}
                  <div className="mt-8 md:mt-0 md:ml-8 flex justify-center">
                    <Image
                      src="/Logo.png"
                      alt="Nile's Gift Logo"
                      width={400}
                      height={400}
                      className="max-h-[250px] sm:max-h-[300px] md:max-h-[400px] w-auto"
                    />
                  </div>
                </div>
              </section>

          {/* Features Section */}
            <section className="py-16 px-6 md:px-20 bg-[#F5F5F5] text-center">
            <h2 className="text-3xl font-bold text-[#1B4D3E]">Why Choose Nile’s Gift?</h2>
            <div className="mt-8 overflow-x-scroll flex space-x-4 p-4 rounded-lg bg-[#F5F5F5] no-scrollbar">
            {[
                { src: "/Features/Custom_Crop_Cultivation.png", title: "Custom Crop Cultivation", desc: "Tailored planting schedules to meet client needs." },
                { src: "/Features/Private_Labeling.png", title: "Private Labeling", desc: "Brand our premium products as your own." },
                { src: "/Features/Quality_Assurance.png", title: "Quality Assurance", desc: "Strict quality control measures to ensure excellence." },
                { src: "/Features/Certified_organic_products.png", title: "Certified organic products", desc: "Environmentally friendly farming methods." },
                { src: "/Features/trusted_farmers.png", title: "Direct Sourcing", desc: "We source directly from trusted farmers." },
                { src: "/Features/LogisticsExport_Management.png", title: "Logistics & Export Management", desc: "Efficient global shipping and customs support." },
              ].map((feature, index) => (
                <div key={index} className="bg-[#F5F5F5] p-6 shadow rounded-lg min-w-[250px]">
                  <Image src={feature.src} alt={feature.title} width={150} height={150} />
                  <h3 className="text-xl font-semibold text-[#1B4D3E]">{feature.title}</h3>
                  <p className="text-gray-600 mt-2">{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Other Sections */}
          <MissionSection />
          <ProductsSection />
          <NewsSection />
          <ContactInfo />
        </div>
      </div>
      <Footer />
    </>
  );
}
