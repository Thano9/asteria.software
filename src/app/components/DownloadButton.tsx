"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

interface DownloadButtonProps {
  downloadUrl: string;
}

const DownloadButton = ({ downloadUrl }: DownloadButtonProps) => {
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
      window.location.href = downloadUrl;
    } else {
      // Open App Store web page on other devices
      window.open(downloadUrl, "_blank");
    }
  };

  return (
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
        alt="Download BattleDex"
        width={185}
        height={56}
        className="download-button-image"
      />
      <div className={`shimmer-overlay ${isShimmering ? 'active' : ''}`}></div>
      <div className="download-text-overlay">
        <div className="apple-logo">
          <Image 
            src="/components/applelogo.png"
            alt="Apple Logo"
            width={13}
            height={16}
          />
        </div>
        <span className="download-text">Download</span>
      </div>
    </motion.div>
  );
};

export default DownloadButton;