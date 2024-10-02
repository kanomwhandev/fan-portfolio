"use client"; // จำเป็นสำหรับการทำงานใน Next.js ที่ใช้ Client-side components

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

// Data for Book Reads section with Like feature
const books = {
  title: "Book Reads",
  description:
    "Here are some books I have read and would recommend. You can like them by clicking the heart icon!",
  items: [
    {
      title: "Money 101 by โค้ชหนุ่ม",
      img: "/assets/money101.jpg",
    },
    {
      title: "Generative Deep Learning",
      img: "/assets/deeplearning.jpg",
    },
    {
      title: "Originals",
      img: "/assets/originals.jpg",
    },
    {
      title: "โคโนะ เก็นโตะ ราชาสมองเพรช",
      img: "/assets/diamonbrain.jpg",
    },
    {
      title: "Richdad Poordad",
      img: "/assets/richdadfordad.jpg",
    },
    {
      title: "The Richest man in babyloan",
      img: "/assets/therichesman.jpg",
    },
    {
      title: "เพาะหุ้นเป็นเห็นผลยั่งยืน",
      img: "/assets/stocktree.jpg",
    },
    {
      title: "STOP Checking the price",
      img: "/assets/stop.jpg",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I've honed my skills through self-directed projects, online courses, and university classes. My learning journey includes intensive curriculum projects with rigorous testing, helping me develop standout abilities. I'm committed to continuous improvement, applying my knowledge practically to grow in my field",
  items: [
    {
      company: "Kasetsart University",
      position: "HTML To React in 12 Hours",
      duration: "2022 - 2023",
    },
    {
      company: "NECTEC, NSTDA",
      position: "Linux and Docker Bootcamp",
      duration: "2021 - 2022",
    },
    {
      company: "DataRockie by Kasidit Stangmongkol",
      position: "DataScience Bootcamp",
      duration: "2021 - 2022",
    },
    {
      company: "AIAT",
      position: "Super AI Engineer Season 4 #1",
      duration: "2021 - 2022",
    },
    {
      company: "Inflobox",
      position: "Cyber Security",
      duration: "2021 - 2022",
    },
    {
      company: "DeepLearning.AI by Andrew NG",
      position: "Machine Learning in Production",
      duration: "2021 - 2022",
    },
    {
      company: "DeepLearning.AI by Andrew NG",
      position: "Generative AI with LLMs",
      duration: "2021 - 2022",
    },
    {
      company: "DeepLearning.AI by Andrew NG",
      position: "AI for Everyone",
      duration: "2021 - 2022",
    },
    {
      company: "DeepLearning.AI by Andrew NG",
      position: "Generative AI for Everyone",
      duration: "2021 - 2022",
    },
  ],
};

const skills = {
  title: "Technical and Soft Skills",
  categories: [
    {
      title: "Technical Skills",
      items: [
        { emoji: "🤖", name: "Prompt AI" },
        { emoji: "☁️", name: "JavaScript" },
        { emoji: "🧱", name: "TypeScript" },
        { emoji: "📊", name: "React-Native" },
        { emoji: "💻", name: "React" },
        { emoji: "🐍", name: "Python" },
        { emoji: "🔗", name: "Next.JS" },
        { emoji: "✨", name: "MySQL" },
        { emoji: "☁️", name: "Node.js" },
        { emoji: "👁️", name: "HTML5" },
        { emoji: "🖥️", name: "CSS" },
        { emoji: "💻", name: "TailWindCSS" },
        { emoji: "💻", name: "Java" },
        { emoji: "💻", name: "C#" },
        { emoji: "💻", name: "C" },
      ],
    },
    {
      title: "Soft Skills",
      items: [
        { emoji: "🧠", name: "Emphatic Listening" },
        { emoji: "🤝", name: "Team Development" },
        { emoji: "🧩", name: "Problem Solving" },
        { emoji: "💬", name: "Communication" },
        { emoji: "🏢", name: "Business Solution" },
      ],
    },
    {
      title: "AI Skills",
      items: [
        { emoji: "🤖", name: "ChatGPT" },
        { emoji: "🎨", name: "Stable Diffusion" },
        { emoji: "🎶", name: "Suno" },
        { emoji: "🖌️", name: "Midjourney" },
        { emoji: "🎥", name: "Runway" },
        { emoji: "🌟", name: "Gemini" },
        { emoji: "🥸", name: "Claude" },
      ],
    },
    {
      title: "Digital Skills",
      items: [
        { emoji: "🎨", name: "Canva" },
        { emoji: "💻", name: "Figma" },
        { emoji: "📄", name: "Google Workspace" },
        { emoji: "🌐", name: "Meta" },
        { emoji: "📝", name: "Notion" },
      ],  
    },
  ],
};

const about = {
  title: "About me",
  description:
    "I'm passionate in technology and AI looking to learn more about their practical applications Seeking an internship opportunity to gain experience and contribute to projects in these fields",
  info: [
    { fieldName: "Name", fieldValue: "Affan Samaeng" },
    { fieldName: "Email", fieldValue: "Affan.SM@hotmail.com" },
    { fieldName: "Phone", fieldValue: "(+60) 92-3959671" },
    { fieldName: "Nationality", fieldValue: "Thai" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Thai, Melayu" },
  ],
};

// Main component
const Resume = () => {
  const [likes, setLikes] = useState(Array(books.items.length).fill(0)); // State to track the number of likes
  const [liked, setLiked] = useState([false, false, false, false]); // State to track if liked or not
  const [selectedBook, setSelectedBook] = useState(null); // ใช้สำหรับการติดตามหนังสือที่ถูกคลิก

  const toggleLike = (index) => {
    const updatedLikes = [...likes];
    const updatedLiked = [...liked];

    if (updatedLiked[index]) {
      updatedLikes[index] -= 1;
    } else {
      updatedLikes[index] += 1;
    }

    updatedLiked[index] = !updatedLiked[index];
    setLikes(updatedLikes);
    setLiked(updatedLiked);
  };

  const openModal = (book) => {
    setSelectedBook(book);
  };

  // ปิด Modal
  const closeModal = () => {
    setSelectedBook(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="books">Book Reads</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* Experience Section */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60 ">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Book Reads Section */}
            <TabsContent value="books" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{books.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {books.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {books.items.map((book, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-auto py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-4"
                      >
                        <div className="relative max-w-[80vw] max-h-[80vh]">
                          <img
                            src={book.img}
                            alt={book.title}
                            className="w-[100px] h-[150px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
                            onClick={() => openModal(book)}
                          />
                        </div>
                        <h3 className="text-xl text-center">{book.title}</h3>
                        <div className="flex items-center gap-3">
                          <button
                            className={`flex items-center gap-2 px-2 py-1 rounded-full border transition-all duration-300 ${
                              liked[index]
                                ? "border-blue-500 bg-[#2c2c34]"
                                : "border-gray-400"
                            }`}
                            onClick={() => toggleLike(index)}
                            aria-label="Like button"
                          >
                            <span
                              className={`text-xl ${
                                liked[index] ? "text-pink-500" : "text-gray-400"
                              }`}
                            >
                              ❤️
                            </span>
                            <span
                              className={`text-sm ${
                                liked[index] ? "text-white" : "text-gray-400"
                              }`}
                            >
                              {likes[index]}
                            </span>
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {selectedBook && (
              <div
                className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
                onClick={closeModal} // ปิด Modal เมื่อคลิกนอกบริเวณรูปหนังสือ
              >
                <div className="relative w-[90vw] h-[90vh] max-w-3xl max-h-3xl">
                  <img
                    src={selectedBook.img}
                    alt={selectedBook.title}
                    className="object-contain w-full h-full"
                    onClick={(e) => e.stopPropagation()} // ป้องกันการปิด Modal เมื่อคลิกที่รูปหนังสือ
                  />
                </div>
              </div>
            )}
            {/* Skills Section */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold text-center xl:text-left">
                  {skills.title}
                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                  {skills.categories.map((category, index) => (
                    <div key={index}>
                      <h4 className="text-2xl font-bold">{category.title}</h4>
                      <ul className="space-y-2 mt-4">
                        {category.items.map((skill, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="text-xl">{skill.emoji}</span>
                            <span>{skill.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* About Me Section */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-white">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
