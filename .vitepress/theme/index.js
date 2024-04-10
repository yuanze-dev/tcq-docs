// .vitepress/theme/index.js
import ImgDesc from "../components/ImgDesc.vue";
import Link from "../components/Link.vue";
import DefaultTheme from "vitepress/theme";
import { onMounted, watch, nextTick } from "vue";
import { useRoute } from "vitepress";
import mediumZoom from "medium-zoom";

import "./custom.css";

export default {
  ...DefaultTheme,
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("ImgDesc", ImgDesc);
    app.component("Link", Link);
  },
  setup() {
    const route = useRoute();
    const initZoom = () => {
      // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
      mediumZoom(".main img", { background: "var(--vp-c-bg)" });
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
};
