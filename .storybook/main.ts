import type { StorybookConfig } from "@storybook/vue3-vite"

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: ["@storybook/addon-docs"],
    framework: {
        name: "@storybook/vue3-vite",
        options: {},
    },
    // Configuration for GitHub Pages deployment
    viteFinal: config => {
        // Set base URL for GitHub Pages if building for production
        if (process.env.NODE_ENV === "production") {
            config.base = "/Vue_Clean_Architecture/"
        }
        return config
    },
}
export default config
