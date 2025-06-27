"use client";

import { motion } from "motion/react";
import Link from "next/link";

interface NavigationLink {
  href: string;
  label: string;
}

interface ProjectNavigationProps {
  backLink?: {
    href: string;
    label: string;
  };
  navigationLinks?: NavigationLink[];
}

const ProjectNavigation = ({
  backLink = {
    href: "/",
    label: "← asteria.software"
  },
  navigationLinks = [
    { href: "/battledex/privacypolicy", label: "Privacy Policy" },
    { href: "/battledex/support", label: "Support" }
  ]
}: ProjectNavigationProps) => {
  return (
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
      exit={{
        opacity: 0,
        filter: 'blur(10px)',
        y: -20
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 30,
        mass: 1,
        delay: 0.1
      }}
    >
      <Link href={backLink.href} className="back-link-project">
        {backLink.label}
      </Link>
      <div className="nav-links">
        {navigationLinks.map((link, index) => (
          <div key={link.href} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {index > 0 && <div className="nav-divider">|</div>}
            <Link href={link.href} className="nav-link">
              {link.label}
            </Link>
          </div>
        ))}
      </div>
    </motion.header>
  );
};

export default ProjectNavigation; 