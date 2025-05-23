'use client'

import {useState, useRef, useEffect} from 'react'
import DisplayArea from '@/components/ui/DisplayArea'
import DownloadOptions from '@/components/ui/DownloadOptions'
import ThemeSelector from '@/components/ui/ThemeSelector'
import EyeRestTimer from '@/components/ui/EyeRestTimer'
import AchievementBadges from '@/components/ui/AchievementBadges'
import CustomThemeCreator from '@/components/ui/CustomThemeCreator'
import InfoSection from '@/components/ui/InfoSection'
import ColorSelector from "@/components/ui/ColorSelector"
import {NavigationLayout} from "@/components/Navigation"

export default function Home() {
    // 状态管理
    const [currentColor, setCurrentColor] = useState('#000000')
    const [pageColorOverlay, setPageColorOverlay] = useState<string | null>(null)
    const [currentTheme, setCurrentTheme] = useState<string | null>(null)
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [meditationTime, setMeditationTime] = useState(0)
    const [isMeditating, setIsMeditating] = useState(false)
    const [hideCursor, setHideCursor] = useState(false)

    // 引用
    const colorDisplayRef = useRef<HTMLDivElement>(null)
    const timerRef = useRef<NodeJS.Timeout | null>(null)
    const cursorTimeoutRef = useRef<NodeJS.Timeout | null>(null)
    const [selectedTheme, setSelectedTheme] = useState<string>('#000000');

    // Color options - updated according to color specification
    const themes = [
        {name: 'Black', color: '#000000'},
        {name: 'White', color: '#ffffff'},
        {name: 'Red', color: '#ef4444'},
        {name: 'Blue', color: '#3b82f6'},
        {name: 'Green', color: '#22c55e'},
        {name: 'Yellow', color: '#eab308'},
        {name: 'Dark Gray', color: '#111111'},
        {name: 'Silver Gray', color: '#B0B3B8'},
        {name: 'Deep Blue', color: '#1E3A8A'},
        {name: 'Dark Cyan', color: '#0F766E'},
        {name: 'Deep Purple', color: '#581C87'},
    ]

    // Dictionary object (should be fetched from i18n in actual project)
    const dictionary = {
        colorSelector: {
            title: 'Select Color',
            custom: 'Custom'
        },
        displayArea: {
            fullscreen: 'Fullscreen'
        },
        downloadOptions: {
            title: 'Download',
            button: 'Download Image'
        },
        themeSelector: {
            title: 'Select Theme'
        }
    }


    // 处理全屏切换
    const toggleFullscreen = () => {
        if (!isFullscreen) {
            if (colorDisplayRef.current?.requestFullscreen) {
                colorDisplayRef.current.requestFullscreen()
            } else if ((colorDisplayRef.current as any)?.webkitRequestFullscreen) {
                (colorDisplayRef.current as any).webkitRequestFullscreen()
            } else if ((colorDisplayRef.current as any)?.msRequestFullscreen) {
                (colorDisplayRef.current as any).msRequestFullscreen()
            }
            setIsFullscreen(true)
            if (!isMeditating) startMeditation()
            updateCursorVisibility()
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen()
            } else if ((document as any).webkitExitFullscreen) {
                (document as any).webkitExitFullscreen()
            } else if ((document as any).msExitFullscreen) {
                (document as any).msExitFullscreen()
            }
            setIsFullscreen(false)
            setHideCursor(false)
            document.body.classList.remove('fullscreen-cursor-hidden')
        }
    }

    // 更新鼠标可见性
    const updateCursorVisibility = () => {
        if (isFullscreen) {
            document.body.classList.remove('fullscreen-cursor-hidden')
            setHideCursor(false)

            if (cursorTimeoutRef.current) {
                clearTimeout(cursorTimeoutRef.current)
            }

            // 只有在非交互状态下才隐藏鼠标
            cursorTimeoutRef.current = setTimeout(() => {
                // 检查是否有活跃的交互元素
                const activeElement = document.activeElement;
                const isInteracting = activeElement &&
                    (activeElement.tagName === 'BUTTON' ||
                        activeElement.tagName === 'INPUT' ||
                        activeElement.tagName === 'SELECT' ||
                        activeElement.closest('.interactive-element'));

                if (!isInteracting) {
                    document.body.classList.add('fullscreen-cursor-hidden')
                    setHideCursor(true)
                }
            }, 3000)
        }
    }

    // 下载图片
    const downloadImage = (width: number, height: number) => {
        const canvas = document.createElement('canvas')
        canvas.width = width
        canvas.height = height
        const ctx = canvas.getContext('2d')
        if (ctx) {
            ctx.fillStyle = currentColor
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            const link = document.createElement('a')
            link.download = `${currentColor.replace('#', '')}_${width}x${height}.png`
            link.href = canvas.toDataURL('image/png')
            link.click()
        }
    }

    // 开始计时器
    const startMeditation = () => {
        setIsMeditating(true)
        timerRef.current = setInterval(() => {
            setMeditationTime(prev => prev + 1)
        }, 1000)
    }

    // 停止计时器
    const stopMeditation = () => {
        setIsMeditating(false)
        if (timerRef.current) {
            clearInterval(timerRef.current)
        }
    }

    // 键盘快捷键处理
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === 'Space') {
                e.preventDefault();
                toggleFullscreen();
            } else if (e.code === 'Escape' && isFullscreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen().then(() => {
                        setIsFullscreen(false);
                        setHideCursor(false);
                        document.body.classList.remove('fullscreen-cursor-hidden');
                    });
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isFullscreen]);

    // 全屏变化监听
    useEffect(() => {
        const handleFullscreenChange = () => {
            if (!document.fullscreenElement) {
                setIsFullscreen(false)
                setHideCursor(false)
                document.body.classList.remove('fullscreen-cursor-hidden')
                if (isMeditating) stopMeditation()
            }
        }

        document.addEventListener('fullscreenchange', handleFullscreenChange)
        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange)
        }
    }, [isMeditating])

    // 鼠标移动监听
    useEffect(() => {
        const handleMouseMove = () => {
            updateCursorVisibility()
        }
        if (isFullscreen) {
            window.addEventListener('mousemove', handleMouseMove)
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [isFullscreen])

    // 清理计时器
    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current)
            }
            if (cursorTimeoutRef.current) {
                clearTimeout(cursorTimeoutRef.current)
            }
        }
    }, [])

    // 从localStorage加载冥想时间
    useEffect(() => {
        try {
            const savedTime = localStorage.getItem('meditationTime')
            if (savedTime) {
                setMeditationTime(parseInt(savedTime, 10))
            }
        } catch (error) {
            console.error('Failed to load meditation time:', error)
        }
    }, [])

    // 保存冥想时间到localStorage
    useEffect(() => {
        try {
            localStorage.setItem('meditationTime', meditationTime.toString())
        } catch (error) {
            console.error('Failed to save meditation time:', error)
        }
    }, [meditationTime])

    // 处理颜色选择
    const handleColorSelect = (color: string) => {
        setCurrentColor(color)
        setCurrentTheme(null) // 选择颜色时重置主题
        setPageColorOverlay(null) // 重置页面颜色覆盖
        setSelectedTheme('none') // 重置主题为none，确保显示纯色

        // 保存当前颜色到localStorage
        try {
            localStorage.setItem('currentColor', color);
        } catch (error) {
            console.error('Failed to save current color:', error);
        }
    }

    // 处理自定义主题预览
    const handleCustomThemePreview = (colors: any[]) => {
        if (colors.length > 0) {
            // 只有在非全屏状态下才进入全屏
            if (!isFullscreen && colorDisplayRef.current) {
                setIsFullscreen(true);
            }
        } else {
        }
    }

    // 在return语句中的NavigationLayout组件内添加
    return (
        <NavigationLayout>
            <main className="pt-0 pb-2 min-h-screen mx-auto px-4 md:px-6 bg-[#000000cc]">
                <canvas id="themeCanvas" className="will-change-transform" aria-hidden="true"></canvas>

                <div className="max-w-content mx-auto px-6">
                    <section className="mb-10">
                        <div className="text-center mb-12 pt-8">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                                <span className="text-[#3A6FF8]">Black</span>Screen
                            </h1>
                            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                                One-Click Fullscreen, Multi-Scene Support
                            </h2>
                            <p className="text-[#B0B3B8] text-center mb-8 max-w-2xl mx-auto leading-relaxed">
                                BlackScreen is a free online fullscreen tool that provides professional support for presentations, projections, eye protection, power saving, OLED screen protection, pixel testing, and photography lighting.
                                Simply press <kbd className="px-2 py-1 bg-[#1A1A1A] rounded-md text-sm border border-[#3A6FF8]/30">Space</kbd> to enter fullscreen, press <kbd className="px-2 py-1 bg-[#1A1A1A] rounded-md text-sm border border-[#3A6FF8]/30">ESC</kbd> to exit anytime.
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-10">
                            <div className="w-full max-w-4xl backdrop-blur-sm bg-black/30 rounded-2xl p-6 border border-[#3A6FF8]/10 shadow-lg">
                                <h3 className="text-xl font-semibold text-white mb-6 text-center">Select Your Screen Color</h3>
                                <ColorSelector
                                    colors={themes}
                                    onColorSelect={handleColorSelect}
                                    dictionary={dictionary}
                                />
                            </div>

                            <div className="w-full max-w-4xl">
                                <DisplayArea
                                    backgroundColor={currentColor}
                                    theme={currentTheme}
                                    onFullscreen={toggleFullscreen}
                                    dictionary={dictionary}
                                />
                            </div>
                        </div>
                    </section>

                    <section className="mb-10">
                        <div
                            className="flex flex-col md:flex-row justify-center items-center gap-6 w-full max-w-4xl mx-auto">
                            <div className="w-full md:w-1/2 tech-card">
                                <h3 className="text-xl font-semibold text-white mb-4">Download Options</h3>
                                <DownloadOptions
                                    onDownload={downloadImage}
                                />
                            </div>

                            <div className="w-full md:w-1/2 tech-card">
                                <h3 className="text-xl font-semibold text-white mb-4">Eye Rest Timer</h3>
                                <EyeRestTimer
                                    meditationTime={meditationTime}
                                    isMeditating={isMeditating}
                                    onStartMeditation={startMeditation}
                                    onStopMeditation={stopMeditation}
                                />
                            </div>
                        </div>
                    </section>

                    <div className="max-w-5xl mx-auto">
                        <AchievementBadges meditationTime={meditationTime}/>
                    </div>

                    <div className="max-w-5xl mx-auto mt-10">
                        <CustomThemeCreator
                            onPreview={handleCustomThemePreview}
                            dictionary={dictionary}
                        />
                    </div>

                    <div className="max-w-5xl mx-auto mt-10">
                        <InfoSection dictionary={{}}/>
                    </div>
                </div>
            </main>
        </NavigationLayout>
    )
}
