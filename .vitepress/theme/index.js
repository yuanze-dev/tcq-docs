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

import "./custom.css";

export default {
  ...DefaultTheme,
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("UserGroup", UserGroup);
    app.component("ImgCenter", ImgCenter);
    app.component("ImgDesc", ImgDesc);
    app.component("Link", Link);
    app.component("ContactButton", ContactButton);
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
