import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // On first render, read from localStorage (returns true/false)
    return localStorage.getItem('theme') === 'dark';
  });

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const handleToggle = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setDarkMode(prev => !prev);
      setTimeout(() => setIsAnimating(false), 300);
    }, 150);
  };

  return (
    <div className="flex items-center justify-center transition-all duration-1000 ">
      <div className="relative">
        {/* Glow effect */}
        <div className={`absolute inset-0 rounded-full blur-xl transition-all duration-700 ${
          darkMode 
            ? 'bg-purple-500/30 shadow-purple-500/50' 
            : 'bg-yellow-400/40 shadow-yellow-400/50'
        } shadow-2xl`}></div>

        {/* Main toggle button */}
        <button
          onClick={handleToggle}
          className={`relative group overflow-hidden w-10 h-10 rounded-full transition-all duration-700 transform hover:scale-110 active:scale-95 ${
            darkMode 
              ? 'bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 shadow-2xl shadow-purple-500/30' 
              : 'bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 shadow-2xl shadow-yellow-400/30'
          }`}
          aria-label="Toggle dark mode"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className={`w-full h-full rounded-full transition-all duration-700 ${
              darkMode 
                ? 'bg-gradient-to-br from-transparent via-white/10 to-transparent' 
                : 'bg-gradient-to-br from-white/30 via-transparent to-white/10'
            }`}></div>
          </div>

          {/* Rotating background effect */}
          <div className={`absolute inset-2 rounded-full transition-all duration-1000 ${
            darkMode 
              ? 'bg-gradient-to-br from-purple-700/50 to-indigo-800/50' 
              : 'bg-gradient-to-br from-yellow-300/50 to-orange-300/50'
          } ${isAnimating ? 'animate-spin' : ''}`}></div>

          {/* Icon container */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <Sun 
              className={`absolute w-6 h-6 transition-all duration-500 transform ${
                darkMode 
                  ? 'text-yellow-300/50 scale-0 rotate-180 opacity-0' 
                  : 'text-white scale-100 rotate-0 opacity-100 drop-shadow-lg'
              } ${isAnimating ? 'animate-pulse' : ''}`}
            />
            <Moon 
              className={`absolute w-6 h-6 transition-all duration-500 transform ${
                darkMode 
                  ? 'text-indigo-200 scale-100 rotate-0 opacity-100 drop-shadow-lg' 
                  : 'text-purple-300/50 scale-0 -rotate-180 opacity-0'
              } ${isAnimating ? 'animate-pulse' : ''}`}
            />
          </div>

          {/* Hover ripple effect */}
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className={`w-full h-full rounded-full animate-pulse ${
              darkMode 
                ? 'bg-gradient-to-r from-purple-400/20 to-pink-400/20' 
                : 'bg-gradient-to-r from-yellow-300/20 to-orange-300/20'
            }`}></div>
          </div>

          {/* Click animation ring */}
          <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
            isAnimating 
              ? 'ring-4 ring-white/50 scale-125' 
              : 'ring-0 scale-100'
          }`}></div>
        </button>

        {/* Floating particles */}
        <div className="absolute -inset-8 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 rounded-full transition-all duration-1000 ${
                darkMode ? 'bg-purple-300' : 'bg-yellow-300'
              } ${isAnimating ? 'opacity-100 animate-ping' : 'opacity-60'}`}
              style={{
                top: `${20 + Math.sin(i * Math.PI / 3) * 30}%`,
                left: `${50 + Math.cos(i * Math.PI / 3) * 30}%`,
                animationDelay: `${i * 100}ms`,
                animationDuration: '2s'
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DarkModeToggle;
