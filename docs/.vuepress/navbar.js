import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
    { text: '首页', link: '/', icon: 'material-symbols:home' },
    { text: '博客', link: '/blog/', icon: 'material-symbols:menu-book' },
    { text: '标签', link: '/blog/tags/', icon: 'material-symbols:label-outline' },
    { text: '归档', link: '/blog/archives/', icon: 'material-symbols:archive-outline' },
    // {
    //     text: '杂谈',
    //     icon: 'icon-park-solid:bookshelf',
    //     items: [
    //         // {
    //         //     text: '备忘录',
    //         //     link: '/memorandum/',
    //         //     activeMatch: '^/memorandum/',
    //         //     icon: 'emojione:memo',
    //         // }
    //     ],
    // }
])
