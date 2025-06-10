import React, { useRef, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.css";

import { motion } from "framer-motion";

const ContainerVariants = {
  hidden: {
    opacity: 0,
    x: -100
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5
    }
  }
};

const ChildVariants = {
  hidden: {
    opacity: 0,
    x: -100
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 }
  }
};




const Contact = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
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
        "service_zhrbu3o",
        "template_o8nvgf4",
        form.current,
        "CtmRn_PKCrIyRhg_o"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          toast.error("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <section id="contact" className="lg:min-h-screen py-5 p-6 mb-[20px] ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <div>
          <motion.h2
            variants={ChildVariants}
            className={`pb-2 text-5xl   lg:text-6xl font-bold tracking-tighter ${
              theme === "dark" ? "text-stone-400" : "text-black"
            } mb-3`}
          >
            Lets talk about &nbsp;
            <span
              className={`${
                theme === "dark" ? "text-[#fcea4c]" : "text-cyan-400"
              }`}
            >
              everything!
            </span>
          </motion.h2>
        </div>

        {/* Right Side - Form */}
        <form ref={form} onSubmit={sendEmail} className=" space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 uppercase"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-md bg-gray-200 focus:outline-none"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 uppercase"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-md bg-gray-200 focus:outline-none"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 uppercase"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-1 p-3 text-black rounded-md bg-gray-200 focus:outline-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full  dark:bg-yellow-500 text-white p-3 rounded-md font-bold bg-[#24d3ee] dark:hover:bg-yellow-600 transition"
          >
            Send Message
          </button>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mt-6 text-2xl">
            <a
              href="https://www.linkedin.com/in/sudhagar-m-284198283/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-blue-600" />
            </a>
            <a
              href="https://github.com/sudhagar712"
              target="_blank"
              rel="noopener noreferrer"
            >
              <VscGithubInverted className="hover:text-gray-800" />
            </a>
            <a
              href="https://www.instagram.com/sudhagar_msr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-pink-500" />
            </a>
            <a
              href="https://wa.me/9943863916?text=Hello%20there!%20I%20have%20a%20question%20for%20you."
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="hover:text-green-500" />
            </a>
          </div>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
