/**
 * Download Options Component
 */
'use client';
import { useState, useEffect } from 'react';
import html2canvas from 'html2canvas';

interface Resolution {
  label: string;
  width: number;
  height: number;
}

interface DownloadOptionsProps {
  onDownload: (width: number, height: number) => void;
  dictionary: any;
}

export default function DownloadOptions({ onDownload, dictionary }: DownloadOptionsProps) {
  const [selectedResolution, setSelectedResolution] = useState<Resolution>({
    label: '1080p',
    width: 1920,
    height: 1080
  });
  const [customWidth, setCustomWidth] = useState<number>(1920);
  const [customHeight, setCustomHeight] = useState<number>(1080);
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [currentColor, setCurrentColor] = useState<string>('#000000');
  const [isCapturing, setIsCapturing] = useState<boolean>(false);

  // Get current color from localStorage
  useEffect(() => {
    try {
      const storedColor = localStorage.getItem('currentColor');
      if (storedColor) {
        setCurrentColor(storedColor);
      }
    } catch (error) {
      console.error('Failed to get color:', error);
    }
  }, []);

  const resolutions: Resolution[] = [
    { label: '480p', width: 854, height: 480 },
    { label: '720p', width: 1280, height: 720 },
    { label: '1080p', width: 1920, height: 1080 },
    { label: '1440p', width: 2560, height: 1440 },
    { label: '4K', width: 3840, height: 2160 },
    { label: '8K', width: 7680, height: 4320 },
    { label: 'Custom', width: customWidth, height: customHeight }
  ];

  const handleResolutionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = resolutions.find(res => res.label === e.target.value);
    if (selected) {
      if (selected.label === 'Custom') {
        setIsCustom(true);
      } else {
        setIsCustom(false);
        setCustomWidth(selected.width);
        setCustomHeight(selected.height);
        setSelectedResolution(selected);
      }
    }
  };

  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const width = parseInt(e.target.value);
    setCustomWidth(width);
    setSelectedResolution({
      label: 'Custom',
      width: width,
      height: customHeight
    });
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const height = parseInt(e.target.value);
    setCustomHeight(height);
    setSelectedResolution({
      label: 'Custom',
      width: customWidth,
      height: height
    });
  };

  const handleDownload = async () => {
    setIsCapturing(true);
    try {
      // 获取显示区域元素
      const displayElement = document.getElementById('colorDisplay');
      if (!displayElement) {
        console.error('Unable to find display area element');
        setIsCapturing(false);
        return;
      }
  
      // 计算适当的缩放比例以确保高质量输出
      const targetWidth = isCustom ? customWidth : selectedResolution.width;
      const targetHeight = isCustom ? customHeight : selectedResolution.height;
      
      // 根据目标分辨率动态调整缩放比例，确保高质量输出
      const scaleRatio = Math.max(
        Math.min(Math.max(targetWidth, targetHeight) / 1000, 4), // 限制最大缩放为4
        2 // 最小缩放为2
      );
      
      // 使用html2canvas捕获显示区域，提高质量设置
      const canvas = await html2canvas(displayElement, {
        backgroundColor: null,
        scale: scaleRatio, // 使用动态计算的缩放比例
        logging: false,
        useCORS: true,
        allowTaint: true,
        imageTimeout: 0, // 防止图像加载超时
        renderSettings: {
          quality: 1.0 // 最高质量设置
        }
      });
  
      // 创建一个新的高质量画布
      const targetCanvas = document.createElement('canvas');
      targetCanvas.width = targetWidth;
      targetCanvas.height = targetHeight;
      const ctx = targetCanvas.getContext('2d', { alpha: true });
      
      if (ctx) {
        // 启用图像平滑处理以提高质量
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        
        // 绘制背景色
        ctx.fillStyle = currentColor;
        ctx.fillRect(0, 0, targetCanvas.width, targetCanvas.height);
        
        // 将捕获的内容缩放并绘制到目标画布
        ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 
                     0, 0, targetWidth, targetHeight);
        
        // 获取当前主题名称或颜色代码作为文件名
        let themeName = '';
        const themeElement = displayElement.getAttribute('data-theme');
        if (themeElement) {
          themeName = themeElement;
        } else {
          themeName = currentColor.replace('#', '');
        }
        
        // 创建下载链接，使用高质量PNG输出
        const link = document.createElement('a');
        link.download = `blackscreen_${themeName}_${targetWidth}x${targetHeight}.png`;
        link.href = targetCanvas.toDataURL('image/png', 1.0); // 使用最高质量设置
        link.click();
      }
    } catch (error) {
      console.error('An error occurred during the screenshot process：', error);
    } finally {
      setIsCapturing(false);
    }
  };

  return (
    <div className="w-full backdrop-blur-sm bg-black/30 rounded-2xl p-6 border border-[#3A6FF8]/10 shadow-lg relative overflow-hidden">
      {/* 背景装饰元素 */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#3A6FF8]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#3A6FF8]/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <h2 className="text-2xl font-semibold text-center text-white mb-4 relative">
        Download high-resolution images
        <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#3A6FF8] to-transparent rounded-full mx-auto mt-2"></div>
      </h2>
      <p className="text-sm text-[#B0B3B8] text-center mb-6">Suitable for projector setup, presentations, and OLED screen protection.</p>

      <div className="flex flex-col items-center gap-6 max-w-sm mx-auto">
        <select 
          id="resolutionSelect"
          className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] text-white border border-[#3A6FF8]/20 focus:outline-none focus:ring-2 focus:ring-[#3A6FF8] transition-colors hover:bg-[#2A2A2A]"
          value={selectedResolution.label}
          onChange={handleResolutionChange}
        >
          {resolutions.map(res => (
            <option 
              key={res.label} 
              value={res.label}
            >
              {res.label} ({res.width} × {res.height})
            </option>
          ))}
        </select>
        
        <div className="flex gap-4 items-center w-full">
          <div className="flex items-center gap-1 flex-1">
            <input 
              type="number" 
              id="widthInput"
              className="w-full px-3 py-2 rounded-lg bg-[#1A1A1A] text-white border border-[#3A6FF8]/20 focus:outline-none focus:ring-2 focus:ring-[#3A6FF8] transition-colors hover:bg-[#2A2A2A]"
              value={customWidth} 
              min="1" 
              placeholder="Width"
              aria-label="Width (px)"
              onChange={handleWidthChange}
            />
            <span className="text-[#B0B3B8] ml-1">px</span>
          </div>
          <span className="text-[#B0B3B8]">×</span>
          <div className="flex items-center gap-1 flex-1">
            <input 
              type="number" 
              id="heightInput"
              className="w-full px-3 py-2 rounded-lg bg-[#1A1A1A] text-white border border-[#3A6FF8]/20 focus:outline-none focus:ring-2 focus:ring-[#3A6FF8] transition-colors hover:bg-[#2A2A2A]"
              value={customHeight} 
              min="1" 
              placeholder="Height"
              aria-label="Height（px）"
              onChange={handleHeightChange}
            />
            <span className="text-[#B0B3B8] ml-1">px</span>
          </div>
        </div>
        
        <button 
          id="downloadBtn"
          className={`px-8 py-3 bg-[#3A6FF8] text-white rounded-lg hover:bg-[#547DFF] transition-all border border-[#3A6FF8]/50 shadow-lg hover:shadow-[#3A6FF8]/20 hover:shadow-xl relative overflow-hidden group ${isCapturing ? 'opacity-70 cursor-wait' : ''}`}
          onClick={handleDownload}
          disabled={isCapturing}
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#3A6FF8]/0 via-[#FFFFFF]/20 to-[#3A6FF8]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
          <span className="relative z-10 flex items-center">
            {isCapturing ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download Image
              </>
            )}
          </span>
        </button>
      </div>
    </div>
  );
}
