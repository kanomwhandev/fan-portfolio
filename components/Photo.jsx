"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase, Users, FileCheck } from "lucide-react";

// ฟังก์ชันนับจาก 0 ไปจนถึงค่าสุดท้าย
const useCountUp = (endValue, isHovered) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isHovered) {
      setCount(0); // รีเซ็ตตัวเลขนับเมื่อ hover ใหม่
      let start = 0;
      const end = parseInt(endValue, 10); // แปลงเป็น int
      const duration = 1000; // ระยะเวลาในการนับ (1 วินาที)
      const stepTime = Math.abs(Math.floor(duration / end));

      const timer = setInterval(() => {
        start += 1;
        setCount((prevCount) => {
          if (prevCount >= end) {
            clearInterval(timer);
            return end;
          }
          return prevCount + 1;
        });
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [endValue, isHovered]); // นับใหม่ทุกครั้งที่ `isHovered` เปลี่ยนแปลง

  return count;
};

// Component แสดงสถิติ
const StatCard = ({ icon, value, label, className, isHovered }) => {
  const count = useCountUp(value, isHovered);

  return (
    <motion.div
      className={`absolute bg-white bg-opacity-10 hover:bg-opacity-100 rounded-lg shadow-lg p-4 flex items-center space-x-2 transition-colors duration-300 ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }} // ขยายตอน hover
      whileTap={{ scale: 1.1 }} // ขยายตอนกด
    >
      <div className="text-[#4DB5FF]">{icon}</div>
      <div>
        <div className="font-bold text-[#4DB5FF] text-lg">{count}</div>{" "}
        {/* แสดงตัวเลขที่นับ */}
        <div className="text-xs text-[#4DB5FF]">{label}</div>
      </div>
    </motion.div>
  );
};

export const Photo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* วงกลมที่หมุน */}
      <motion.svg
        className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] absolute"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { delay: 0.5, duration: 0.8, ease: "easeInOut" },
        }}
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="#4DB5FF"
          strokeWidth="4"
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.svg>

      {/* รูปภาพ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeIn" },
        }}
        className="relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]"
        onHoverStart={() => setIsHovered(true)} // เมื่อเอาเมาส์ชี้ที่รูป
        onHoverEnd={() => setIsHovered(false)} // เมื่อเอาเมาส์ออกจากรูป
      >
        <Image
          src="/Photo1.png"
          priority
          quality={100}
          fill
          alt="Profile Photo"
          className="object-cover rounded-full"
        />
      </motion.div>

      {/* การ์ดสถิติ */}
      <StatCard
        icon={<Briefcase size={24} />}
        value="4"
        label="Years of Computer Science"
        className="top-[10px] left-[-50px] transform"
        isHovered={isHovered}
      />
      <StatCard
        icon={<Users size={24} />}
        value="12"
        label="Course Certificate"
        className="top-[5px] right-[-5px] transform"
        isHovered={isHovered}
      />
      <StatCard
        icon={<FileCheck size={24} />}
        value="10"
        label="Finished Projects"
        className="bottom-[-20px] right-[10px] transform"
        isHovered={isHovered}
      />
    </div>
  );
};

export default Photo;
