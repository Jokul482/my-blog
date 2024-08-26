import { defineThemeConfig } from 'vuepress-theme-plume'
import navbar from './navbar.js'
export default defineThemeConfig({
    // 在这里配置主题
    navbar,
    profile: {
        name: 'Jokul',
        description: '那光年之外会是什么',
        avatar: 'https://avatars.githubusercontent.com/u/45899547?v=4',
        circle: true, // 是否为圆形头像
    },
    social: [
        { icon: 'github', link: 'https://github.com/Jokul482' }
    ]
})