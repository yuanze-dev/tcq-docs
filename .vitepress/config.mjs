import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ignoreDeadLinks: true,
  title: "芦笋提词器帮助中心",
  description: "智能跟读、滚屏提词和隐形提词的电脑端提词工具",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "芦笋录频", link: "https://lusun.com" },
      { text: "关于我们", link: "https://lusun.com/about" },
    ],

    sidebar: [
      {
        text: "入门教程",
        items: [
          { text: "下载与安装", link: "ru-men-jiao-cheng/download.md" },
          { text: "台词创建与编辑", link: "ru-men-jiao-cheng/create.md" },
          { text: "开启提词", link: "ru-men-jiao-cheng/kai-qi-ti-ci.md" },
          {
            text: "提词个性化设置",
            link: "ru-men-jiao-cheng/ti-ci-ge-xing-hua-she-zhi.md",
          },
          { text: "会员特权", link: "ru-men-jiao-cheng/hui-yuan-te-quan.md" },
          {
            text: "提词遥控器",
            link: "ru-men-jiao-cheng/ti-ci-yao-kong-qi.md",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/yuanze-team/docs-test" },
    ],
  },
});
