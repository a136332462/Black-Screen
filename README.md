



# BlackScreen

[BlackScreen](https://www.blacksscreen.com/) 是一个创新的在线工具，提供一键式全屏体验，适用于演示、护眼、OLED屏幕保护和节省电池。

![BlackScreen](https://www.blacksscreen.com/images/blackScreen.webp)

## 功能特点

- **一键全屏**：使用空格键快速进入全屏模式，简单直观
- **多种主题**：包括纯色背景、Aurora（极光）、Deep Ocean（深海）、Starfield（星空）等视觉主题
- **时钟主题**：提供数字时钟、二进制时钟、波浪时钟和追踪时钟等多种时钟显示
- **高分辨率支持**：支持高达8K的显示输出，确保各种设备上的流畅视觉体验
- **成就系统**：通过使用不同功能解锁成就，增强用户体验
- **休息提醒**：帮助用户保持专注并保护眼睛健康
- **国际化支持**：支持英语、中文、德语、法语、日语和韩语
- **响应式设计**：完全适配各种设备尺寸
- **暗黑模式**：默认暗色主题，减少眼睛疲劳

## 使用场景

- **演示辅助**：在演讲和教学中作为背景屏幕
- **护眼工具**：减少蓝光，保护视力
- **OLED屏幕保护**：防止屏幕烧屏
- **节省电池**：黑色背景减少能耗
- **冥想计时器**：提供专注和放松的环境
- **像素测试**：检测屏幕坏点
- **摄影照明**：作为摄影辅助工具

## 技术栈

- **Next.js 14**：采用App Router架构，支持服务端渲染(SSR)和静态站点生成(SSG)
- **React 18**：使用函数式组件和React Hooks
- **Tailwind CSS**：使用JIT编译模式，支持响应式设计和暗黑模式
- **Shadcn/UI**：基于Radix UI原语构建的组件库
- **TypeScript**：提供类型安全保障
- **国际化**：使用Next.js 14官方国际化方案,支持中文、英文、日语三种语言

## 性能优化

BlackScreen注重性能优化，确保用户获得流畅的体验：

- **Core Web Vitals优化**：LCP < 2.5秒，INP < 200毫秒，CLS < 0.1
- **资源优化**：实现代码分割、懒加载和图像优化
- **缓存策略**：合理设置浏览器缓存和服务端缓存

## 安装与开发

1. 克隆仓库：
   ```bash
   git clone https://github.com/yourusername/blackscreen.git
   cd blackscreen
   ```

2. 安装依赖：
   ```bash
   npm install
   ```

3. 创建`.env.local`文件并添加必要的环境变量

4. 启动开发服务器：
   ```bash
   npm run dev
   ```

5. 访问`http://localhost:3000`查看本地运行的BlackScreen实例

## 部署

1. 构建项目：
   ```bash
   npm run build
   ```

2. 启动生产服务器：
   ```bash
   npm start
   ```

或者使用Vercel一键部署：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fblackscreen)

## 贡献指南

我们欢迎对BlackScreen的贡献！如果您想参与项目开发，请遵循以下步骤：

1. Fork仓库
2. 创建您的特性分支：`git checkout -b feature/amazing-feature`
3. 提交您的更改：`git commit -m 'Add some amazing feature'`
4. 推送到分支：`git push origin feature/amazing-feature`
5. 提交Pull Request

## 许可证

BlackScreen是开源软件，基于[MIT许可证](LICENSE)发布。

## 联系我们

如果您遇到任何问题或有任何疑问，请通过以下方式联系我们：

- **网站**：[https://www.blacksscreen.com](https://www.blacksscreen.com)
- **邮箱**：[blacksscreenteam@gmail.com](mailto:blacksscreenteam@gmail.com)

## 打赏

如果您觉得BlackScreen对您有帮助，可以通过以下方式支持我们：

### 微信打赏

![微信收款码]([微信收款二维码图片链接])

### 支付宝打赏

![支付宝收款码]([支付宝收款二维码图片链接])


## 致谢

BlackScreen基于以下开源库构建：
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/UI](https://ui.shadcn.com/)

我们感谢这些项目的维护者和贡献者。


