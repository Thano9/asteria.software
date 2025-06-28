"use client";

import { useRef, useEffect, useState } from "react";
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
    imagePath: "/images/frames/iphone-16-pro-frame.png",
    dimensions: { width: 255, height: 530 },
    contentArea: { vertical: 8, horizontal: 10, borderRadius: 30 }
  },
  "iphone-16-pro-nonotch": {
    name: "iPhone 16 Pro",
    imagePath: "/images/frames/iphone-16-pro-frame-nonotch.png",
    dimensions: { width: 255, height: 530 },
    contentArea: { vertical: 8, horizontal: 10, borderRadius: 30 }
  },
  "iphone-11-pro": {
    name: "iPhone 11 Pro",
    imagePath: "/images/frames/iphone-11-pro-frame.png",
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
  const [videoError, setVideoError] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const deviceFrames = getDeviceFrames(scale);
  const frameConfig = deviceFrames[project.deviceFrame];
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


  const handleVideoError = () => {
    console.warn('Video failed to load:', project.teaserUrl);
    setVideoError(true);
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

  const handleImageError = () => {
    console.warn('Image failed to load:', project.teaserUrl);
    setImageError(true);
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
              onError={(e) => {
                console.warn('Frame image failed to load:', frameConfig.imagePath);
                e.currentTarget.style.display = 'none';
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
            videoError ? (
              <div style={{
                height: '100%', 
                width: '100%', 
                backgroundColor: '#f3f4f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6b7280',
                fontSize: '14px',
                textAlign: 'center',
                padding: '20px',
                boxSizing: 'border-box'
              }}>
                Video not available
              </div>
            ) : (
              <video
                ref={videoRef}
                src={project.teaserUrl}
                loop
                muted
                playsInline
                autoPlay
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover'
                }}
                onError={handleVideoError}
              >
                Your browser does not support the video tag.
              </video>
            )
          ) : shouldLoad ? (
            imageError ? (
              <div style={{
                height: '100%', 
                width: '100%', 
                backgroundColor: '#9ca3af'
              }} />
            ) : (
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
            )
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