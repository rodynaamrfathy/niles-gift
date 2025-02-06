import React from 'react';
import Image from 'next/image';

const MissionSection = () => {
  return (
    <section className="py-16 px-6 md:px-20 text-left bg-[#F5F5F5] flex items-center">
      <div className="max-w-4xl mx-auto flex items-center">
        <div className="w-1/2 pr-6">
          <Image 
            src="/path-to-your-image.jpg" // Adjust the path
            alt="Mission Image" 
            width={600} 
            height={400}
            className="w-full h-auto object-cover" 
          />
        </div>
        <div className="w-1/2">
          <h2 className="text-3xl font-bold text-[#1B4D3E] mb-8">Our Mission</h2>
          <p className="text-lg text-[#333333] leading-relaxed">
            Our mission is to connect local growers and manufacturers with global buyers while ensuring sustainability, product traceability, and consistent quality. We take pride in sourcing directly from trusted producers, fostering long-term partnerships that benefit both communities and consumers worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
