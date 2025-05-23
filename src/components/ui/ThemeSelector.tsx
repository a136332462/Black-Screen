'use client'

/**
 * 主题选择组件
 */
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface ThemeSelectorProps {
  themes: {
    id: string;
    name: string;
    image: string;
  }[];
  onThemeSelect: (themeId: string) => void;
  dictionary: any;
}

export default function ThemeSelector({ themes, onThemeSelect, dictionary }: ThemeSelectorProps) {
  const [selectedTheme, setSelectedTheme] = useState<string>('none');

  const handleThemeSelect = (themeId: string) => {
    if (themeId !== selectedTheme) {
      setSelectedTheme(themeId);
      onThemeSelect(themeId);
    }
  };

  // 添加动画效果
  useEffect(() => {
    const containers = document.querySelectorAll('.theme-container');
    containers.forEach((container, index) => {
      setTimeout(() => {
        (container as HTMLElement).style.opacity = '1';
        (container as HTMLElement).style.transform = 'translateY(0)';
      }, index * 100);
    });
  }, []);

  return (
    <div className="w-full backdrop-blur-sm bg-black/30 rounded-2xl p-6 border border-[#3A6FF8]/10 shadow-lg relative overflow-hidden mb-8">
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#3A6FF8]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex flex-wrap items-center gap-8 justify-center">
        {themes.map((theme) => (
          <button 
            key={theme.id}
            className="theme-container flex flex-col items-center bg-[#1A1A1A] backdrop-blur-sm rounded-xl p-4 transition-all duration-300 hover:scale-105 border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 shadow-lg" 
            style={{ 
              opacity: 0, 
              transform: 'translateY(20px)',
              transition: 'all 0.3s ease',
              boxShadow: selectedTheme === theme.id ? '0 0 0 2px #3A6FF8, 0 4px 12px rgba(0, 0, 0, 0.5)' : ''
            }}
            data-theme={theme.id}
            aria-label={`Select ${theme.name} theme`}
            onClick={() => handleThemeSelect(theme.id)}
          >
            {theme.image ? (
              <div className="relative w-16 h-16 rounded-lg overflow-hidden group">
                <Image 
                  src={theme.image} 
                  alt={`${theme.name} theme`}
                  className="object-cover w-16 h-16 rounded-lg shadow-md transition-all duration-300 group-hover:scale-110" 
                  width={64} 
                  height={64}
                  priority={theme.id === 'aurora'}
                  unoptimized={true}
                />
                {selectedTheme === theme.id && (
                  <div className="absolute inset-0 bg-[#3A6FF8]/30 flex items-center justify-center rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                )}
              </div>
            ) : (
              <div className="w-16 h-16 bg-[#111111] flex items-center justify-center rounded-lg">
                <svg className="w-8 h-8 text-[#B0B3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </div>
            )}
            <p className="text-sm text-center mt-3 text-[#B0B3B8] group-hover:text-white transition-colors">{theme.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
