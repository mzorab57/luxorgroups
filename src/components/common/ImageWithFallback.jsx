import React, { useState } from "react";
import { getImagePath, getFallbackImage } from "../../utils/imageUtils";

const ImageWithFallback = ({
  src,
  alt,
  className = "",
  fallbackSrc,
  loading = "lazy",
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(getImagePath(src));
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fallback = fallbackSrc ? getImagePath(fallbackSrc) : getFallbackImage();

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallback);
    }
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={imgSrc}
        alt={alt}
        className={className}
        loading={loading}
        onError={handleError}
        onLoad={handleLoad}
        {...props}
      />
    </div>
  );
};

export default ImageWithFallback;
