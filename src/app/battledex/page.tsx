"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import Device, { DeviceProject } from "../components/Device";
import ProjectNavigation from "../components/ProjectNavigation";
import DownloadButton from "../components/DownloadButton";

export default function BattleDex() {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const [hasMounted, setHasMounted] = useState(false);

  // App Store download URL
  const downloadUrl = "https://apps.apple.com/us/app/battledx-assistant/id6746467637";

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
  const mobileScale = 0.8;
  const breakpoint = 400;

  // Calculate base scale based on screen size
  const baseScale = !hasMounted || windowWidth === null 
    ? desktopScale 
    : windowWidth <= breakpoint ? mobileScale : desktopScale;

  // Device configuration
  const battledexProject: DeviceProject = {
    id: 1,
    title: "BattleDx",
    description: "Master Pokémon Matchups",
    slug: "battledex",
    deviceFrame: "iphone-16-pro",
    teaserUrl: "/images/projects/battledex/teaser.mp4"
  };

  return (
    <div className={`project-container`}>
        {/* Navigation Header */}
        <ProjectNavigation />

        {/* Main Content */}
        <main className="project-main">
        <motion.div 
          className="project-content"
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
            exit={{
              opacity: 0,
              filter: 'blur(12px)',
              y: 25
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
              delay: 0.7
            }}
          >
            <DownloadButton downloadUrl={downloadUrl} />
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
          exit={{
            opacity: 0,
            filter: 'blur(10px)',
            y: 120,
            scale: .8
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 30,
            mass: 1,
            delay: .95
          }}
        >
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

        {/* Bottom spacer */}
        <div style={{ height: '16px' }} />
      </main>
    </div>
  );
} 