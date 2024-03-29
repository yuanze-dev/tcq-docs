import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      label: "页面导航",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "切换主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    nav: [
      { text: "芦笋录屏", link: "https://lusun.com" },
      { text: "关于我们", link: "https://lusun.com/about" },
    ],
    sidebar: [
      {
        text: "基础教程",
        collapsed: false,
        items: [
          { text: "📥 下载安装", link: "guide/download.md" },
          { text: "📝 台词创建", link: "guide/create.md" },
          { text: "🎬 开启提词", link: "guide/prompt.md" },
          { text: "⚙️ 提词设置", link: "guide/setting.md" },
          { text: "🌟 会员特权", link: "guide/vip.md" },
          { text: "❓ 常见问题", link: "guide/faq.md" },
        ],
      },
      {
        text: "进阶教程",
        collapsed: false,
        items: [
          {
            text: "⌨️ 提词遥控器",
            link: "advanced/remote.md",
          },
        ],
      },
    ],
  },
  ignoreDeadLinks: true,
  title: "芦笋提词器",
  description: "智能跟读、滚屏提词和隐形提词的提词工具",
  lang: "zh-Hans",
  assetsDir: "tcq/assets",
  spandown: {
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true,
    },
  },
});
