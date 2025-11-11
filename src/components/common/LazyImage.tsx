import { FC, ImgHTMLAttributes, useState, useEffect, useRef, memo } from 'react';

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholderSrc?: string;
}

export const LazyImage: FC<LazyImageProps> = memo(({
  src,
  alt,
  placeholderSrc,
  className = '',
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(placeholderSrc || '');
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageSrc(src);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before entering viewport
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={`transition-opacity duration-300 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      onLoad={() => setIsLoaded(true)}
      {...props}
    />
  );
});

LazyImage.displayName = 'LazyImage';
