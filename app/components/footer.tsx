const Footer = () => {
  return (
    <footer className="bg-[#1B4D3E] text-white py-6 px-4 md:px-6 flex flex-col items-center text-center w-full mt-10">
      <p className="text-lg font-semibold">&copy; {new Date().getFullYear()} Nile’s Gift. All rights reserved.</p>

      <p className="text-sm opacity-80 mt-2 max-w-xs md:max-w-none">
        Website designed & developed by 
        <span className="font-semibold"> Rodyna Amr</span>. 
      </p>

      <p className="text-sm opacity-80 mt-1">
        Contact: 
        <a 
          href="mailto:rodynaamr@icloud.com" 
          className="underline hover:text-gray-300 transition-colors ml-1">
          rodynaamr@icloud.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
