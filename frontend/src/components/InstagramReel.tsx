"use client";

import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface InstagramMedia {
  id?: string;
  media_url: string;
  caption?: string;
  thumbnail_url?: string;
}

function ReelCard({ reel, isActive }: { reel: InstagramMedia; isActive: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  // Play video if active, pause if not
  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Silently ignore AbortError caused by rapid sliding/pausing
          });
        }
      } else {
        videoRef.current.pause();
      }
    }
  }, [isActive]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isActive) return; // Prevent clicking on background cards
    if (videoRef.current) {
      if (videoRef.current.paused) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      } else {
        videoRef.current.pause();
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const videoSrc = reel.media_url || "https://www.w3schools.com/html/mov_bbb.mp4";
  const caption = reel.caption || "Beautiful new luxury listing just sold! 🏡✨ Witness the grand tour and happy clients.";

  return (
    <div className={`relative w-[280px] md:w-[320px] aspect-[9/16] rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white bg-black group/card ${!isActive && 'pointer-events-none'}`}>
      <video 
        ref={videoRef}
        suppressHydrationWarning
        src={videoSrc} 
        loop 
        muted={isMuted}
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      ></video>

      {/* Controls Overlay - Only visible if active */}
      <div className={`absolute inset-0 z-20 flex flex-col justify-between p-4 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
        {/* Top Controls: Mute Toggle */}
        <div className="flex justify-end pointer-events-auto mt-2 mr-2">
          <button 
            onClick={toggleMute} 
            className="w-10 h-10 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/80 transition shadow-lg border border-white/20 cursor-pointer"
            title={isMuted ? "Unmute Video" : "Mute Video"}
          >
            {isMuted ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.898a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
            )}
          </button>
        </div>

        {/* Center Controls: Play/Pause */}
        <div className="flex-1 flex items-center justify-center pointer-events-auto cursor-pointer" onClick={togglePlay}>
          {/* We keep it simple: clicking anywhere in center pauses/plays. No icon needed unless paused, but native controls or simple toggle works. */}
        </div>

        {/* Bottom Info */}
        <div className="bg-gradient-to-t from-black/90 via-black/50 to-transparent -mx-4 -mb-4 p-5 pt-16 pointer-events-none">
          <p className="text-white font-bold text-sm mb-1 drop-shadow-md">@av_enterprises01</p>
          <p className="text-white/90 text-xs line-clamp-2 drop-shadow-md">{caption}</p>
        </div>
      </div>
      
      {/* Dark overlay for inactive cards */}
      <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 pointer-events-none ${isActive ? 'opacity-0' : 'opacity-100'}`} />
    </div>
  );
}

export default function InstagramReel() {
  const [reels, setReels] = useState<InstagramMedia[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    async function fetchReels() {
      try {
        const res = await fetch("/api/instagram");
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setReels(data);
          }
        }
      } catch (e) {
        console.error("Failed to fetch reels", e);
      } finally {
        setLoading(false);
      }
    }
    fetchReels();
  }, []);

  // Fallbacks if empty
  const displayReels = reels.length > 0 ? reels : [
    { id: "1", media_url: "https://www.w3schools.com/html/mov_bbb.mp4", caption: "Beautiful new luxury listing just sold! 🏡✨ Witness the grand tour and happy clients." },
    { id: "2", media_url: "https://www.w3schools.com/html/mov_bbb.mp4", caption: "Client review: We found our dream home with AV Enterprises! The process was incredibly smooth. #HappyClient" },
    { id: "3", media_url: "https://www.w3schools.com/html/mov_bbb.mp4", caption: "Tour of this magnificent 5-bedroom estate. Contact us to schedule a viewing before it's gone!" },
    { id: "4", media_url: "https://www.w3schools.com/html/mov_bbb.mp4", caption: "Another successful commercial property closing. Building trust, delivering excellence." },
    { id: "5", media_url: "https://www.w3schools.com/html/mov_bbb.mp4", caption: "Office tour! Come meet the team behind AV Enterprises." }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % displayReels.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + displayReels.length) % displayReels.length);
  };

  // Auto-sliding logic
  useEffect(() => {
    if (isHovered || displayReels.length <= 1) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % displayReels.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, displayReels.length]);

  return (
    <div 
      className="w-full relative h-[600px] flex items-center justify-center py-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-[#E67E22]"></div>
        </div>
      )}

      {/* Navigation Arrows */}
      {!loading && displayReels.length > 1 && (
        <button 
          onClick={handlePrev}
          className="absolute left-4 md:left-12 z-40 w-12 h-12 bg-white/80 backdrop-blur hover:bg-white text-primary rounded-full flex items-center justify-center shadow-lg transition transform hover:scale-105 cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {!loading && displayReels.length > 1 && (
        <button 
          onClick={handleNext}
          className="absolute right-4 md:right-12 z-40 w-12 h-12 bg-white/80 backdrop-blur hover:bg-white text-primary rounded-full flex items-center justify-center shadow-lg transition transform hover:scale-105 cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* 3D Carousel Container */}
      <div className={`relative w-full max-w-4xl h-[500px] flex items-center justify-center transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {displayReels.map((reel, index) => {
          const N = displayReels.length;
          let offset = index - activeIndex;
          
          // Infinite loop wrap-around logic
          if (offset > Math.floor(N / 2)) {
            offset -= N;
          } else if (offset < -Math.floor(N / 2)) {
            offset += N;
          }

          const isVisible = Math.abs(offset) <= 2; // Show only 2 cards on each side
          
          const isActive = offset === 0;

          // Calculate 3D styles
          // Center card: translateX(0), scale(1)
          // Side cards: translateX( +/- 75% ), scale(0.8)
          const translateX = offset * 65; // percentage
          const scale = 1 - Math.abs(offset) * 0.15;
          const zIndex = 30 - Math.abs(offset);
          const opacity = isVisible ? 1 - Math.abs(offset) * 0.2 : 0;

          return (
            <div 
              key={reel.id || index}
              onClick={() => setActiveIndex(index)}
              className={`absolute transition-all duration-500 ease-out cursor-pointer ${!isVisible && 'pointer-events-none'}`}
              style={{
                transform: `translateX(${translateX}%) scale(${scale})`,
                zIndex,
                opacity
              }}
            >
              <ReelCard reel={reel} isActive={isActive} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
