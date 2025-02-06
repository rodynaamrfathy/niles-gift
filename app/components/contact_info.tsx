import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! We will get back to you soon.");
  };

  return (
    <section id="contact" className="py-16 px-6 md:px-20 bg-[#D4A373] text-center text-white">
      <h2 className="text-3xl font-bold">Contact Us</h2>
      <p className="mt-4">Reach out to us via phone or email</p>
      
      <div className="mt-6 flex justify-center items-center gap-8">
        {/* Phone Number */}
        <a href="tel:+201001607845" className="flex items-center text-lg font-semibold text-[#1B4D3E] hover:text-[#0F2F25] transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          +201001607845
        </a>

        {/* Email Address */}
        <a href="mailto:hlabib@nilesgift.com" className="flex items-center text-lg font-semibold text-[#1B4D3E] hover:text-[#0F2F25] transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          hlabib@nilesgift.com
        </a>
      </div>

      <form className="mt-6 max-w-md mx-auto" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name"
          placeholder="Name" 
          value={formData.name} 
          onChange={handleChange} 
          className="w-full p-3 border border-gray-300 rounded-md mb-4 text-[#1B4D3E]" 
          required
        />
        <input 
          type="email" 
          name="email"
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange} 
          className="w-full p-3 border border-gray-300 rounded-md mb-4 text-[#1B4D3E]" 
          required
        />
        <textarea 
          name="message"
          placeholder="Message" 
          value={formData.message} 
          onChange={handleChange} 
          className="w-full p-3 border border-gray-300 rounded-md mb-4 text-[#1B4D3E]"
          required
        />
        <button type="submit" className="bg-[#1B4D3E] py-3 px-6 text-white rounded-full">Submit</button>
      </form>
    </section>
  );
}
