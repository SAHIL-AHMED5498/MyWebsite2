
import React, { useState } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    const emailPromise = emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_PUBLIC_ID
    );

    toast.promise(emailPromise, {
      loading: "Sending email...",
      success: <b>Email sent successfully!</b>,
      error: <b>Could not send email.</b>,
    });

    emailPromise
      .then(() => {
        e.target.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (<>      <section id="contact" className="bg-canvas dark:bg-primary">
        <div className="max-w-6xl mx-auto px-6 py-8 sm:py-10 space-y-4">
          <div className="space-y-1">
            <span className="font-mono text-caption-mono uppercase text-mute">
              Get in touch
            </span>
            <h2 className="text-display-lg text-ink dark:text-on-primary">
              Contact
            </h2>
            <p className="text-body-md text-body max-w-2xl">
              Have an opportunity, project idea, or collaboration in mind? Drop
              me a message and I&rsquo;ll get back to you.
            </p>
          </div>

          <form
            className="card-marketing-large max-w-lg w-full space-y-4"
            onSubmit={sendEmail}
          >
            <input
              name="from_name"
              type="text"
              placeholder="Your Name"
              required
              className="form-input w-full"
            />
            <input
              name="reply_to"
              type="email"
              placeholder="Your Email"
              required
              className="form-input w-full"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="form-input w-full !h-auto py-3 resize-none"
            />
            <button
              type="submit"
              disabled={isSending}
              className={`w-full button-primary justify-center ${
                isSending ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section></>)}




export default Contact