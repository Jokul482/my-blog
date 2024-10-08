import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Jokul',
    theme: plumeTheme({}),
    bundler: viteBundler(),
})