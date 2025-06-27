"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

interface DownloadButtonProps {
  delay?: number;
}

const DownloadButton = ({ delay = 0.7 }: DownloadButtonProps) => {
  const [isShimmering, setIsShimmering] = useState(false);

  const handleHoverStart = () => {
    setIsShimmering(true);
    // Reset shimmer after animation completes
    setTimeout(() => setIsShimmering(false), 600);
  };

  const handleDownloadClick = () => {
    // Detect if user is on iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    
    if (isIOS) {
      // Open App Store app on iOS
      window.location.href = "https://apps.apple.com/us/app/battledex-assistant/id6746467637";
    } else {
      // Open App Store web page on other devices
      window.open("https://apps.apple.com/us/app/battledex-assistant/id6746467637", "_blank");
    }
  };

  return (
    <motion.div 
      className="download-button-wrapper"
      initial={{
        opacity: 0,
        filter: 'blur(10px)',
        y: 20,
        scale: 1
      }}
      animate={{
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        scale: 1
      }}
      exit={{
        opacity: 0,
        filter: 'blur(10px)',
        y: 20,
        scale: 1
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 30,
        mass: 1,
        delay: delay
      }}
    >
      <motion.div 
        className="download-button-container"
        whileHover={{
          scale: 1.05,
          y: -4,
          filter: 'brightness(1.3)',
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 20,
            duration: 0.3
          }
        }}
        whileTap={{
          scale: 0.98,
          y: 0
        }}
        onHoverStart={handleHoverStart}
        onClick={handleDownloadClick}
      >
        <Image 
          src="/components/button.png"
          alt="Download BattleDx"
          width={185}
          height={56}
          className="download-button-image"
        />
        <div className={`shimmer-overlay ${isShimmering ? 'active' : ''}`}></div>
        <div className="download-text-overlay">
          <div className="apple-logo">
            <Image 
              src="/components/applelogo.svg"
              alt="Apple Logo"
              width={13}
              height={16}
            />
          </div>
          <span className="download-text">Download</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DownloadButton;