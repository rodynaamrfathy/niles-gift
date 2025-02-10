import { useState, useEffect } from "react";
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submissionStatus, setSubmissionStatus] = useState<{ message: string, isError: boolean } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setSubmissionStatus({ message: "All fields are required.", isError: true });
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setSubmissionStatus({ message: "Please enter a valid email address.", isError: true });
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    if (!serviceId || !templateId || !userId) {
      console.error('EmailJS environment variables are not set.');
      return;
    }

    setIsLoading(true);
    emailjs.send(serviceId, templateId, formData, userId)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setSubmissionStatus({ message: "Thank you for reaching out! We will get back to you soon.", isError: false });
        setFormData({ name: "", email: "", message: "" });
      }, (error) => {
        console.error('Failed to send email:', error);
        setSubmissionStatus({ 
          message: error.text || "Failed to send the message. Please try again.", 
          isError: true 
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (submissionStatus) {
      const timer = setTimeout(() => {
        setSubmissionStatus(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submissionStatus]);

  return (
    <section id="contact" className="py-16 px-6 md:px-20 bg-[#D4A373] text-center text-white">
      <h2 className="text-3xl font-bold">Contact Us</h2>
      <p className="mt-4">Reach out to us via phone or email</p>
      
      <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
        <a 
          href="tel:+201055900142" 
          className="flex items-center text-lg font-semibold text-[#1B4D3E] hover:text-[#0F2F25] transition-colors duration-300"
          aria-label="Call us at +201055900142"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          +201055900142
        </a>

        <a 
          href="mailto:info@nilesgift.com" 
          className="flex items-center text-lg font-semibold text-[#1B4D3E] hover:text-[#0F2F25] transition-colors duration-300"
          aria-label="Email us at info@nilesgift.com"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          info@nilesgift.com
        </a>
      </div>

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
        <button 
          type="submit" 
          className="bg-[#1B4D3E] py-3 px-6 text-white rounded-full w-full sm:w-auto disabled:opacity-50 hover:bg-[#0F2F25] focus:outline-none focus:ring-2 focus:ring-[#1B4D3E] focus:ring-offset-2" 
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Submit'}
        </button>
      </form>

      {submissionStatus && (
        <div className={`mt-4 p-4 rounded-md ${submissionStatus.isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {submissionStatus.message}
        </div>
      )}
    </section>
  );
}