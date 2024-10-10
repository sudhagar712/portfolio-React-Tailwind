import React, { useRef, useState } from "react";
import contactpic from "../../assets/projects/programer.gif";
import { FaLinkedin } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
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
          <h2 className={`my-10 text-center text-4xl lg:text-6xl font-extrabold ${theme === "dark" ? "text-stone-400" : "text-black"} `}>Get in Touch</h2>
          <div className=" tracking-tighter">
            
            <div className="flex justify-center min-h-screen">
              <form
                ref={form}
                onSubmit={handleSubmit}
                className="w-full  lg:w-3/4  mt-10"
              >
                <h2 className={`text-3xl lg:text-5xl  text-center mb-9 ${theme === "dark" ? "text-stone-400":"text-black"}`}>Contact Me</h2>

               <div className={`grid grid-cols-1 md:grid-cols-2 gap-6  ${theme === "dark" ? "bg-transparent" : "bg-transparent"}`}>
              {/* Left Side - Image */}
              <div className="flex justify-center items-center">
               <img
                   src={contactpic}
                  alt="Description"
                    className="rounded-lg shadow-lg object-cover w-full h-auto"
                        />
                       

                    </div>

           {/* Right Side - Input Fields */}
             <div className="mt-12">
          <div className="mb-6">
           <input
          type="text"
           name="name"
          id="name"
            placeholder="Your Name"
           value={formData.name}
           onChange={handleChange}
          required
          className={`w-full px-5 p-3 outline-0 ${theme === "dark" ? "bg-white text-cyan-400" : "bg-black text-white"}`}
          />
    </div>

    <div className="mb-6">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className={`w-full px-5 p-3 outline-0 ${theme === "dark" ? "bg-white text-cyan-400" : "bg-black text-white"}`}
      />
    </div>

    <div className="mb-6">
      <input
        type="text"
        name="subject"
        id="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        required
         className={`w-full px-5 p-3 outline-0 ${theme === "dark" ? "bg-white text-cyan-400" : "bg-black text-white"}`}
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
        className={`w-full px-5 p-3 outline-0 ${theme === "dark" ? "bg-white text-cyan-400" : "bg-black text-white"}`}
        rows="5"
      />
    </div>

    <div className="text-center">
      <button
        type="submit"
         className={`rounded cursor-pointer shadow-xl p-4  text-sm  mb-10 ${theme === "dark" ? "bg-white border-2 text-black border-[#fcea4c] " : "bg-black text-white border-2 border-cyan-400"}`}
      >
        Send Message
      </button>
    </div>
  </div>
</div>

              </form>
              
            </div>
            <hr className="border-t border-stone-900  "/>
 <div className="m-8 flex items-center justify-center gap-4 text-2xl sm:text-4xl">
        <a
          href="https://www.linkedin.com/in/sudhagar-m-284198283/"
          target="_blank"
          className={` hover:text-blue-500 active:text-blue-500 transition-colors duration-300 ${
            theme === "dark" ? "text-white" : "text-black"
          } `}
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/sudhagar712"
          target="_blank"
          className={` ${theme === "dark" ? "text-white" : "text-black"} `}
        >
          <VscGithubInverted />
        </a>

        <a
          href="https://www.instagram.com/sudhagar_msr/"
          target="_blank"
          className={` hover:text-pink-500 active:text-pink-500 transition-colors duration-300  ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/9943863916?text=Hello%20there!%20I%20have%20a%20question%20for%20you."
          target="_blank"
          rel="noopener noreferrer"
          className={` hover:text-[#25D366] active:text-[#25D366] transition-colors duration-300  ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          <FaWhatsapp />
        </a>
      </div>







            
            
            <div className="flex flex-col  lg:flex lg:flex-row justify-center  gap-4">
 <p className={`my-4 text-xl lg:text-xl font-light ${theme === "dark" ? "text-[#fcea4c]" : "text-[#65d0ea]"}`}>{CONTACT.Location} ||</p>
                      <p className={`my-4 text-xl lg:text-xl font-light ${theme === "dark" ? "text-[#fcea4c]" : "text-[#65d0ea]"}`}>{CONTACT.phoneNo} ||</p>
                   <a className={`my-4 text-xl lg:text-xl font-light ${theme === "dark" ? "text-[#fcea4c]" : "text-[#65d0ea]"}`} href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </div>


            
            
          </div>

          <ToastContainer />
        </div>
      </section>
    </>
  );
};

export default Contact;
