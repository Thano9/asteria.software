'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

interface ProjectCardProps {
  title: string;
  imageSrc: string;
  href: string;
  index: number;
}

export default function ProjectCard({ title, imageSrc, href, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ 
        filter: 'blur(8px)', 
        y: 15, 
        opacity: 0 
      }}
      animate={{ 
        filter: 'blur(0px)', 
        y: 0, 
        opacity: 1 
      }}
      transition={{
        delay: 1.1 + (index * 0.1),
        type: 'spring',
        stiffness: 200,
        damping: 30,
        mass: 1,
        default: {
          duration: 0.1,
          ease: 'easeOut'
        }
      }}
      whileHover={{
        scale: 0.98,
        transition: {
          duration: 0.15,
          ease: 'easeOut'
        }
      }}
    >
      <Link href={href} className="project-card-link">
        <motion.div 
          className="project-card"
          whileHover={{
            backgroundColor: 'rgba(255, 255, 255, 0.35)'
          }}
          transition={{
            duration: 0.1,
            ease: 'easeOut'
          }}
        >
          <div className="card-content">
            <div className="card-icon">
              <Image
                src={imageSrc}
                alt={`${title} icon`}
                width={24}
                height={24}
                className="card-image"
              />
            </div>
            <p className="card-text">{title}</p>
            <div className="arrow">
              <ArrowRight size={16} />
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
} 