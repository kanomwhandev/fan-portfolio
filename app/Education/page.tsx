"use client"; 

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import Image from 'next/image'; 

interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  icon: React.ReactNode;
}

const education: EducationEntry[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Kasessart University",
    period: "2021 - Present",
    icon: <FaGraduationCap className="w-5 h-5" />
  },
  {
    degree: "Super AI Engineer Season 4 #1",
    institution: "AIAT",
    period: "2023 - 2024",
    icon: <FaGraduationCap className="w-5 h-5" />
  },
  {
    degree: "Data Science Bootcamp Gen10",
    institution: "DataRockie",
    period: "2024 - Present",
    icon: <FaGraduationCap className="w-5 h-5" />
  },
];

const certificates = [
  "/assets/Cert/a.png",
  "/assets/Cert/b.png",
  "/assets/Cert/h.png",
  "/assets/Cert/CERTI-CSKPS-CER-LD-0051-1.png",
  "/assets/Cert/Google_Interland_Affan-Samaeng_Certificate_of_Alertness-1.png",
  "/assets/Cert/Google_Interland_Affan-Samaeng_Certificate_of_Kindness (1)-1.png",
  "/assets/Cert/Google_Interland_Affan-Samaeng_Certificate_of_Kindness-1.png",
  "/assets/Cert/Google_Interland_Affan-Samaeng_Certificate_of_Smartness (1)-1.png",
  "/assets/Cert/Google_Interland_Affan-Samaeng_Certificate_of_Strongness-1.png",
  "/assets/Cert/DataRockie School - Mini Data Science Bootcamp 2024 - 2024-04-29.png",
  "/assets/Cert/Certificate.png",
  // เพิ่มเส้นทางของ certificates อื่น ๆ ที่นี่
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Education: React.FC = () => {
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false); 
    }, 1400); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <section className="bg-primary text-white py-10 ">
      <div className="container mx-auto px-4">
        {/* หัวข้อ Education */}
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-accent py-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 5 }}
          transition={{ duration: 0.5, delay: isTransitioning ? 1.5 : 0 }}  
        >
          Education
        </motion.h2>
        
        {/* รายการการศึกษา */}
        <motion.div 
          className="space-y-8 flex flex-col items-center"  // แก้ไขจาก items-center เป็น items-start
          variants={containerVariants}
          initial={{ opacity: 0, y: -20 }}
          animate={isTransitioning ? "hidden" : "visible" } 
          transition={{ duration: 1, delay: isTransitioning ? 1.5 : 0 }}  
        >
          {education.map((entry, index) => (
            <motion.div 
              key={index} 
              className="flex items-start text-left max-w-md w-full" // เพิ่ม items-start ที่นี่ด้วย
              variants={itemVariants}
            >
              {/* ไอคอน */}
              <motion.div 
                className="bg-accent rounded-full p-2 mr-4 flex-shrink-0" // flex-shrink-0 เพื่อไม่ให้ไอคอนย่อ
                variants={itemVariants}
              >
                {entry.icon}
              </motion.div>
              
              {/* ข้อความ */}
              <div className="text-left">
                <motion.h3 
                  className="text-xl font-semibold text-accent"
                  variants={itemVariants}
                >
                  {entry.degree}
                </motion.h3>
                <motion.p 
                  className="text-gray-400"
                  variants={itemVariants}
                >
                  {entry.institution}
                </motion.p>
                <motion.p 
                  className="text-sm text-gray-500"
                  variants={itemVariants}
                >
                  {entry.period}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* แถบ Certificate */}
        
        <div className="bg-primary-10 py-10 mt-5 bg-opacity-50 bg-primary border-collapse ">
          <h2 className="text-4xl font-bold mb-12 text-center text-accent py-9 ">
            Certificate
          </h2>

          <motion.div
            className="relative overflow-hidden w-full"
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)} 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }} 
          >
            <motion.div
              className="flex space-x-6 w-[3000px]" // ทำให้กว้างเพียงพอสำหรับรูปภาพทั้งหมด
              animate={{ x: isHovered ? "0%" : "-100%" }} 
              transition={{
                x: {
                  repeat: Infinity, 
                  repeatType: "loop", 
                  duration: 15, 
                  ease: "linear", 
                },
              }}
            >
              {certificates.map((cert, index) => (
                <div key={index} className="flex-shrink-0">
                  <Image
                    src={cert}
                    alt={`Certificate ${index + 1}`}
                    width={300}
                    height={200}
                    className="shadow-lg"
                  />
                </div>
              ))}
              {certificates.map((cert, index) => (
                <div key={`${index}-duplicate`} className="flex-shrink-0">
                  <Image
                    src={cert}
                    alt={`Certificate Duplicate ${index + 1}`}
                    width={300}
                    height={200}
                    className="shadow-lg"
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
