'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  imageSrc: string;
  href: string;
  delay?: number;
}

export default function ProjectCard({ title, imageSrc, href, delay = 0 }: ProjectCardProps) {
  return (
    <motion.a
      href={href}
      className="project-card-link"
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
    >
      <div className="project-card">
        <div className="card-content">
          <div className="card-icon">
            <Image
              src={imageSrc}
              alt={`${title} icon`}
              width={24}
              height={24}
              className="card-image"
              priority={false}
            />
          </div>
          <span className="card-text">{title}</span>
          <div className="arrow">
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </motion.a>
  );
} 