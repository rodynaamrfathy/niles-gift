import React from 'react';
import Image from 'next/image';

const MissionSection = () => {
  return (
    <section className="py-16 px-6 md:px-20 text-left bg-[#F5F5F5] flex flex-col md:flex-row items-center">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image 
          src="/mission.jpg"
          alt="Mission Image" 
          width={600} 
          height={400}
          className="w-full max-w-md md:max-w-none h-auto object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-12 text-center md:text-left">
        <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">Our Mission</h2>
        <p className="text-lg text-[#333333] leading-relaxed">
          Our mission is to connect local growers and manufacturers with global buyers while ensuring sustainability, product traceability, and consistent quality. We take pride in sourcing directly from trusted producers, fostering long-term partnerships that benefit both communities and consumers worldwide.
        </p>
      </div>
    </section>
  );
};

export default MissionSection;
