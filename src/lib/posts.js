import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'data', 'md')

export function getSortedPostsData() {
  // Get file names under /data/md
  const items = fs.readdirSync(postsDirectory)
  const allPostsData = items
    .filter(item => {
      // 只处理文件，跳过目录
      const fullPath = path.join(postsDirectory, item)
      return fs.statSync(fullPath).isFile() && item.endsWith('.md')
    })
    .map((fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '')

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents)

      // Combine the data with the id
      return {
        id,
        title: matterResult.data.title,
        description: matterResult.data.description,
        date: matterResult.data.date,
      }
    })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  
  // 检查文件是否存在
  if (!fs.existsSync(fullPath) || !fs.statSync(fullPath).isFile()) {
    throw new Error(`文件 ${slug}.md 不存在或不是一个文件`);
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    slug,
    contentHtml,
    title: matterResult.data.title,
    description: matterResult.data.description,
    date: matterResult.data.date,
    // ... any other fields you want to include
  };
}

export async function getPostData2(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  
  // 检查文件是否存在
  if (!fs.existsSync(fullPath) || !fs.statSync(fullPath).isFile()) {
    throw new Error(`文件 ${id}.md 不存在或不是一个文件`);
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}