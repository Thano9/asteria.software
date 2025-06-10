'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import ProjectCard from './components/ProjectCard';

export default function Home() {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasLoaded(true);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div 
      className="main-container"
      initial={{ 
        filter: 'blur(15px)', 
        y: 30, 
        opacity: 0 
      }}
      animate={{ 
        filter: 'blur(0px)', 
        y: 0, 
        opacity: 1 
      }}
      transition={{
        delay: 0.1,
        type: 'spring',
        stiffness: 150,
        damping: 25,
        mass: 1.2
      }}
    >
      <motion.div 
        className="title-container"
        initial={{ 
          filter: 'blur(10px)', 
          y: 20, 
          opacity: 0,
          scale: 0.9
        }}
        animate={{ 
          filter: 'blur(0px)', 
          y: 0, 
          opacity: 1,
          scale: 1
        }}
        transition={{
          delay: 0.2,
          type: 'spring',
          stiffness: 200,
          damping: 30,
          mass: 1
        }}
      >
        <h1 className="asteria-title">ASTERIA</h1>
        <div className="software-subtitle">
          <p className="software-text">SOFTWARE</p>
        </div>
      </motion.div>
      
      <div className="projects-container" style={{ pointerEvents: hasLoaded ? 'auto' : 'none' }}>
        <ProjectCard 
          title="BattleDex" 
          imageSrc="/images/projects/battledex.png" 
          href="https://battledex.com"
          index={0}
        />
        <ProjectCard 
          title="TaskFlow" 
          imageSrc="/images/projects/taskflow.png" 
          href="https://taskflow.com"
          index={1}
        />
        <ProjectCard 
          title="CodeSync" 
          imageSrc="/images/projects/codesync.png" 
          href="https://codesync.com"
          index={2}
        />
      </div>
    </motion.div>
  );
}
