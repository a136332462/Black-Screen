import { NextResponse } from 'next/server'
import { i18nConfig } from './src/i18n.config'

export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  
  // 定义有效的路径列表
  const validPaths = [
    '/',
    '/cool-themes',
    '/clock-themes',
    '/about-us',
    '/privacy-policy',
    '/terms-and-conditions',
    '/about'
  ];
  
  // 检查是否为语言路径 (如 /en-US, /zh-CN 等)
  const isLangPath = i18nConfig.locales.some(locale => 
    pathname.startsWith(`/${locale}`)
  );
  
  // 检查是否为有效路径
  const isValidPath = validPaths.some(path => 
    pathname === path || pathname.startsWith(`${path}/`)
  );
  
  // 检查是否为API路径、静态资源或其他特殊路径
  const isSpecialPath = pathname.startsWith('/api/') || 
                        pathname.startsWith('/_next/') || 
                        pathname.startsWith('/images/') ||
                        pathname.includes('.');
  
  // 检查是否包含特殊查询参数，用于多屏幕支持
  const url = new URL(request.url);
  const isMultiScreenWindow = url.searchParams.has('multiscreen');
  
  // 如果是有效路径、语言路径、特殊路径或多屏幕窗口，则继续
  if (isValidPath || isLangPath || isSpecialPath || isMultiScreenWindow) {
    return NextResponse.next();
  }
  
  // 否则重定向到404页面
  // 使用redirect而不是rewrite，确保URL显示为404页面
  return NextResponse.redirect(new URL('/not-found', request.url));
}

export const config = {
  // 匹配所有路径，除了以下路径
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|.*\\..*).*)']
}