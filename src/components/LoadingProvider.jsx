'use client'

import { useState, useEffect } from 'react';
import Preloader from './Preloader';

export default function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setShowContent(true), 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <Preloader isLoading={isLoading} />
      <div
        className={`transition-opacity duration-500 ease-in-out ${showContent ? 'opacity-100' : 'opacity-0'}`}
      >
        {children}
      </div>
    </div>
  );
}