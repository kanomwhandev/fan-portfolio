import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaLine } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/kanomwhandev" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/affan-samaeng-614022290/",
  },
  { icon: <FaLine />, path: "https://line.me/ti/p/LG2KIKbIaz" },
  {
    icon: <FaFacebook />,
    path: "https://www.facebook.com/affan.samaeng.7/?locale=th_TH",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
