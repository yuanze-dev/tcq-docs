// .vitepress/theme/index.js
import ImgCenter from "../components/ImgCenter.vue";
import ImgDesc from "../components/ImgDesc.vue";
import Link from "../components/Link.vue";
import UserGroup from "../components/UserGroup.vue";
import ContactButton from "../components/ContactButton.vue";
import DefaultTheme from "vitepress/theme";
import { onMounted, watch, nextTick } from "vue";
import { useRoute } from "vitepress";
import mediumZoom from "medium-zoom";
import tracker from "@yuanze_dev/tracker";

import "./custom.css";

// 帮助中心只有匿名访客，没有登录，因此不接 identify / reset，
// 身份模式保持 anonymous_only。
//
// $pageview / $pageleave 交给 SDK 的自动采集：VitePress 走 vue-router 的
// history 模式，SDK 已打补丁覆盖 history.pushState 并监听 popstate，
// 初始页与每次路由切换都会自动产生配对事件，不需要手写路由埋点。
//
// $origin 由服务端从请求头补全，用来在同一产品下区分帮助中心与主站。
const initTracking = () => {
  const writeKey =
    typeof __YUANZE_WRITE_KEY__ === "string" ? __YUANZE_WRITE_KEY__.trim() : "";
  // 本地开发没有注入 key 时静默跳过，不阻塞文档站本身的阅读体验。
  if (!writeKey) return;

  tracker.init({
    endpoint: "https://track.lusun.com/api/v1/track",
    writeKey,
    platform: "web",
    appVersion: "1.0.0",
    envContext: true,
    remoteConfig: true,
    diagnostics: true,
  });
};

export default {
  ...DefaultTheme,
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("UserGroup", UserGroup);
    app.component("ImgCenter", ImgCenter);
    app.component("ImgDesc", ImgDesc);
    app.component("Link", Link);
    app.component("ContactButton", ContactButton);
    // 只在浏览器执行：VitePress 构建期也会调用 enhanceApp 做预渲染。
    if (typeof window !== "undefined") initTracking();
  },
  setup() {
    const route = useRoute();
    // 图片放大
    const initZoom = () => {
      mediumZoom(".main img", { background: "var(--vp-c-bg)" });
    };
    // 锚点定位
    const fixAnchor = () => {
      window.onload = function () {
        var url = window.location.href;
        var anchor = url.split("#")[1];
        if (anchor) {
          var targetElement = document.getElementById(anchor);
          if (targetElement) {
            var offsetTop = targetElement.offsetTop;
            window.scrollTo(0, offsetTop);
          }
        }
      };
    };
    onMounted(() => {
      initZoom();
      fixAnchor();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
};
