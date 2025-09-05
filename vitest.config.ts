import { fileURLToPath } from "node:url"
import { configDefaults, defineConfig, mergeConfig } from "vitest/config"
import viteConfig from "./vite.config"

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            environment: "jsdom",
            exclude: [...configDefaults.exclude, "e2e/**"],
            root: fileURLToPath(new URL("./", import.meta.url)),
            coverage: {
                provider: "v8",
                reporter: ["text", "json", "html", "lcov"],
                reportsDirectory: "./coverage",
                include: ["src/**/*"],
                exclude: [
                    "coverage/**",
                    "dist/**",
                    "**/node_modules/**",
                    "**/test-results/**",
                    "**/*.d.ts",
                    "**/*.config.*",
                    "**/*.stories.*",
                    "**/stories/**",
                    "**/__tests__/**",
                    "**/tests/**",
                    "**/*.test.*",
                    "**/*.spec.*",
                    ".storybook/**",
                    "storybook-static/**",
                ],
            },
        },
    }),
)
