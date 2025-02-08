const Footer = () => {
    return (
      <footer className="bg-[#1B4D3E] text-white py-4 px-6 flex flex-col items-center text-center w-full mt-10">
        <p className="text-lg font-semibold">&copy; {new Date().getFullYear()} Nile’s Gift. All rights reserved.</p>
        <p className="text-sm opacity-70 mt-1">
          Website designed & developed by 
          <span className="font-semibold"> Rodyna Amr</span>. 
          Contact: 
          <a 
            href="mailto:rodynaamr@icloud.com" 
            className="underline hover:text-gray-300 transition-colors">
            rodynaamr@icloud.com
          </a>
        </p>
      </footer>
    );
  };
  
  export default Footer;
  