import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/tcq/",
  ignoreDeadLinks: true,
  title: "芦笋提词器",
  description: "智能跟读、滚屏提词和隐形提词的提词工具",
  lang: "zh-Hans",
  head: [
    ["link", { rel: "icon", href: "/tcq/logo.png" }],
    [
      "script",
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?592ba55993f3df6afcc69f8088276562";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();`,
    ],
  ],
  markdown: {
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true,
    },
  },
  themeConfig: {
    logo: "/logo.png",
    nav: [
      { text: "芦笋录屏", link: "https://lusun.com" },
      { text: "关于我们", link: "https://lusun.com/about" },
    ],
    sidebar: [
      {
        text: "基础教程",
        collapsed: false,
        items: [
          { text: "📥 下载安装", link: "/basic/download" },
          { text: "📝 台词创建", link: "/basic/create" },
          { text: "🎬 开始提词", link: "/basic/prompt" },
          { text: "⚙️ 提词设置", link: "/basic/setting" },
          { text: "🌟 会员特权", link: "/basic/vip" },
          { text: "❓ 常见问题", link: "/basic/faq" },
          { text: "🗳️ 申请发票", link: "/basic/invoice" },
          { text: "📱 手机端教程", link: "/basic/mobile" },
        ],
      },
      {
        text: "进阶教程",
        collapsed: false,
        items: [
          {
            text: "🥳 免费领会员",
            link: "/advanced/accessvip",
          },
          // {
          //   text: "⌨️ 提词遥控器",
          //   link: "/advanced/remote",
          // },
          {
            text: "🎮 芦笋遥控器",
            link: "/advanced/remote-new",
          },
          // {
          //   text: "🫡 OBS精品课",
          //   link: "/advanced/obslesson",
          // },
          {
            text: "🎩 芦笋学苑-官方系统课",
            link: "/advanced/lusunlesson",
          },
          {
            text: "🎵 AI直播间助手",
            link: "/advanced/ai-assistant",
          },
        ],
      },
      { text: "联系我们", link: "/contact" },
    ],
    search: {
      provider: "local",
      options: {
        detailedView: true,
        placeholder: "搜索文档",
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            searchBox: {
              resetButtonTitle: "清除查询条件",
              resetButtonAriaLabel: "清除查询条件",
              cancelButtonText: "取消",
              cancelButtonAriaLabel: "取消",
            },
            startScreen: {
              recentSearchesTitle: "搜索历史",
              noRecentSearchesText: "没有搜索历史",
              saveRecentSearchButtonTitle: "保存至搜索历史",
              removeRecentSearchButtonTitle: "从搜索历史中移除",
              favoriteSearchesTitle: "收藏",
              removeFavoriteSearchButtonTitle: "从收藏中移除",
            },
            errorScreen: {
              titleText: "无法获取结果",
              helpText: "你可能需要检查你的网络连接",
            },
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
              searchByText: "搜索提供者",
            },
            noResultsScreen: {
              noResultsText: "无法找到相关结果",
              suggestedQueryText: "你可以尝试查询",
              reportMissingResultsText: "你认为该查询应该有结果？",
              reportMissingResultsLinkText: "点击反馈",
            },
          },
        },
      },
    },
    // https://vitepress.dev/reference/default-theme-config
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      level: [2, 4],
      label: "页面导航",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short",
      },
    },
    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "切换主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
});
