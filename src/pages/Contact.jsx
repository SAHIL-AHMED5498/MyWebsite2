import React from "react";
import emailjs from '@emailjs/browser'
import { useState } from "react";

const Contact = () => {
  const [isSending, setIsSending] = useState(false); 


  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    console.log("email being sent");

    emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID, 
        import.meta.env.VITE_TEMPLATE_ID, 
        e.target, 
        import.meta.env.VITE_PUBLIC_ID
    )
    .then((result) => {
        console.log("Success:", result.text);
        e.target.reset();  // Clears the form on success
        setIsSending(false);
    })
    .catch((error) => {
        console.log("Error:", error.text);
        setIsSending(false);
    });
};



  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex items-start justify-center px-6 py-6">
      <div className="max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Feel free to reach out for any inquiries or collaborations!
        </p>

        {/* Contact Form */}
        <form className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4" name="contact" onSubmit={sendEmail}>
          <input
          name="from_name"
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
          name="email_from"
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
          name="message"
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
          
            type="submit"
            className={`w-full py-3 rounded-md transition-all duration-300 font-semibold ${
              isSending
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
