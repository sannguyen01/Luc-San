"use client";

import { useState, useRef } from "react";

interface AudioPlayerProps {
  src: string;
  label: string;
}

export function AudioPlayer({ src, label }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [canPlay, setCanPlay] = useState(false);

  function toggle() {
    const audio = audioRef.current;
    if (!audio || !canPlay) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().catch(() => setCanPlay(false));
      setPlaying(true);
    }
  }

  function handleTimeUpdate() {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    setProgress(audio.currentTime / audio.duration);
  }

  function handleLoadedMetadata() {
    const audio = audioRef.current;
    if (!audio) return;
    setDuration(audio.duration);
    setCanPlay(true);
  }

  function handleEnded() {
    setPlaying(false);
    setProgress(0);
    if (audioRef.current) audioRef.current.currentTime = 0;
  }

  function handleSeek(e: React.ChangeEvent<HTMLInputElement>) {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    const ratio = parseFloat(e.target.value);
    audio.currentTime = ratio * audio.duration;
    setProgress(ratio);
  }

  function formatTime(s: number) {
    if (!isFinite(s) || s === 0) return "–:––";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  }

  return (
    <div
      style={{
        border: "1px solid var(--border-medium)",
        padding: "var(--space-500) var(--space-600)",
      }}
    >
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        preload="metadata"
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--space-500)",
        }}
      >
        {/* Play / Pause */}
        <button
          onClick={toggle}
          aria-label={playing ? "Pause" : "Play"}
          style={{
            width: "40px",
            height: "40px",
            border: "1px solid var(--border-medium)",
            borderRadius: "50%",
            background: "transparent",
            cursor: canPlay ? "pointer" : "default",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            opacity: canPlay ? 1 : 0.4,
            transition: "border-color var(--duration-fast) var(--ease-out)",
          }}
        >
          {playing ? (
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
              <rect x="0" y="0" width="3" height="12" fill="var(--ls-void-black)" />
              <rect x="7" y="0" width="3" height="12" fill="var(--ls-void-black)" />
            </svg>
          ) : (
            <svg
              width="10"
              height="12"
              viewBox="0 0 10 12"
              fill="none"
              style={{ marginLeft: "2px" }}
            >
              <path d="M0 0 L10 6 L0 12 Z" fill="var(--ls-void-black)" />
            </svg>
          )}
        </button>

        {/* Track + progress */}
        <div style={{ flex: 1 }}>
          <p
            className="text-caption"
            style={{
              color: "var(--ls-void-black)",
              marginBottom: "var(--space-200)",
            }}
          >
            {label}
          </p>

          {/* Track bar */}
          <div style={{ position: "relative", height: "16px", display: "flex", alignItems: "center" }}>
            {/* Background rail */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                right: 0,
                height: "1px",
                background: "var(--ls-shadow-silver)",
                transform: "translateY(-50%)",
              }}
            />
            {/* Progress fill */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                height: "1px",
                width: `${progress * 100}%`,
                background: "var(--ls-void-black)",
                transform: "translateY(-50%)",
                transition: "width 0.1s linear",
              }}
            />
            {/* Invisible seek input */}
            <input
              type="range"
              min="0"
              max="1"
              step="0.001"
              value={progress}
              onChange={handleSeek}
              aria-label="Seek audio"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                opacity: 0,
                cursor: canPlay ? "pointer" : "default",
              }}
            />
          </div>
        </div>

        {/* Time */}
        <p
          className="text-caption"
          style={{ flexShrink: 0, minWidth: "2.8rem", textAlign: "right" }}
        >
          {formatTime(duration * progress)}
        </p>
      </div>
    </div>
  );
}
