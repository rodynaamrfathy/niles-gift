import { useState } from "react";
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submissionStatus, setSubmissionStatus] = useState<{ message: string, isError: boolean } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      formData,
      'YOUR_USER_ID' // Replace with your EmailJS user ID
    )
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      setSubmissionStatus({ message: "Thank you for reaching out! We will get back to you soon.", isError: false });
      setFormData({ name: "", email: "", message: "" }); // Clear form fields after submission
    }, (error) => {
      console.error('Failed to send email:', error);
      setSubmissionStatus({ message: "Failed to send the message. Please try again.", isError: true });
    });
  };

  return (
    <section id="contact" className="py-16 px-6 md:px-20 bg-[#D4A373] text-center text-white">
      <h2 className="text-3xl font-bold">Contact Us</h2>
      <p className="mt-4">Reach out to us via phone or email</p>
      
      <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
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
          info@nilesgift.com
        </a>
      </div>

      {/* Contact Form */}
      <form className="mt-6 max-w-md w-full mx-auto px-4 sm:px-0" onSubmit={handleSubmit}>
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
          className="w-full p-3 border border-gray-300 rounded-md mb-4 text-[#1B4D3E] h-32 resize-none"
          required
        />
        <button type="submit" className="bg-[#1B4D3E] py-3 px-6 text-white rounded-full w-full sm:w-auto">
          Submit
        </button>
      </form>

      {/* Customized Message */}
      {submissionStatus && (
        <div className={`mt-4 p-4 rounded-md ${submissionStatus.isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {submissionStatus.message}
        </div>
      )}
    </section>
  );
}