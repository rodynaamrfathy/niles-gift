"use client";

import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submissionStatus, setSubmissionStatus] = useState<{ message: string; isError: boolean } | null>(null);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_EMAILJS_USER_ID) {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_message: formData.message,
    };

    console.log("Sending email with data:", templateParams);
    console.log("ENV Variables:", {
      serviceID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      templateID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      userID: process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
    });

    if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || !process.env.NEXT_PUBLIC_EMAILJS_USER_ID) {
      console.error("❌ Missing EmailJS environment variables!");
      setSubmissionStatus({ message: "Configuration error. Please try again later.", isError: true });
      return;
    }

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );
      console.log("✅ Email sent successfully!", response);
      setSubmissionStatus({ message: "Thank you for reaching out! We will get back to you soon.", isError: false });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("❌ Failed to send email:", error);
      setSubmissionStatus({ message: "Failed to send the message. Please try again.", isError: true });
    }
  };

  return (
    <section id="contact" className="py-16 px-6 md:px-20 bg-[#D4A373] text-center text-white">
      <h2 className="text-3xl font-bold">Contact Us</h2>
      <p className="mt-4">Reach out to us via phone or email</p>

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

      {submissionStatus && (
        <div className={`mt-4 p-4 rounded-md ${submissionStatus.isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {submissionStatus.message}
        </div>
      )}
    </section>
  );
}
