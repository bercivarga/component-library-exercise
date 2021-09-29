module.exports = {
  "stories": [
    "../src/**/*.stories.(mdx)",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/preset-create-react-app",
        {
            name: "@storybook/addon-docs",
            options: {
                configureJSX: true
            }
        },
        "@storybook/addon-contexts",
        "@storybook/addon-backgrounds",
        "@storybook/addon-knobs",
        "@storybook/addon-a11y"
    ]
}

