"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+60) 92-3959671",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "affan.s@ku.th",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Kasetsart University, Kamphaeng Saen",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.6, ease: "easeIn" },
      }}
      className="py-6 bg-primary"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-accent mb-4">Contact Me</h2>
        <p className="text-lg text-white mb-6 ">
        Thank you for taking the time to view my work. 
        </p>
        <p className="text-lg text-white mb-6 ">
        If you're interested, I would be happy to work together, and I'm fully committed to it
        </p>
        <hr className="border-t border-gray-400 w-1/3 mx-auto mb-8" />
        
        <div className="grid gap-6 mb-6">
          {info.map((item, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center items-center gap-2 text-accent">
                <div className="text-3xl">{item.icon}</div>
                <h3 className="text-2xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-xl text-white mt-2">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <img
            src="assets/Profile/office.gif" // ระบุที่อยู่ของรูปภาพตามความต้องการ
            alt="Contact illustration"
            className="w-1/2 h-auto object-cover"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
