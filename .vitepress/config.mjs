import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ignoreDeadLinks: true,
  title: "芦笋提词器",
  description: "智能跟读、滚屏提词和隐形提词的电脑端提词工具",
  lang: "zh-CN",
  // rewrites: {
  //   "/": "guide/overview.md",
  // },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
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
    socialLinks: [
      { icon: "github", link: "https://github.com/yuanze-team/docs-test" },
    ],
  },
});
