/**
 * Custom Theme Creator Component
 */
'use client';

import { useState, useEffect } from 'react';

interface CustomColor {
  id: string;
  name: string;
  color: string;
}

interface CustomThemeCreatorProps {
  onPreview: (colors: CustomColor[]) => void;
  dictionary: any;
}

export default function CustomThemeCreator({ onPreview, dictionary }: CustomThemeCreatorProps) {
  const [customColors, setCustomColors] = useState<CustomColor[]>([]);
  const [selectedColorIndex, setSelectedColorIndex] = useState<number>(-1);

  // Load custom colors from localStorage
  useEffect(() => {
    const loadCustomColors = () => {
      try {
        const savedColors = localStorage.getItem('customColors');
        if (savedColors) {
          setCustomColors(JSON.parse(savedColors));
        }
      } catch (error) {
        console.error('Failed to load custom colors:', error);
      }
    };

    loadCustomColors();
  }, []);

  // Save to localStorage
  const saveToLocalStorage = () => {
    try {
      localStorage.setItem('customColors', JSON.stringify(customColors));
    } catch (error) {
      console.error('Failed to save custom colors:', error);
    }
  };

  // Add new color
  const addNewColor = () => {
    const newColor: CustomColor = {
      id: `color-${Date.now()}`,
      name: `Color ${customColors.length + 1}`,
      color: `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`
    };
    
    const updatedColors = [...customColors, newColor];
    setCustomColors(updatedColors);
    setSelectedColorIndex(updatedColors.length - 1);
    
    // Save to localStorage
    setTimeout(() => {
      saveToLocalStorage();
      updateColorDisplay(newColor.color);
    }, 100);
  };

  // Delete color
  const deleteColor = (index: number) => {
    const updatedColors = [...customColors];
    updatedColors.splice(index, 1);
    setCustomColors(updatedColors);
    setSelectedColorIndex(-1);
    
    // Save to localStorage
    setTimeout(() => saveToLocalStorage(), 100);
  };

  // Update color
  const updateColor = (index: number, color: string) => {
    const updatedColors = [...customColors];
    updatedColors[index].color = color;
    setCustomColors(updatedColors);
    
    // Save to localStorage and update display
    setTimeout(() => {
      saveToLocalStorage();
      updateColorDisplay(color);
    }, 100);
  };

  // Update color name
  const updateColorName = (index: number, name: string) => {
    const updatedColors = [...customColors];
    updatedColors[index].name = name;
    setCustomColors(updatedColors);
    
    // Save to localStorage
    setTimeout(() => saveToLocalStorage(), 100);
  };

  // Update colorDisplay
  const updateColorDisplay = (color: string) => {
    const colorDisplay = document.getElementById('colorDisplay');
    if (colorDisplay) {
      colorDisplay.style.backgroundColor = color;
      
      // Also update current color in localStorage
      try {
        localStorage.setItem('currentColor', color);
      } catch (error) {
        console.error('Failed to save current color:', error);
      }
    }
  };

  return (
    <section className="py-8 max-w-[900px] mx-auto px-4 md:px-6">
      <div className="w-full backdrop-blur-sm bg-black/30 rounded-2xl p-6 border border-[#3A6FF8]/10 shadow-lg relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#3A6FF8]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#3A6FF8]/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <h2 className="text-3xl font-semibold text-center text-white mb-4 relative">
          Create Custom Screen Theme
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#3A6FF8] to-transparent rounded-full mx-auto mt-2"></div>
        </h2>
        <p className="text-center text-[#B0B3B8] mb-8">For photography, presentations and creative projects</p>
        
        <div className="backdrop-blur-sm rounded-xl p-6 bg-[#1A1A1A]/50 border border-[#3A6FF8]/10 relative">
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#3A6FF8]/30 rounded-tl-xl"></div>
          <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[#3A6FF8]/30 rounded-tr-xl"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-[#3A6FF8]/30 rounded-bl-xl"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#3A6FF8]/30 rounded-br-xl"></div>
          
          <div className="flex flex-col gap-6">
            <div id="customColorsContainer" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
              {customColors.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`custom-color-item relative ${selectedColorIndex === index ? 'ring-2 ring-[#3A6FF8] scale-105' : ''} transition-all duration-300 hover:scale-105 group`}
                  onClick={() => {
                    setSelectedColorIndex(index);
                    updateColorDisplay(item.color);
                  }}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <button 
                      className="absolute -top-2 -right-2 p-1.5 rounded-full bg-[#1A1A1A] hover:bg-red-600 transition-all z-10 border border-[#3A6FF8]/20 opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 shadow-lg"
                      title="Delete color" 
                      aria-label={`Delete ${item.name} color`}
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteColor(index);
                      }}
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                      </svg>
                    </button>
                    
                    <div className="relative">
                      <input 
                        type="color" 
                        id={item.id} 
                        className="w-full h-20 rounded-lg border border-[#3A6FF8]/30 cursor-pointer" 
                        value={item.color}
                        onChange={(e) => updateColor(index, e.target.value)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none rounded-lg"></div>
                      
                      {selectedColorIndex === index && (
                        <div className="absolute inset-0 flex items-center justify-center bg-[#3A6FF8]/10 rounded-lg">
                          <div className="bg-white/90 rounded-full p-1 shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#3A6FF8]" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-2 px-1">
                      <input
                        type="text"
                        className="color-name text-sm text-[#B0B3B8] block text-center bg-transparent border-b border-transparent hover:border-[#3A6FF8]/30 focus:border-[#3A6FF8] focus:outline-none transition-colors w-full"
                        value={item.name}
                        onChange={(e) => updateColorName(index, e.target.value)}
                        maxLength={20}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-4">
              <button 
                id="addColorBtn"
                className="px-6 py-3 bg-[#3A6FF8] text-white rounded-lg hover:bg-[#547DFF] transition-all border border-[#3A6FF8]/50 shadow-lg hover:shadow-[#3A6FF8]/20 hover:shadow-xl relative overflow-hidden group"
                aria-label="Add new color theme"
                onClick={addNewColor}
              >
                {/* Add button hover effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#3A6FF8]/0 via-[#FFFFFF]/20 to-[#3A6FF8]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                
                <span className="flex items-center relative z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Add New Color
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
