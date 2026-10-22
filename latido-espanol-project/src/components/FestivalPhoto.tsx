import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';
import type { SpanishFestival } from '../data/festivalsData';

interface FestivalPhotoProps {
  festival: Pick<SpanishFestival, 'imageUrl' | 'imageAlt'>;
  className?: string;
  imageClassName?: string;
}

export const FestivalPhoto: React.FC<FestivalPhotoProps> = ({ festival, className = '', imageClassName = '' }) => {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className={`overflow-hidden bg-gradient-to-br from-[#6d2930] via-[#402c26] to-[#18231d] ${className}`}>
      {imageFailed ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white/70" aria-label="Imagen no disponible">
          <ImageOff className="h-7 w-7" aria-hidden="true" />
          <span className="text-xs">Imagen no disponible</span>
        </div>
      ) : (
        <img
          src={festival.imageUrl}
          alt={festival.imageAlt}
          loading="lazy"
          onError={() => setImageFailed(true)}
          className={`h-full w-full object-cover ${imageClassName}`}
        />
      )}
    </div>
  );
};
