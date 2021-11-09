import eslintPlugin from "@nabla/vite-plugin-eslint";
import vue from "@vitejs/plugin-vue";
import path from "path";
import checker from "vite-plugin-checker";
const pathResolve = (pathStr: string): string => {
  return path.resolve(__dirname, pathStr);
};
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
  resolve: {
    alias: [{ find: "@", replacement: pathResolve("./src") }],
  },
};
