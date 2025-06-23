import Image from "next/image";
import Link from "next/link";

export default function BattleDex() {
  return (
    <div className="project-container">
      {/* Navigation Header */}
      <header className="navigation-header">
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
      </header>

      {/* Main Content */}
      <main className="project-main">
        <div className="project-content">
          <h1 className="project-title">
            Master Pokémon<br/>
            Matchups
          </h1>
          
          <div className="download-button-container">
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
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="phone-mockup-container">
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
        </div>
      </main>
    </div>
  );
} 