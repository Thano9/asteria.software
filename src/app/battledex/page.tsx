"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function BattleDex() {
  return (
    <div className="project-container">
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
        <div className="project-content">
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
            className="download-button-container"
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
            whileHover={{
              scale: 1.05,
              y: -4,
              filter: 'brightness(1.1)'
            }}
            whileTap={{
              scale: 0.98,
              y: 0
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 30,
              mass: 1,
              delay: 0.7,
              // Separate transition for hover states
              scale: { duration: 0.2 },
              y: { duration: 0.2 },
              filter: { duration: 0.2 }
            }}
          >
            <Image 
              src="/components/button.png"
              alt="Download BattleDex"
              width={185}
              height={56}
              className="download-button-image"
            />
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
        </div>

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
          <div className="phone-frame">
            {/* Phone Frame Image */}
            <Image 
              src="/images/frames/iphone-16-pro-frame.png"
              alt="iPhone 16 Pro Frame"
              fill
              className="frame-image"
              priority
            />
            
            {/* Phone Screen Content */}
            <div className="phone-screen">
              <Image 
                src="/images/projects/battledex/teaser.png"
                alt="BattleDex App Screenshot"
                fill
                className="screen-content"
                priority
              />
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
} 