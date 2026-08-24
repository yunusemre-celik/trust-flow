import React, { useEffect, useRef, useState } from 'react';

const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260715_090628_7052d8a6-a094-4341-a4a2-ad58493a67a9.mp4';

export const BoomerangVideoBg: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isCanvasReady, setIsCanvasReady] = useState(false);

  const framesRef = useRef<HTMLCanvasElement[]>([]);
  const capturingRef = useRef(false);
  const lastTimeRef = useRef<number>(-1);
  const animationFrameIdRef = useRef<number | null>(null);
  const playbackTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    let isMounted = true;
    framesRef.current = [];
    capturingRef.current = false;
    lastTimeRef.current = -1;

    // Start video playback
    video.muted = true;
    video.playsInline = true;

    const captureFrame = () => {
      if (!isMounted || !video || video.ended || video.paused) return;

      const currentTime = video.currentTime;
      if (currentTime !== lastTimeRef.current && video.videoWidth > 0 && video.videoHeight > 0) {
        lastTimeRef.current = currentTime;

        try {
          const maxWidth = 960;
          const targetWidth = Math.min(video.videoWidth, maxWidth);
          const scale = targetWidth / video.videoWidth;
          const targetHeight = Math.round(video.videoHeight * scale);

          const frameCanvas = document.createElement('canvas');
          frameCanvas.width = targetWidth;
          frameCanvas.height = targetHeight;
          const ctx = frameCanvas.getContext('2d', { alpha: false });
          if (ctx) {
            ctx.drawImage(video, 0, 0, targetWidth, targetHeight);
            framesRef.current.push(frameCanvas);
          }
        } catch {
          // If frame capture fails (e.g. cross-origin restriction), gracefully continue
        }
      }

      if ('requestVideoFrameCallback' in video) {
        (video as any).requestVideoFrameCallback(captureFrame);
      } else {
        animationFrameIdRef.current = requestAnimationFrame(captureFrame);
      }
    };

    const startCapturing = () => {
      if (capturingRef.current) return;
      capturingRef.current = true;
      if ('requestVideoFrameCallback' in video) {
        (video as any).requestVideoFrameCallback(captureFrame);
      } else {
        animationFrameIdRef.current = requestAnimationFrame(captureFrame);
      }
    };

    const startPingPongPlayback = () => {
      const frames = framesRef.current;
      if (frames.length < 5 || !isMounted || !canvas) {
        // Fallback: If not enough frames captured, keep looping video natively
        if (video) {
          video.loop = true;
          video.play().catch(() => {});
        }
        return;
      }

      // Initialize display canvas size from the first captured frame
      const firstFrame = frames[0];
      canvas.width = firstFrame.width;
      canvas.height = firstFrame.height;
      const ctx = canvas.getContext('2d', { alpha: false });
      if (!ctx) return;

      setIsCanvasReady(true);

      let currentFrameIndex = 0;
      let step = 1;
      const fpsInterval = 1000 / 30; // 30 FPS ping-pong

      const render = () => {
        if (!isMounted) return;

        const currentFrame = frames[currentFrameIndex];
        if (currentFrame) {
          ctx.drawImage(currentFrame, 0, 0);
        }

        // Ping-pong forward and reverse
        currentFrameIndex += step;
        if (currentFrameIndex >= frames.length - 1) {
          currentFrameIndex = frames.length - 1;
          step = -1;
        } else if (currentFrameIndex <= 0) {
          currentFrameIndex = 0;
          step = 1;
        }
      };

      playbackTimerRef.current = window.setInterval(render, fpsInterval);
    };

    const handlePlay = () => {
      startCapturing();
    };

    const handleEnded = () => {
      capturingRef.current = false;
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      startPingPongPlayback();
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('ended', handleEnded);

    // Initial play trigger
    video.play().catch(() => {
      // Autoplay with muted might be delayed until user interaction or loadedmetadata
      const onCanPlay = () => {
        video.play().catch(() => {});
        video.removeEventListener('canplay', onCanPlay);
      };
      video.addEventListener('canplay', onCanPlay);
    });

    return () => {
      isMounted = false;
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('ended', handleEnded);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      if (playbackTimerRef.current) {
        clearInterval(playbackTimerRef.current);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      <div className="w-full h-full scale-[1.15] origin-top overflow-hidden relative">
        {/* Hidden / Capture Video */}
        <video
          ref={videoRef}
          src={VIDEO_URL}
          muted
          playsInline
          autoPlay
          preload="auto"
          crossOrigin="anonymous"
          className="w-full h-full object-cover object-top transition-opacity duration-500"
          style={{ display: isCanvasReady ? 'none' : 'block' }}
        />

        {/* Display Canvas for Boomerang Ping-Pong */}
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover object-top"
          style={{ display: isCanvasReady ? 'block' : 'none' }}
        />
      </div>
    </div>
  );
};
