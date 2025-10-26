import { useState, useEffect, useCallback } from 'react';

export const useScreenSize = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  // Debounce resize handler to prevent excessive calls
  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);
  
  useEffect(() => {
    let resizeTimeout: NodeJS.Timeout;
    
    const debouncedHandleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 100); // 100ms debounce
    };
    
    window.addEventListener('resize', debouncedHandleResize);
    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, [handleResize]);
  
  return { isMobile };
};