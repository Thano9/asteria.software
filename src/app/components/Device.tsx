"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

export interface DeviceFrame {
  name: string;
  imagePath: string;
  dimensions: {
    width: number;
    height: number;
  };
  contentArea: {
    vertical: number;
    horizontal: number;
    borderRadius: number;
  };
}

export interface DeviceProject {
  id: number;
  title: string;
  description: string;
  slug: string;
  deviceFrame: string;
  teaserUrl: string;
}

// Device frame configurations - base dimensions that get scaled
const BASE_DEVICE_FRAMES: Record<string, Omit<DeviceFrame, 'dimensions' | 'contentArea'> & {
  dimensions: { width: number; height: number };
  contentArea: { vertical: number; horizontal: number; borderRadius: number };
}> = {
  "iphone-16-pro": {
    name: "iPhone 16 Pro",
    imagePath: "/images/carousel/frames/iphone-16-pro-frame.png",
    dimensions: { width: 255, height: 530 },
    contentArea: { vertical: 8, horizontal: 10, borderRadius: 30 }
  },
  "iphone-11-pro": {
    name: "iPhone 11 Pro",
    imagePath: "/images/carousel/frames/iphone-11-pro-frame.png",
    dimensions: { width: 260, height: 530 },
    contentArea: { vertical: 25, horizontal: 24, borderRadius: 25 }
  },
  "frameless": {
    name: "Frameless",
    imagePath: "",
    dimensions: { width: 0, height: 530 },
    contentArea: { vertical: 0, horizontal: 0, borderRadius: 12 }
  }
};

// Function to get device frames with applied scale
export const getDeviceFrames = (scale: number): Record<string, DeviceFrame> => {
  const scaledFrames: Record<string, DeviceFrame> = {};
  
  Object.entries(BASE_DEVICE_FRAMES).forEach(([key, frame]) => {
    scaledFrames[key] = {
      name: frame.name,
      imagePath: frame.imagePath,
      dimensions: { 
        width: frame.dimensions.width * scale, 
        height: frame.dimensions.height * scale 
      },
      contentArea: { 
        vertical: frame.contentArea.vertical * scale, 
        horizontal: frame.contentArea.horizontal * scale, 
        borderRadius: frame.contentArea.borderRadius * scale 
      }
    };
  });
  
  return scaledFrames;
};

interface DeviceProps {
  project: DeviceProject;
  isActive: boolean;
  shouldLoad: boolean;
  scale: number;
  forceDarkMode?: boolean;
  onClick: () => void;
  onVideoRef?: (ref: HTMLVideoElement | null) => void;
  onImageLoad?: (dimensions: { width: number; height: number }) => void;
  className?: string;
}

const Device = ({
  project,
  isActive,
  shouldLoad,
  scale,
  forceDarkMode = false,
  onClick,
  onVideoRef,
  onImageLoad,
  className = ""
}: DeviceProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const isFrameless = project.deviceFrame === 'frameless';
  
  const deviceFrames = getDeviceFrames(scale);
  const frameConfig = {
    ...deviceFrames[project.deviceFrame],
    // Override image path for projects that use different frame locations
    imagePath: project.deviceFrame === 'iphone-16-pro' && project.slug === 'battledex' 
      ? "/images/frames/iphone-16-pro-frame.png"
      : deviceFrames[project.deviceFrame].imagePath
  };
  const actualDimensions = frameConfig.dimensions;

  // Helper function to detect content type from URL
  const getContentType = (url: string): 'image' | 'video' => {
    const extension = url.split('.').pop()?.toLowerCase();
    const videoExtensions = ['mp4', 'webm', 'mov', 'avi', 'mkv', 'wmv', 'flv', 'm4v'];
    return videoExtensions.includes(extension || '') ? 'video' : 'image';
  };

  // Handle video ref callback
  useEffect(() => {
    if (onVideoRef && videoRef.current) {
      onVideoRef(videoRef.current);
    }
  }, [onVideoRef]);

  // Control video playback based on active state
  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isActive]);

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const target = e.target as HTMLVideoElement;
    target.style.display = 'none';
    const parent = target.parentElement;
    if (parent) {
      parent.innerHTML = `
        <img 
          src="${project.teaserUrl}" 
          alt="${project.title} teaser" 
          style="height: 100%; width: 100%; object-fit: cover;"
          onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\\"height: 100%; width: 100%; background-color: #9ca3af;\\"></div>';"
        />
      `;
    }
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (isFrameless && onImageLoad) {
      const img = e.target as HTMLImageElement;
      onImageLoad({
        width: img.naturalWidth,
        height: img.naturalHeight
      });
    }
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
    const parent = target.parentElement;
    if (parent) {
      parent.innerHTML = `
        <div style="height: 100%; width: 100%; background-color: #9ca3af;"></div>
      `;
    }
  };

  return (
    <div 
      style={{
        display: 'block',
        position: 'relative',
        cursor: 'pointer'
      }}
      className={className}
      onClick={onClick}
    >
      <div 
        style={{
          position: 'relative',
          width: actualDimensions.width,
          height: actualDimensions.height
        }}
      >
        {/* Device Frame (only for framed devices) */}
        {!isFrameless && (
          <>
            <Image
              src={frameConfig.imagePath}
              alt={`${frameConfig.name} frame`}
              fill
              style={{
                pointerEvents: 'none',
                zIndex: 10,
                filter: forceDarkMode ? 'brightness(0.6) contrast(1.1)' : 'none'
              }}
            />
          </>
        )}
        
        {/* Teaser content */}
        <div 
          style={{
            position: 'absolute',
            overflow: 'hidden',
            ...(isFrameless ? {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              borderRadius: frameConfig.contentArea.borderRadius,
            } : {
              top: frameConfig.contentArea.vertical,
              right: frameConfig.contentArea.horizontal,
              bottom: frameConfig.contentArea.vertical,
              left: frameConfig.contentArea.horizontal,
              borderRadius: frameConfig.contentArea.borderRadius,
            })
          }}
        >
          {shouldLoad && getContentType(project.teaserUrl) === 'video' ? (
            <video
              ref={videoRef}
              loop
              muted
              playsInline
              style={{
                height: '100%',
                width: '100%',
                objectFit: 'cover'
              }}
              onError={handleVideoError}
            >
              <source src={project.teaserUrl} type="video/webm" />
              <source src={project.teaserUrl.replace('.webm', '.mp4')} type="video/mp4" />
              <Image
                src={project.teaserUrl}
                alt={`${project.title} teaser`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </video>
          ) : shouldLoad ? (
            <Image
              src={project.teaserUrl}
              alt={`${project.title} teaser`}
              fill
              style={{ 
                objectFit: isFrameless ? 'contain' : 'cover'
              }}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          ) : (
            <div style={{
              height: '100%',
              width: '100%',
              backgroundColor: '#e5e7eb'
            }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Device; 