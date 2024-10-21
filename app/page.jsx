"use client";

import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "../components/Social";
import Photo from "../components/Photo";
import { motion, AnimatePresence } from "framer-motion"; // ใช้ AnimatePresence เพื่อ handle motion สำหรับการแสดงและซ่อน
import { Waves, Fish, Anchor } from "lucide-react";
import Link from "next/link";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  subsets: ["thai"],
  weight: ["400", "700"],
});
const buttonVariants = {
  initial: {
    background: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)",
    boxShadow: "0 0 10px rgba(0, 198, 255, 0.5)",
    scale: 1,
  },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
  hover: {
    background: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)",
    boxShadow: "0 0 10px #00c6ff, 0 0 20px #00c6ff, 0 0 30px #00c6ff",
    transition: {
      duration: 0.3,
    },
  },
  tap: { scale: 0.95 },
};

const iconVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: [0, 1, 0],
    y: [0, -50, -100],
    transition: { duration: 0.5 },
  },
};

const Home = () => {
  const [downloadCount, setDownloadCount] = useState(0); // เก็บจำนวนการดาวน์โหลด
  const [isBlocked, setIsBlocked] = useState(false); // ตรวจสอบการบล็อก
  const [message, setMessage] = useState(""); // ข้อความแจ้งเตือน
  const [showMessage, setShowMessage] = useState(false); // State สำหรับการแสดงและซ่อนข้อความ

  useEffect(() => {
    // โหลดค่าจาก localStorage ถ้ามี
    const storedDownloads = localStorage.getItem("downloadCount");
    const storedTime = localStorage.getItem("blockTime");

    if (storedDownloads) {
      setDownloadCount(parseInt(storedDownloads, 10));
    }

    if (storedTime) {
      const blockTime = new Date(storedTime);
      const now = new Date();
      if (now - blockTime > 30 * 60 * 1000) {
        // ถ้าเกิน 30 นาทีแล้วให้รีเซ็ตการดาวน์โหลด
        localStorage.removeItem("downloadCount");
        localStorage.removeItem("blockTime");
        setDownloadCount(0);
        setIsBlocked(false);
      } else {
        setIsBlocked(true);
      }
    }
  }, []);

  const handleDownload = (e) => {
    e.preventDefault(); // ป้องกันการโหลดทันที

    if (isBlocked) {
      setMessage(
        "You have exceeded the download limit. Please wait for 30 minutes before trying again."
      );
      setShowMessage(true); // แสดงข้อความ
      setTimeout(() => setShowMessage(false), 3000); // ซ่อนข้อความหลังจาก 3 วินาที
      return;
    }

    if (downloadCount < 10) {
      setMessage("You have clicked to download the CV.");
      setShowMessage(true); // แสดงข้อความ

      const newCount = downloadCount + 1;
      setDownloadCount(newCount);
      localStorage.setItem("downloadCount", newCount);

      if (newCount >= 10) {
        const blockTime = new Date();
        localStorage.setItem("blockTime", blockTime);
        setIsBlocked(true);
      }

      // ทำการดาวน์โหลดไฟล์
      const link = document.createElement("a");
      link.href = "/Affan_Resume.png"; // ใส่ path ของ CV ของคุณ
      link.download = "Affan_Resume.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      setMessage(
        "You have reached the maximum number of downloads. Please wait for 30 minutes before trying again."
      );
      setShowMessage(true); // แสดงข้อความ
    }

    setTimeout(() => setShowMessage(false), 3000); // ซ่อนข้อความหลังจาก 3 วินาที
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <motion.button
              className={`relative px-14 py-5 rounded-full mb-8 mx-auto text-lg font-semibold text-center mt-8 xl:mt-0 text-white ${kanit.className}`}
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
            >
              <Link href="/work">กดเพื่อดูผลงาน</Link>
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2"
                initial="hidden"
                whileTap="visible"
              >
                <motion.div variants={iconVariants}>
                  <Waves size={24} />
                </motion.div>
                <motion.div variants={iconVariants}>
                  <Fish size={24} />
                </motion.div>
                <motion.div variants={iconVariants}>
                  <Anchor size={24} />
                </motion.div>
              </motion.div>
            </motion.button>
            <div>
              <span>Software Developer</span>
            </div>
            <h1 className="h1">
              Hello I'm <br />{" "}
              <span className="text-accent">Affan Samaeng</span>
            </h1>
            <h2 className="h2 xl:pt-5 xl:pb-15 mx-auto h-full gap-8">
              Technology Leader and Innovator
            </h2>
            <p className="xl:pt-5 xl:pb-5 mx-auto leading-[3]">
              Driving Innovation through Technology, Blockchain, and AI
            </p>
            <div className="flex flex-col xl:flex-row items-center">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 hover:text-accent"
                onClick={handleDownload}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0 "></div>
              <Social
                containerStyles="flex gap-6 mx-5"
                iconStyles="w-9 h-9 flex justify-center items-center text-white/ hover:text-accent hover:transition-all hover:border-accent duration-500 hover:h1"
              />
            </div>
          </div>
          <div>
            {/* photo */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0"></div>
          </div>
          <Photo />
        </div>

        {/* กล่องข้อความที่จางๆ */}
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2">
          <AnimatePresence>
            {showMessage && (
              <motion.div
                className="p-4 bg-accent/10 text-white-100 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-center">{message}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Home;
