// Utility function to get the correct image path for different environments
export const getImagePath = (imagePath) => {
  // Remove leading slash if present
  const cleanPath = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath;

  // In development, use the path as is
  if (import.meta.env.DEV) {
    return `/${cleanPath}`;
  }

  // In production, ensure the path works with different base URLs
  const base = import.meta.env.BASE_URL || "/";
  return `${base}${cleanPath}`;
};

// Get fallback image path
export const getFallbackImage = () => {
  return getImagePath("assets/images/gallery/gallery1.webp");
};

// Preload critical images
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

// Check if image exists
export const imageExists = async (src) => {
  try {
    await preloadImage(src);
    return true;
  } catch {
    return false;
  }
};
