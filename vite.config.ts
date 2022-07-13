import { defineConfig } from "vite";
import postcss from "./postcss.config.cjs";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svelte(), eslint({ cache: true, fix: true })],
    css: { postcss: "./postcss.config.cjs" },
});
