module.exports = {
  stories: ['../stories-liquid/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  // staticDirs: ['../stories-liquid'],
  logLevel: 'debug',
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds',
    '@storybook/addon-controls',
    '@storybook/addon-viewport',
    '@storybook/addon-links',
    '@storybook/addon-highlight',
  ],
  core: {
    channelOptions: { allowFunction: false, maxDepth: 10 },
    disableTelemetry: true,
  },
  features: {
    buildStoriesJson: true,
    breakingChangesV7: true,
  },
  framework: '@tflx/storybook-webpack5',
};
