import React, { useRef, useState } from "react";
import { CONTACT } from '../../constants';
import { ToastContainer, toast } from "react-toastify";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const form = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.name.value.trim();
    const email = form.current.email.value.trim();
    const message = form.current.message.value.trim();

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !email || !message) {
      toast.error("Please fill in all fields!");
      return;
    } else if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    emailjs
      .sendForm(
        "service_9dvjwjb",
        "template_40f6ib9",
        form.current,
        "UwNUDfsuW5yjPmOLf"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
          form.current.reset();
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          }); // Reset state
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send the message, please try again.");
        }
      );
  };

  const handleSubmit = (e) => {
    sendEmail(e);
  };

  return (
    <div className="border-t border-stone-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.Location}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>

        <div className="flex justify-center min-h-screen">
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="w-full lg:w-3/4 p-8 mt-10 shadow-lg bg-stone-100 bg-opacity-20 backdrop-blur-lg"
          >
            <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>

            <div className="mb-4">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 outline-0 bg-stone-300 text-black "
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 outline-0 bg-stone-300 text-black "
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 outline-0 bg-stone-300 text-black "
              />
            </div>

            <div className="mb-6">
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 outline-0 bg-stone-300 text-black "
                rows="5"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-stone-500 hover:bg-stone-600 text-white font-bold py-4 px-6 rounded-md transition duration-200 ease-in-out"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Contact;
