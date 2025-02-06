import Image from 'next/image';

const NewsSection = () => {
    return (
      <section id="news" className="py-10 px-6 md:px-16 text-center bg-[#F5F5F5] mt-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#1B4D3E] mb-6">Nile’s Gift News</h2>
          <div className="mb-6">
          <a 
              href="https://www.youtube.com/watch?v=noPT-uk-W1w" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#1B4D3E] hover:underline"
            >
            <Image 
              src="/euro-news.jpg"
              alt="Nile's Gift featured in Euronews" 
              width={400} 
              height={250} 
              className="w-full max-w-xs mx-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
            </a>
          </div>
          <p className="text-xl text-[#333333] leading-relaxed mb-4">
            Nile’s Gift has been featured in Euronews
          </p>
          <p className="text-md text-[#555555] leading-relaxed mb-4">
            Nile’s Gift has been featured in Euronews as an avant-garde producer that utilizes innovative methods to deliver high-quality, organic, and natural products. Our commitment to sustainability and excellence has garnered recognition in various publications, highlighting our role in meeting the growing global demand for premium agricultural goods.
          </p>
          <p>
            {/* Link to the Euronews feature 
            <a 
              href="https://www.youtube.com/watch?v=noPT-uk-W1w" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#1B4D3E] hover:underline"
            >
              Watch the feature on Euronews
            </a>
            */}
          </p>
        </div>
      </section>
    );
};

export default NewsSection;
