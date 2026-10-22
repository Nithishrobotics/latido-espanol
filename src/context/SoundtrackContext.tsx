import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';
import { SOUND_TRACKS, SoundTrack } from '../data/soundsOfSpainData';

const STORAGE_LAST_TRACK_ID = 'rumbo-soundtrack-last-track-id';
const STORAGE_LAST_TIME = 'rumbo-soundtrack-last-time';

interface SoundtrackContextType {
  currentTrack: SoundTrack;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isMiniPlayerOpen: boolean;
  playTrack: (track: SoundTrack, resumeAtTime?: number) => void;
  togglePlay: () => void;
  pauseTrack: () => void;
  nextTrack: () => void;
  prevTrack: () => void;
  seek: (targetSeconds: number) => void;
  setVolume: (vol: number) => void;
  setIsMiniPlayerOpen: (open: boolean) => void;
  audioVisualizerLevels: number[];
}

const SoundtrackContext = createContext<SoundtrackContextType | null>(null);

const resolveAudioUrl = (url?: string): string => {
  if (!url) return '';
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = url.startsWith('/') ? url.slice(1) : url;
  return `${cleanBase}${cleanPath}`;
};

export const SoundtrackProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Restore last played track from localStorage or default to Romanza Española
  const [currentTrack, setCurrentTrack] = useState<SoundTrack>(() => {
    try {
      const savedId = localStorage.getItem(STORAGE_LAST_TRACK_ID);
      const found = SOUND_TRACKS.find((t) => t.id === savedId);
      if (found) return found;
    } catch {}
    return SOUND_TRACKS[0];
  });

  // Restore last playback position from localStorage (Spotify style)
  const initialSavedTimeRef = useRef<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(() => {
    try {
      const savedTime = localStorage.getItem(STORAGE_LAST_TIME);
      if (savedTime) {
        const parsed = parseFloat(savedTime);
        if (!isNaN(parsed) && parsed > 0) {
          initialSavedTimeRef.current = parsed;
          return parsed;
        }
      }
    } catch {}
    return 0;
  });

  const [duration, setDuration] = useState<number>(() => {
    return SOUND_TRACKS[0].durationSec || 167;
  });

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolumeState] = useState<number>(0.8);
  const [isMiniPlayerOpen, setIsMiniPlayerOpen] = useState<boolean>(true);
  const [audioVisualizerLevels, setAudioVisualizerLevels] = useState<number[]>([4, 10, 6, 14, 8]);

  // Native HTML5 Audio Element for real song files
  const audioElementRef = useRef<HTMLAudioElement | null>(null);
  const nextTrackRef = useRef<() => void>(() => {});

  // Web Audio Synth Fallback (when no audio file is provided)
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const synthTimerRef = useRef<number | null>(null);
  const progressTimerRef = useRef<number | null>(null);
  const stepRef = useRef<number>(0);
  const isPlayingRef = useRef<boolean>(isPlaying);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  // Save last track & playback position to localStorage (Spotify style)
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_LAST_TRACK_ID, currentTrack.id);
      localStorage.setItem(STORAGE_LAST_TIME, String(Math.floor(currentTime)));
    } catch {}
  }, [currentTrack, currentTime]);

  // Initialize HTML5 Audio element
  useEffect(() => {
    const audio = new Audio();
    audio.preload = 'metadata';
    if (currentTrack.audioUrl) {
      audio.src = resolveAudioUrl(currentTrack.audioUrl);
    }
    audioElementRef.current = audio;

    const handleLoadedMetadata = () => {
      if (audio.duration && !isNaN(audio.duration) && audio.duration > 0) {
        setDuration(Math.floor(audio.duration));
      }
      if (initialSavedTimeRef.current > 0 && initialSavedTimeRef.current < (audio.duration || 9999)) {
        try {
          audio.currentTime = initialSavedTimeRef.current;
        } catch {}
      }
    };

    const handleTimeUpdate = () => {
      if (audio.currentTime !== undefined) {
        setCurrentTime(audio.currentTime);
      }
    };

    const handleEnded = () => {
      if (nextTrackRef.current) {
        nextTrackRef.current();
      } else {
        setIsPlaying(false);
        setCurrentTime(0);
      }
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
      audio.src = '';
    };
  }, []);

  // Web Audio Synthesizer Initialization (Fallback)
  const initWebAudio = useCallback(() => {
    if (!audioCtxRef.current) {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtxClass) {
        audioCtxRef.current = new AudioCtxClass();
        masterGainRef.current = audioCtxRef.current.createGain();
        masterGainRef.current.gain.setValueAtTime(volume, audioCtxRef.current.currentTime);
        masterGainRef.current.connect(audioCtxRef.current.destination);
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
  }, [volume]);

  // Web Audio Pluck for Procedural Synthesis
  const playGuitarPluck = useCallback((freq: number, time: number, decay: number = 0.5) => {
    if (!audioCtxRef.current || !masterGainRef.current) return;
    const ctx = audioCtxRef.current;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, time);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1600, time);
    filter.frequency.exponentialRampToValueAtTime(320, time + decay);

    gain.gain.setValueAtTime(0.24, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + decay);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(masterGainRef.current);

    osc.start(time);
    osc.stop(time + decay);
  }, []);

  const playPalmaSound = useCallback((time: number, isCrisp: boolean = true) => {
    if (!audioCtxRef.current || !masterGainRef.current) return;
    const ctx = audioCtxRef.current;

    const bufferSize = Math.floor(ctx.sampleRate * 0.05);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * (isCrisp ? 0.009 : 0.016)));
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(isCrisp ? 1100 : 750, time);
    filter.Q.setValueAtTime(2.8, time);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(isCrisp ? 0.28 : 0.20, time);
    gain.gain.exponentialRampToValueAtTime(0.005, time + 0.045);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(masterGainRef.current);
    noise.start(time);
  }, []);

  const stopSynthLoop = useCallback(() => {
    if (synthTimerRef.current) {
      window.clearInterval(synthTimerRef.current);
      synthTimerRef.current = null;
    }
    if (progressTimerRef.current) {
      window.clearInterval(progressTimerRef.current);
      progressTimerRef.current = null;
    }
    setAudioVisualizerLevels([4, 6, 4, 8, 5]);
  }, []);

  const startSynthLoop = useCallback((track: SoundTrack) => {
    initWebAudio();
    stopSynthLoop();

    const trackDur = track.durationSec || 160;
    setDuration(trackDur);

    const stepIntervalMs = (60 / track.bpm) * 1000;

    synthTimerRef.current = window.setInterval(() => {
      if (!isPlayingRef.current || !audioCtxRef.current) return;
      const now = audioCtxRef.current.currentTime;
      const step = stepRef.current;
      const chordRoot = track.chords[step % track.chords.length] || track.baseNote;

      if (track.mode === 'guitar') {
        playGuitarPluck(chordRoot * 0.5, now, 0.45);
        playGuitarPluck(chordRoot, now + 0.09, 0.35);
        playGuitarPluck(chordRoot * 1.25, now + 0.18, 0.3);
        playGuitarPluck(chordRoot * 1.5, now + 0.27, 0.28);
      } else if (track.mode === 'palmas') {
        const isAccent = (step % 12 === 3) || (step % 12 === 6) || (step % 12 === 8) || (step % 12 === 10);
        playPalmaSound(now, isAccent);
        playGuitarPluck(chordRoot, now + 0.05, 0.25);
      } else {
        playGuitarPluck(chordRoot * 0.5, now, 0.4);
        playGuitarPluck(chordRoot, now + 0.15, 0.3);
      }

      setAudioVisualizerLevels([
        Math.floor(Math.random() * 16) + 4,
        Math.floor(Math.random() * 22) + 6,
        Math.floor(Math.random() * 18) + 5,
        Math.floor(Math.random() * 24) + 6,
        Math.floor(Math.random() * 14) + 4
      ]);

      stepRef.current++;
    }, stepIntervalMs);

    progressTimerRef.current = window.setInterval(() => {
      setCurrentTime((prev) => {
        if (prev >= trackDur) return 0;
        return prev + 1;
      });
    }, 1000);
  }, [initWebAudio, stopSynthLoop, playGuitarPluck, playPalmaSound]);

  // Master Play Track Function
  const playTrack = useCallback((track: SoundTrack, resumeAtTime?: number) => {
    setCurrentTrack(track);
    setIsPlaying(true);
    setIsMiniPlayerOpen(true);
    setDuration(track.durationSec || 167);

    const startTime = resumeAtTime !== undefined ? resumeAtTime : 0;
    setCurrentTime(startTime);

    if (track.audioUrl && audioElementRef.current) {
      // Real audio recording playback
      stopSynthLoop();
      const audio = audioElementRef.current;
      const finalAudioUrl = resolveAudioUrl(track.audioUrl);
      if (!audio.src || !audio.src.endsWith(finalAudioUrl)) {
        audio.src = finalAudioUrl;
      }
      audio.volume = volume;
      
      const applyStartTime = () => {
        if (startTime > 0) {
          try {
            audio.currentTime = startTime;
          } catch {}
        }
      };

      if (audio.readyState >= 1) {
        applyStartTime();
      } else {
        audio.addEventListener('loadedmetadata', applyStartTime, { once: true });
      }

      audio.play().catch((err) => {
        console.warn('Playback error:', err);
      });
    } else {
      // Procedural synthesizer playback
      if (audioElementRef.current) {
        audioElementRef.current.pause();
      }
      startSynthLoop(track);
    }
  }, [volume, stopSynthLoop, startSynthLoop]);

  // Toggle Play / Pause
  const togglePlay = useCallback(() => {
    if (isPlaying) {
      setIsPlaying(false);
      if (audioElementRef.current && currentTrack.audioUrl) {
        audioElementRef.current.pause();
      } else {
        stopSynthLoop();
      }
    } else {
      setIsPlaying(true);
      setIsMiniPlayerOpen(true);
      if (currentTrack.audioUrl && audioElementRef.current) {
        const audio = audioElementRef.current;
        const finalAudioUrl = resolveAudioUrl(currentTrack.audioUrl);
        if (!audio.src || !audio.src.endsWith(finalAudioUrl)) {
          audio.src = finalAudioUrl;
        }
        audio.volume = volume;
        if (currentTime > 0) {
          try {
            audio.currentTime = currentTime;
          } catch {}
        }
        audio.play().catch((err) => {
          console.warn('Playback error:', err);
        });
      } else {
        startSynthLoop(currentTrack);
      }
    }
  }, [isPlaying, currentTrack, volume, currentTime, stopSynthLoop, startSynthLoop]);

  const pauseTrack = useCallback(() => {
    setIsPlaying(false);
    if (audioElementRef.current) {
      audioElementRef.current.pause();
    }
    stopSynthLoop();
  }, [stopSynthLoop]);

  // Next / Previous Track
  const nextTrack = useCallback(() => {
    const currentIndex = SOUND_TRACKS.findIndex((t) => t.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % SOUND_TRACKS.length;
    playTrack(SOUND_TRACKS[nextIndex], 0);
  }, [currentTrack, playTrack]);

  useEffect(() => {
    nextTrackRef.current = nextTrack;
  }, [nextTrack]);

  const prevTrack = useCallback(() => {
    const currentIndex = SOUND_TRACKS.findIndex((t) => t.id === currentTrack.id);
    const prevIndex = (currentIndex - 1 + SOUND_TRACKS.length) % SOUND_TRACKS.length;
    playTrack(SOUND_TRACKS[prevIndex], 0);
  }, [currentTrack, playTrack]);

  // Precise Seek / Scrub like YouTube / Spotify
  const seek = useCallback((targetSeconds: number) => {
    const clamped = Math.max(0, Math.min(duration, targetSeconds));
    setCurrentTime(clamped);

    if (currentTrack.audioUrl && audioElementRef.current) {
      audioElementRef.current.currentTime = clamped;
    }

    try {
      localStorage.setItem(STORAGE_LAST_TIME, String(Math.floor(clamped)));
    } catch {}
  }, [duration, currentTrack]);

  // Set Volume
  const setVolume = useCallback((newVol: number) => {
    const clamped = Math.max(0, Math.min(1, newVol));
    setVolumeState(clamped);
    if (audioElementRef.current) {
      audioElementRef.current.volume = clamped;
    }
    if (masterGainRef.current && audioCtxRef.current) {
      masterGainRef.current.gain.setValueAtTime(clamped, audioCtxRef.current.currentTime);
    }
  }, []);

  return (
    <SoundtrackContext.Provider
      value={{
        currentTrack,
        isPlaying,
        currentTime,
        duration,
        volume,
        isMiniPlayerOpen,
        playTrack,
        togglePlay,
        pauseTrack,
        nextTrack,
        prevTrack,
        seek,
        setVolume,
        setIsMiniPlayerOpen,
        audioVisualizerLevels
      }}
    >
      {children}
    </SoundtrackContext.Provider>
  );
};

export function useSoundtrack(): SoundtrackContextType {
  const context = useContext(SoundtrackContext);
  if (!context) {
    throw new Error('useSoundtrack must be used within a SoundtrackProvider');
  }
  return context;
}
