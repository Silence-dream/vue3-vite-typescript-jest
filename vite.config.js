import eslintPlugin from "@nabla/vite-plugin-eslint";
import vue from "@vitejs/plugin-vue";
import checker from "vite-plugin-checker";

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue(), eslintPlugin(), checker({ vls: true })],
  css: {
    preprocessorOptions: {
      scss: {
        // 全局 scss 变量
        additionalData: `@import "./src/assets/css/global.scss";`,
      },
    },
  },
};
