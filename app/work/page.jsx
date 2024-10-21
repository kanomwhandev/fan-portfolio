"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BsGithub, BsFacebook } from "react-icons/bs";
import { FaGlobe, FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "The Food Menu",
    description: "This is sample template food menu in the resteraunt website.",
    stack: ["HTML5", "CSS", "JavaScript"],
    image: "/assets/work/foodmenu.png",
    github: "https://github.com/kanomwhandev/Food_Resteraunt",
  },
  {
    title: "Number Game",
    description:
      "Fun number guessing game that will invite you to be the one who can guess the answer.",
    stack: ["HTML5", "CSS", "Javascript"],
    image: "/assets/work/numbergame.png",
    github: "https://github.com/kanomwhandev/Number-game",
  },
  {
    title: "Mind Heart",
    description:
      "this website made you better fleeling , it's can help you write something stuggle on you mind to note",

    stack: ["HTML5", "CSS", "JavaScript"],
    image: "/assets/work/mind.png",
    github: "https://github.com/kanomwhandev/Mind_heart",
  },
  {
    title: "ResterauntAPI",
    description: "This is try to get data from ResterauntAPI.",
    stack: ["HTML5", "CSS", "JavaScript"],
    image: "/assets/work/apirest.png",
    github: "https://github.com/kanomwhandev/ResterauntApi",
  },
  {
    title: "DataScience",
    description:
      "This is try to analysis about IMDB rating of Producer and Report of Hapiness of The world in 2021",
    stack: [
      "Python",
      "Statics",
      "Pandas",
      "Numpy",
      "Matplotlib",
      "Seaborn",
      "google colab",
    ],
    image: "/assets/work/datascigdp.png",
    github:
      "https://colab.research.google.com/drive/1TJSl5OMPH83S9U-80cARV0h5Otu0l3lL?usp=sharing",
  },
];

const personalWorks = [
  {
    title: "Just1Click",
    description:
      "AI Knowledge sharing in Facebook, IG and Art Gallery Website, please like and follow me ",
    image: "/assets/work/j1c.jpg", // ระบุ path ของรูปภาพ
    facebook: "https://www.facebook.com/Just1clicked/",
  },
  {
    title: "MJ Shop",
    description:
      "My digital arts shop on AdobeStock. The product was conducted by me and produced by AI",
    image: "/assets/work/no.png", // ระบุ path ของรูปภาพ
    shop: "https://stock.adobe.com/th/contributor/212096923/mj?load_type=author&prev_url=detail",
  },
];

const Work = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // ฟังก์ชันเพื่อเปิด modal เมื่อคลิกที่ภาพ
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // ฟังก์ชันเพื่อปิด modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
        >
          My Projects
        </motion.h2>

        <motion.div
          className="grid gap-10 md:grid-cols-2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub className="text-white text-3xl hover:text-accent" />
                </a>
              </div>
              <p className="text-white/80 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-accent text-sm text-white px-2 py-1 rounded-lg "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div
                role="button"
                tabIndex={0}
                className="relative w-full h-52 overflow-hidden rounded-lg cursor-pointer"
                onClick={() => handleImageClick(project.image)} // เมื่อคลิกภาพ
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleImageClick(project.image);
                  }
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* My Personal Works Section */}
        <motion.h2
          className="text-3xl font-bold text-center my-10"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
        >
          My Personal Works
        </motion.h2>

        <motion.div
          className="grid gap-10 md:grid-cols-2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
          }}
        >
          {personalWorks.map((work, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
              }}
            >
              <div className="flex flex-col items-center mb-4">
                <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden">
                  <Image
                    src={work.image}
                    alt={work.title}
                    layout="fill"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white">{work.title}</h3>
              </div>
              <p className="text-white/80 mb-4 text-center">
                {work.description}
              </p>
              <div className="flex justify-center gap-4">
                {work.facebook && (
                  <a
                    href={work.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsFacebook className="text-white text-3xl hover:text-accent" />
                  </a>
                )}
                {work.website && (
                  <a
                    href={work.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGlobe className="text-white text-3xl hover:text-accent" />
                  </a>
                )}
                {work.shop && (
                  <a href={work.shop} target="_blank" rel="noopener noreferrer">
                    <FaShoppingCart className="text-white text-3xl hover:text-accent" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal เพื่อขยายภาพ */}
        {selectedImage && (
          <motion.div
            role="dialog"
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={closeModal} // เมื่อคลิกเพื่อปิด modal
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                closeModal();
              }
            }}
            tabIndex={-1}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.1, duration: 0.1, ease: "easeIn" },
            }}
          >
            <div className="relative w-full h-full max-w-3xl max-h-[80vh]">
              <Image
                src={selectedImage}
                alt="Expanded Image"
                layout="fill"
                className="object-contain"
              />
              <button
                className="absolute top-4 right-4 text-white text-3xl font-bold"
                onClick={closeModal}
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Work;
