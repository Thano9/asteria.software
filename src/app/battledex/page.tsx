"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import localFont from "next/font/local";
import Device, { DeviceProject } from "../components/Device";

const mondwest = localFont({
  src: [
    {
      path: "../../../public/fonts/Mondwest-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Mondwest-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-mondwest",
  display: "swap",
});

const neueBit = localFont({
  src: [
    {
      path: "../../../public/fonts/NeueBit-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/NeueBit-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neueBit",
  display: "swap",
});

export default function BattleDex() {
  const [isShimmering, setIsShimmering] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const [hasMounted, setHasMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle responsive scaling
  useEffect(() => {
    setHasMounted(true);
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive scale values
  const desktopScale = 1.3;
  const mobileScale = 1.1;
  const breakpoint = 400;

  // Calculate base scale based on screen size
  const baseScale = !hasMounted || windowWidth === null 
    ? desktopScale 
    : windowWidth <= breakpoint ? mobileScale : desktopScale;

  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Transform scroll progress to scale values (multiply base scale by scroll factor)
  const scrollScaleFactor = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const phoneScale = useTransform(() => baseScale * scrollScaleFactor.get());

  // Parallax effect for text and button
  const textParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

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

  // Device configuration
  const battledexProject: DeviceProject = {
    id: 1,
    title: "BattleDex",
    description: "Master Pokémon Matchups",
    slug: "battledex",
    deviceFrame: "iphone-16-pro",
    teaserUrl: "/images/projects/battledex/teaser.png"
  };

  return (
    <div ref={containerRef} className={`project-container ${mondwest.variable} ${neueBit.variable}`}>
      {/* Navigation Header */}
      <motion.header 
        className="navigation-header"
        initial={{
          opacity: 0,
          filter: 'blur(10px)',
          y: -20
        }}
        animate={{
          opacity: 1,
          filter: 'blur(0px)',
          y: 0
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 30,
          mass: 1,
          delay: 0.1
        }}
      >
        <Link href="/" className="back-link-project">
          ← asteria.software
        </Link>
        <div className="nav-links">
          <Link href="/battledex/privacypolicy" className="nav-link">
            Privacy Policy
          </Link>
          <div className="nav-divider">|</div>
          <Link href="/battledex/support" className="nav-link">
            Support
          </Link>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="project-main">
        <motion.div 
          className="project-content"
          style={{ y: textParallax }}
        >
          <motion.h1 
            className="project-title"
            initial={{
              opacity: 0,
              filter: 'blur(12px)',
              y: 25
            }}
            animate={{
              opacity: 1,
              filter: 'blur(0px)',
              y: 0
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 28,
              mass: 1,
              delay: 0.5
            }}
          >
            Master Pokémon<br/>
            Matchups
          </motion.h1>
          
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
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 30,
              mass: 1,
              delay: 0.7
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
              alt="Download BattleDex"
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
        </motion.div>

        {/* Phone Mockup */}
        <motion.div 
          className="phone-mockup-container"
          initial={{
            opacity: 0,
            filter: 'blur(10px)',
            y: 120,
            scale: .8
          }}
          animate={{
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            scale: 1
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 30,
            mass: 1,
            delay: .95
          }}
        >
          <motion.div style={{ 
            scale: phoneScale,
            transformOrigin: 'top center'
          }}>
            <Device
              project={battledexProject}
              isActive={true}
              shouldLoad={true}
              scale={baseScale}
              forceDarkMode={true}
              onClick={() => {}}
              className="device-no-pointer"
            />
          </motion.div>
        </motion.div>

        {/* Spacer for scrolling */}
        <div style={{ height: '3.5vh' }} />
      </main>
    </div>
  );
} 