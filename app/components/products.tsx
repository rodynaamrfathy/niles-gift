import React from 'react';
import Image from 'next/image';
import '../styles/products.css';

const Products = () => {
  return (
    <div className="bg-[#F5F5F5] py-8 px-4">
      <h2 className="text-4xl font-bold text-[#1B4D3E] text-center mb-6">Our Products</h2>
      <p className="text-lg text-[#333333] leading-relaxed mb-8 text-center">
        We offer a wide range of organic products that cater to your needs.
      </p>
      
      {/* Products Grid */}
      <div className="products-grid">
        <div className="product-item">
          <div className="product-image">
            <Image 
              src="/images/organic-herbals.jpg" 
              alt="Organic Herbals"
              width={300}
              height={200}
              objectFit="cover"
            />
          </div>
          <div className="product-text">
            <h2 className="text-2xl font-semibold text-[#1B4D3E] mt-10">Organic Herbals</h2>
            <p className="text-sm text-[#555] mt-2">
              Nature’s finest herbs to enhance your well-being, Herbs, Flowers and Spices, and Seeds
            </p>
          </div>
        </div>
        <div className="product-item">
          <div className="product-image">
            <Image 
              src="/images/oils.jpg"
              alt="Oils"
              width={300}
              height={200}
              objectFit="cover"
            />
          </div>
          <div className="product-text">
            <h2 className="text-2xl font-semibold text-[#1B4D3E] mt-10">Oils</h2>
            <p className="text-sm text-[#555] mt-2">
              Pure and organic oils for your skin and health.
            </p>
          </div>
        </div>
        <div className="product-item">
          <div className="product-image">
            <Image 
              src="/images/aloe-vera.jpg"
              alt="Aloe Vera"
              width={300}
              height={200}
              objectFit="cover"
            />
          </div>
          <div className="product-text">
            <h2 className="text-2xl font-semibold text-[#1B4D3E] mt-10">Aloe Vera</h2>
            <p className="text-sm text-[#555] mt-2">
              Refresh and hydrate with natural Aloe Vera products.
            </p>
          </div>
        </div>
        <div className="product-item">
          <div className="product-image">
            <Image 
              src="/images/other-products.jpg"
              alt="Other Products"
              width={300}
              height={200}
              objectFit="cover"
            />
          </div>
          <div className="product-text">
            <h2 className="text-2xl font-semibold text-[#1B4D3E] mt-10">Other Products</h2>
            <p className="text-sm text-[#555] mt-2">
              Explore other organic products tailored to your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
