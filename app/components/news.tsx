import Image from 'next/image';

const NewsSection = () => {
    return (
      <section id="news" className="py-12 px-6 md:px-16 text-center bg-[#F5F5F5] mt-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">Nile’s Gift News</h2>
          
          {/* News Image with Link */}
          <div className="mb-6 flex justify-center">
            <a 
              href="https://www.youtube.com/watch?v=noPT-uk-W1w" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block w-full max-w-md sm:max-w-lg"
            >
              <Image 
                src="/euro-news.jpg"
                alt="Nile's Gift featured in Euronews" 
                width={600} 
                height={400} 
                className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>

          {/* News Text */}
          <p className="text-xl text-[#333333] leading-relaxed mb-4 font-medium">
            🌍 Nile’s Gift has been featured in Euronews!
          </p>
          <p className="text-md text-[#555555] leading-relaxed mb-6">
            As an avant-garde producer, we utilize innovative methods to deliver high-quality, organic, and natural products. Our commitment to sustainability and excellence has garnered recognition in various publications, highlighting our role in meeting the growing global demand for premium agricultural goods.
          </p>

          {/* Call-to-Action */}
          <a 
            href="https://www.youtube.com/watch?v=noPT-uk-W1w" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-[#1B4D3E] text-white px-6 py-3 rounded-lg text-lg font-semibold transition hover:bg-[#145C39]"
          >
            Watch the Feature on Euronews
          </a>
        </div>
      </section>
    );
};

export default NewsSection;
