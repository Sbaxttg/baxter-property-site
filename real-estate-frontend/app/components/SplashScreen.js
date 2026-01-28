'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const SPLASH_DURATION_MS = 2500;

export default function SplashScreen() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, SPLASH_DURATION_MS);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="splash-screen">
      <div className="ocean-banner absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/40" />
      <img
        src="/images/Logo.png"
        alt="Coldwell Baxter Realty"
        className="logo-pop relative z-10 h-28 w-auto drop-shadow-2xl sm:h-36 md:h-44"
      />
    </div>
  );
}
