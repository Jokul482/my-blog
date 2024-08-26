import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Jokul',
    theme: plumeTheme({
        profile: {
            name: 'Jokul',
            description: '「探索生活 记录旅程」',
            avatar: 'https://avatars.githubusercontent.com/u/45899547?v=4',
            circle: true, // 是否为圆形头像
        }
    }),
    bundler: viteBundler(),
})