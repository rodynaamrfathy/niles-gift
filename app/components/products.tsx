import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Products = () => {
  return (
    <div id="products" className="bg-[#F5F5F5] py-12 px-6 md:px-16">
      <h2 className="text-4xl font-bold text-[#1B4D3E] text-center mb-6">Our Products</h2>
      <p className="text-lg text-[#333333] leading-relaxed mb-8 text-center">
        We offer a wide range of organic products that cater to your needs.
      </p>
      
      {/* Responsive Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-[#F5F5F5]">
        {[
          { name: "Organic Herbals", image: "/images/organic-herbals.jpg", type: "Herbals" },
          { name: "Oils", image: "/images/oils.jpg", type: "Oils" },
          { name: "Aloe Vera", image: "/images/aloe-vera.jpg", type: "Aloe Vera" },
        ].map((product) => (
          <Link 
            key={product.type} 
            href={`/products?category=${encodeURIComponent(product.type)}`} 
            passHref
          >
            <div className="cursor-pointer bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <Image 
                src={product.image} 
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-60 object-cover"
              />
              <div className="p-6 text-center">
                <h2 className="text-2xl font-semibold text-[#1B4D3E]">{product.name}</h2>
                <p className="text-sm text-[#555] mt-2">
                  {product.name === "Organic Herbals"
                    ? "Nature’s finest herbs to enhance your well-being."
                    : product.name === "Oils"
                    ? "Pure and organic oils for your skin and health."
                    : product.name === "Aloe Vera"
                    ? "Refresh and hydrate with natural Aloe Vera products."
                    : "Explore other organic products tailored to your needs."}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {/* View All Products Button */}
      <div className="text-center mt-12">
        <Link href="/products">
          <button className="bg-[#1B4D3E] text-white px-6 py-3 rounded-lg text-lg font-semibold transition hover:bg-[#145C39]">
            View All Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
