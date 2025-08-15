'use client'

import { useState, useEffect } from 'react';
import Preloader from './Preloader';

export default function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return loading ? <Preloader /> : children;
}