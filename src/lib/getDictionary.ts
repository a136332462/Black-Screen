import 'server-only'

const dictionaries = {
  'en-US': () => import('@/dictionaries/en-US.json').then(module => module.default),
  'zh-CN': () => import('@/dictionaries/zh-CN.json').then(module => module.default),
  'ja-JP': () => import('@/dictionaries/ja-JP.json').then(module => module.default),
  'ko-KR': () => import('@/dictionaries/ko-KR.json').then(module => module.default),
  'fr-FR': () => import('@/dictionaries/fr-FR.json').then(module => module.default),
  'de-DE': () => import('@/dictionaries/de-DE.json').then(module => module.default),
}

export const getDictionary = async (locale: string) => {
  // 如果找不到对应的语言，默认使用英语
  if (!locale || !dictionaries[locale]) {
    locale = 'en-US'
  }
  
  return dictionaries[locale]()
}