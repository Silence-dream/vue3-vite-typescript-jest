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
        // ćšć± scss ćé
        additionalData: `@import "./src/assets/css/global.scss";`,
      },
    },
  },
  resolve: {
    alias: [{ find: "@", replacement: pathResolve("./src") }],
  },
};
