import React, { useEffect, useCallback } from 'react';
import { GalleryPhoto } from '../data/unifiedDestinationsData';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
  Compass,
  Sparkles
} from 'lucide-react';

interface DestinationLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  destinationName: string;
  destinationRegion: string;
  photos: GalleryPhoto[];
  activePhotoIndex: number;
  onSelectPhotoIndex: (index: number) => void;
}

export const DestinationLightboxModal: React.FC<DestinationLightboxModalProps> = ({
  isOpen,
  onClose,
  destinationName,
  destinationRegion,
  photos,
  activePhotoIndex,
  onSelectPhotoIndex
}) => {
  const totalPhotos = photos.length;

  const handleNext = useCallback(() => {
    onSelectPhotoIndex((activePhotoIndex + 1) % totalPhotos);
  }, [activePhotoIndex, totalPhotos, onSelectPhotoIndex]);

  const handlePrev = useCallback(() => {
    onSelectPhotoIndex((activePhotoIndex - 1 + totalPhotos) % totalPhotos);
  }, [activePhotoIndex, totalPhotos, onSelectPhotoIndex]);

  // Keyboard navigation: ArrowLeft, ArrowRight, Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent body background scroll while lightbox is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleNext, handlePrev, onClose]);

  if (!isOpen || totalPhotos === 0) return null;

  const currentPhoto = photos[activePhotoIndex] || photos[0];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Galería fotográfica de ${destinationName}`}
      className="fixed inset-0 z-50 bg-[#121110]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 lg:p-10 select-none animate-fadeIn"
      onClick={onClose}
    >
      {/* 1. Lightbox Header */}
      <div
        className="w-full flex items-center justify-between text-white z-20 pb-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="space-y-0.5">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E2B342]">
            <Sparkles className="w-3.5 h-3.5 text-[#E2B342]" />
            <span>GALERÍA MONUMENTAL · {destinationRegion}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-black text-[#FBF8F1]">
            {destinationName}
          </h3>
        </div>

        {/* Counter and Close Button */}
        <div className="flex items-center gap-4">
          <div className="text-xs font-mono font-bold text-white/75 bg-white/10 px-3 py-1.5 rounded-full">
            <span>{String(activePhotoIndex + 1).padStart(2, '0')}</span>
            <span className="text-white/40 mx-1.5">/</span>
            <span>{String(totalPhotos).padStart(2, '0')}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#FBF8F1] hover:scale-105 transition-all"
            aria-label="Cerrar galería fotográfica"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      {/* 2. Main Stage: Large Panoramic Viewport with Pop Glare & Film Fade */}
      <div
        className="relative flex-1 w-full max-w-6xl mx-auto flex items-center justify-center my-auto min-h-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Navigation Button: Previous */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:-left-6 lg:-left-12 z-30 p-2.5 sm:p-3.5 rounded-full bg-[#121110]/80 hover:bg-[#A51E2D] text-white hover:scale-110 transition-all shadow-lg backdrop-blur-sm"
          aria-label="Fotografía anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* The Frame */}
        <div className="relative w-full h-full max-h-[70vh] rounded-2xl overflow-hidden bg-[#181614] flex items-center justify-center shadow-2xl">
          <img
            key={currentPhoto.id}
            src={currentPhoto.imageUrl}
            alt={currentPhoto.imageAlt}
            className="w-full h-full object-cover pop-aesthetic-filter transition-all duration-500 ease-out"
          />

          {/* Warm Sun Glare */}
          <div className="pop-sun-glare pointer-events-none" />

          {/* Bottom-Up Film Fade Gradient for Captions */}
          <div className="pop-film-fade-hero pointer-events-none" />

          {/* Top Photo Tag */}
          <div className="absolute top-4 left-4 z-20">
            <span className="px-3 py-1 rounded-full bg-[#121110]/80 backdrop-blur-md text-[#E2B342] text-xs font-mono font-bold flex items-center gap-2">
              <Camera className="w-3.5 h-3.5 text-[#E2B342]" />
              <span>{currentPhoto.photoTag}</span>
            </span>
          </div>

          {/* Bottom Caption Overlay */}
          <div className="absolute bottom-5 inset-x-6 z-20 text-white space-y-1">
            <h4 className="text-xl sm:text-2xl font-serif font-black text-[#FBF8F1] drop-shadow-md">
              {currentPhoto.title}
            </h4>
            <p className="text-xs sm:text-sm text-white/85 font-sans leading-relaxed max-w-2xl drop-shadow-sm">
              {currentPhoto.subtitle}
            </p>
          </div>
        </div>

        {/* Navigation Button: Next */}
        <button
          onClick={handleNext}
          className="absolute right-2 sm:-right-6 lg:-right-12 z-30 p-2.5 sm:p-3.5 rounded-full bg-[#121110]/80 hover:bg-[#A51E2D] text-white hover:scale-110 transition-all shadow-lg backdrop-blur-sm"
          aria-label="Fotografía siguiente"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* 3. Bottom Thumbnail Strip for Fast Hopping */}
      <div
        className="w-full max-w-3xl mx-auto flex items-center justify-center gap-3 pt-4 z-20 overflow-x-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {photos.map((photo, idx) => {
          const isActive = idx === activePhotoIndex;
          return (
            <button
              key={photo.id}
              onClick={() => onSelectPhotoIndex(idx)}
              className={`relative rounded-xl overflow-hidden aspect-[16/10] w-20 sm:w-24 shrink-0 transition-all ${
                isActive
                  ? 'ring-2 ring-[#E2B342] scale-105 opacity-100'
                  : 'opacity-50 hover:opacity-90'
              }`}
              aria-label={`Ver ${photo.title}`}
            >
              <img
                src={photo.imageUrl}
                alt={photo.imageAlt}
                className="w-full h-full object-cover"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};
