import React, { useRef, useState } from "react";
import { CONTACT } from '../../constants';
import { ToastContainer, toast } from "react-toastify";
import emailjs from "emailjs-com";

const Contact = ({ theme }) => {
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

    const { name, email, message } = formData;

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
          console.error(error.text);
          toast.error("Failed to send the message, please try again.");
        }
      );
  };

  const handleSubmit = (e) => {
    sendEmail(e);
  };

  return (
    <>
      <section id="contact">
        <div className="border-t border-stone-900 pb-20">
          <h2 className={`my-10 text-center text-4xl lg:text-6xl font-extrabold ${ theme === "dark" ? "text-white" : "text-stone-400"} `}>Get in Touch</h2>
          <div className="text-center tracking-tighter">
            <p className="my-4 text-3xl lg:text-5xl font-dancing text-cyan-400 font-extrabold ">{CONTACT.Location}</p>
            <p className="my-4 text-xl lg:text-3xl font-dancing text-cyan-400 font-extrabold ">{CONTACT.phoneNo}</p>
            <a className="my-4 text-3xl lg:text-3xl font-dancing text-cyan-400 font-extrabold " href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>

            <div className="flex justify-center min-h-screen">
              <form
                ref={form}
                onSubmit={handleSubmit}
                className="w-full lg:w-3/4 p-8 mt-10"
              >
                <h2 className="text-3xl font-bold text-center mb-6 text-cyan-400">Contact Me</h2>

                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 p-10 py-5 outline-0 border-2 border-cyan-400 rounded-full ${theme === "dark" ? "bg-white text-cyan-400" : "bg-stone-200 text-black"}`}
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
                    className={`w-full px-4 p-10 py-5 outline-0 border-2 border-cyan-400 rounded-full ${theme === "dark" ? "bg-white text-cyan-400" : "bg-stone-200 text-black"}`}
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
                    className={`w-full px-4 p-10 py-5 outline-0 border-2 border-cyan-400 rounded-full ${theme === "dark" ? "bg-white text-cyan-400" : "bg-stone-200 text-black"}`}
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
                    className={`w-full px-10 p-10 py-5 outline-0 border-2 border-cyan-400 rounded-full ${theme === "dark" ? "bg-white text-cyan-400" : "bg-stone-200 text-black"}`}
                    rows="5"
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className={`rounded-full cursor-pointer shadow-xxl p-4 px-8 text-sm mx-3 mb-10 ${theme === "dark" ? "bg-white border-2 text-black border-cyan-400" : "bg-stone-100 text-black border-2 border-cyan-400"}`}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          <ToastContainer />
        </div>
      </section>
    </>
  );
};

export default Contact;
